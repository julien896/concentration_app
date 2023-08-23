
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { StartPage } from "../app/pages/start-page";
import { GamePage } from "../app/pages/game-page";

const currentUser = localStorage.getItem('concentration_user');

function RequireUser({ children }: { children: JSX.Element }) {
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
            element={
              currentUser ? <Navigate to="/game" replace /> : <StartPage />
            } 
          />
          <Route 
            path="/game"
            element={
              <RequireUser>
                <GamePage />
              </RequireUser>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Router>
  );
};