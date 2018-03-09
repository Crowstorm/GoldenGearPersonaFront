import React from 'react';
import CharacterCreationForm from './characterCreationForm';
import CharacterCreationReview from './CharacterCreationReview'



class CharacterCreation extends React.Component {
    state = {showReview: false}

    renderContent(){
        if(this.state.showReview){
            return <CharacterCreationForm />
        } else {
            return <CharacterCreationReview />
        }
    }
    
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default CharacterCreation;