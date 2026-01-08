function Dashboard({ setIsLoggedIn }) {
  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>You are logged in 🎉</p>

      <button onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
