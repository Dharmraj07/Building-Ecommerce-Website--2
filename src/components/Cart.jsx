import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css"; // Import a CSS file for styling

function Cart({ onClose }) {
  const cartItems = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return ReactDOM.createPortal(
    <div className="cart-popup">
      <button type="button" className="close-btn" onClick={onClose}>
        X
      </button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.title} className="cart-item">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="cart-item-actions">
              <button >+</button>
              <button >-</button>
              <button >Remove</button>
            </div>
          </div>
        ))
      )}
      <h3 className="total-amount">Total Amount: ${totalAmount}</h3>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Cart;
