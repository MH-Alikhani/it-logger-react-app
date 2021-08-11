// import hooks and packagese
import axios from "axios";
import { useReducer, useEffect } from "react";
// import context and reducer
import itLoggerReducer from "./itLoggerReducer";
import itloggerContext from "./itLoggerContext.js";

import {
  GET_LOGS,
  SET_LOG,
  SET_TECH,
  DELETE_LOG,
  EDIT_LOG,
  SEARCH_LOGS,
  SET_LOADING,
  SHOW_TECH_LIST,
  GET_SINGLE_LOG,
  GET_TECHNICIANS,
  ACTIVE_EDIT_LOG,
  ACTIVE_SET_TECH_BTN,
  ACTIVE_ADD_LOG_BTN,
} from "./type.js";

const ItLoggerState = ({ children }) => {
  // states
  const initialState = {
    log: {},
    logs: [],
    loading: false,
    technicians: [],
    addLogBtn: false,
    showTechList: false,
    isSetTechActive: false,
    isEditLogactive: false,
  };

  // useReducer
  const [state, dispatch] = useReducer(itLoggerReducer, initialState);

  // set loading func
  const loading = (value) => dispatch({ type: SET_LOADING, payload: value });

  // get logs for showing all logs
  const getLogs = async () => {
    try {
      loading(true);
      const res = await axios("http://localhost:5000/logs");
      dispatch({ type: GET_LOGS, payload: res.data });
      loading(false);
    } catch (error) {
      console.error("Error : http://localhost:5000/logs is not defined");
    }
  };
  // run get logs func once
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  // get technicians for shownig in tech list and show in option in add log modal
  const getTechnicians = async () => {
    try {
      const res = await axios("http://localhost:5000/technicians");
      dispatch({ type: GET_TECHNICIANS, payload: res.data });
    } catch (error) {
      console.log("Error : http://localhost:5000/technicians is not defined");
    }
  };
  // run get technicians func once
  useEffect(() => {
    getTechnicians();
  }, []);

  // active add log button to show add log modal
  const setAddLogBtn = (value) => {
    dispatch({ type: ACTIVE_ADD_LOG_BTN, payload: value });
  };

  // set log for add log button
  const setLog = async (newLog) => {
    await axios.post("http://localhost:5000/logs", newLog).then((response) => {
      dispatch({ type: SET_LOG, payload: response.data });
    });
  };

  // active show tech list button to show tech list modal
  const activeTechList = (value) => {
    dispatch({ type: SHOW_TECH_LIST, payload: value });
  };

  // active set tech to add techs
  const activeSetTech = (value) => {
    dispatch({ type: ACTIVE_SET_TECH_BTN, payload: value });
  };
  // set techncians for add techs in add tech button
  const setTech = async (newTech) => {
    await axios
      .post("http://localhost:5000/technicians", newTech)
      .then((response) => {
        dispatch({ type: SET_TECH, payload: response.data });
      });
  };

  // active edit log to show edit log modal
  const activeEditLog = (value) => {
    dispatch({ type: ACTIVE_EDIT_LOG, payload: value });
  };

  // delete log
  const deleteLog = async (id) => {
    await axios.delete(`http://localhost:5000/logs/${id}`).then(() => {
      dispatch({ type: DELETE_LOG, payload: id });
    });
  };

  // edit log to edit the clicked log
  const updateLog = async (editedLog) => {
    await axios
      .put(`http://localhost:5000/logs/${editedLog.id}`, editedLog)
      .then(() => dispatch({ type: EDIT_LOG, payload: editedLog }));
  };
  // search logs
  const searchLogs = async (value) => {
    loading(true);
    const res = await axios(`http://localhost:5000/logs/?q=${value}`);
    dispatch({ type: SEARCH_LOGS, payload: res.data });
    loading(false);
  };
  // get single log for search
  const getSinglelog = async (id) => {
    await axios.get(`http://localhost:5000/logs/${id}`).then((response) => {
      dispatch({ type: GET_SINGLE_LOG, payload: response.data });
    });
  };
  return (
    <itloggerContext.Provider
      value={{
        updateLog,
        setLog,
        getLogs,
        setTech,
        searchLogs,
        deleteLog,
        getSinglelog,
        setAddLogBtn,
        activeSetTech,
        activeEditLog,
        getTechnicians,
        activeTechList,
        log: state.log,
        logs: state.logs,
        loading: state.loading,
        addLogBtn: state.addLogBtn,
        technicians: state.technicians,
        showTechList: state.showTechList,
        isSetTechActive: state.isSetTechActive,
        isEditLogactive: state.isEditLogactive,
      }}
    >
      {children}
    </itloggerContext.Provider>
  );
};

export default ItLoggerState;
