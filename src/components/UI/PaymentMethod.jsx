import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="Direct Bank Transfer" className="d-flex align-items-center gap-2">
          <input type="radio" name="radio" id="Direct Bank Transfer" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="Cheque Payment" className="d-flex align-items-center gap-2">
          <input type="radio" name="radio" id="Cheque Payment" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="Master Card" className="d-flex align-items-center gap-2">
          <input type="radio" name="radio" id="Master Card" /> Master Card
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="Paypal" className="d-flex align-items-center gap-2">
          <input type="radio" name="radio" id="Paypal" /> Paypal
        </label>
      </div>

      <div className="payment mt-5">
        <div className="mb-3">
          <img src={masterCard} alt="" />
        </div>
        <div className="mb-3">
          <img src={paypal} alt="" />
        </div>
        <button>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
