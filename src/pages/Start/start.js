import Header from "../../components/NavBar/Header";
import {Table} from "semantic-ui-react";
import React, {useEffect, useRef, useState} from "react";
import api from "../../components/service/api";
import * as response from "autoprefixer";
import {useNavigate} from "react-router-dom";

function Start() {
    const navigate = useNavigate();

    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(false);
    //const isMounted = useRef(false);

    function handleOnCLick(book) {
        const bookToSubmit =
            books[books.indexOf(books.find((b) => b.id === book.id))];
        console.log("bookToSubmit", bookToSubmit);

        ///HERE WE CALL API.
        /// paste in the url-> bookToSubmit.id   and bookToSubmit.qty and done!
        api.post('shoppingcart/addbooks?qty='+bookToSubmit.qty+'&username='+localStorage.getItem("username")+'&bookid='+bookToSubmit.id,{dummy:"dummyData"},
            {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then(response => {
                console.log(response.data)
                localStorage.setItem("cartItemId", JSON.stringify(response.data.id))
                localStorage.setItem("shoppingCartId",JSON.stringify(response.data.shoppingCart.id))
            })
            .catch(setError);
        if(response.data!==null) alert("Boken är nu Inlagt i varukorgen.")
    }
    function deleteCartItem() {
        api.delete('shoppingcart/removecartItem?cartItemId='+localStorage.getItem("cartItemId"),
            {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then(() => {
                alert("Boken är nu Borttaget!");
               navigate("/start");
            })
    .catch(setError);
    }




    const handleQty = (val, id) => {
        let newBooks = books;

        newBooks[books.indexOf(books.find((b) => b.id === id))] = {
            ...books[books.indexOf(books.find((b) => b.id === id))],
            ...{ qty: val }
        };
        setBooks(newBooks);
        //setNumberOfCopies(qtyIndex);
    };

    useEffect(() => {
        api.get(`book/getlistofbooks`,
            {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then((response) => response.data)
            .then((data) =>
                setBooks(
                    data.map((b) => {
                        return { ...b, ...{ qty: 0 } };
                    })
                )
            )
            .then(() => setLoading(false))
            .catch(setError);
    }, []);

    if(loading) return <h1>Loading...</h1>
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if(!books) return "No books found in the database";

    return (
        <div className={"page-container"}>
            <Header />
            <div className={"frostedGlass"}>
                <div className={"start-box-container"}>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>ISBN</Table.HeaderCell>
                                <Table.HeaderCell>Titel</Table.HeaderCell>
                                <Table.HeaderCell>Publiserad</Table.HeaderCell>
                                <Table.HeaderCell>Vikt</Table.HeaderCell>
                                <Table.HeaderCell>Sidor</Table.HeaderCell>
                                <Table.HeaderCell>Språk</Table.HeaderCell>
                                <Table.HeaderCell>Pris</Table.HeaderCell>
                                <Table.HeaderCell>Författare</Table.HeaderCell>
                                <Table.HeaderCell>Förlag</Table.HeaderCell>
                                <Table.HeaderCell>Lagerstatus</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>

                            {books.map((book, index) => {
                                return (
                                    <Table.Row className="bottomRow text-light" key={index}>
                                        <Table.Cell>{book.isbn13}</Table.Cell>
                                        <Table.Cell>{book.title}</Table.Cell>
                                        <Table.Cell>{book.publishingDate}</Table.Cell>
                                        <Table.Cell>{book.weight}</Table.Cell>
                                        <Table.Cell>{book.pages}</Table.Cell>
                                        <Table.Cell>{book.language}</Table.Cell>
                                        <Table.Cell>{book.price}</Table.Cell>
                                        <Table.Cell>{book.authors.map(author =>
                                            <tr>{author.firstName} {author.lastName}</tr>)}</Table.Cell>
                                        <Table.Cell>{book.publisher.name}</Table.Cell>
                                        <Table.Cell>{book.stock.quantity}</Table.Cell>
                                        <Table.Cell >
                                            <select
                                                onChange={(e) => handleQty(e.target.value, book.id)}
                                                name={"qty"}
                                            >
                                                <option >Antal</option>
                                                <option  value={1}>1</option>
                                                <option  value={2}>2</option>
                                                <option  value={3}>3</option>
                                                <option  value={4}>4</option>
                                                <option  value={5}>5</option>
                                                <option  value={6}>6</option>
                                                <option  value={7}>7</option>
                                                <option  value={8}>8</option>
                                                <option  value={9}>9</option>
                                                <option  value={10}>10</option>
                                            </select>
                                            <button onClick={() => handleOnCLick(book)} className="btn primary-Btn text-light">LÄGG TILL</button>
                                            <button onClick={() => deleteCartItem()} className="btn primary-Btn text-light">Ta bort</button>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                    <div className="start-button-holder">
                        <center>
                            <a  className={"btn primary-Btn"} href={"/skapa/order"}>Till Beställning</a>
                        </center>
                    </div>
                </div>
            </div>
            <footer className={"py-5"}>
                <div>
                    <p className={"m-0 text-center text-white small"}>
                        © 2022 Projektarbete Komplex Java.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Start;


// const handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
// };
// const handleSubmit = async (event) =>{
// event.preventDefault();
//     await api.put(`shoppingcart/addbooks/bookid/{data.id}/username/${localStorage.getItem("username")}/{qty}`,
//         {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
//         .then((response) => response.data)
//         .then(setBook)
//         .then(() => setLoading(false))
//         .catch(setError);
// }


// useEffect(() => {
//    //console.log(selectedBook.id);
//     if(isMounted.current){
//     api.put('shoppingcart/addbooks/?qty='+1+'&username='+localStorage.getItem("username")+'&bookid='+selectedBook.id,
//         {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
//         .then((response) => response.data)
//         //.then(setBooks)
//         .then(() => setLoading(false))
//         .catch(setError);
//     } else {
//         isMounted.current = true;
//     }
// }, [handleOnCLick,setSlectedBook])
