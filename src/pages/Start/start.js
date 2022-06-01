import Header from "../../components/NavBar/Header";
import {Link} from "react-router-dom";
import {Table} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import api from "../../components/service/api";

function Start() {

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] =useState(false);

    useEffect(() => {
        api.get(`book/getlistofbooks`,
            {headers:{ 'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then((response) => response.data)
            .then(setBook)
            .then(() => setLoading(false))
            .catch(setError);
    }, []);

    if(loading) return <h1>Loading...</h1>
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if(!book) return "No books found in the database";

    return (
        <div className={"page-container"}>
            <Header />
            <div className={"frostedGlass"}>
                <div className={"company-box-container"}>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
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
                            {book.map((data, index) => {
                                return (
                                    <Table.Row className="bottomRow" key={index}>
                                        <Table.Cell>{data.title}</Table.Cell>
                                        <Table.Cell>{data.publishingDate}</Table.Cell>
                                        <Table.Cell>{data.weight}</Table.Cell>
                                        <Table.Cell>{data.pages}</Table.Cell>
                                        <Table.Cell>{data.language}</Table.Cell>
                                        <Table.Cell>{data.price}</Table.Cell>
                                        <Table key={index}>{data.authors.map(author =>
                                            <tr><td>{author.firstName} {author.lastName}</td></tr>)}</Table>
                                        <Table.Cell>{data.publisher.name}</Table.Cell>
                                        <Table.Cell>{data.stock.quantity}</Table.Cell>
                                        <Table.Cell>
                                                <a className={"btn primary-Btn"} href={"/"}>TILL VARUKORG</a>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
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
