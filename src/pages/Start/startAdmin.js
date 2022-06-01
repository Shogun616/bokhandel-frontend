import React, {useEffect, useState} from 'react';
import Header from "../../components/NavBar/Header";
import api from "../../components/service/api";
import {Link} from "react-router-dom";
import PrimaryButton from "../../components/UI/PrimaryButton";

function StartAdmin() {

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
        <div>
            <Header />
            <div className="frostedGlass">
                <div className="company-button-holder">
                    <Link to={"/create"}>
                        <PrimaryButton text={"SKAPA+"}/>
                    </Link>
                </div>
                <div className={"company-box-container"}>
                    {/*<Table celled>*/}
                    {/*    <Table.Header>*/}
                    {/*        <Table.Row>*/}
                    {/*            <Table.HeaderCell>Företagsnamn</Table.HeaderCell>*/}
                    {/*            <Table.HeaderCell>organisationNummer</Table.HeaderCell>*/}
                    {/*            <Table.HeaderCell>Gatuaddress</Table.HeaderCell>*/}
                    {/*            <Table.HeaderCell>Postnummer</Table.HeaderCell>*/}
                    {/*            <Table.HeaderCell>Stad</Table.HeaderCell>*/}
                    {/*            <Table.HeaderCell>Företagstyp</Table.HeaderCell>*/}
                    {/*            <Table.HeaderCell>Om Företaget</Table.HeaderCell>*/}
                    {/*        </Table.Row>*/}
                    {/*    </Table.Header>*/}
                    {/*    <Table.Body>*/}
                    {/*        {book.map((data, index) => {*/}
                    {/*            return (*/}
                    {/*                <Table.Row className="bottomRow" key={index}>*/}
                    {/*                    <Table.Cell>{data.name}</Table.Cell>*/}
                    {/*                    <Table.Cell>{data.organisationNumber}</Table.Cell>*/}
                    {/*                    <Table.Cell>{data.street}</Table.Cell>*/}
                    {/*                    <Table.Cell>{data.zipCode}</Table.Cell>*/}
                    {/*                    <Table.Cell>{data.city}</Table.Cell>*/}
                    {/*                    <Table.Cell>{data.companyTypeString}</Table.Cell>*/}
                    {/*                    <Table.Cell>*/}
                    {/*                        <Link to={`/companyProfile/${data.companyId}`}>*/}
                    {/*                            <PrimaryButton text={"INFO"}/>*/}
                    {/*                        </Link>*/}
                    {/*                        /!*<PopupCompanyProfile />*!/*/}
                    {/*                    </Table.Cell>*/}
                    {/*                </Table.Row>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*    </Table.Body>*/}
                    {/*</Table>*/}
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

export default StartAdmin
