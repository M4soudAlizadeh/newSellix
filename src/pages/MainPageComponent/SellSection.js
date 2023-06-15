// import classes from "./SellSection.module.css";
const SellSection = () => {
  return (
    <div className="flex-row-reverse fourComponentContainer">
      <div className="fourComponentContainer_deatailCont">
        <div>Sell</div>
        <p>
          With everything powered by a single platform, you don’t have to choose
          just one type of digital product.
        </p>
        <div className="fourComponentContainer-itemsContainer">
          <a href="_">
            <i class="fa fa-address-card-o"></i>
            <h2>Software</h2>
            <p>
              Built for developers and businesses. We’ll host unlimited files up
              to 5GB of cloud storage.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-address-card-o"></i>
            <h2>Services</h2>
            <p>
              Supercharge your creativity and sell directly through a safe, and
              battle-tested platform.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-address-card-o"></i>
            <h2>Subscriptions</h2>
            <p>
              If it’s a daily, weekly, monthly, or yearly plan, we support it
              all. All simply integrated.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-address-card-o"></i>
            <h2>Serials</h2>
            <p>
              Sell accounts, license keys, and activation codes. Save it and
              make cash.
            </p>
          </a>
        </div>
      </div>
      <div className="fourComponentContainer-imgs">
        <img
          className="fourComponentContainer-imgs_first"
          src="https://cdn.sellix.io/static/landing/new/main/sell-back.svg"
          alt="one sell img"
        />
        <img
          className="fourComponentContainer-imgs_sec"
          src="https://cdn.sellix.io/static/landing/new/main/sell-pic.png"
          alt="sell img"
        />
      </div>
    </div>
  );
};
export default SellSection;
