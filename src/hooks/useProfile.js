import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        if (email) {
            fetch(`https://fierce-wildwood-20183.herokuapp.com/myProfile?email=${email}`)
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