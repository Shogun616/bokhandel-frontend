import React, {Component} from "react";
import api from "../../components/service/api";
import InputField from "../../components/UI/InputFieldText";
import {Link, useNavigate} from "react-router-dom";

class DeleteBooksFromCart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        await api.put(`shoppingcart/shoppingcart/removeBookFromCart/{cartid}/quantity/{qty}`, this.state)
            .then(response => {
                this.setState(response.data);
                this.props.navigate("/skapaOrder");
            })
            .catch(error => {
                console.log(error)
            })
    };

    handleCancel = () => {
        this.setState({

        });
    };

    render() {
        return(
            <div className="window-container">
                <div className="create-container">
                    <div className="frostedGlass">
                        <form className="create-form" onSubmit={this.handleSubmit}>
                            <h3 className="headline">Minimera antal böcker här</h3>
                            <InputField
                                type="text"
                                name={"bookId"}
                                labeltext="BokId"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"username"}
                                labeltext="AnvändarNamn"
                                onChange={this.handleChange}
                            />
                            <div
                                className="create-btn-holder">
                                <button onClick={this.handleSubmit} className="btn primary-Btn text-light">BEKRÄFTA</button>
                                <Link to={"/skapaOrder"} className="btn secondary-Btn text-dark" onClick={this.handleCancel}>AVBRYT</Link>
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
    return <DeleteBooksFromCart {...props} navigate={navigate}/>
}

export default Navigate
