import { persistor } from "../../store/store";
import "./payment-completion.styles.scss";
const PaymentCompletion = () => {
  persistor.pause();
  persistor.flush().then(() => {
    return persistor.purge();
  });

  return (
    <div className="payment-complete-page">
      <h1>Thank you</h1>
      <p>Your order will be processed soon ! </p>
    </div>
  );
};

export default PaymentCompletion;
