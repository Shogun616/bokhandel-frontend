import React, {Component} from "react";
import api from "../../components/service/api";
import InputField from "../../components/UI/inputFieldText";
import {Link, useNavigate} from "react-router-dom";
import MascotBall from "../../components/ball/Mascotball";
import Ball from "../../components/ball/Ball";
import './order.css'
import {Table} from "semantic-ui-react";

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

        this.state = {
            cartItems: [],
            totalAmount:0.0
        }
    }

    componentDidMount() {
        this.getAllCartItems1();
    }

    // getAllCartItems(){
    //     api.get('shoppingcart/getCartItemList?shoppingCartId=' + localStorage.getItem('shoppingCartId'),
    //         {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
    //         .then(response => {
    //             this.setState({cartItems: response.data});
    //             this.setState({totalAmount:response.data[0].shoppingCart.grandTotal})
    //             console.log(response.data[0].shoppingCart.grandTotal)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.setState({errorMsg: 'Error retrieving data'})
    //         })
    // }

    getAllCartItems1(){
        api.get('shoppingcart/getCartItemList1',
            {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then(response => {
                this.setState({cartItems: response.data});
                this.setState({totalAmount:response.data[0].shoppingCart.grandTotal})
                console.log(response.data[0].shoppingCart.grandTotal)
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retrieving data'})
            })
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const ObjToSend= {
            shippingMethod: this.state.shippingMethod, shippingAddress:this.state.shippingAddress,
            payment: {bankName: this.state.paymentBankName, cardNumber: this.state.paymentCardNumber,
            expiryMonth: this.state.paymentExpiryMonth, expiryYear: this.state.paymentExpiryYear,
            cvc: this.state.paymentCvc, holderName: this.state.paymentHolderName}
        }

        await api.post('orders/createorder', ObjToSend,
            {headers:{'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('jwt'))}})
            .then(response => {
                this.setState(response.data);
                this.props.navigate("/order/bekraftelse");
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
                    expiryMonth: 0,
                    expiryYear: 0,
                    cvc: 0,
                    holderName: ""
                }
        });
    };

    render() {
        const {cartItems} = this.state;
        return(
            <div className="window-container">
                <div className="order-container">
                    <div className="frostedGlass">
                        <div className={"order-box-container"}>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>ISBN</Table.HeaderCell>
                                    <Table.HeaderCell>Titel</Table.HeaderCell>
                                    <Table.HeaderCell>MÄNGD</Table.HeaderCell>
                                    <Table.HeaderCell>PRIS</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {cartItems.map((cartItem, index) => {
                                    return (
                                        <Table.Row className="bottomRow text-light" key={index}>
                                            <Table.Cell>{cartItem.bookIsbn || 'ISBN'}</Table.Cell>
                                            <Table.Cell>{cartItem.bookTitle || 'TITEL'}</Table.Cell>
                                            <Table.Cell>{cartItem.qty + ' ST' || 'MÄNGD'}</Table.Cell>
                                            <Table.Cell>{cartItem.subtotal + ' KR' || 'PRIS'}</Table.Cell>
                                        </Table.Row>
                                    )
                                })}
                                <div className={'order-body'}>{'Totalt Belopp: ' + this.state.totalAmount + ' KR' || 'TOTALT BELOPP'}</div>
                            </Table.Body>
                        </Table>

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
                                <button onClick={this.handleSubmit} disabled={!this.state.paymentHolderName && !this.state.cvc} className="btn primary-Btn text-light">BEKRÄFTA</button>
                                <Link to={"/start"} className="btn secondary-Btn text-dark" onClick={this.handleCancel}>AVBRYT</Link>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <MascotBall top="68%" right="1%" />
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
