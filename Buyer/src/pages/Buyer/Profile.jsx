import React from 'react';
import { useEffect, useState } from 'react';

const UserProfile = () => {
    const [profileData, setProfileData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        fetch('http://localhost:3000/profile/', {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setProfileData(data.user);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []
    );

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 py-5">
            <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-4">
                <h1 className="text-4xl font-semibold text-gray-700 text-center">User Profile</h1>
                <div className="flex gap-2 items-center justify-between">
                    <span className="mr-2 text-gray-700 font-semibold">Full Name</span>
                    <label className="input input-bordered flex flex row items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder={profileData.fullname} readOnly/>
                    </label>
                </div>
                <div className="flex gap-2 items-center justify-between">
                    <span className="mr-2 text-gray-700 font-semibold">Email : </span>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder={profileData.email} readOnly/>
                    </label>
                </div>
                <div className="flex gap-2 items-center justify-between">
                    <span className="mr-2 text-gray-700 font-semibold">Password : </span>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" value={profileData.password} readOnly/>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;