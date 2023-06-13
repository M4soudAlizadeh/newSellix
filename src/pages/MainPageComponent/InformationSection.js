import classes from "./InformationSection.module.css";
const InformationSection = () => {
  return (
    <div className={classes["MainPage__InformationSection"]}>
      <div className={classes["MainPage__InformationSection--detail"]}>
        <div className={classes["MainPage__InformationSection--detail_items"]}>
          <h1>Sellix</h1>
          <p>Sellix S.R.L. Via del Monte 1, Bologna 40126 P.IVA 03982251203</p>
          <p>
            We take both the security and experience of our buyers very
            seriously. To report any seller abuse or misuse, please use our
            dedicated report page.
          </p>
          <p>Take a look at our roadmap to see what will be released soon.</p>
          <p>Sellix Business for iOS & Android</p>
          <div className="mt-5">
            <button className="btnBlack">App Store</button>
            <button className="btnBlack">Google Play</button>
          </div>
          <div
            className={
              classes["MainPage__InformationSection--detail_items-supp"]
            }
          >
            Get Support
          </div>
        </div>
      </div>
      <div className={classes["MainPage__InformationSection--Links"]}>
        <div>
          <h3>E-Commerce</h3>
          <a href="_">Downloads</a>
          <a href="_">Software</a>
          <a href="_">Serials</a>
        </div>
        <div>
          <h3>Customize</h3>
          <a href="_">Custom Domain</a>
          <a href="_">Embeds</a>
          <a href="_">Code</a>
        </div>
        <div>
          <h3>Payments</h3>
          <a href="_">Crypto</a>
          <a href="_">API</a>
          <a href="_">Document</a>
        </div>
        <div>
          <h3>Marketing</h3>
          <a href="_">Upsells</a>
          <a href="_">Email</a>
          <a href="_">Updates</a>
        </div>
        <div>
          <h3>Fraud Shield</h3>
          <a href="_">Risk</a>
          <a href="_">Rules</a>
          <a href="_">Safety</a>
        </div>
        <div>
          <h3>Develop</h3>
          <a href="_">API</a>
          <a href="_">Embed</a>
          <a href="_">Code</a>
        </div>
        <div>
          <h3>Manage</h3>
          <a href="_">Tickets</a>
          <a href="_">Advanced Data</a>
          <a href="_">Customer Affiliate</a>
        </div>
        <div>
          <h3>Fraud Shield</h3>
          <a href="_">Risk</a>
          <a href="_">Rules</a>
          <a href="_">Safety</a>
        </div>
      </div>
    </div>
  );
};
export default InformationSection;
