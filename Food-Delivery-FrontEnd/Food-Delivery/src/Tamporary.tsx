import { useState, useEffect } from 'react';
import axiosInstance, { ApiResponse } from 'src/config/axios';

function Tamporary() {
    const [profile, setProfile] = useState(null);
    const [loginError, setLoginError] = useState(null);

    useEffect(() => {
        const autoLogin = async () => {
            try {
                const loginResponse = await axiosInstance.post(
                    '/user/login',
                    {
                        userEmail: '2',
                        userPassword: '2',
                    },
                    { withCredentials: true },
                ); // Ensure cookies are included in requests

                if (loginResponse.status === 200) {
                    fetchProfile();
                }
            } catch (error) {
                console.error('Login failed', error.response ? error.response.data : error.message);
                setLoginError('Login failed');
            }
        };

        const fetchProfile = async () => {
            try {
                const profileResponse = await axiosInstance.get('/restaurant/all', {
                    withCredentials: true,
                });
                setProfile(profileResponse.data);
            } catch (error) {
                console.error(
                    'Error fetching profile',
                    error.response ? error.response.data : error.message,
                );
                setLoginError('Failed to fetch profile');
            }
        };

        autoLogin();
    }, []);

    return (
        <div>
            {loginError && <p>{loginError}</p>}
            {profile ? (
                <div>
                    <h1>Welcome, {profile.userName}</h1>
                    <p>Email: {profile.userEmail}</p>
                    {/* Add more profile details as needed */}
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
}

export default Tamporary;
