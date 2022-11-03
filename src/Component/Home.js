import { Link, Outlet } from "react-router-dom";
import './Styles/Home.css';

const Home = () => {
    return(
         <>
             <nav className="homebg">
                <Link to='/' className="link">Home</Link>
                <Link to='users' className="link">Users</Link>

             </nav>

             <div className="parentDiv">
                   <h1 className="users-heading"> Welcome to the Users Search App</h1>
                   <p className="usersnav">Navigate to  <Link to='users' className="links">
                    
                    <span>  Users</span></Link> to view active users</p>

             </div>
             <Outlet/>
         </>
    )
}

export default Home;