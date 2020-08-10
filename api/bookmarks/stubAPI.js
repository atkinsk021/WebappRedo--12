import _ from 'lodash';

  const bookmarks = [
         {id: 1,
            title: 'India - Tiger population sees 30% increase.',
            link: 'http://www.bbc.com/news/world-asia-30896028',
            visits: 2,
          },
         {
            id: 2,
            title: 'The button that is not.',
            link: 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
            visits: 2,
          },
          {
            id: 3,
            title: 'Google Nears $1B Investment in SpaceX',
            link: "www.google.com",
            visits: 55,
          },
          {
            id: 4,
            title: 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
            link: 'http://blog.coinbase.com/',
            visits: 2,
          },
      ];


     const stubAPI = {
         getAll: () => {
            return bookmarks;
          },
         add: (t, l) => {
              if (!(t && l)) return false;
              let id = 1;
              const last = _.last(bookmarks);
              if (last) {
                 id = last.id + 1;
              }
              let len = bookmarks.length;
              let newLen = bookmarks.push({
                  'id': id,
                 'title': t, 'link': l, 'visits': 0});
               return newLen > len?id:-1;
              },
         visits: (id) => {
             const index = _.findIndex(bookmarks,
                   (bookmark) => {
                    return bookmark.id == id;
                  } );
             if (index !== -1) {
                bookmarks[index].visits += 1;
                  return true;
                }
              return false;
           },
         getBookmark: (id) => {
            let result = null;
            const index = _.findIndex(bookmarks,
                   (bookmark) => {
                    return bookmark.id == id;
                  } );
             if (index !== -1) {
                result = bookmarks[index];
                    }
            return result;
            },
      };
    export default stubAPI;