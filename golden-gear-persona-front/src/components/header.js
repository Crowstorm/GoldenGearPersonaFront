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
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">
                        GGP
                     </a>
                    <ul className="right">

                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;