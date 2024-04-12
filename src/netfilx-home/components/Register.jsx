
import "./Register.css";

function Register(){
    return(
        <div className="text-white text-center">
           <p className="sub-Heading">Ready to watch? Enter your email to create or restart your membership</p> 
                <div className="input-group registerBox">
                <input type="email" className="form-control  bg-transparent  p-3 text-white me-3" placeholder='Email address'/>
                <button className="btn btn-danger fw-bold sub-Heading">Get Started <span className="bi bi-chevron-right"></span></button>
           </div>
        </div>
    )
}
export default Register;