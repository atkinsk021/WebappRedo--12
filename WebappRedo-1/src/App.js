import React, { Component } from "react";
import Header from "./components/header/";
import BookmarkList from "./components/bookmarkList/";
//import FilterControls from "./components/filterControls/";
import BookmarkForm from "./components/bookmarkForm/";
import * as api from './api';
import _ from "lodash";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./components/pages/About";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  
  //DEFAULT STATE OF SEARCHBAR
  //state = { search: ""};
  state = {bookmarks: [{}]};


  componentDidMount() {
    api.getAll().then(resp => {
        this.setState({
            bookmarks: resp
        });
    }).catch(console.error);
};

  //CREATE BOOKMARK ITEM WITH TITLE AND LINK
  addBookmarkItem = (title, link) => {
    api.add(title,link)
    .then(resp => {
                  const newBookmark = {"id":resp.id,"title":title,"link":link,"visits":0};
                  this.setState({posts: this.state.bookmarks.concat([newBookmark])});
                }).catch(console.error)
  };

  //INCREMENT VISIT COUNTER
  incrementVisit = (id) => {
    api.visit(id).then(resp=> {
      var visitedBookmark = _.find(this.state.bookmarks, bookmark=>bookmark.id === id);
      visitedBookmark.visits++;  
      this.setState({})
    }) ;
  };

  //HANDLE EDITING OF BOOKMARK
  handleChange = (type, value) => {
    type === "title"
    ? this.setState({ search: value })
    : this.setState({ sort: value });
  };

  //DELETE BOOKMARK ITEM
  deleteBookmark = (id) => {
    api.remove(id); 
    this.setState({});                          
  };

  render() {
    const bookmarks = _.sortBy(this.state.bookmarks, bookmark => bookmark.title);
   
    //APP LAYOUT
    return (
      <Router>
        <Container>
          <div className="jumbotron">
            <Header noBookmarks={bookmarks.length} />      
            <Route exact path="/" render= {props => (
              <React.Fragment>
                <Row noGutters>
                  <Col sm={8}>
                    <BookmarkList bookmarks={bookmarks} 
                       />
                  </Col>
                  <Col sm={4}>
                  <BookmarkForm handleAdd={this.addBookmarkItem} />
                  </Col>
                </Row>  
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
       </Container>
      </Router>
    );
  }
}

export default App;

//-----OLD CODE FOR HANDLE VISIT,FILTER AND DELETE
//visitHandler={this.incrementVisit} deleteHandler={this.deleteBookmark}

//<FilterControls 
//onUserInput={this.handleChange}/>
//