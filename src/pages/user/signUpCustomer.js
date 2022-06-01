import React, {Component} from "react";
import api from "../../components/service/api";
import {Link, useNavigate} from "react-router-dom";
import InputField from "../../components/UI/InputFieldText";
import './user.css';

class SignUpCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            username: "",
            email: "",
            password: "",
            shoppingCart:{
                price:0.0,
                qty:0
            }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        await api.post(`user/signup/customer`, this.state)
            .then(response => {
                this.setState(response.data);
                this.props.navigate("/registeringsBekraftelse");
            })
            .catch(error => {
                console.log(error)
            })
    };

    handleCancel = () => {
        this.setState({
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            username: "",
            email: "",
            password: "",
            shoppingCart:{
                price:0.0,
                qty:0
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
                                labeltext="Telefon"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"username"}
                                labeltext="Användarnamn"
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
                        <div className="forgot-link-container">
                            <Link to="/registera/admin">
                                <h1 className="forgot-link">Ny Admin</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function Navigate(props){
    let navigate = useNavigate();
    return <SignUpCustomer {...props} navigate={navigate}/>
}

export default Navigate
