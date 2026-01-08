import { useState } from "react";

function Register({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Save user in localStorage
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    setShowRegister(false); // go to login
  };

  return (
    <div className="card">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{" "}
        <span onClick={() => setShowRegister(false)}>Login</span>
      </p>
    </div>
  );
}

export default Register;
