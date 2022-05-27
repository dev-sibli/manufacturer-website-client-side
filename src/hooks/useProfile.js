import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/myProfile?email=${email}`)
                .then(res => res.json()
                )
                .then(data => {
                    setProfiles(data);
                });
        }
    }, [user, email])
    return [profiles];
}

export default useProfile;