import { useState } from "react";
import { FaEye, FaEyeSlash, FaUserPen } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";


// TODO: save user info in the DB

interface FormInput {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    confirmPassword: string;
}


type UserInfo = Omit<FormInput, "confirmPassword">

interface CustomLocationState {
    from?: { pathname: string };
}


const SignUp = () => {
    // get auth providers data
    const { user, createUser, updateUserName, loading } = useAuth();

    // get the current path of the user
    const navigate = useNavigate();
    const location = useLocation() as unknown as Location & { state: CustomLocationState };
    const from = location.state?.from?.pathname ?? "/";


    // state for show and hide password
    const [showPassword, setShowPassword] = useState(false);

    // imports for react hoo form
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInput>();


    // sign up function
    const onSubmit: SubmitHandler<FormInput> = async (data) => {
        // check if user is already logged in
        if (user) {
            await Swal.fire({
                icon: "error",
                title: "Already Logged in",
            })
                .then(result => {
                    if (result.isConfirmed) {
                        navigate(from, { replace: true })
                    }
                })
            reset();
        }

        // get the information from the user
        const name = data.name;
        const email = data.email;
        const phoneNumber = data.phoneNumber;
        const password = data.password;

        const userInfo: UserInfo = { name, email, phoneNumber, password }


        // Create new user
        await createUser?.(email, password)
            .then(result => {
                if (result.user) {
                    // update user name after account creation
                    updateUserName?.(name)
                        .then(() => {
                            void Swal.fire({
                                icon: "success",
                                title: "Account Created",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            setTimeout(() => {
                                navigate(from, { replace: true })
                            }, 1600)
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch(error => {
                console.log(error);
            })
        reset();
    };


    return (
        <div className="py-12 min-h-screen">
            <div className="mx-auto max-w-lg p-5 rounded-xl bg-[#ecede7]">

                {/* headings */}
                <div className="space-y-1 text-center">
                    <h1 className="border-b border-l border-lawHub-secondary  text-sm inline-block px-1 text-lawHub-heading">USER DETAILS <FaUserPen className="inline pb-1" /></h1>

                    <h2 className="text-2xl font-eb-garamond font-semibold">Create Your Account</h2>
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
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                    {/* name */}
                    <input
                        className="w-full rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-lawHub-primary"
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Enter Your Name"
                    />
                    {errors.name && <span className="text-red-500">Fill up name field</span>}



                    {/* email */}
                    <input
                        className="w-full rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-lawHub-primary"
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Enter Your email address"
                    />
                    {errors.email && <span className="text-red-500">Fill up email field</span>}



                    {/* phone */}
                    <input
                        className="w-full rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-lawHub-primary"
                        {...register("phoneNumber", { required: true })}
                        type="text"
                        placeholder="Enter Your phone number"
                    />
                    {errors.phoneNumber && <span className="text-red-500">Provide your phone number</span>}


                    {/* password */}
                    <div className="relative">
                        <input
                            className="w-full rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-lawHub-primary"
                            {...register("password", {
                                required: "Password is Required", minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters"
                                }, maxLength: {
                                    value: 30,
                                    message: "Password must be within 30 characters"
                                }
                            })}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Your password"
                        />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}


                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                    </div>


                    {/* confirm password */}
                    <input
                        className="w-full rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-lawHub-primary"
                        {...register("confirmPassword", {
                            required: "Please Confirm your password", minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }, maxLength: {
                                value: 30,
                                message: "Password must be within 30 characters"
                            }
                        })}
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Your password"
                    />
                    {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}


                    {/* Register button */}
                    <button type="submit" className="bg-lawHub-primary text-white py-2 rounded-full font-medium hover:bg-lawHub-heading transition-all ease-in-out duration-500">
                        {loading ? <AiOutlineLoading3Quarters className="text-white text-lg  animate-spin mx-auto" /> : "Register"}
                    </button>
                </form>


                        {/* Link to login page */}
                <div className="text-center text-sm mt-3">
                    Already have an account?
                    <Link to="/signup" className="text-blue-600 hover:underline pl-1">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;