import React, {Component} from 'react';

class Card extends Component {
    state = {
        description: ''
    };

    componentDidMount() {
        this.setState({
            description: this.props.summary
        });
        console.log(this.props.imageUrl)
    }

    render() {
        return (
            <div className="four wide column">
                <div className="ui card">
                    <div className="image">
                        <img src={this.props.imageUrl} alt="test"/>
                    </div>
                    <div className="content">
                        <a className="header">{this.props.name}</a>
                        <div className="meta">
                            <span className="date">test value</span>
                        </div>
                        <div className="description">
                            {this.state.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;