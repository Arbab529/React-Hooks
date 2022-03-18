// import UseState from "./Hooks/UseState";
// import UseEffect from "./Hooks/UseEffect";
// import UseRef from "./Hooks/UseRef";

// import User from "./Project/User";
// import ReactForm from "./Forms/ReactForm";

import { createContext } from "react";
import CompA from "./ContextAPI/CompA";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <ReactForm/> */}
      {/* <User/> */}
      {/* <UseRef/> */}
      <FirstName.Provider value={"Arbab"}>
          <LastName.Provider value={"Anjum"}>
            <CompA/>
          </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export {FirstName,LastName};