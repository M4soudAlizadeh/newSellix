import classes from "./FooterSection.module.css";
const FooterSection = () => {
  return (
    <div className={classes["MainPage__FooterSection"]}>
      <p>Copyright 2023, Sellix SRL All Rights Reserved.</p>
      <div>
        <i class="fa fa-github"></i>
        <i class="fa fa-facebook"></i>
        <i class="fa fa-youtube"></i>
      </div>
    </div>
  );
};
export default FooterSection;
