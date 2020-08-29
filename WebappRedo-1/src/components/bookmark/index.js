import React, { Component, Fragment } from "react";
import "./bookmark.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI'
import Linkify from 'react-linkify';

//CLASS FOR AN INDIVIDUAL BOOKMARK
class Bookmark extends Component {
  
  state = {
        status: "",
        id: this.props.bookmark.id,
        title: this.props.bookmark.title,
        link: this.props.bookmark.link,
        previousDetails: {
        id: this.props.bookmark.id,
        title: this.props.bookmark.title,
        link: this.props.bookmark.link
        }
    };

    //HANDLERS
    handleEdit = () => this.setState({ status: "edit" });
    handleSave = e => {
        e.preventDefault();
        let updatedTitle = this.state.title.trim();
        let updatedLink = this.state.link.trim();
        if (!updatedTitle || !updatedLink) {
            return;
        }
        let { title, link } = this.state;
        this.setState({ status: "", previousDetails: { title, link } });
        api.update(this.state.previousDetails.link, updatedTitle, updatedLink);
    };                            
    handleCancel = () => {
        let { title, link } = this.state.previousDetails;
        this.setState({ status: "", title, link });
    };
    handleTitleChange = e => this.setState({ title: e.target.value });
    handleLinkChange = e => this.setState({ link: e.target.value });
    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.props.bookmark.link);
    };
    
    //DO NOT WORK IN EXPRESS APP VERSION
    //handleDelete = () =>  this.setState({ status : 'del'} );
    //handleVisit = () => this.props.visitHandler(this.props.bookmark.id);

  render() {
    //BUTTON CONFIGS
    let activeButtons = buttons.normal;
    let leftButtonHandler = this.handleEdit;
    let rightButtonHandler = this.handleDelete;
    if (this.state.status === "edit") {
        activeButtons = buttons.edit;
        leftButtonHandler = this.handleSave;
        rightButtonHandler = this.handleCancel;
    } else if (this.state.status === 'del' ) {
        activeButtons = buttons.delete;
        leftButtonHandler = this.handleCancel;
        rightButtonHandler = this.handleConfirm;
    }

    //BOOKMARK LAYOUT
    return (
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">
                <FontAwesomeIcon icon={["fas", "bookmark"]} />  
            </h2>
            
            {this.state.status === "edit" ? (
              <Fragment>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    required
                  />
                </p>

                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.link}
                    onChange={this.handleLinkChange}
                    required
                  />
                </p>

            </Fragment>
            ) : (
            <Fragment>
            <h2 className="card-title">
                <span> {this.props.bookmark.title}</span>
            </h2>
            <p className="card-link" key="link" >
              <FontAwesomeIcon icon={["fas", "angle-right"]} />
              <span onClick= {this.handleVisit} > <Linkify >{this.props.bookmark.link} </Linkify> </span>
            </p>
            <h5 className="card-visits" key="visits">
              <FontAwesomeIcon icon={["fas", "eye"]} />
              <span onClick={this.handleVisit}> {this.props.bookmark.visits} </span>
            </h5>
            </Fragment>
            )}
            
          </div>
          <div className="card-footer">
            <div
              className="btn-group d-flex btn-group-justified"
              role="group"
              aria-label="..."
              >
              <button 
                type="button"
                className={"btn w-100 " + activeButtons.leftButtonColor}
                onClick={leftButtonHandler}
              >
                {activeButtons.leftButtonVal}
              </button>
              <button
                type="button"
                className={"btn w-100 " + activeButtons.rightButtonColor}
                onClick={rightButtonHandler}
              >
                {activeButtons.rightButtonVal}
              </button>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    );
  }
}

export default Bookmark;