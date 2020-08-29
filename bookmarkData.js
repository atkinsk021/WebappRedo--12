import bookmarkModel from './api/bookmarks/bookmarkModel';

//BOOKMARKS PRE-STORED INSIDE MONGO DATABASE
const bookmarks = [{
    'title': 'database google',
    'link': 'www.google.com',
    'visits': 3,
  },
  {
    'title': 'Twitter',
    'link': 'www.twitter.com',
    'visits': 55,
  },
];

export default async function loadBookmarks() {
  try {
    await bookmarkModel.deleteMany();
    await bookmarkModel.collection.insertMany(bookmarks);
    console.info(`${bookmarks.length} bookmarks were stored.`);
  } catch (err) {
    console.error(`failed to load bookmarks: ${err}`);
  }
}