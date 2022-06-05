import React, {Component} from "react";
import api from "../../components/service/api";
import InputField from "../../components/UI/InputFieldText";
import {Link, useNavigate} from "react-router-dom";
import Mascotball from "../../components/ball/Mascotball";
import Ball from "../../components/ball/Ball";

class AddOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shippingMethod: "",
            shippingAddress: "",
            paymentBankName: "",
            paymentCardNumber: "",
            paymentExpiryMonth: 0,
            paymentExpiryYear: 0,
            paymentCvc: 0,
            paymentHolderName: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const ObjToSend= {
            shippingMethod: this.state.shippingMethod, shippingAddress:this.state.shippingAddress,
            payment:{bankName: this.state.paymentBankName, cardNumber: this.state.paymentCardNumber,
            expiryMonth: this.state.paymentExpiryMonth, expiryYear: this.state.paymentExpiryYear,
            cvc: this.state.paymentCvc, holderName: this.state.paymentHolderName}
        }

        await api.post('orders/createorder/username?username='+ localStorage.getItem("username"), ObjToSend,
            {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then(response => {
                this.setState(response.data);
                this.props.navigate("/orderBekraftelse");
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
                            <h3 className="headline">Fyll i transporteringsmetoden</h3>
                            <InputField
                                type="text"
                                name={"shippingMethod"}
                                labeltext="Transportering"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"shippingAddress"}
                                labeltext="Address"
                                onChange={this.handleChange}
                            />
                            <h3 className="headline">Fyll i betalningsmetoden</h3>
                            <InputField
                                type="text"
                                name={"paymentBankName"}
                                labeltext="Banknamn"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"paymentCardNumber"}
                                labeltext="Kortnummer"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"paymentExpiryMonth"}
                                labeltext="Utgångsmånad"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"paymentExpiryYear"}
                                labeltext="Utgångsår"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"paymentCvc"}
                                labeltext="cvc"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"paymentHolderName"}
                                labeltext="Namn"
                                onChange={this.handleChange}
                            />
                            <div
                                className="create-btn-holder">
                                <button onClick={this.handleSubmit} className="btn primary-Btn text-light">BEKRÄFTA</button>
                                <Link to={"/start"} className="btn secondary-Btn text-dark" onClick={this.handleCancel}>AVBRYT</Link>
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
    return <AddOrder {...props} navigate={navigate}/>
}

export default Navigate
