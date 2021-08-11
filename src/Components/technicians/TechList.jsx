// import CSS styles
import "./tech-list.css";

// import context
import { useContext } from "react";
import itLoggercontext from "../../context/itLoggerContext";

const TechList = () => {
  // use context
  const { activeTechList, technicians } = useContext(itLoggercontext);

  return (
    <div className="tech-list-wrapper" onClick={() => activeTechList(false)}>
      <ul className="tech-list-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Technicians list</h2>
        {technicians.map((tech) => (
          <li className="tech-list" key={tech.id}>
            {`${tech.firstName}  ${tech.lastName}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
