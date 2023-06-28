import { useEffect, useState } from "react";
import PaymentForm from "../payment-form/payment-form.component";
import { stripePromise } from "../../utils/stripe/stripe.utils";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const amount = useSelector(selectCartTotal);
  useEffect(() => {
    const response = fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(async (res) => {
      const { clientSecret } = await res.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      <h1>Payment</h1>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
