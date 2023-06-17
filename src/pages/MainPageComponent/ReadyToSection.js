const ReadyToSection = () => {
  return (
    <div className="flex items-center justify-between px-8 py-8 bg-behind-ReadytoSell lgMax3:px-0 lgMax3:flex-col lgMax3:justify-start lgMax3:items-center lgMax3:overflow-hidden lgMax3:max-h-[600px] lgMax3:relative">
      <div className="redyDetail">
        <h1>Ready to Sell?</h1>
        <p>
          Being your own boss has never been this rewarding. Launch your
          business online with Sellix - a powerful e-commerce solution that lets
          you create a custom store in just a couple of clicks.
        </p>
        <div className="mt-10">
          <button className="btnBody btnWhite">
            Get Started
            <i className="ml-2 fa fa-arrow-right"></i>
          </button>
          <button className="btnBody btnTrans">
            Pricing
            <i className="ml-2 fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <img
        className="w-2/5 lgMax3:w-full lgMax3:absolute lgMax3:top-40 "
        src="https://cdn.sellix.io/static/landing/new/ready-globe.svg"
        alt="globe app"
      />
    </div>
  );
};
export default ReadyToSection;
