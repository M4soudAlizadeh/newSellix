import classes from "./FraudSection.module.css";
const FraudSection = () => {
  return (
    <div className={classes["MainPage__FraudCrypto"]}>
      <div className={classes["MainPage__FraudCrypto--title"]}>
        <h1>Fraud Shield</h1>
        <p>
          Stop blocking legitimate customers, and start blocking fraudulent
          customers. Your shop is protected all day, all night.
        </p>
        <div className={classes["MainPage__FraudCrypto--title-package"]}>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Block</h2>
            <p>
              Setup blacklist rules based on Email, Country Code, IP, or host or
              use our data of blacklists.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Filters</h2>
            <p>
              Advanced filters designed to protect your sales without manual
              intervention.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Auth</h2>
            <p>
              Support for multi-method authentication keeping your account
              secure.
            </p>
          </a>
        </div>
      </div>
      <img
        src="https://cdn.sellix.io/static/landing/new/main/fraud-pic.png"
        alt="Fraud img"
      />
    </div>
  );
};
export default FraudSection;
