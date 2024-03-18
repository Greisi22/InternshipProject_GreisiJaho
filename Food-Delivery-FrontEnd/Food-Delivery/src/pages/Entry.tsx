import { FunctionComponent } from "react";
import NavBar from "src/component/navBar";
import "./styles/entry.css"

const ENTRY: FunctionComponent = () => {
  return (
   <div className="entryContainer">
    <NavBar></NavBar>
   </div>
  );
};

export default ENTRY;