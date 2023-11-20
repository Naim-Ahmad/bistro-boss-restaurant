import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginImage from "../../assets/others/authentication2.png";
import SocialLogin from "../shared/SocialLogin";

export default function Login() {
    const {handleSubmit, register} = useForm()

    const loginHandler = (data)=>{
        console.log(data)
    }
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
                    className="input input-bordered"
                    required
                    {...register('email')}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                    {...register('password', {required: true})}
                  />
                 
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-warning text-white font-bold">Login</button>
                </div>
              </form>
              <div className="flex justify-center flex-col items-center space-y-3">
                <p className="text-orange-300 font-medium">New Here? <Link to="/register">Create a new Account</Link></p>
                <p>Or login with</p>
                <SocialLogin/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
