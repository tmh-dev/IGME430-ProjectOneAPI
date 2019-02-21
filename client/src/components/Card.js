import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="four wide column">
                <div className="ui card">

                    <div className="ui fluid instant move up masked reveal image">
                        <img className="visible content" src={this.props.imageUrl}/>
                        <div className="hidden content">
                            <h3 className="ui center aligned header" style={{margin: 'auto'}}>
                            {this.props.quote}
                            </h3>

                        </div>
                    </div>

                    <div className="content">
                        <a className="header">{this.props.name}</a>
                        <div className="meta">
                            <span className="date">test value</span>
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