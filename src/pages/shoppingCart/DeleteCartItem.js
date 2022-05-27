import {useEffect, useState} from "react";
import api from "../../components/service/api";
import {Link, useNavigate, useParams} from "react-router-dom";

function DeleteCartItem(){

    const [error, setError] = useState(false);
    const [shoppingCart, setShoppingCart] = useState(null);
    const navigate = useNavigate();
    const {shoppingCartId} = useParams();

    useEffect(() => {
        if(shoppingCartId && shoppingCartId !=="")
            api.get(`Company/${shoppingCartId}`)
                .then((response) => response.data)
                .then(setShoppingCart)
                .catch(setError)
    }, []);

    function deleteShoppingCart() {
        api.delete(`shoppingcart/removecartItem/${shoppingCartId}`)
            .then(() => {
                alert("Varukorgen är nu Borttaget!");
                setShoppingCart(null)
                navigate("/start");
            });
    }

    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if(!shoppingCart) return "No Data Found";

    return (
        <div className="page-container">
            <div className={"frostedGlass"}>
                <h3 className="headline"> Varning!</h3>
                <h5> Bortagningen av varukorgen är permament!</h5>
                <h5>Vad vänligen dubbelkolla att det som ska tas bort är korrekt vald</h5>
                <div className={"login-btn-holder"}>
                    <button  onClick={deleteShoppingCart} className="btn primary-Btn text-light">TA BORT</button>
                    <Link to={`/`} className="btn secondary-Btn text-dark">AVBRYT</Link>
                </div>
            </div>
        </div>
    );
}

export default DeleteCartItem
