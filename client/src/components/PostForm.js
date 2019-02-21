import React, {Component} from 'react';
import PostField from './PostField';

class PostForm extends Component {
    state = {
        name: '',
        quote: '',
        description: '',
        image: ''
    };

    handleOnChange = (e) => {
        if (e.target.getAttribute("data-tag") === "name") 
            this.setState({name: e.target.value});
        else if (e.target.getAttribute("data-tag") === "quote") 
            this.setState({quote: e.target.value});
        else if (e.target.getAttribute("data-tag") === "description")
            this.setState({description: e.target.value});
        else if(e.target.getAttribute("data-tag") === "image")
            this.setState({image: e.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.props.onFormSubmit(
            this.state.name,
            this.state.quote,
            this.state.description,
            this.state.image
        );
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui small center aligned header">Submit New Person</div>
                <form onSubmit={this.handleFormSubmit.bind(this)} className="ui form">
                    <div className="fields">
                        <PostField dataTag="name" placeholder="Name" value={this.state.name} handleOnChange={this.handleOnChange}/>
                        <PostField dataTag="quote" placeholder="Quote" value={this.state.quote} handleOnChange={this.handleOnChange}/>
                        <PostField dataTag="description" placeholder="Description" value={this.state.description} handleOnChange={this.handleOnChange}/>
                        <PostField dataTag="image" placeholder="Image Link" value={this.state.image} handleOnChange={this.handleOnChange}/>
                        <button type="submit" className="ui primary button">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostForm;