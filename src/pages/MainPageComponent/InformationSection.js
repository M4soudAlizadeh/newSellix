const InformationSection = () => {
  return (
    <div className="flex justify-center w-full mdMax:flex-col">
      <div className="w-[30%] pr-8 pl-4 pt-20 bg-[#F5F5F5] pb-56 lgMax3:pb-16 mdMax:w-full ">
        <div className="informationDetail">
          <img
            className="h-5 w-18"
            src="https://asset.brandfetch.io/idMweYxyV_/idl8-Z71mD.svg"
            alt="sellix logo"
          />
          <span>
            Sellix S.R.L. Via del Monte 1, Bologna 40126 P.IVA 03982251203
          </span>
          <p>
            We take both the security and experience of our buyers very
            seriously. To report any seller abuse or misuse, please use our
            dedicated report page.
          </p>
          <p>Take a look at our roadmap to see what will be released soon.</p>
          <label>Sellix Business for iOS & Android</label>
          <div>
            <button className="px-2 btnBody btnBlack">App Store</button>
            <button className="px-2 btnBody btnBlack">Google Play</button>
          </div>
          <a href="_">Get Support</a>
        </div>
      </div>
      <div className="informationLinks">
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
