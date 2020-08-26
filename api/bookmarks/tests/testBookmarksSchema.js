import should from 'should';
import bookmarksModel from './bookmarkModel';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

describe('BookmarkModelTests', () => {

    let bookmark = {};
    //create a bookmark with title ad link
    beforeEach(() => {
        bookmark = {
            title: "A title",
            link: " A link"
        };
    });

    it('should validate a bookmark with a title', (done) => {
        const m = new bookmarksModel(bookmark);
        m.validate((err) => {
            should.not.exist(err);
            m.title.should.equal(bookmark.title);
            m.link.should.equal(bookmark.link);
            done();
        });
    });
});