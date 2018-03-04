import React from 'react';
import Header from '../components/header';

import {connect} from 'react-redux';

class HeaderContainer extends React.Component{
    render(){
        return(
            <Header {...this.props}/>
        )
    }
}

function mapStateToProps(store){
    return{
        auth: store.auth
    }
}

export default connect(mapStateToProps)(HeaderContainer);