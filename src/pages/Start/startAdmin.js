import React, {useEffect, useState} from 'react';
import Header from "../../components/navBar/header";
import api from "../../components/service/api";
import {Table} from "semantic-ui-react";
import MascotBall from "../../components/ball/Mascotball";
import Ball from "../../components/ball/Ball";

function StartAdmin() {

    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] =useState(false);

    useEffect(() => {
        api.get(`book/getlistofbooks`,
            {headers:{ 'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then((response) => response.data)
            .then(setBooks)
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
                <div className="start-button-holder">
                    <center>
                        <a className={"btn primary-Btn"} href={"/skapa/bok"}>SKAPA+</a>
                    </center>
                </div>
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
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </div>
                <MascotBall top="68%" right="1%" />
                <Ball className="green-ball" bottom="-40%" right="20%" />
                <Ball className="yellow-ball" left="15%" bottom="-10%" />
                <Ball className="blue-ball" right="13%" top="-5%" />
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

export default StartAdmin
