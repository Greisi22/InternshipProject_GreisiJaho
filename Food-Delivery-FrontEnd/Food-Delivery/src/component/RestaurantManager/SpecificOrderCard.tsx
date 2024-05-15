import 'src/component/RestaurantManager/styles/bill.css';
import { Order } from 'src/types/Restaurant';
import restorant from "src/assets/HamBurgerPlateCategory.jpg"

function SpecificOrderCard({ order }: { order: Order }) {
    return (
        <div className="order-container">
            <div className="order-left">
                <h1 className="order-title">Thank you for your purchase!</h1>
                <p className="order-processing-info">
                    Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
                </p>
                <h2 className="billing-title">Billing address</h2>
                <div className="billing-details">
                    <div className="billing-item">
                        <span className="billing-label">Name</span>
                        <span className="billing-value">{order.userName}</span>
                    </div>
                    <div className="billing-item">
                        <span className="billing-label">Address</span>
                        <span className="billing-value">{order.userAdress}</span>
                    </div>
                    <div className="billing-item">
                        <span className="billing-label">Phone</span>
                        <span className="billing-value">{order.userPhoneNumber}</span>
                    </div>
                    <div className="billing-item">
                        <span className="billing-label">Email</span>
                        <span className="billing-value">{order.userEmail}</span>
                    </div>
                </div>
                <button className="track-order-button">Track Your Order</button>
            </div>
            <div className="order-right">
                <div className="order-summary">
                    <h2 className="order-summary-title">Order Summary</h2>
                    <div className="order-summary-details">
                        <div className="summary-item">
                            <span className="summary-label">Date</span>
                            <span className="summary-value">{order.orderTime}</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-label">Order Number</span>
                            <span className="summary-value">{order.id}</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-label">Payment Method</span>
                            <span className="summary-value">{order.paymentMethod}</span>
                        </div>
                    </div>
                    <div className="order-products">
                        {order.productss && order.productss.map((product, index) => (
                            <div className="product-item mr-[15px]" key={index}>
                                <img src={restorant} alt={product.name} className="product-image " />
                                <div className="product-info">
                                    <span className="product-name">{product.name}</span>
                                    <span className="product-amount">Pack: {product.amount}</span>
                                </div>
                                <span className="product-price">{product.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="order-totals">
                        <div className="totals-item">
                            <span className="totals-label">Sub Total</span>
                            <span className="totals-value">{order.totalPrice}</span>
                        </div>
                        <div className="totals-item">
                            <span className="totals-label">Shipping</span>
                            <span className="totals-value">{order.shippingPrice}</span>
                        </div>
                        <div className="totals-item">
                            <span className="totals-label">Tax</span>
                            <span className="totals-value">{order.taxPrice}</span>
                        </div>
                        <div className="totals-item order-total">
                            <span className="totals-label">Order Total</span>
                            <span className="totals-value">{order.orderPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificOrderCard;
