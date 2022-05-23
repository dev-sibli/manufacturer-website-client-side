import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let loginError;

    if (user) {
        console.log(user);
    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        loginError = <p className='text-red-600'><small>{error?.message}</small></p>
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold">Login</h2>
                    <form>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt">Alt label</span>
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt">Alt label</span>
                            </label>
                        </div>
                        {loginError}
                        <input className='btn w-full max-w-xs text-white ' type="submit" value="Login" />
                        <p className='mt-2'><small>New to Jantrik? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()}
                            className="btn btn-outline w-full"
                        >SignIn with Google</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;