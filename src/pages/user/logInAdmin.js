import React, {Component} from "react";
import api from "../../components/service/api";
import InputField from "../../components/UI/inputFieldText";
import {Link, useNavigate} from "react-router-dom";
import './user.css';
import Mascotball from "../../components/ball/Mascotball";
import Ball from "../../components/ball/Ball";


class LogInAdmin extends Component {
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

        await api.post('user/login?username='+this.state.username+'&password='+this.state.password,
            this.state)

            .then(response => {
                console.log(response.data)
                //if (response.data.accessToken) {
                localStorage.setItem("jwt", JSON.stringify(response.data.access_token))
                localStorage.setItem("jwt_refresh", JSON.stringify(response.data.refresh_token))
                this.setState(response.data);
                this.props.navigate("/start/admin");

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
                                type="password"
                                name={"password"}
                                labeltext="Lösenord"
                                onChange={this.handleChange}
                            />
                            <div
                                className="create-btn-holder">
                                <button onClick={this.handleSubmit} disabled={!this.state.username && !this.state.password} className="btn primary-Btn text-light">LOGGA IN</button>
                                <Link to={"/"} className="btn secondary-Btn text-dark" onClick={this.handleCancel}>AVBRYT</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <Mascotball top="68%" right="1%" />
                <Ball className="green-ball" top="8%" left="5%" />
                <Ball className="yellow-ball" left="15%" bottom="20%" />
                <Ball className="blue-ball" right="13%" top="-5%" />
            </div>
        )
    }
}

function Navigate(props){
    let navigate = useNavigate();
    return <LogInAdmin {...props} navigate={navigate}/>
}

export default Navigate
