import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookmarkSchema = new Schema({
  title: String,
  link: String,
});

export default mongoose.model('bookmarks', BookmarkSchema);