import {Component} from "react";
import api from "../../components/service/api";
import InputField from "../../components/UI/InputFieldText";
import {Link, useNavigate} from "react-router-dom";

class UpdateCartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartid: this.props.match.params.cartid,
            qty: 0
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        await api.put(`shoppingcart/updateCartItem/{cartid}/quantity/{qty}`, this.state)
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
            cartid: this.props.match.params.cartid,
            qty: 0
        });
    };

    render() {
        return(
            <div className="window-container">
                <div className="create-container">
                    <div className="frostedGlass">
                        <form className="create-form" onSubmit={this.handleSubmit}>
                            <h3 className="headline">Justera antal böcker här.</h3>
                            <InputField
                                type="text"
                                name={"cartid"}
                                labeltext="varukorgsId"
                                onChange={this.handleChange}
                            />
                            <InputField
                                type="text"
                                name={"qty"}
                                labeltext="Mängd"
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
    return <UpdateCartItem {...props} navigate={navigate}/>
}

export default Navigate
