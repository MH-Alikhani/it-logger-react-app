// import CSS styles
import "./edit-log.css";

// import context and hooks
import { useContext, useState } from "react";
import itLoggerContext from "../../context/itLoggerContext";

const EditLog = () => {
  // use context
  const {
    updateLog,
    log: { id },
    technicians,
    activeEditLog,
  } = useContext(itLoggerContext);

  // state
  const [tech, setTech] = useState("");
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);

  // submit func
  const submitHandler = (e) => {
    e.preventDefault();
    if (message !== "") {
      const editedLog = {
        id,
        tech,
        message,
        attention,
        date: Date(),
      };
      updateLog(editedLog);
      setTech("");
      setMessage("");
      setAttention(false);
      activeEditLog(false);
    }
  };

  return (
    <div className="edit-log-wrapper" onClick={() => activeEditLog(false)}>
      <form
        className="edit-log-modal"
        onSubmit={(e) => submitHandler(e)}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Edit logs</h2>
        <input
          type="text"
          name="edit log"
          className="edit-log-input"
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="option-wrapper">
          <div className="attention-check-box-wrapper">
            Need attention:
            <input
              type="checkbox"
              name="attention check box"
              className="attention-check-box"
              onChange={() => setAttention(!attention)}
            />
          </div>
          <select
            name="select-tech"
            className="select-tech"
            onChange={(e) => setTech(e.target.value)}
          >
            {technicians.map((tech) => (
              <option
                value={`${tech.firstName}  ${tech.lastName}`}
                key={tech.id}
              >{`${tech.firstName}  ${tech.lastName}`}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="edit-log-btn">
          Edit log
        </button>
      </form>
    </div>
  );
};

export default EditLog;
