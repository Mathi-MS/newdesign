import { createHashRouter } from "react-router-dom";
import { WebMain } from "../Components/WebMain";

const routes = createHashRouter([
  // {
  //   path: "/",
  //   element: <Login />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/",
  //   element: <ProtectedRoute element={<Layout />} />,
  //   element :<Layout />,
  //   children: [
  //     {
  //       path: "dashboard",
  //       element: <ProtectedRoute element={<Dashboard />} />,
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "tickets",
  //       element: <Tickets />,
  //     },
  //     {
  //       path: "tickets-history",
  //       element: <TicketsHistory />,
  //     },
  //     {
  //       path: "masters",
  //       element: <Masters />,
  //     },
  //     {
  //       path: "upload-invoice",
  //       element: <UploadInvoice />,
  //     },
  //   ],
  // },
    {
    path: "/",
    element: <WebMain />,
  },
]);

export default routes;
