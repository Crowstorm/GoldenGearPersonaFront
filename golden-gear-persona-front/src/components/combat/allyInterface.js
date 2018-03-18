import React from 'react'


class AllyInterface extends React.Component {
    componentDidMount() {
       this.props.fetchCharacter();
    }

    render() {
        console.log(this.props)
        return (
            <div style={{ float: 'left', border: "1px solid green", width: 200, height: 800 }}>
                left
             </div>
        )
    }
}


export default AllyInterface;