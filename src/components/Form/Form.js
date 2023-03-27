import Button from "../UI/Button";

import classes from "./Form.module.css";
const Form = () => {
  return (
    <div className={classes["book-car-box"]}>
      <h2>Book a car</h2>
      <form className={classes["form-grid"]}>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-type">Select Your Car Type *</label>
          <select id="car-type">
            <option value="">Select your car type</option>
            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
            <option value="VW Golf 6">VW Golf 6</option>
            <option value="Toyota Camry">Toyota Camry</option>
            <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
            <option value="VW Passat CC">VW Passat CC</option>
          </select>
        </div>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-pickup-location">Pick-up *</label>
          <select id="car-pickup-location">
            <option value="">Select pickup location</option>
            <option value="Belgrade">Belgrade</option>
            <option value="Novi Sad">Novi Sad</option>
            <option value="Nis">Nis</option>
            <option value="Kragujevac">Kragujevac</option>
            <option value="Subotica">Subotica</option>
          </select>
        </div>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-drop-off-location">Drop-off *</label>
          <select id="car-drop-off-location">
            <option value="">Select drop-off location</option>
            <option value="Novi Sad">Novi Sad</option>
            <option value="Belgrade">Belgrade</option>
            <option value="Nis">Nis</option>
            <option value="Kragujevac">Kragujevac</option>
            <option value="Subotica">Subotica</option>
          </select>
        </div>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-pickup-date">Pick-off *</label>
          <input id="car-pickup-date" type="date" />
        </div>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-drop-off-date">Drop-off *</label>
          <input id="car-drop-off-date" type="date" />
        </div>
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default Form;
