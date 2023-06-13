import classes from "./ReadyToSection.module.css";

const ReadyToSection = () => {
  return (
    <div className={classes["MainPage__ReadyToSection"]}>
      <div className={classes["MainPage__ReadyToSection--title"]}>
        <h1>Ready to Sell?</h1>
        <p>
          Being your own boss has never been this rewarding. Launch your
          business online with Sellix - a powerful e-commerce solution that lets
          you create a custom store in just a couple of clicks.
        </p>
        <div className={classes["MainPage__ReadyToSection--title_btns"]}>
          <button>
            Get Started
            <i className="fa fa-arrow-right"></i>
          </button>
          <button>
            Pricing
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <img
        className={classes["MainPage__ReadyToSection--img_digital"]}
        src="https://cdn.sellix.io/static/landing/new/ready-globe.svg"
        alt="globe app"
      />
    </div>
  );
};
export default ReadyToSection;
