import "./PageIndex.css";
import Header from "./Header";
import Main from "./Main"
function PageIndex(){
   return(
      <div className="banner">
         <div className="banner-shade">
            <Header />
            <Main   />
          
         </div>
      </div>
   )
}
export default PageIndex;