import { useDispatch } from 'react-redux';
import '../styles/LoginPage.css';
import { login } from '../redux/slices/loginSlice';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = (isMerchant) => {
    dispatch(login(isMerchant));
    navigate('/products');
  };

  return (
    <div className="login-container">
      <h1 className="font-bold text-[var(--secondary)] text-4xl">Helathy</h1>

      <div className="text-center">
        <h2 className="text-[var(--neutral)] font-semibold text-xl mb-4">Login</h2>

        <div>
          <button className="login-btn" onClick={() => loginUser(true)}>Merchant</button>
          <button className="login-btn" onClick={() => loginUser(false)}>Customer</button>
        </div>
      </div>

      <p className="text-[var(--neutral)]">by Newbiers</p>
    </div>
  );
}

export default LoginPage;