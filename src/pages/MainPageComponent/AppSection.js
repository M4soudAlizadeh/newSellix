import classes from "./AppSection.module.css";

const AppSection = () => {
  return (
    <div className={classes["MainPage__AppSection"]}>
      <div className={classes["MainPage__AppSection--title"]}>
        <h1>Introducing Sellix Business for iOS & Android</h1>
        <p>
          Sellix is now available to be downloaded on mobile devices around the
          world on the App & Play Stores.
        </p>
        <div className={classes["MainPage__AppSection--title_btns"]}>
          <button>App Store</button>
          <button>Google Play</button>
        </div>
      </div>
      <img
        className={classes["MainPage__AppSection--img_digital"]}
        src="https://cdn.sellix.io/static/landing/new/main/mobile-device.svg"
        alt="mobile app"
      />
    </div>
  );
};
export default AppSection;
