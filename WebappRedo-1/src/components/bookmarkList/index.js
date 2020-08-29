import React, { Component, Fragment } from "react";
import Bookmark from "../bookmark/";
import './bookmarkList.css';

//CLASS FOR THE LIST CONTAINING BOOKMARKS ON THE LEFT SIDE OF THE PAGE
export default class BookmarkList extends Component {
  render() {
    let bookmarkCards = this.props.bookmarks.map(
    (bookmark,index) =>
    <Bookmark key={index}
      bookmark={bookmark} 
      visitHandler ={this.props.visitHandler}
      deleteHandler={this.props.deleteHandler}/>
    );
    //return <Fragment>{bookmarkCards}</Fragment>;

    return (
      <div className="container-fluid bookmarks">
        <div className="row">{bookmarkCards}</div>
      </div>
    );
  }
}