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
    <div className="flex flex-col justify-center items-center h-full">
      <div className="h-2/5 w-full flex items-center justify-center">
        <h1 className="font-bold text-[var(--secondary)] text-4xl">Helathy</h1>
      </div>
      <div className="h-1/4 text-center">
        <h2 className="text-[var(--neutral)] font-semibold text-xl mb-4">Login</h2>

        <div>
          <button className="login-btn" onClick={() => loginUser(true)}>Merchant</button>
          <button className="login-btn" onClick={() => loginUser(false)}>Customer</button>
        </div>
      </div>

      <div className='grow relative w-full'>
        <div className='absolute bottom-8 w-full flex'>
          <p className="text-[var(--neutral)] m-auto">by Newbiers</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;