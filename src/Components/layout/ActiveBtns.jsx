// import components
import EditLog from "../logs/EditLog";
import AddLogs from "../logs/AddLogs";
import SetTech from "../technicians/SetTech";
import TechList from "../technicians/TechList";

// import context
import { useContext } from "react";
import itLoggerContext from "../../context/itLoggerContext";

const ActiveBtns = () => {
  // use context
  const { isSetTechActive, showTechList, addLogBtn, isEditLogactive } =
    useContext(itLoggerContext);

  return (
    <>
      {addLogBtn && <AddLogs />}
      {showTechList && <TechList />}
      {isEditLogactive && <EditLog />}
      {isSetTechActive && <SetTech />}
    </>
  );
};

export default ActiveBtns;
