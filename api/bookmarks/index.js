import express from 'express';
import {bookmarks} from './bookmarks';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ bookmarks: bookmarks });
});

router.post('/', (req, res) => {
        let newBookmark = req.body;
        if (newBookmark){
          bookmarks.push({title: newBookmark.title, link : newBookmark.link}) ;
          res.status(201).send({message: "Bookmark Created"});
      }else{
            res.status(400).send({message: "Unable to create Bookmark in request. No Bookmark Found in body"});
      }
});

export default router;