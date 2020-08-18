import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookmarkSchema = new Schema({
    title: {type: String, required: true},
    link: {type: String, required: true},
    visits: {type: Number, default: 0},
    });

export default mongoose.model('Bookmark', BookmarkSchema);