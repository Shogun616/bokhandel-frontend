import Header from "../../components/navBar/header";
import {Table} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import api from "../../components/service/api";
import Ball from "../../components/ball/Ball";
import MascotBall from "../../components/ball/Mascotball";
import * as response from "autoprefixer";
import {useNavigate} from "react-router-dom";

function Start() {

    const navigate = useNavigate();
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(true);

    function handleOnCLick(book) {
        const bookToSubmit =
            books[books.indexOf(books.find((b) => b.id === book.id))];
        console.log("bookToSubmit", bookToSubmit);

        api.post('shoppingcart/addbooks?qty='+bookToSubmit.numOfCopies+'&bookid='+bookToSubmit.id,{dummy:"dummyData"},
            {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then(response => {
                console.log(response.data)
            })
            .catch(setError);
        if(response.data!==null) alert("Boken är nu Inlagt i varukorgen.")
    }

    function deleteCartItem1(book) {
        api.delete('shoppingcart/removecartItem1?bookid='+book.id,
            {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then(() => {
                alert("Boken är nu Borttaget!");
                navigate("/start");
            })
            .catch(setError);
    }

    const handleQty = (val, id) => {
        let newBooks = books;

        if (val === "Antal"){
            setDisabled(true)
        }
        else if (val !== "Antal"){
            setDisabled(false)
        }

        newBooks[books.indexOf(books.find((b) => b.id === id))] = {
            ...books[books.indexOf(books.find((b) => b.id === id))],
            ...{ numOfCopies: val }
        };
        setBooks(newBooks);
    };

    useEffect(() => {
        api.get(`book/getlistofbooks`,
            {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then((response) => response.data)
            .then((data) =>
                setBooks(
                    data.map((b) => {
                        return { ...b, ...{ numOfCopies: 0 } };
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
                                <Table.HeaderCell></Table.HeaderCell>
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
                                        <Table.Cell>
                                            <select
                                            onChange={(e) => handleQty(e.target.value, book.id)}
                                            name={"qty"}
                                        >
                                                <option>Antal</option>
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
                                        </Table.Cell>
                                        <Table.Cell >
                                            <button onClick={() => handleOnCLick(book)} disabled={disabled} className="btn primary-Btn">LÄGG TILL</button>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <button onClick={() => deleteCartItem1(book)} disabled={disabled} className="btn primary-Btn">TA BORT</button>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                    <div className="start-button-holder">
                        <center>
                            <a className={"btn primary-Btn"} href={"/skapa/order"}>Till Beställning</a>
                        </center>
                    </div>
                    <MascotBall top="68%" right="1%" />
                    <Ball className="green-ball" bottom="-40%" right="20%" />
                    <Ball className="yellow-ball" left="15%" bottom="-10%" />
                    <Ball className="blue-ball" right="13%" top="-5%" />
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
