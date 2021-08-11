import {
  SET_LOG,
  GET_LOGS,
  EDIT_LOG,
  SET_TECH,
  DELETE_LOG,
  SET_LOADING,
  SEARCH_LOGS,
  GET_SINGLE_LOG,
  SHOW_TECH_LIST,
  GET_TECHNICIANS,
  ACTIVE_EDIT_LOG,
  ACTIVE_ADD_LOG_BTN,
  ACTIVE_SET_TECH_BTN,
} from "./type.js";

const itLoggerReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };

    // logs
    case GET_LOGS:
      return { ...state, logs: payload };

    case GET_SINGLE_LOG:
      return { ...state, log: payload };

    case SET_LOG:
      return { ...state, logs: [...state.logs, payload] };

    case SEARCH_LOGS:
      return { ...state, logs: payload };

    case EDIT_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => (log.id === payload.id ? payload : log)),
      };

    case DELETE_LOG:
      return { ...state, logs: state.logs.filter((log) => log.id !== payload) };

    // technecians
    case GET_TECHNICIANS:
      return { ...state, technicians: payload };

    case SET_TECH:
      return { ...state, technicians: [...state.technicians, payload] };

    // buttons
    case ACTIVE_ADD_LOG_BTN:
      return { ...state, addLogBtn: payload };

    case ACTIVE_SET_TECH_BTN:
      return { ...state, isSetTechActive: payload };

    case SHOW_TECH_LIST:
      return { ...state, showTechList: payload };

    case ACTIVE_EDIT_LOG:
      return { ...state, isEditLogactive: payload };

    default:
      return state;
  }
};

export default itLoggerReducer;
