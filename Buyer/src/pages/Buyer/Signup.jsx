import react from 'react';
import React, { useState } from 'react';
function Signup() {
    const [isloading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        console.log(
          username,
          email,
          password
        );
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password
            }),
        }).then((response) => response.json())
            .then(data => {
              console.log(data);
              window.location.href = '/login';
            });
        

        // await fetch('http://localhost:3000/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username,
        //         email,
        //         password
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-4xl font-extrabold leading-9 text-center text-white-900">Emart</h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            Register for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-white-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  value = {username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1  ring-white-300 placeholder:text-white-400 focus:ring-2 focus: focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                onClick = {handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-violet-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >   
                Register
              </button>
            </div>
          </form>   

          <p className="mt-10 text-center text-sm text-white-500">
            Already have an account?{' '}
            <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in now
            </a>
          </p>
        </div>
      </div>
    );
}

export default Signup;