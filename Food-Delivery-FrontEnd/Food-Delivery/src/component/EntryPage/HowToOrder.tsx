import './style/OrderGuide.css';

const OrderGuide = () => {
    return (
        <div className="order-guide-container">
            <div className="how-to-order-title">
                <h1>How to Order?</h1>
         </div>
         <div className="order-guide">
            <div className="step">
                <div className="step-number">01</div>
                <span role="img" aria-label="location">📍</span>
                <h2>Choose your location</h2>
            </div>
            <div className="step">
                <div className="step-number">02</div>
                <span role="img" aria-label="decide">🙇🏻‍♂️</span>
                <h2>Choose what to eat</h2>
            </div>
            <div className="step">
                <div className="step-number">03</div>
                <span role="img" aria-label="order">🍔</span>
                <h2>Make your first order</h2>
            </div>
            <div className="step">
                <div className="step-number">04</div>
                <span role="img" aria-label="home">🏠</span>
                <h2>Your food is in its way!</h2>
            </div>
        </div>
        </div>
    );
}

export default OrderGuide;
