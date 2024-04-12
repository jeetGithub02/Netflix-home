
import "./Main.css";
import Register from "./Register";

function Main(){
    return(
        <header className="text-white text-center">
            <div className="container">
                <div className="main-heading">Unlimited movies, TV shows and more</div>
                <p className="sub-Heading mt-2">Watch anywhere. Cancel anytime.</p>

            </div>
            <Register />
        </header>
    )
}
export default Main;