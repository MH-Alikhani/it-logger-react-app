// import context
import { useContext } from "react";
import itLoggerContext from "../../context/itLoggerContext";

const Logsbox = ({ log: { id, message, tech, attention, date } }) => {
  // use context
  const { deleteLog, activeEditLog, getSinglelog } =
    useContext(itLoggerContext);

  return (
    <li className={attention ? "logs-box attention" : "logs-box"}>
      <h2>{message}</h2>
      <div className="show-log">
        <p>
          ID #{id} Last updated by {tech} on {date}
        </p>
        <div className="log-option">
          <i
            className="fa fa-edit"
            onClick={() => {
              getSinglelog(id);
              activeEditLog(true);
            }}
          ></i>
          <i className="fa fa-trash" onClick={() => deleteLog(id)}></i>
        </div>
      </div>
    </li>
  );
};

export default Logsbox;
