// import CSS styles
import "./set-tech.css";

// import context & hooks
import { useContext, useState } from "react";
import itLoggerContext from "../../context/itLoggerContext";

const SetTech = () => {
  // use context
  const { activeSetTech, setTech } = useContext(itLoggerContext);

  // states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // submit func
  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "") {
      const newTech = {
        firstName,
        lastName,
      };
      setTech(newTech);
      setFirstName("");
      setLastName("");
      activeSetTech(false);
    }
  };

  return (
    <div
      className="set-tech-wrapper"
      onSubmit={(e) => submitHandler(e)}
      onClick={() => activeSetTech(false)}
    >
      <form className="set-text-box" onClick={(e) => e.stopPropagation()}>
        <h2>Add Technicians</h2>
        <div className="first-name-input">
          <label htmlFor="add-first-name-tech">Enter first name :</label>
          <input
            type="text"
            name="add tech"
            id="add-first-name-tech"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="last-name-input">
          <label htmlFor="add-last-name-tech">Enter last name :</label>
          <input
            type="text"
            name="add tech"
            id="add-last-name-tech"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit" className="set-tech-btn">
          Add Technicians
        </button>
      </form>
    </div>
  );
};

export default SetTech;
