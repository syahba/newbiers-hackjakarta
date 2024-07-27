import '../styles/LoginPage.css';

function LoginPage() {
  return (
    <div className="login-container">
      <h1 className="font-bold text-[var(--secondary)] text-4xl">Helathy</h1>

      <div className="text-center">
        <h2 className="text-[var(--neutral)] font-semibold text-xl mb-4">Login</h2>

        <div>
          <button className="login-btn">Merchant</button>
          <button className="login-btn">Customer</button>
        </div>
      </div>

      <p className="text-[var(--neutral)]">by Newbiers</p>
    </div>
  );
}

export default LoginPage;