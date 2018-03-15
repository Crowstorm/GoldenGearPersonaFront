import React from 'react';
import logo from './assets/mgp.png'

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null: {
                return;
            }
            case false: {
                return (<a href="/auth/google">Sign in with Google</a>)
            }
            default: {
                return (<a href="/api/logout">{this.props.auth.name} Logout</a>);
            }
        }
    }

    render() {
        return (
            <nav style={{minWidth: 1000 + 'px'}}>
                <div className="navbar">
                    <a href="/" className="left navbar-brand">
                        <img src={logo} />
                     </a>
                    <ul className="right">
                        <li> <a href='/character_creation'>CharC </a> </li>
                        <li> <a href='/game'>Game </a> </li>
                        <li> {this.renderContent()} </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;