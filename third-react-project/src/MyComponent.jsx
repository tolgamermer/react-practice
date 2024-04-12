import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("guest");
  const [quantity, setQuantity] = useState("0");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChane(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChane}></input>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity}</p>

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="enter delivery"
        ></textarea>
        <p> comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
          <input
            type="radio"
            value={"Pick Up"}
            checked={shipping === "Pick up"}
            onChange={handleShippingChange}
          />
          Pick up
        </label>

        <label>
          <input
            type="radio"
            value={"Delivery"}
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
      </div>
    </>
  );
}

export default MyComponent;
