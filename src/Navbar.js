import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h3>Logo</h3>
            <div className="links">
                <Link to="/">Home</Link>
                <Link id="new-blog" to="/create">New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;