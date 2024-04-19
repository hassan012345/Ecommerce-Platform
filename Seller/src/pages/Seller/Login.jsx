import { useState } from 'react';
import { useUserStore } from '../../store/store';
function Login() {
  const setIsLogin = useUserStore(state => state.setIsLogin);
  const setUsername = useUserStore(state => state.setUsername);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    setErrorMessage(''); // Reset error message
    setSuccessMessage(''); // Reset success message
    e.preventDefault();

    try {
      setLoading(true); // Set loading state to true

      const response = await fetch('http://localhost:3000/seller/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        setSuccessMessage('Login successful');
        // set useUserStore isLogin to true
        const data = await response.json();
        localStorage.setItem('isLogin', true);
        localStorage.setItem('username', data.username);
        // redirect to dashboard
      } else {
        // Handle failed login
        setErrorMessage('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-4xl font-extrabold leading-9 text-center text-white-900">Emart</h1>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
          Sign in as Seller
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1  ring-white-300 placeholder:text-white-400 focus:ring-2 focus: focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1  ring-white-300 placeholder:text-white-400 focus:ring-2 focus: focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleLogin}
              type="submit"
              className="flex w-full justify-center rounded-md bg-violet-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'Sign in'
              )}
            </button>
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-white-500">
          Not a member?{' '}
          <a href="/seller/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;