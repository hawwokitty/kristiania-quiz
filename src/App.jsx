import "./App.css";
import QuestionBox from "./components/QuestionBox";

function App() {
  return (
    <>
      <div className="main-body">
        <img
          className="logo"
          src="/Kristiania_logo_vertikal_stor_22_hvit.png"
          alt="logo"
        />
        <QuestionBox />
      </div>
    </>
  );
}

export default App;
