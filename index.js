import dotenv from 'dotenv';
import express from 'express';
import bookmarksRouter from './api/bookmarks';
import bodyParser from 'body-parser';
import loadBookmarks from './bookmarkData';
import './db';

//INDEX FOR EXPRESS APP
dotenv.config();

export const app = express();

const port = process.env.PORT;
if (process.env.seedDb) {
  loadBookmarks();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use('/api/bookmarks', bookmarksRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});