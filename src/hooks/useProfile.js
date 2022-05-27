import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const email = user?.email;
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/myProfile?email=${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setProfiles(data);
                });
        }
    }, [user, email, navigate])
    return [profiles];
}

export default useProfile;