import bookmarkModel from './api/bookmarks/bookmarkModel';

const bookmarks = [
            {
              id: 1,
              title: 'Google',
              link: 'www.google.com',
              visits: '112',
            },
            {
              id: 2,    
              title: 'Twitter',
              link: 'www.twitter.com',
              visits: '12',
            },
            {
              id: 3,    
              title: 'Youtube',
              link: 'www.youtube.com',
              visits: '1',
            },
            {
              id: 4,
              title: 'dsfsdfsdfsdfsdf',
              link: 'www.sdfkjnsdf.com',
              visits: '43',
            },
            {
              id: 5,
              title: 'Twitch',
              link: 'www.twitch.com',
              visits: '6',
            },
        ];
export default async function loadBookmarks() {
    try {
        await bookmarkModel.deleteMany();
        await bookmarkModel.collection.insertMany(bookmarks);
        console.info(`${bookmarks.length} bookmarks were successfully stored.`);
    } catch (err) { 
        console.error(`failed to Load Bookmark Data: ${err}`);
    }
    }