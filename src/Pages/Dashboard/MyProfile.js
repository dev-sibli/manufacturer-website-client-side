import { data } from 'autoprefixer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProfile from '../../hooks/useProfile';
import ProfileCard from './ProfileCard';

const MyProfile = () => {
    const [profiles, setProfiles] = useProfile([])
    const [user] = useAuthState(auth);
    const email = user?.email;

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = 'ca02493004f94671a2cd7bd54c327b87';

    const onSubmit = async data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const user = {
                        email: email,
                        image: img,
                        address: data.address,
                        phone: parseInt(data.phone),
                        education: data.education
                    }
                    fetch(`http://localhost:5000/myProfile?email=${email}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                    reset()
                }
            })
    }

    return (
        <div className='flex gap-10'>
            <div className='w-3/6'>
                {
                    profiles.map(profile =>
                        <ProfileCard
                            key={profile._id}
                            profile={profile}
                        ></ProfileCard>)
                }
            </div>
            <div className='mx-auto w-3/6'>
                <h2 className="text-2xl">Update Profiles</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            value={email}
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {

                            })}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Address"
                            className="input input-bordered w-full max-w-xs"
                            {...register("address", {

                            })}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone", {

                            })}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Education"
                            className="input input-bordered w-full max-w-xs"
                            {...register("education", {

                            })}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                            })}
                        />

                    </div>

                    <input className='btn w-full max-w-xs text-white' type="submit" value="Update" />
                </form>

            </div>
        </div>
    );
};

export default MyProfile;