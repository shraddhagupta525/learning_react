import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text app" about="about us" />
      <div className="container">
        <TextForm heading="Enter text to analyze" />
      </div>
    </>
  );
}

export default App;
