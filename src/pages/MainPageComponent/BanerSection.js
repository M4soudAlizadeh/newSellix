import classes from "./BanerSection.module.css";
import star from "../../assets/star.png";

const BanerSection = () => {
  return (
    <div className={classes["MainPage__BanerSection"]}>
      <div className={classes["MainPage__BanerSection--title"]}>
        <h1>
          Digital selling
          <br /> with ease
        </h1>
        <p>
          Sell subscriptions, tokens, serial keys, digital downloads, video
          courses, softwares and licenses in a fast, easy and secure way.
        </p>
        <div className={classes["MainPage__BanerSection--title_btns"]}>
          <button>
            Get Started
            <i className="fa fa-arrow-right"></i>
          </button>
          <button>
            Pricing
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
        <div className={classes["MainPage__BanerSection--title_rank"]}>
          <span>
            Excellent
            <img src={star} alt="score img" />
          </span>
        </div>
      </div>
      <img
        className={classes["MainPage__BanerSection--img_digital"]}
        src="https://cdn.sellix.io/static/landing/new/main/top-screen.png"
        alt="digital banner"
        loading="lazy"
      />
    </div>
  );
};
export default BanerSection;
