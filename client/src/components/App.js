import React, {Component} from 'react';
import SearchBar from './SearchBar';
import PostForm from './PostForm';
import CardGrid from './CardGrid';

class App extends Component {
    state = {
        searchTerm: '',
        searchResults: [],
        //state vars for server response
        serverMessage: 'Default',
        content: '',
        //state vars for requesting people
        dataList: [],
        //state vars for adding people
        nameField: '',
        quoteField: '',
        descriptionField: '',
        imageField: '',
    };

    //after the app first renders
    componentDidMount() {
      //this.requestUpdate('get', '/getPeople');
    }

    //function to parse our response
    parseJSON = (xhr) => {
        console.dir(xhr.response)
        //parse response (obj will be empty in a 204 updated)
        const obj = JSON.parse(xhr.response);
        console.dir(obj);
        
        //if message in response, add to screen
        if(obj.message) {
          this.setState({
            serverMessage: `Message: ${obj.message}`
          });
        }
        
        //if people in response, add to screen
        if (obj.people) {
            let peopleData = obj.people.persons;

            // if (this.state.searchTerm) {
            //   peopleData = peopleData.filter(person => {
            //     return Object.keys(person).some(key => key.toString().contains(this.state.searchTerm))
            //   })
            //   //console.log(peopleData)
            // }

            this.setState({
                dataList: peopleData
            });
        }
    }

    //function to handle our response
    handleResponse = (xhr, parseResponse) => {
        //check the status code
        switch(xhr.status) {
          case 200: //success
            this.setState({content: 'Success'});
            break;
          case 201: //created
            this.setState({content: 'Create'});
            break;
          case 204: //updated (no response back from server)
            this.setState({content: 'Updated (No Content)'});
            break;
          case 400: //bad request
            this.setState({content: 'Bad Request'});
            break;
          case 404: 
            this.setState({content: 'Resource Not Found'});
            break;
          case 500:
            this.setState({content: 'Internal Server Error'});
            break;
          default: //any other status code
            this.setState({content: 'Error code not implemented by client'});
            break;
        }

        //parse response 
        if (parseResponse || xhr.status === 400) 
            this.parseJSON(xhr);
        else 
            console.log('Received');
    }

    //function to send our post request
    requestUpdate = (method, url) => {
        //create a new Ajax request (remember this is asynchronous)
        const xhr = new XMLHttpRequest();
        //set the method (POST) and url (action field from form)
        xhr.open(method, url);
  
        xhr.setRequestHeader ('Accept', 'application/json');
        
        //set our function to handle the response
        if (method === 'post') {
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.onload = () => this.handleResponse(xhr, false);
        }
        else if (method === 'get')
          xhr.onload = () => this.handleResponse(xhr, true);
        else 
          xhr.onload = () => this.handleResponse(xhr, false);
        
        //send our request with the data
        if (method === 'post') {
          const formData = `name=${this.state.nameField}&quote=${this.state.quoteField}&description=${this.state.descriptionField}&imageUrl=${this.state.imageField}`;
          xhr.send(formData);
        } else {
          xhr.send();
        }
      
        //prevent the browser's default action (to send the form on its own)
        //return false to prevent the browser from trying to change page
        return false;
    }

    handleSearchBarChange = (searchTerm) => {
      this.setState({
        searchTerm: searchTerm
      });
      this.requestUpdate('get', '/getPeople');
      console.log('hit')
    }

    handlePostFormSubmit = (name, quote, description, image) => {
      this.setState({
        nameField: name,
        quoteField: quote,
        descriptionField: description,
        imageField: image
      });

      this.requestUpdate('post', '/addPerson');
    }

    render() {
        return (
            <div className="ui container">
                <div>{this.state.serverMessage}</div>
                <div>{this.state.content}</div>
                <div>{this.state.people}</div>
                <div className="ui huge center aligned header">Project One</div>
                <div className="ui divider"></div>
                <SearchBar onSearchChange={this.handleSearchBarChange}/>
                <PostForm onFormSubmit={this.handlePostFormSubmit}/>
                <CardGrid dataList={this.state.dataList}/>
            </div>
        );
    }
}

export default App;
