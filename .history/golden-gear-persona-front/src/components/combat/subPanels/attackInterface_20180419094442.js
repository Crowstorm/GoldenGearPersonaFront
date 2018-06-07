import React from 'react';
import _ from 'lodash';
import * as skillList from '../skillMechanics'

class AttackInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            consumables: false,
            skills: false,
            magic: false
        };
    }

    handleAllyAttack = (attackType) => {
        this.setState({ consumables: false });
        this.setState({ magic: false });
        this.setState({ skills: false });
        let i = this.props.mechanics.attackingAllyIndex;
        if(attackType == 'basic'){
            let dmg = this.props.mainChar[i].stats.strength;
            console.log('dmg', dmg)
            this.props.calculateDmg(dmg);
            this.props.attackReady(true);
        }
    }

    handleOpenConsumables = () => {
        this.setState({ skills: false });
        this.setState({ magic: false });
        (this.state.consumables) ? this.setState({ consumables: false }) : this.setState({ consumables: true })
    }
    handleOpenSkills = () => {
        this.setState({ consumables: false });
        this.setState({ magic: false });
        (this.state.skills) ? this.setState({ skills: false }) : this.setState({ skills: true })
    }
    handleOpenMagic = () => {
        this.setState({ consumables: false });
        this.setState({ skills: false });
        (this.state.magic) ? this.setState({ magic: false }) : this.setState({ magic: true })
    }

    handleRenderConsumables = () => {
        let i = this.props.mechanics.attackingAllyIndex;
        let browse = this.props.mainChar[i].consumables
        let mapper = _.map(browse, (item) => {
            return (
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center flex-wrap align-items-center" ><img src={item.icon} style={{ height: 50 }} /> {item.description} </div>
                </div>
            )
        })
        return (
            <div>
                <div> x </div>
                {mapper}
            </div>
        )
    }

    handleRenderSkills = () => {
        let i = this.props.mechanics.attackingAllyIndex;
        let browse = this.props.mainChar[i].skills
        let mapper = _.map(browse, (skill) => {
            return (
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center flex-wrap align-items-center" >
                        <img src={skill.icon} style={{ height: 50 }} /> 
                        <p> {skill.description}</p>
                        <p> Cost: {skill.cost} {skill.costType} </p>
                        <button onClick={() => skillList.useBackstab(this.props)}> Use </button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div> x </div>
                {mapper}
            </div>
        )
    }

    handleRenderMagic = () =>{
        let i = this.props.mechanics.attackingAllyIndex;
        let browse = this.props.mainChar[i].magic;
        if(browse.length == 0){
            return <div> Looks like {this.props.mainChar[i].name} haven't learnt any spells yet </div>
        }
    }

    handleRenderMenus = () => {
        if (this.state.consumables) {
            return this.handleRenderConsumables();
        } else if (this.state.skills) {
            return this.handleRenderSkills();
        } else if (this.state.magic){
            return this.handleRenderMagic();
        } else {
            return null
        }
    }

    render() {
        const buttonStyle = {
            width: '180px',
            height: '50px',
            border: "1px solid red",
            webkitAppearance: 'button',
        }
        let i = this.props.mechanics.attackingAllyIndex;


        let renderAdditionalMenus = this.handleRenderMenus();
        console.log('propsy ataku', this.props)
        return (
            <div>
                <div className='d-flex flex-column align-items-center justify-content-center' style={{ position: 'absolute', border: '1px solid red', width: 360, height: 450 }}>
                    {renderAdditionalMenus}
                </div>

                <div className=" d-flex align-items-center justify-content-center" style={{ marginTop: 450, position: 'relative' }}>
                    <div className="d-flex flex-column" style={{ marginBottom: 0 }}>
                        <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={() => this.handleAllyAttack('basic')}> Basic Attack </div>
                        <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={() => this.handleOpenSkills()}> Skills </div>
                    </div>
                    <img src={this.props.mainChar[i].portrait} style={{ height: 50, zIndex: 5, position: 'absolute', borderRadius: 100, border: '1px solid black' }} />
                    <div className="d-flex flex-column" style={{ marginBottom: 0 }}>
                        <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={() => this.handleOpenMagic()}> Magic </div>
                        <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={() => this.handleOpenConsumables()}> Consumables </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AttackInterface;