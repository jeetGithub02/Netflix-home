
import "./Header.css"

function Header(){
    return(
        <div className="container d-flex justify-content-between align-items-center py-3">
            <h1 className="brand-title fw-bold text-danger ">NETFLIX</h1>
            <div>
                <div className="d-flex gap-sm-4 gap-1 bi bi-translate">
                    <select className="rounded-2 bg-transparent text-white">
                        <option value="english">English</option>
                        <option value="hindi">हिंदी</option>
                    </select>
                    <button className="btn btn-danger">Sign In</button>
                </div>
            </div>
        </div>
    )
}
export default Header;