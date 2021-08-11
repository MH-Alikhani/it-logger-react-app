// import context
import { useContext } from "react";
import itLoggerContext from "../../context/itLoggerContext";

const AddBtn = () => {
  // use context
  const { setAddLogBtn, activeTechList, activeSetTech } =
    useContext(itLoggerContext);

  return (
    <div className="add-btn">
      <i
        className="fa fa-user tech-list-btn"
        onClick={() => activeTechList(true)}
      ></i>
      <i
        className="fas fa-user-plus add-tech-btn"
        onClick={() => activeSetTech(true)}
      ></i>
      <i
        className="fa fa-plus add-log-btn"
        onClick={() => setAddLogBtn(true)}
      ></i>
    </div>
  );
};

export default AddBtn;
