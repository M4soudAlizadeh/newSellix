const FooterSection = () => {
  return (
    <div className="flex items-center justify-between px-5 mx-auto text-sm h-28 mdMax:flex-col mdMax:justify-evenly smMax:text-xs">
      <p className="text-center ">
        Copyright 2023, Sellix SRL All Rights Reserved.
      </p>
      <div className="flex justify-around w-32">
        <i class="fa fa-github" style={{ fontSize: "20px" }}></i>
        <i class="fa fa-facebook" style={{ fontSize: "20px" }}></i>
        <i class="fa fa-youtube" style={{ fontSize: "20px" }}></i>
      </div>
    </div>
  );
};
export default FooterSection;
