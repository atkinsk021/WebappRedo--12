import bookmarkModel from './api/bookmarks/bookmarkModel';

const bookmarks = [{
    'title': 'database google',
    'link': 'www.google.com',
    'visits': 3,
  },
  {
    'title': 'database google2',
    'link': 'www.google.com2',
    'visits': 55,
  },
  {
    'title': 'database google3',
    'link': 'www.google.com3',
    'visits': 11,
  },
  {
    'title': 'database google4',
    'link': 'www.google4.com',
    'visits': 1,
  },
];

export default async function loadBookmarks() {
  try {
    await bookmarkModel.deleteMany();
    await bookmarkModel.collection.insertMany(bookmarks);
    console.info(`${bookmarks.length} bookmarks were stored.`);
  } catch (err) {
    console.error(`failed to bookmarks: ${err}`);
  }
}