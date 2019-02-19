import React, {Component} from 'react';
import SearchBar from './SearchBar';
import CardGrid from './CardGrid';
import Person from '../classes.js';

class App extends Component {
    state = {
        searchTerm: '',
        searchResults: [],
        people: [],
        descriptions: [],
        imageLinks: [],
        serverMessage: 'default',
        content: '',
        peopleNames: [],
        peopleDescriptions: [],
        peopleImages: []
    };

    //add API calls here and update state
    componentDidMount() {
        
    }

    //function to parse our response
    parseJSON = (xhr) => {
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
            let peopleList = [];
            peopleData.forEach(element => {
                peopleList.push(new Person(element))
            });

            let names = [];
            let descriptions = [];
            let images = [];
            for (let i = 0; i < peopleData.length; i++) {
                names.push(peopleData[i].name);
                descriptions.push(peopleData[i].description);
                images.push(peopleData[i].imageUrl)
            }

            this.setState({
                numPeople: peopleData.length,
                peopleNames: names,
                peopleDescriptions: descriptions,
                peopleImages: images
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
        if (method === 'get')
          xhr.onload = () => this.handleResponse(xhr, true);
        else 
          xhr.onload = () => this.handleResponse(xhr, false);
        
        //send our request with the data
        xhr.send();
      
        //prevent the browser's default action (to send the form on its own)
        //return false to prevent the browser from trying to change page
        return false;
    }

    handleFormSubmit = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        });
        this.requestUpdate('get', '/getPeople')
        console.log(this.state.searchTerm)
    }

    render() {
        return (
            <div className="ui container">
                <div>{this.state.serverMessage}</div>
                <div>{this.state.people}</div>
                <SearchBar onFormSubmit={this.handleFormSubmit}/>
                <CardGrid searchResults={this.state.searchResults} 
                people={this.state.people}
                numPeople={this.state.numPeople}
                peopleNames={this.state.peopleNames}
                peopleDescriptions={this.state.peopleDescriptions}
                peopleImages={this.state.peopleImages}/>
            </div>
        );
    }
}

export default App;
