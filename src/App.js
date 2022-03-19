
// Hooks ----------------------
// import UseState from "./Hooks/UseState";
// import UseEffect from "./Hooks/UseEffect";
import UseReducer from "./Hooks/UseReducer";
// import UseRef from "./Hooks/UseRef";

// Project -----------------
// import User from "./Project/User";

// Form --------------------
// import ReactForm from "./Forms/ReactForm";

// Context API ---------------------
// import { createContext } from "react";
// import CompA from "./ContextAPI/CompA";
// const FirstName = createContext();
// const LastName = createContext();

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <ReactForm/> */}
      {/* <User/> */}
      {/* <UseRef/> */}
      <UseReducer/>
      {/* <FirstName.Provider value={"Arbab"}>
          <LastName.Provider value={"Anjum"}>
            <CompA/>
          </LastName.Provider>
      </FirstName.Provider> */}
    </div>
  );
}

export default App;
// export {FirstName,LastName};