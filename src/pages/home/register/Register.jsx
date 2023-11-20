import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/others/authentication2.png";
import SocialLogin from "../../shared/SocialLogin";

export default function Register() {
    const {handleSubmit, register} = useForm()

    const loginHandler = (data)=>{
        console.log(data)
    }
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
              <form onSubmit={handleSubmit(loginHandler)} className="card-body">

              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                    {...register('name')}
                  />
                </div>
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
                    {...register('password', {required: true, minLength: 6, maxLength: 20})}
                  />
                 
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-warning text-white font-bold">Register</button>
                </div>
              </form>
            </div>
            <div className="flex justify-center flex-col items-center space-y-3">
                <p className="text-orange-300 font-medium">Already registered? <Link to="/login">Go to log in</Link></p>
                <p>Or sign up with</p>
                <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
