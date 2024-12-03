import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Orders from "./components/Orders.jsx";

function App() {
  const currentWindow = useSelector((store) => store.UI.currentWindow);

  return (
    <div className="App">
      <Header />
      {currentWindow === "meals" ? <Meals /> : <Orders />}
    </div>
  );
}

export default App;
