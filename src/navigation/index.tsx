
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { StartPage } from "../app/pages/start-page";
import { GamePage } from "../app/pages/game-page";

function RequireUser({ children }: { children: JSX.Element }) {
  const currentUser = localStorage.getItem('concentration_user')

  if (!currentUser) {
    return <Navigate to="/" replace />;
  } 
  return children;
}

export const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<StartPage />}
        />
        <Route
          path="/game"
          element={
            <RequireUser>
              <GamePage />
            </RequireUser>
          }
        />
      </Routes>
    </Router>
  );
};