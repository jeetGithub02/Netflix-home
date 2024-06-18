import "./Features.css";
import { tv1,tv2, mobile, boy } from "../../assets";
function Features(){
    return(
        <section className="features text-white text-center text-lg-start">
            <div className="separatorLine"></div>
            <div className="container">
              <div className="row align-items-center py-5">
                    <div className="col-lg">
                        <h1 className="main-heading">Enjoy on your TV</h1>
                        <div className="sub-Heading">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
                    </div>
                    <div className="col-lg">
                        <img src={tv1} alt="TV" />
                    </div>
              </div>
            </div>
            <div className="separatorLine"></div>
            <div className="container">
                <div className="row align-items-center py-5">
                    
                    <div className="col-lg order-lg-1">
                        <h1 className="main-heading">Download your shows to watch offline</h1>
                        <div className="sub-Heading">Save your favourites easily and always have something to watch.</div>
                    </div>
                    <div className="col-lg order-lg-0">
                        <img src={mobile} alt="" />
                    </div>
                    
                </div>
            </div>
            <div className="separatorLine"></div>
            <div className="container">
                <div className="row align-items-center py-5">
                    <div className="col-lg ">
                        <h1 className="main-heading">Watch everywhere</h1>
                        <div className="sub-Heading">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
                    </div>
                    <div className="col-lg">
                        <img src={tv2}  alt="" />
                    </div>
                    
                </div>
            </div>
            <div className="separatorLine"></div>
            <div className="container">
                <div className="row align-items-center py-5">
                    
                    <div className="col-lg order-lg-1">
                        <h1 className="main-heading">Create profiles for kids</h1>
                        <div className="sub-Heading">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</div>
                    </div>
                    <div className="col-lg order-lg-0">
                        <img src={boy}  alt="" />
                    </div>
                    
                </div>
            </div>
            <div className="separatorLine"></div>
            
        </section>
    )
}
export default Features;