import Approunts from "./routes/AppRouter";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Approunts />
      </BrowserRouter>
    </>
  );
}

export default App;
