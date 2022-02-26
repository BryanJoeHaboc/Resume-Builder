import "./App.css";
import EducationInfo from "./components/EducationInfo";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <div className="edit-view-container">
        <UserInfo />
        <EducationInfo />
      </div>
      <div className="results-view-container"></div>
    </div>
  );
}

export default App;
