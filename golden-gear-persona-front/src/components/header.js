import React from 'react';

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null: {
                return;
            }
            case false: {
                return (<li><a href="/auth/google">Sign in with Google</a></li>)
            }
            default: {
                return (<li><a href="/api/logout"><p>{this.props.auth.name}</p> Logout</a></li>);
            }
        }
    }

    render() {
        return (
            <nav>
                <div className="navbar">
                    <a href="/" className="left navbar-brand">
                        GGP
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