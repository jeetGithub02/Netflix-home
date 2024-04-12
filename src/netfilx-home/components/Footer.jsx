import './Footer.css';
function Footer(){
        return(
            <footer className="bg-black py-5">
                
                <div className="container">
                    <div className="text-white mb-3">Questions? Call 000-800-919-1694</div>
                    <div className="footerBox">
                            <div>
                                <a href="#">FAQ</a>
                                <a href="#">Investor Relations </a>
                                <a href="#">Privacy</a>
                               <a href="#">Speed Test</a>
                            </div>
                            <div>
                                <a href="#">Help Center</a>
                                <a href="#">Jobs </a>
                                <a href="#">Cookie Preferences</a>
                               <a href="#">Legal Notices</a>
                            </div>
                            <div>
                                <a href="#">Account</a>
                                <a href="#">Way to Watch</a>
                                <a href="#">Corporate Information</a>
                               <a href="#">only on Netflix</a>
                            </div>
                            <div>
                                <a href="#">FMedia Centre</a>
                                <a href="#">Terms of Use </a>
                                <a href="#">Contact Us</a>
                               
                            </div>
                    </div>
                    <span className="bi bi-translate text-white p-1 px-3 rounded  border d-inline-block  my-3" >
                            <select className="bg-transparent text-white border-0 ">
                                <option value="English">English</option>
                                <option value="Hindi">हिन्दी</option>
                                </select>
                        </span>
                        <div className="text-white">Netflix India : Jitendra Gupta</div>
                    </div>
            </footer>
        )
}
export default Footer;