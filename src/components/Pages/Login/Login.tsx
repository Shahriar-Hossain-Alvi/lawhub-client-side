import { useState } from "react";
import { FaEye, FaEyeSlash, FaUserPen } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
    // get auth providers data
    const {user, loading} = useAuth();

    // state for show and hide password
    const [showPassword, setShowPassword] = useState(false);



    return (
        <div className="py-12 min-h-screen">
            <div className="mx-auto max-w-lg p-5 rounded-xl bg-[#ecede7]">

                {/* headings */}
                <div className="space-y-1 text-center">
                    <h1 className="border-b border-l border-lawHub-secondary  text-sm inline-block px-1 text-lawHub-heading">LOGIN DETAILS <FaUserPen className="inline pb-1" /></h1>

                    <h2 className="text-2xl font-eb-garamond font-semibold">Log in to your account</h2>
                </div>



                {/* google sign in */}
                <button className="flex justify-center items-center gap-1 bg-white py-2 rounded-full text-lawHub-heading font-medium shadow-lg mt-4 w-full hover:bg-lawHub-heading hover:text-white transition-all ease-in-out duration-500">
                    <FcGoogle className="text-xl" />
                    <p>Login with Google</p>
                </button>



                {/* Divider */}
                <div className="flex justify-between  my-5 items-center">
                    <div className="h-px w-full bg-gray-300"></div>

                    <span className="px-2 text-sm text-gray-500">Or</span>

                    <div className="h-px bg-gray-300 w-full"></div>
                </div>



                {/* Login form */}
                <form className="flex flex-col gap-4">
                    <input
                        className="w-full rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-lawHub-primary"
                        name="email"
                        type="email"
                        placeholder="Enter Your email address"
                        required
                    />


                    <div className="relative">
                        <input
                            className="w-full rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-lawHub-primary"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Your password"
                            required
                        />
                        <button onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                    </div>

                    <button type="submit" className="bg-lawHub-primary text-white py-2 rounded-full font-medium hover:bg-lawHub-heading transition-all ease-in-out duration-500">
                        Log In
                    </button>
                </form>

                <div className="text-center text-sm mt-3">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;