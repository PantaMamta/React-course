import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // If user is logged in → show dashboard
  if (isLoggedIn) {
    return <Dashboard setIsLoggedIn={setIsLoggedIn} />;
  }

  // Otherwise show Login or Register
  return showRegister ? (
    <Register setShowRegister={setShowRegister} />
  ) : (
    <Login
      setIsLoggedIn={setIsLoggedIn}
      setShowRegister={setShowRegister}
    />
  );
}

export default App;
