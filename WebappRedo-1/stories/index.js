import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Bookmark from '../src/components/bookmark/'
import BookmarkList from '../src/components/bookmarkList/'
import BookmarkForm from '../src/components/bookmarkForm/';
import { action } from '@storybook/addon-actions';

//MOCK DATA FOR STORYBOOK
const samples = [
    {
      title: 'Google',
      link: 'www.google.com',
      visits: '112',
    },
    {
      title: 'Twitter',
      link: 'www.twitter.com',
      visits: '12',
    },
    {
      title: 'Youtube',
      link: 'www.youtube.com',
      visits: '1',
    },
    {
      title: 'Amazon',
      link: 'www.amazon.co.uk',
      visits: '43',
    },
    {
      title: 'Twitch',
      link: 'www.twitch.com',
      visits: '6',
    }
];
//STORIES FOR STORYBOOK TO REPRESENT AS PARTS OF THE WEBAPP
storiesOf("Bookmark Vault/Bookmark Form", module).add("default", () => <BookmarkForm />);

storiesOf("Bookmark Vault/Bookmark List", module).add("default", () => { 
    return <BookmarkList bookmarks={samples}/>
});

storiesOf("Bookmark Vault/Bookmark", module).add("default", () => ( 
  <Bookmark bookmark={samples} deleteHandler={action('Delete confirmed') }/>
));      

storiesOf("Bookmark Vault/Header", module).add("default", () => (
  <Header />
));     

storiesOf("Bookmark Vault/Filter Controls", module).add("default", () => (
    <FilterControls onUserInput={action('Search criteria changes') }/>
)); 