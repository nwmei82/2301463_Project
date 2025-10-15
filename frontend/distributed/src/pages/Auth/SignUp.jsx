import React, {useState} from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelect from "../../components/Inputs/ProfilePhotoSelect";

const SignUp = () => {
  const [profilePic , setProfilePic] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl =""; 

    if(!fullName) {
      setError("Please enter your name")
      return;
    }

    if(!validateEmail(email)) {
      setError("Please enter a valid email address")
      return;
    }

    if(!password) {
      setError("Please enter your passsword")
      return;
    }

    setError("");
  }
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full md:mt-0 flex flex-col justify-center" >
        <h3 className="text-xl font-semibold text-black ">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering you detail below.</p>

        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelect image={profilePic} setImage={setProfilePic}/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({target})=> setFullName(target.value)}
              label="Full Name"
              placeholder="Fern"
              type="text"
            />

            <Input
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="nongfern@narak.com"
            type="text"
            />
            <div className="col-span-2">
            <Input
              value={password}
              onChange={({target}) => setPassword(target.value)}
              label="Password"
              placeholder="........"
              type="password"
              autocomplete ="new-password"
            />
            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
            
            <button type="submit" className="btn-primary">SIGN Up</button>
            
            <p className="text-slate-800 mt-3">Already have an account?{" "}
              <Link className="font-medium text-primary underline" to="/login">
              Login
              </Link>
            </p>
            </div>
            
          </div>

        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
