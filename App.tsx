import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

interface LoggedInUser {
  email?: string;
  role?: "admin" | "user";
  [key: string]: any;
}

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null);

  function handleLoginSuccess(userData: LoggedInUser) {
    setLoggedInUser(userData);
  }

  function handleLogout() {
    setLoggedInUser(null);
  }

  if (!loggedInUser) {
    return (
      <div style={{ padding: 20 }}>
        <Login onSuccess={handleLoginSuccess} />
      </div>
    );
  }

  return <Dashboard user={loggedInUser} onLogout={handleLogout} />;
}
