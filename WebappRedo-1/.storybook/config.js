import { configure, addDecorator } from '@storybook/react';


//LOAD STORIES FROM INDEX.JS
function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);