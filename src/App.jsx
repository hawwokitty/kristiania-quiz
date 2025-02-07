import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <div className="main-body">
        <img
          className="logo"
          src="./Kristiania_logo_vertikal_stor_22_sort.png"
          alt="logo"
        />
        <Welcome />
      </div>
    </>
  );
}

export default App;
