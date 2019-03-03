import React, {Component} from 'react';
import Card from './Card';

class CardGrid extends Component {
    generateGrid = () => {
        let grid = [];
        let key = 0;
        for (let person of this.props.dataList) {
            grid.push(<Card key={key} name={person.name} quote={person.quote} description={person.description} imageUrl={person.imageUrl}/>);
            key++;
        }
        return grid;
    }

    render() {
        return (
            <div className="ui segment">   
                    <div className="ui grid">
                        {this.generateGrid()}
                    </div>            
                 
            </div>
        );
    }
}

export default CardGrid;