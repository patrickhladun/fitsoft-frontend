import React from 'react';

class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddEvent - this.handleAddEvent.bind;
    }
    handleAddEvent() {
        console.log('Add event Clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleAddEvent}>Add Event</button>
            </div>
        )    
    }
}

export default AddEvent;