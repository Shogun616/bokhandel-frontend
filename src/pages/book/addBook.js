import {Component} from "react";
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

        await api.post(`book/addbook`, this.state)
            .then(response => {
                this.setState(response.data);
                alert("Boken är nu Inlagt i databasen.");
                this.props.navigate("/start");
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
                            <h3 className="headline">Registera dig här</h3>
                            <InputField
                                type="text"
                                name={"firstName"}
                                labeltext="FörNamn"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"lastName"}
                                labeltext="EfterNamn"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"address"}
                                labeltext="Address"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"phone"}
                                labeltext="Telefonnummer"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"email"}
                                labeltext="e-post"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="password"
                                name={"password"}
                                labeltext="Lösenord"
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
