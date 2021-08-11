// import CSS styels
import "./add-logs.css";

// import context and hooks
import { useContext, useState } from "react";
import itLoggerContext from "../../context/itLoggerContext";

const AddLogs = () => {
  // use context
  const { setLog, setAddLogBtn, technicians } = useContext(itLoggerContext);

  // states
  const [tech, setTech] = useState("");
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);

  // submit func
  const submitHandler = (e) => {
    e.preventDefault();
    if (message !== "" && tech !== "") {
      const newLog = {
        tech,
        message,
        attention,
        date: Date(),
      };
      setLog(newLog);
      setTech("");
      setMessage("");
      setAttention(false);
      setAddLogBtn(false);
    }
  };

  return (
    <div className="add-log-container" onClick={() => setAddLogBtn(false)}>
      <form
        className="add-log-modal"
        onSubmit={(e) => submitHandler(e)}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Add logs</h2>
        <input
          type="text"
          name="add log"
          value={message}
          className="add-log-input"
          placeholder="Add message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="option-wrapper">
          <div className="attention-check-box-wrapper">
            Need attention:
            <input
              type="checkbox"
              value={attention}
              name="attention check box"
              className="attention-check-box"
              onChange={() => setAttention(!attention)}
            />
          </div>
          <select
            defaultValue=""
            name="select-tech"
            className="select-tech"
            onChange={(e) => setTech(e.target.value)}
          >
            <option value="" disabled>
              select tech
            </option>
            {technicians.map(({ firstName, lastName, id }) => (
              <option
                value={`${firstName}  ${lastName}`}
                key={id}
              >{`${firstName}  ${lastName}`}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="add-msg-btn">
          Add message
        </button>
      </form>
    </div>
  );
};

export default AddLogs;
