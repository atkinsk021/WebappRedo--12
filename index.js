import dotenv from 'dotenv';
import express from 'express';
import bookmarksRouter from './api/bookmarks';
import bodyParser from 'body-parser';
import './db';
import loadBookmarks from './bookmarkData';



dotenv.config();

const app = express();

const port = process.env.PORT;

if (process.env.seedDb) {
  loadBookmarks();
}

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/api/bookmarks', bookmarksRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});