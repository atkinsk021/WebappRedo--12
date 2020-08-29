import _ from "lodash";

//DATASTUB TO REPRESENT MOCK DATA FOR WEBAPP
class StubAPI {
    constructor() {
        this.bookmarks = [
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
            }
        ];
    }

    
    add(title, link) {
        let id = 1;
        let last = _.last(this.bookmarks);
        if (last) {
        id = last.id + 1;
        }
        let len = this.bookmarks.length;
        let newLen = this.bookmarks.push({
        id,
        title,
        link,
        visits: '0',
        });
        return newLen > len;
    }

    visit(id) {
        let index = _.findIndex(this.bookmarks, bookmark => bookmark.id === id);
        if (index !== -1) {
        this.bookmarks[index].visits ++;
        return true;
        }
        return false;
    }

    find(id) {
        let index = _.findIndex(
        this.bookmarks,
        bookmark => `${bookmark.link}${bookmark.cell}` === id
        );
        if (index !== -1) {
        return this.bookmarks[index];
        }
        return null;
    }

    delete(k) {
        let elements = _.remove(this.bookmarks, bookmark => bookmark.link === k);
        return elements;
    }

    initialize(bookmarks) {
        this.bookmarks = bookmarks;
    }

    getAll() {
        return this.bookmarks;
    }

    update(key, title, link) {
        let index = _.findIndex(this.bookmarks, bookmark => bookmark.link === key);
        if (index !== -1) {
        this.bookmarks[index].title = title;
        this.bookmarks[index].link = link;
        return true;
        }
        return false;
    }
}

export default new StubAPI();