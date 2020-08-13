import dotenv from 'dotenv';
import express from 'express';
import bookmarksRouter from './api/bookmarks';
import bodyParser from 'body-parser';
import loadBookmarks from './bookmarkData';
import './db';

dotenv.config();

const app = express();

const port = process.env.PORT;

if (process.env.seedDb) {
  loadBookmarks();
}

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/bookmarks', bookmarksRouter);

app.use(express.static('public'));


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});