// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { MainLayout } from "./components/layout/MainLayout";
import { ROUTES } from "./routes";

import { HomePage } from "./pages/HomePage";
import { EducationPage } from "./pages/EducationPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PageTransition } from "./components/layout/PageTransitionWrapper";

// --------------------------------------
// Internal component with useLocation()
// --------------------------------------
function AnimatedAppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Layout routes */}
        <Route element={<MainLayout />}>
          <Route
            index
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path={ROUTES.EDUCATION}
            element={
              <PageTransition>
                <EducationPage />
              </PageTransition>
            }
          />
        </Route>

        {/* Auth routes */}
        <Route
          path={ROUTES.AUTH.LOGIN}
          element={
            <PageTransition>
              <LoginPage />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.AUTH.REGISTER}
          element={
            <PageTransition>
              <RegisterPage />
            </PageTransition>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}


export default function App() {
  return (
    <Router>
      <AnimatedAppRoutes />
    </Router>
  );
}
