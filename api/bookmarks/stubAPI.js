import _ from 'lodash';

  const bookmarks = [
         {id: 1,
            title: 'Google15',
            link: 'www.google.com',
            visits: 2,
          },
         {
            id: 2,
            title: 'Youtube.',
            link: 'www.youtube.com',
            visits: 2,
          },
          {
            id: 3,
            title: 'Microsoft',
            link: "www.microsoft.com",
            visits: 55,
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