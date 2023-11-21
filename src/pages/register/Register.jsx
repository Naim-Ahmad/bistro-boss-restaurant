import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import loginImage from "../../assets/others/authentication2.png";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../shared/SocialLogin";

export default function Register() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const {registerUser, updateUserInfo} = useAuth()

  const handlerRegister = ({email, password, name}) => {
    // console.log(data)
    registerUser(email, password)
    .then(()=> {
      updateUserInfo(name)
      .then(()=>{
        toast('Account Created Successfully!')
        reset()
      })
      .catch(err=> {
        console.log(err)
        toast.error(err.code)
      })
    })
    .catch(err=> {
      console.log(err)
      toast.error(err.code)
    })
  };
  return (
    <div>
      <div className="hero min-h-screen bg-login">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center flex-1 lg:text-left">
            <figure>
              <img src={loginImage} alt="" />
            </figure>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-center">Register</h1>
            <div className="card w-full">
              <form onSubmit={handleSubmit(handlerRegister)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className={`input input-bordered ${
                      errors.name && "input-error"
                    }`}
                    name="name"
                    {...register("name", { required: true, minLength: 3 })}
                  />
                  {errors.name && errors.name?.type === "minLength" && (
                    <p className="text-error mt-2">Name minimum 3 character</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`input input-bordered ${errors.email && 'input-error'}`}
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Invalid Email. Please give Valid Email",
                      },
                    })}
                  />
                  
                  {errors.email && errors.email.type === "pattern" && <p className="text-error mt-2">{errors.email.message}</p>}
                  
                  {errors.email && errors.email.type === "required" && <p className="text-error mt-2">Email is Required</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className={`input input-bordered ${errors.password && 'input-error'}`}
                    required
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: {
                        value: /(?=.*\d.*\d.*\d).+$/,
                        message: "Minimum 3 Number",
                      },
                    })}
                  />
                  
                   {errors?.password?.type === "pattern" && (
                    <p className="text-error mt-2">
                      {errors?.password?.message}
                    </p>
                  )}
                  {errors?.password?.type === "required" && (
                    <p className="text-error mt-2">
                      Password Field is required
                    </p>
                  )}
                  {errors?.password?.type === "minLength" && (
                    <p className="text-error mt-2">Minimum six character</p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-warning text-white font-bold">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center flex-col items-center space-y-3">
              <p className="text-orange-300 font-medium">
                Already registered? <Link to="/login">Go to log in</Link>
              </p>
              <p>Or sign up with</p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
