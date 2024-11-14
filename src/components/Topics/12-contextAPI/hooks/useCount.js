import { useContext } from "react";
import CountContext from "../contexts/CountContext";

const useCount = () => {
  return useContext(CountContext);
};

export default useCount;
