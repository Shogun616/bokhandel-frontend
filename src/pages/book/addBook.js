import React, {Component} from "react";
import api from "../../components/service/api";
import InputField from "../../components/UI/InputFieldText";
import {Link, useNavigate} from "react-router-dom";
import './book.css'

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isbn13: "",
            title: "",
            publishingDate: "",
            weight: 0.0,
            pages: 0,
            language: "",
            category: "",
            price: 0.0,
            authorFirstName: "",
            authorLastName:"",
            publisherName: "",
            stockQuantity: 0,
            stockInStock: true
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const ObjToSend= {
            isbn13:this.state.isbn13,title:this.state.title,publishingDate:this.state.publishingDate,weight:parseInt(this.state.weight),
            pages:parseInt(this.state.pages),language:this.state.language,category:this.state.category,price:parseInt(this.state.price),
            authors:[{firstName:this.state.authorFirstName,lastName:this.state.authorLastName}],
            publisher:{name:this.state.publisherName},
            stock:{quantity:parseInt(this.state.stockQuantity),inStock:this.state.stockInStock}
        }

        await api.post(`book/addbook`, ObjToSend,
            {headers:{ 'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}}
            )
            .then(response => {
                console.log(response.data);
                this.setState(response.data);

                alert("Boken är nu Inlagt i databasen.");
                this.props.navigate("/start/admin");
            })
            .catch(error => {
                console.log(error)
            })
    };

    handleCancel = () => {
        this.setState({
            isbn13: "",
            title: "",
            publishingDate: "",
            weight: 0.0,
            pages: 0,
            language: "",
            category: "",
            price: 0.0,
            authorFirstName: "",
            authorLastName:"",
            publisherName: "",
            stockQuantity: 0,
            stockInStock: true
        });
    };

    render() {
        return(
            <div className="window-container">
                <div className="create-container">
                    <div className="frostedGlass">
                        <form className="create-form" onSubmit={this.handleSubmit}>
                            <h3 className="headline">Registera den nya boken här</h3>
                            <InputField
                                type="text"
                                name={"isbn13"}
                                labeltext="ISBN"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"title"}
                                labeltext="Titel"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"publishingDate"}
                                labeltext="Publiserad"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="number"
                                name={"weight"}
                                labeltext="Vikt"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="number"
                                name={"pages"}
                                labeltext="Sidor"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"language"}
                                labeltext="Språk"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"category"}
                                labeltext="Kategori"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="number"
                                name={"price"}
                                labeltext="Pris"
                                onChange={this.handleChange}
                            />
                            <h3 className="headline">Författare</h3>
                            <InputField
                                type="text"
                                name={"authorFirstName"}
                                labeltext="Förnamn"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"authorLastName"}
                                labeltext="Efternamn"
                                onChange={this.handleChange}
                            />
                            <h3 className="headline">Utgivare</h3>
                            <InputField
                                type="text"
                                name={"publisherName"}
                                labeltext="Namn"
                                onChange={this.handleChange}
                            />
                            <h3 className="headline">I lager</h3>
                            <InputField
                                type="number"
                                name={"stockQuantity"}
                                labeltext="Mängd"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"stockInStock"}
                                labeltext="På lager"
                                onChange={this.handleChange}
                            />
                            <div
                                className="create-btn-holder">
                                <button onClick={this.handleSubmit} className="btn primary-Btn text-light">SKAPA</button>
                                <Link to={"/"} className="btn secondary-Btn text-dark" onClick={this.handleCancel}>AVBRYT</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function Navigate(props){
    let navigate = useNavigate();
    return <AddBook {...props} navigate={navigate}/>
}

export default Navigate
