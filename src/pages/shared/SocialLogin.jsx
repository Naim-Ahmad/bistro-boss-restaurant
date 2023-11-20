import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="flex gap-6">
      <div className="rounded-full cursor-pointer border-gray-500 border-2 w-10 h-10 flex justify-center items-center">
        <FaFacebookF size={20} />
      </div>
      <div className="rounded-full cursor-pointer border-gray-500 border-2 w-10 h-10 flex justify-center items-center">
        <FaGoogle size={20} />
      </div>
      <div className="rounded-full cursor-pointer border-gray-500 border-2 w-10 h-10 flex justify-center items-center">
        <FaGithub size={20} />
      </div>
      
    </div>
  );
}
