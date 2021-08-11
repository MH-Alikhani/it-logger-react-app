// import context
import ItLoggerState from "./context/ItLoggerState";

// import CSS styles
import "./App.css";

// import components
import Logs from "./Components/logs/Logs";
import Search from "./Components/layout/Search";
import AddBtn from "./Components/layout/AddBtn";
import ActiveBtns from "./Components/layout/ActiveBtns";

function App() {
  return (
    <ItLoggerState>
      <div className="App">
        <Search />
        <main>
          <Logs />
          <AddBtn />
        </main>
        <ActiveBtns />
      </div>
    </ItLoggerState>
  );
}

export default App;
