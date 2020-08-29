import React, { Component } from 'react';
import './bookmarkForm.css';
import {FormWithConstraints, Input, FieldFeedbacks, FieldFeedback} from 'react-form-with-constraints';
import Button from 'react-bootstrap/Button';

//CLASS FOR THE FORM TO CREATE NEW BOOKMARKS ON THE RIGHT SIDE OF THE PAGE
export default class BookmarkForm extends Component {
    state = {title:'' , link:''};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd( this.state.title, this.state.link)
        this.setState({ title: '', link: ''})
    }
    handleTitleChange = (e) =>  this.setState({title: e.target.value});
    handleLinkChange = (e) => this.setState({link: e.target.value});

    //FORM LAYOUT
    render() {
        return (
        <FormWithConstraints className="form1">
            <h3 className="formText" >Add a new Bookmark</h3>
            <div className="form-group">
              <Input 
                id="Title"
                className="form-control"
                placeholder="Title"
                value={this.state.title}
                onChange={ this.handleTitleChange }
                minLength={3} 
                required />
                <FieldFeedbacks for="Title">
                    <FieldFeedback when ={value => value.length=0} >Too short</FieldFeedback>
                    <FieldFeedback when="*" />
                    <FieldFeedback when="valid">Looks good!</FieldFeedback>
                </FieldFeedbacks>
            </div>
            <div className="form-group">
              <Input 
                className="form-control"
                placeholder="Link"
                value= {this.state.link}
                onChange={ this.handleLinkChange } 
                minLength={3}
                required/>
            </div>
            <Button block type="submit" className="btn btn-dark"
            onClick={this.handleSubmit}>Create</Button>
        </FormWithConstraints>
        );
    }
}