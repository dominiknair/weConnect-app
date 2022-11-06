import "./navbar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span id="logo">weConnect</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <AppsIcon/>
                <div id="search" className="search">
                    <SearchOutlinedIcon/>
                    <input id="search-input" type="text" placeholder="search"/>
                </div>
            </div>
            <div className="right">
                <Person2OutlinedIcon/>
                <MailOutlineSharpIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user">
                    <div id="user-name">
                        <img id="profile-picture" src="https://images.pexels.com/photos/13408561/pexels-photo-13408561.jpeg?cs=srgb&dl=pexels-andrea-rodr%C3%ADguez-m-13408561.jpg&fm=jpg" alt="profile" />
                        <span>Dominik Nair</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;