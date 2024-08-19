import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../../hook/provider/AuthProvider";


const SignIn = () => {
    const {signIn, googleSignIn }= useContext(AuthContext);
    console.log(googleSignIn);
    
    const navigate = useNavigate();

    //#React hook Form
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log("ssssss",data.user);
         //#signIn AUTH Firebase
        signIn(data.email, data.password)
        .then(result=>{
            console.log(result.user)
            swal("LOGIN SUCCESS !", "", "success");
            // Navigate  
            navigate('/' );
            
        })
        .catch(error=>{
            console.log(error);
            swal("Sorry!", "Your email and password Incorrect!", "error");
        })
    }
    //Google 
        const handleGoogleSignIn = () =>{
            console.log("hghdfghdkhgkdhfgkh");
            googleSignIn()
            .then (result =>{
                const googleLogIn = result.user
                console.log(googleLogIn);
                navigate('/' );
            })
            .catch(error =>{
                console.log(error);
            })
      }

    return (
        <div>
            <div className="hero min-h-screen pb-4">
                <div className=" flex-col items-center md:w-[480px]">
                    <div className="">
                        <h1 className="text-center font-extrabold text-2xl my-4">
                            Sign in to your account
                        </h1>
                    </div>
                    <div className="shadow-2xl bg-base-300">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* email input box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                />
                            </div>

                            {/* password input box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    type= "password"
                                    {...register("password", { required: true })}
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>

                            {/* login button  */}
                            <div className="form-control mt-6">
                                <button className="btn  bg-orange-400  hover:bg-orange-500 border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60">
                                    Sign in
                                </button>
                            </div>

                            {/* new here */}
                        </form>
                        <div className="pt-2 pb-3">
                            <p className="text-center ">
                                <small className="text-base">
                                    Are you new here? ||{" "}
                                    <Link to="/signup" className="text-blue-600">
                                        Sign Up
                                    </Link>
                                </small>
                            </p>

                            {/* or line */}
                            <div className="flex justify-between items-center text-center mt-3">
                                <div className="flex-1">
                                    <img
                                        src="https://i.ibb.co/GspjGPV/divider.png"
                                        alt=""
                                        className="h-5 w-32"
                                    />
                                </div>
                                <div className="flex-1">Or continue with</div>
                                <div className="flex-1">
                                    <img
                                        src="https://i.ibb.co/GspjGPV/divider.png"
                                        alt=""
                                        className="h-5 w-32"
                                    />
                                </div>
                            </div>

                            {/* social login  */}
                            <div className="text-center">
                                <div className="text-center mt-3">
                                    <button onClick={handleGoogleSignIn} className="px-4">
                                        <img
                                            className="w-10"
                                            src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;