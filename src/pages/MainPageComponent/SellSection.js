import classes from "./SellSection.module.css";
const SellSection = () => {
  return (
    <div className="fourComponentContainer">
      <div className="w-[calc(55%-1rem)]">
        <div className="my-6 text-[40px] leading-[48px] font-extrabold">
          Sell
        </div>
        <p className="mb-16 text-lg font-normal leading-7">
          With everything powered by a single platform, you don’t have to choose
          just one type of digital product.
        </p>
        <div className="flex flex-wrap">
          <a href="_" className="fourComponentContainer-items">
            <i class="fa fa-address-card-o"></i>
            <h2>Software</h2>
            <p>
              Built for developers and businesses. We’ll host unlimited files up
              to 5GB of cloud storage.
            </p>
          </a>
          <a href="_" className="fourComponentContainer-items">
            <i class="fa fa-address-card-o"></i>
            <h2>Services</h2>
            <p>
              Supercharge your creativity and sell directly through a safe, and
              battle-tested platform.
            </p>
          </a>
          <a href="_" className="fourComponentContainer-items">
            <i class="fa fa-address-card-o"></i>
            <h2>Subscriptions</h2>
            <p>
              If it’s a daily, weekly, monthly, or yearly plan, we support it
              all. All simply integrated.
            </p>
          </a>
          <a href="_" className="fourComponentContainer-items">
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
          className="right-60 fourComponentContainer-imgs_first"
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
