import React from 'react';
import './styles/SpecificOrderCard.css';

function SpecificOrderCard() {
    return (
        <div className="flex w-full specificOrderContainer">
            <div className="bg-red-500 w-[50%] specificOrderContainer1">
                <div>Order Description!</div>
                <div>Prova2</div>
                <div>Prova3</div>
                <div>Prova4</div>
            </div>
            <div className="bg-green-500 w-[50%] specificOrderContainer2">
                <div>Prova1</div>
                <div><span>a</span>
                <span>A</span>
                <span>A</span></div>
                <div>Prova3</div>
                <div>Prova4</div>
                <div>Prova5</div>
            </div>
        </div>
    );
}

export default SpecificOrderCard;
