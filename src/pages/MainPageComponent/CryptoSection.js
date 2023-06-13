import classes from "./CryptoSection.module.css";
const CryptoSection = () => {
  return (
    <div className={classes["MainPage__CryptoSection"]}>
      <img
        src="https://cdn.sellix.io/static/landing/new/main/crypto.svg"
        alt="crypto label"
      />
      <h1>Cryptocurrency Transactions</h1>
      <p>
        Sellix provides you with the latest technologies, offering you a simple
        solution to sell your digital goods with cryptocurrencies
      </p>
      <button className="btnWhiteBaner">
        View Fees<i className="ml-2x fa fa-arrow-right"></i>
      </button>
    </div>
  );
};
export default CryptoSection;
