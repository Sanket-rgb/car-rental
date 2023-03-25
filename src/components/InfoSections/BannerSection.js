import classes from "./BannerSection.module.css";
const BannerSection = () => {
  return (
    <div className={classes["banner-section"]}>
      <div className={classes["container"]}>
        <h2>Save big with our cheap car rental!</h2>
        <p>Top Airports. Local Suppliers. 24/7 Support.</p>
      </div>
    </div>
  );
};

export default BannerSection;
