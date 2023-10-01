import { Link } from "react-router-dom";
import useAuth from "../../../🟢AuthProvider/AuthContext";
import toast from "react-hot-toast";


const Register = () => {
      
      const {createUser} = useAuth()



      const handleForm = e =>{
            
            e.preventDefault()

            const email = e.target.email.value;
            const password = e.target.password.value;

            createUser(email,password)
            .then(userCredential =>{    
                  console.log(userCredential.user)
                  toast.success('Done')
            })
            .cath(error=>{
                  console.error(error.message)
            })
      }

      return (
            
            <div>
            <h1 className="text-4xl font-bold text-center py-3">Register</h1>
            <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse w-[100%]">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <form onSubmit={handleForm}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        name='email'
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                      />
                      <label className=" py-3 flex gap-2">
                        Already have an account?
                        <Link to='/login' className="text-blue-600 underline">Login</Link>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
            </div>
      );
};

export default Register;