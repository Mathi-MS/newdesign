import CustomToast from "./Custom/CustomToast";
import { ReactQueryProvider } from "./Hooks/ReactQueryProvider";
import "./index.css";
import routes from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <ReactQueryProvider>
        <RouterProvider router={routes} />
      </ReactQueryProvider>
      <CustomToast />
    </>
  );
};
export default App;
