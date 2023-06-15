const FraudSection = () => {
  return (
    <div className="flex-row fourComponentContainer">
      <div className="fourComponentContainer_deatailCont">
        <div>Fraud Shield</div>
        <p>
          Stop blocking legitimate customers, and start blocking fraudulent
          customers. Your shop is protected all day, all night.
        </p>
        <div className="fourComponentContainer-itemsContainer">
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
      <div className="fourComponentContainer-imgs">
        <img
          className="right-60 fourComponentContainer-imgs_first left-1/2"
          src="https://cdn.sellix.io/static/landing/new/main/fraud-back.svg"
          alt="four Fraud img"
        />
        <img
          className="fourComponentContainer-imgs_sec"
          src="https://cdn.sellix.io/static/landing/new/main/fraud-pic.png"
          alt="Fraud img"
        />
      </div>
    </div>
  );
};
export default FraudSection;
