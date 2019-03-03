import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="four wide column" style={{margin: '.5m'}}>
                <div className="ui card" style={{backgroundColor: '#E3E2DF'}}>

                    <div className="ui fluid instant move up masked reveal image">
                        <img className="visible content" src={this.props.imageUrl} alt="Person"/>
                        <div className="hidden content">
                            <h3 className="ui center aligned header" style={{margin: 'auto',color: '#ac3b61'}}>
                            {this.props.quote}
                            </h3>

                        </div>
                    </div>

                    <div className="content">
                        <label className="header" style={{color: '#ac3b61'}}>{this.props.name}</label>
                        <div className="meta">
                            <span className="date"></span>
                        </div>
                        <div className="description">
                            {this.props.description}
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Card;