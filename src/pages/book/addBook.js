import {Component} from "react";
import api from "../../components/service/api";
import InputField from "../../components/UI/InputFieldText";
import {Link, useNavigate} from "react-router-dom";
import authHeader from "../../components/service/authHeader";
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
            authors:[
                {
                    firstName: "",
                    lastName: ""
                }
            ],
            publisher:{
                name: ""
            },
            stock:{
                quantity: 0,
                inStock: true
            }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        await api.post(`book/addbook`, this.state,
            {Headers: 'Bearer ' + JSON.parse(localStorage.getItem('jwt'))} )
            .then(response => {
                this.setState(response.data);
                alert("Boken är nu Inlagt i databasen.");
                this.props.navigate("/startAdmin");
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
            authors:[
                {
                    firstName: "",
                    lastName: ""
                }
            ],
            publisher:{
                name: ""
            },
            stock:{
                quantity: 0,
                inStock: true
            }
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
                                type="text"
                                name={"weight"}
                                labeltext="Vikt"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
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
                                type="text"
                                name={"price"}
                                labeltext="Pris"
                                onChange={this.handleChange}
                            />
                            <h3 className="headline">Författare</h3>
                            <InputField
                                type="text"
                                name={"firstName"}
                                labeltext="Förnamn"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"lastName"}
                                labeltext="Efternamn"
                                onChange={this.handleChange}
                            />
                            <h3 className="headline">Publiserare</h3>
                            <InputField
                                type="text"
                                name={"name"}
                                labeltext="Namn"
                                onChange={this.handleChange}
                            />
                            <h3 className="headline">I lager</h3>
                            <InputField
                                type="text"
                                name={"quantity"}
                                labeltext="Mängd"
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
