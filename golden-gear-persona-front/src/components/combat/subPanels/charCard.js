import React from 'react';
import './charCard.css'

import { setCharCardState } from '../../../actions/modals'

class CharCard extends React.Component {

    handleCloseCharCard() {
        this.props.setCharCardState(false);
    }

    render() {
        console.log(this.props)
        return (
            <div className="charCard">
                <div className="charCardContainer">
                    <div className="portrait"></div>
                    <div className="eqContainer">
                        <div className="d-flex justify-content-around align-items-center" style={{height: 60, margin: 0}}>
                            <div className="equippedItem"></div>

                        </div>
                        <div className=" d-flex justify-content-around align-items-center" style={{height: 60, margin: 0}}>
                            <div className="equippedItem"></div>
                            <div className="equippedItem"></div>
                            <div className="equippedItem"></div>
                        </div>
                        <div className="d-flex justify-content-around align-items-center" style={{height: 60, margin: 0}}>
                            <div className="equippedItem"></div>

                        </div>

                    </div>
                    <div >
                        <div id="dane"></div>
                        <div id="statystyki"></div>
                    </div>
                    <div>
                        <div id="eq">
                            <div id="armor"></div>
                            <div id="weapon"></div>
                            <div ></div>
                            <div id="questitems"></div>
                            <div id="consumables"></div>
                        </div>
                    </div>
                    <div ></div>

                    <button onClick={() => this.handleCloseCharCard(false)}> close </button>
                </div>
            </div>
        )
    }
}

export default CharCard;