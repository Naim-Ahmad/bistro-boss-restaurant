import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../config/axios.config";
import useAuth from "../../hooks/useAuth";

export default function SocialLogin() {
    const {loginWithGoogle} = useAuth()
    const {state} = useLocation()
    const navigate = useNavigate()

    const handleSocialLogin = (cb)=>{
        cb()
        .then((user)=>{
          const userInfo = {email: user.user.email, name: user.user.displayName, role: 'user'}
          // console.log(userInfo, user)
          axios.post('/user', userInfo)
          .then(()=> {
            toast('Login Successful!')
            state ? navigate(state) : navigate('/')
          })
          .catch(err2=>{
            console.log(err2)
          })
        })
        .catch(err=> {
            console.log(err)
            toast(err.code)
        })
    }
  return (
    <div className="flex gap-6">
      <div className="rounded-full cursor-pointer border-gray-500 border-2 w-10 h-10 flex justify-center items-center">
        <FaFacebookF size={20} />
      </div>
      <div onClick={()=> handleSocialLogin(loginWithGoogle)} className="rounded-full cursor-pointer border-gray-500 border-2 w-10 h-10 flex justify-center items-center">
        <FaGoogle size={20} />
      </div>
      <div className="rounded-full cursor-pointer border-gray-500 border-2 w-10 h-10 flex justify-center items-center">
        <FaGithub size={20} />
      </div>
      
    </div>
  );
}
