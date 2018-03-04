import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">
                        GGP
                     </a>
                    <ul className="right">
                        <li>                        
                            <a href="http://localhost:8000/auth/google">Sign in with Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;