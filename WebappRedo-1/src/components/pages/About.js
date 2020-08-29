import React from 'react'

//CLASS FOR A SIMPLE ABOUT PAGE TO DEMONSTRATE ROUTING
export default function About() {
    return (
        <React.Fragment>
            <div style = {pageStyle}>
                <h1>
                    About
                </h1>
                <p style = {aboutStyle}>
                    This is a Bookmark Vault, enjoy! You can edit, delete and search Bookmarks that already exist. You can also create your own Bookmarks using the form on the right. Made by Kevin Atkins as part of a WebApp 2 repeat ;(
                </p>
            </div>
        </React.Fragment>
    )
}

//STYLING FOR PAGE CONTENTS
const pageStyle = {
    backgroundColor: '#678D6D',
    padding: '10px'
}

const aboutStyle = {
    padding: '10px 10px',
    backgroundColor: '#a9bcae',
    borderRadius: '10px'

}