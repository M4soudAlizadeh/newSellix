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
        <div className="mt-10">
          <button className="btnBlack">
            <i class="mr-2 fa fa-apple"></i>
            App Store
          </button>
          <button className="btnBlack">
            <i class="fab fa-google-play"></i>
            Google Play
          </button>
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
