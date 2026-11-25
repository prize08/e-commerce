import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="login-card">
        <div className="logo">
          E-COMMERCE WEBSITE<span>.</span>
        </div>

        <h1>Welcome Back!</h1>
        <p className="subtitle">login in to continue shopping with us</p>

        <form>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="separator">
          <span>OR</span>
        </div>

        <p className="signup">
          New to E-COMMERCE WEBSITE?
          <a href="#"> Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default App;
