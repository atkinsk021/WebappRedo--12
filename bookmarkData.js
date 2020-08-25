import bookmarkModel from './api/bookmarks/bookmarkModel';

const bookmarks = [{
    'title': 'DatabaseSeed Google',
    'link': 'www.google.com',
    'visits': '132',
  },
  {
    'title': 'Gmail',
    'link': 'www.gmail.com',
    'visits': '15',
  },
  {
    'title': 'Twitter',
    'link': 'www.twitter.com',
    'visits': '1',
  },
  {
    'title': 'Youtube',
    'link': 'www.youtube.com',
    'visits': '1323',
  },
];

export default async function loadBookmarks() {
  try {
    await bookmarkModel.deleteMany();
    await bookmarkModel.collection.insertMany(bookmarks);
    console.info(`${bookmarks.length} bookmarks were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load bookmark Data: ${err}`);
  }
}