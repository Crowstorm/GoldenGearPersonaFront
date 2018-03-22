import React from 'react'

class EnemyInterface extends React.Component {

    render() {
        return (
            <div style={{ float: 'right', border: '1px solid red', width: 200, height: 800 }}>
                <div className="container d-flex flex-column justify-content-center">
                    <div style={{marginTop: 15}}> Orc Warrior </div>
                    <img src="https://pre00.deviantart.net/8ae3/th/pre/i/2016/347/d/3/avatar_orc_guerrier___warrior_homme___man_jdr_by_sarnia7-darhfx8.jpg" style={{height: 100, marginTop: 15}} />
                    <div style={{marginTop: 15}}> Hp: 15, Mp: 0 </div>
                </div>
            </div>
        )
    }
}

export default EnemyInterface;