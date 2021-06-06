import "./App.css";
import Header from "./components/Header";
import Actions from "./components/Actions";
import CountdownTimer from "./components/CountdownTimer";
import CountdownProvider from "./context/Countdown";
import AlarmModal from "./components/AlarmModal";

function App() {
  return (
    <CountdownProvider>
      <div className="app">
        <Header />
        <Actions />
        <AlarmModal />
        <CountdownTimer />
      </div>
    </CountdownProvider>
  );
}

export default App;
