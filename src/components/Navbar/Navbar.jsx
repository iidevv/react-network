import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <aside className="bg-white w-full max-w-xs self-start p-4 rounded-xl shadow-lg">
            <nav>
                <ul>
                    <li><NavLink to="/profile/" activeClassName="text-blue-500">Profile</NavLink></li>
                    <li><NavLink to="/users" activeClassName="text-blue-500">Users</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName="text-blue-500">Messages</NavLink></li>
                    <li><NavLink to="/news" activeClassName="text-blue-500">News</NavLink></li>
                    <li><NavLink to="/music" activeClassName="text-blue-500">Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName="text-blue-500">Settings</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar;