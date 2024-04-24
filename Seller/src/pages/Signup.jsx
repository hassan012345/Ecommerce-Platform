import React, { useState } from 'react';

const SellerSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    businessName: '',
    businessDescription: '',
  });

  const { name, email, password, phone, businessName, businessDescription } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch('http://localhost:3000/seller/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-4xl font-extrabold leading-9 text-center text-white-900">Emart</h1>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
          Register as Seller
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white-900">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              autoComplete="name"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1  ring-white-300 placeholder:text-white-400 focus:ring-2 focus: focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1  ring-white-300 placeholder:text-white-400 focus:ring-2 focus: focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              autoComplete="new-password"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1  ring-white-300 placeholder:text-white-400 focus:ring-2 focus: focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white-900">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={handleChange}
              autoComplete="tel"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1  ring-white-300 placeholder:text-white-400 focus:ring-2 focus: focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium leading-6 text-white-900">
              Business Name
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              value={businessName}
              onChange={handleChange}
              autoComplete="organization"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1  ring-white-300 placeholder:text-white-400 focus:ring-2 focus: focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="businessDescription" className="block text-sm font-medium leading-6 text-white-900">
              Business Description
            </label>
            <textarea
              id="businessDescription"
              name="businessDescription"
              value={businessDescription}
              onChange={handleChange}
              rows="3"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1  ring-white-300 placeholder:text-white-400 focus:ring-2 focus: focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-violet-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-white-500">
          Already have an account?{' '}
          <a href="/seller/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign in now
          </a>
        </p>
      </div>
    </div>
  );
};

export default SellerSignUp;
