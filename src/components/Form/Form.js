import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCar,
  faLocationDot,
  faCalendarDays,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import Button from "../UI/Button"

import classes from "./Form.module.css"
import { useState } from "react"
const Form = () => {
  const [error, setError] = useState(false)

  const [carType, setCarType] = useState("")
  const [pickUpLocation, setPickUpLocation] = useState("")
  const [dropOffLocation, setDropOffLocation] = useState("")
  const [pickUpDate, setPickUpDate] = useState("")
  const [dropOffDate, setDropOffDate] = useState("")

  const formSubmitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className={classes["book-car-box"]}>
      <h2>Book a car</h2>
      {error && (
        <div className={classes["error-message"]}>
          <p>All fields required!</p>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      )}
      <form onSubmit={formSubmitHandler} className={classes["form-grid"]}>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-type">
            <FontAwesomeIcon icon={faCar} color="#ff4d30" />
            &nbsp; Select Your Car Type *
          </label>
          <select id="car-type">
            <option value={carType}>Select your car type</option>
            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
            <option value="VW Golf 6">VW Golf 6</option>
            <option value="Toyota Camry">Toyota Camry</option>
            <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
            <option value="VW Passat CC">VW Passat CC</option>
          </select>
        </div>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-pickup-location">
            <FontAwesomeIcon icon={faLocationDot} color="#ff4d30" />
            &nbsp; Pick-up *
          </label>
          <select id="car-pickup-location">
            <option value={pickUpLocation}>Select pickup location</option>
            <option value="Belgrade">Belgrade</option>
            <option value="Novi Sad">Novi Sad</option>
            <option value="Nis">Nis</option>
            <option value="Kragujevac">Kragujevac</option>
            <option value="Subotica">Subotica</option>
          </select>
        </div>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-drop-off-location">
            <FontAwesomeIcon icon={faLocationDot} color="#ff4d30" />
            &nbsp; Drop-off *
          </label>
          <select id="car-drop-off-location">
            <option value={dropOffLocation}>Select drop-off location</option>
            <option value="Novi Sad">Novi Sad</option>
            <option value="Belgrade">Belgrade</option>
            <option value="Nis">Nis</option>
            <option value="Kragujevac">Kragujevac</option>
            <option value="Subotica">Subotica</option>
          </select>
        </div>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-pickup-date">
            <FontAwesomeIcon icon={faCalendarDays} color="#ff4d30" />
            &nbsp; Pick-off *
          </label>
          <input id="car-pickup-date" type="date" />
        </div>
        <div className={classes["grid-cell"]}>
          <label htmlFor="car-drop-off-date">
            <FontAwesomeIcon icon={faCalendarDays} color="#ff4d30" />
            &nbsp; Drop-off *
          </label>
          <input id="car-drop-off-date" type="date" />
        </div>
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
}

export default Form
