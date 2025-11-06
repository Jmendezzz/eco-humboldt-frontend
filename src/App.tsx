import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { ROUTES } from "./routes";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";


const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  { path: ROUTES.AUTH.LOGIN, element: <LoginPage /> },
  { path: ROUTES.AUTH.REGISTER, element: <RegisterPage /> },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);


function App() {

  return <RouterProvider router={router} />;

}

export default App
