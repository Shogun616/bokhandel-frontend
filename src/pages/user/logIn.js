import React, {Component} from "react";
import api from "../../components/service/api";
import InputField from "../../components/UI/InputFieldText";
import {Link} from "react-router-dom";
import './user.css';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        await api.post(`user/login`, this.state)
            .then(response => {
                this.setState(response.data);
                this.props.history.push("/");
            })
            .catch(error => {
                console.log(error)
            })
    };

    handleCancel = () => {
        this.setState({
            username: "",
            password: ""
        });
    };

    render() {
        return(
            <div className="window-container">
                <div className="create-container">
                    <div className="frostedGlass">
                        <form className="create-form" onSubmit={this.handleSubmit}>
                            <h3 className="headline">Logga in här</h3>
                            <InputField
                                type="text"
                                name={"username"}
                                labeltext="användarnamn"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
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
                            <Link to="/registeraKund">
                                <h1 className="forgot-link">Ny Kund</h1>
                            </Link>
                            <Link to="/registeraAdmin">
                                <h1 className="forgot-link">Ny Admin</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn
