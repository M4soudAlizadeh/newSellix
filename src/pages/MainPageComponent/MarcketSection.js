import classes from "./MarcketSection.module.css";
const MarcketSection = () => {
  return (
    <div className={classes["MainPage__MarcketCrypto"]}>
      <img
        src="https://cdn.sellix.io/static/landing/new/main/market-pic.png"
        alt="marcket img"
      />
      <div className={classes["MainPage__MarcketCrypto--title"]}>
        <h1>Market</h1>
        <p>
          Replace dozens of tools, save money, and market your entire ecommerce
          business from anywhere with one simple platform.
        </p>
        <div className={classes["MainPage__MarcketCrypto--title-package"]}>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Email Marketing</h2>
            <p>
              Directly automate your email marketing efforts with powerful
              integrations and tools.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Upselling</h2>
            <p>
              Combine products at a single price and unleash the full power of
              upsells.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Updates</h2>
            <p>
              Automatically send stock alerts, product announcements, and more
              directly to Discord.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Discounts</h2>
            <p>
              Apply extraordinary offers, promo codes, and volume-based
              discounts to your products.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default MarcketSection;
