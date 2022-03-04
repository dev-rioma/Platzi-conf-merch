import React from 'react';
import '../styles/components/Success.css'

function Success() {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Jorge, gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
                <div className="Success-map">
                    Gooogle Maps
                </div>
            </div>
        </div>
    );
}

export default Success;