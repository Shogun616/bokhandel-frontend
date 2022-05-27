import {Component, useId} from "react";
import api from "../../components/service/api";
import InputField from "../../components/UI/InputFieldText";
import {Link} from "react-router-dom";

class AddOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shippingMethod: "Dhl",
            shippingAddress: "styrbjörnsvägen 14",
            payment:
                {
                    bankName: "swedbank",
                    cardNumber: "1253647889",
                    expiryMonth: 6,
                    expiryYear: 2025,
                    cvc: 123,
                    holderName: "Biniam Haile"
                }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        await api.post(`orders/createorder/userid/{userid}`, this.state)
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
            shippingMethod: "",
            shippingAddress: "",
            payment:
                {
                    bankName: "",
                    cardNumber: "",
                    expiryMonth: 6,
                    expiryYear: 2025,
                    cvc: 123,
                    holderName: ""
                }
        });
    };

    render() {
        return(
            <div className="window-container">
                <div className="create-container">
                    <div className="frostedGlass">
                        <form className="create-form" onSubmit={this.handleSubmit}>
                            <h3 className="headline">Ange Bokens Id och ditt användarnamn</h3>
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
                                <Link to={"/"} className="btn secondary-Btn text-dark" onClick={this.handleCancel}>AVBRYT</Link>
                            </div>
                        </form>
                        <div className="forgot-link-container">
                            <Link to="/tillökaAntaBocker">
                                <h1 className="forgot-link">Ändra</h1>
                            </Link>
                            <Link to="/tillökaAntaBocker">
                                <h1 className="forgot-link">Ta Bort</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddOrder
