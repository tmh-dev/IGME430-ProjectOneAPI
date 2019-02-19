import React, {Component} from 'react';
import Card from './Card';

class CardGrid extends Component {
    state = {
        name: "example",
        summary: "this is an example of a description for debugging purposes",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg",
        people: []
    };

    generateGrid = () => {
        let grid = [];

        for (let i = 0; i < this.props.numPeople; i++) {
            grid.push(<Card 
                key={i}
                name={this.props.peopleNames[i]}
                summary={this.props.peopleDescriptions[i]}
                imageUrl={this.props.peopleImages[i]}
            />);
        }
        return grid;
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui grid">
                    {/* <Card name={this.state.name} summary={this.state.summary} imageUrl={this.state.imageUrl}/> */}
                    {this.generateGrid()}
                </div>
            </div>
        );
    }
}

export default CardGrid;