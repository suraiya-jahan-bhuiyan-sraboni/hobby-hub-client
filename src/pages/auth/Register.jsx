import React, { use, useState } from 'react'
import { Link, Navigate } from 'react-router'
import { AuthContext } from './../../context/AuthContextProvider';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase/firebase.config';


const Register = () => {
  const { createUser, setUser, user, loading, updateUser, loginWithGoogle } = use(AuthContext)
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center flex-col">Loading... <progress className="progress w-56"></progress></div>;
  }
  if (user) {
    return <Navigate to={"/"} replace />
  }
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(newPassword)) {
      setError('Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
    } else {
      setError('');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photourl = form.photourl.value;

    createUser(email, password)
      .then(result => {
        const userr = result.user;
        updateUser(name, photourl).then(() => {
          // Reload user to get updated data
           auth.currentUser.reload();
        }).then(() => {
          //console.log(userr)
          //toast.success("sucessfully Registered! ")
          setUser({ ...auth.currentUser });

          toast.success("sucessfully Registered! ")

        }).catch((error) => {
          toast.error(error)
        })
        
        // console.log(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode,errorMessage)
        // ..
        toast.error(errorMessage)
      });

  }
  const handleGoogleLogin = () => {
    loginWithGoogle().then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      //console.log(result);
      // ...
  
      toast.success("Logged In Sucessful")
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      toast.error(errorMessage);
    });
  }

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content sm:w-[400px] flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register Here</h1>
          </div>
          <form onSubmit={handleRegister} className=" bg-base-100 w-full  shadow-2xl">
            <div className="card-body w-full">
              <div className="space-y-8">
                <div className="space-y-4">
                  {/* name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm">Username</label>
                    <input required type="text" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                  </div>
                  {/* photo url */}
                  <div className="space-y-2">
                    <label htmlFor="photourl" className="block text-sm">Photo</label>
                    <input required type="text" name="photourl" id="photourl" placeholder="photourl" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                  </div>
                  {/* email */}

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input required type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                  </div>
                  {/* password */}
                  <div className='relative '>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="*****"
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    <span onClick={() => setShowPassword(!showPassword)} className=' absolute top-3 right-2' >
                      {showPassword ? <FaEye /> : <FaRegEyeSlash />}
                    </span>
                  </div>
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
              </div>
              <p className='text-center'>Already Have An Account? <br /> <Link to="/login" className='hover:underline text-blue-800'>Login Here</Link> </p>
              <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr className="w-full dark:text-gray-600" />
              </div>
              <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register