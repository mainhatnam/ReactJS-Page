import { createContext, useState } from "react";
import { IStateContext } from "./types/Context";

const StateContext = createContext<IStateContext>({} as IStateContext)
const GlobalProvider = ({ children }:{children:React.JSX.Element}) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Nam');
  
    return (
      <StateContext.Provider value={{ 
        count, setCount, 
        name, setName, 
      }}>
        {children}
      </StateContext.Provider>
    );
};

export {StateContext, GlobalProvider}
