import "./App.css";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-row mt-3 gap-x-3 max-w-full">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
