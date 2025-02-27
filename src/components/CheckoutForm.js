import React, { useState } from "react";
import { useForm } from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [form, handleFormChanges] = useForm(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleFormChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleFormChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={form.address}
            onChange={handleFormChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={form.city} onChange={handleFormChanges} />
        </label>
        <label>
          State:
          <input name="state" value={form.state} onChange={handleFormChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={form.zip} onChange={handleFormChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {form.firstName} {form.lastName}
          </p>
          <p>{form.address}</p>
          <p>
            {form.city}, {form.state} {form.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
