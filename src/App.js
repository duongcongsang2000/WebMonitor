import Header from "./components/Header";
import "../src/assets/js/index"

import {
  BrowserRouter,
} from "react-router-dom";
import Slidebar from "./components/Slidebar";
import Content from "./components/Content";
function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
        <Header/>
        <Slidebar/>
        <Content/>
    </div>
  </BrowserRouter>
  );
}

export default App;
