import { useState } from "react";
import { useSelector } from "react-redux";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button from "../button/button.component";
import "./payment-form.styles.scss";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const currentUser = useSelector(selectCurrentUser);
  const [message, setMessage] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const paymentResult = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/paymentcomplete`,
      },
      payment_method: {
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      setMessage(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setMessage("Payment Successful");
      }
    }
  };

  return (
    <div className="payment-form-container">
      <form className="payment-form" onSubmit={paymentHandler}>
        <PaymentElement />
        <div className="payment-btn">
          <Button isLoading={isProcessingPayment} buttonType="payment">
            Pay Now
          </Button>
        </div>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

export default PaymentForm;
