import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { ROUTES } from "./routes";
import { HomePage } from "./pages/HomePage";


const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);


function App() {

  return <RouterProvider router={router} />;

}

export default App
