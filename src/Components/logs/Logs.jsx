// import CSS styels
import "./logs.css";

// import components
import Logsbox from "./LogsBox";

// import packages & hooks
import { useContext } from "react";

// import context
import ItLoggerContext from "../../context/itLoggerContext";

const Logs = () => {
  // use context
  const { loading, logs } = useContext(ItLoggerContext);

  if (loading) return <h2 className="loading">Loading ... </h2>;
  else {
    return (
      <ul className="logs-wrapper">
        <h1>System logs</h1>
        {logs.length > 0 ? (
          logs.map((log) => <Logsbox log={log} key={log.id} />)
        ) : (
          <h2 className="no-logs">No logs .....</h2>
        )}
      </ul>
    );
  }
};

export default Logs;
