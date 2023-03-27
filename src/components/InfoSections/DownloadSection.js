import Image from "next/image";
import classes from "./DownloadSection.module.css";
const DownloadSection = () => {
  return (
    <section className={classes["download-section"]}>
      <div className={classes.container}>
        <div className={classes["download-text"]}>
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className={classes["download-text__buttons"]}>
            <div className={classes["image-container"]}>
              <Image
                fill
                alt="googlePlay"
                src="/Images/background/googlePlay.svg"
              ></Image>
            </div>
            <div className={classes["image-container"]}>
              <Image
                fill
                alt="googlePlay"
                src="/Images/background/appStore.svg"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
