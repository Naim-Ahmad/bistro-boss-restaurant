import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "react-toastify";
import loginImage from "../../assets/others/authentication2.png";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../shared/SocialLogin";

export default function Login() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const [captcha, setCaptcha] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const { login } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginHandler = (data) => {
    const { email, password } = data;
    const loginPromise = login(email, password)
      .then(() => {
        reset();
        navigate(state ? state : "/", {
          replace: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    toast.promise(loginPromise, {
      pending: "Loading...",
      success: {
        render: ()=>{
          return "Login Successful!"
        }
      },
      error: {
        render: ({ data }) => {
          console.log(data)
          return data.code;
        },
      },
    });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = (e) => {
    const value = e.target.value;
    setCaptcha(value);

    if (value.length >= 6) {
      const isValid = validateCaptcha(value);
      return setIsCaptchaValid(isValid);
    }
  };
  
  return (
    <div>
      <div className="hero min-h-screen bg-login">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center flex-1 lg:text-left">
            <figure>
              <img src={loginImage} alt="" />
            </figure>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-center ">Login</h1>
            <div className="card w-full">
              <form onSubmit={handleSubmit(loginHandler)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`input input-bordered ${
                      errors.email && "input-error"
                    }`}
                    {...register("email", { required: true })}
                  />

                  {errors.email && (
                    <p className="text-error mt-2">Email Field is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className={`input input-bordered ${
                      errors.password && "input-error"
                    }`}
                    {...register("password", {
                      required: true,
                      minLength: 6,
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
                <div className="form-control">
                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    placeholder="Captcha Type Here"
                    className="input input-bordered"
                    value={captcha}
                    onChange={handleCaptcha}
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    disabled={!isCaptchaValid}
                    className="btn btn-warning text-white font-bold"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="flex justify-center flex-col items-center space-y-3">
                <p className="text-orange-300 font-medium">
                  New Here? <Link to="/register">Create a new Account</Link>
                </p>
                <p>Or login with</p>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
