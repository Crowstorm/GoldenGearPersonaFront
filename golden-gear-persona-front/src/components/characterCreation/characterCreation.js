import React from 'react';
import CharacterCreationForm from './characterCreationForm';


class CharacterCreation extends React.Component {
    renderCharacterCreationForm() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <div className="row">
                            <div className="col-md-4">
                                <label for="formGroupExampleInput">Example label</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Another label</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    render() {
        return (
            <div>
                <CharacterCreationForm />
            </div>
        )
    }
}

export default CharacterCreation;