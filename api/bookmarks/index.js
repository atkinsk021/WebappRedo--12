import express from 'express';
import {bookmarks} from './bookmarks';

const router = express.Router();

//GET REQUEST
router.get('/', (req, res) => {
  res.send({ bookmarks: bookmarks });
});

//POST REQUEST
router.post('/', (req, res) => {
        let newBookmark = req.body;
        if (newBookmark){
          bookmarks.push({title: newBookmark.title, link : newBookmark.link}) ;
          res.status(201).send({message: "Bookmark Created"});
      }else{
            res.status(400).send({message: "Unable to create Bookmark in request. No Bookmark Found in body"});
      }
});

//UPDATE REQUEST
router.put('/:id', (req, res) => {
  const key = req.params.id;
  const updateBookmark = req.body;
  const index = bookmarks.map((bookmark)=>{
return bookmark.link;
}).indexOf(key);
         if (index !== -1) {
            bookmarks.splice(index, 1, {title: updateBookmark.title, link: updateBookmark.link});
            res.status(200).send({message: 'Bookmark successfully updated'});
           } else {
       res.status(400).send({message: 'Unable to find Bookmark in request. No update has taken place'});
   }
});

//DELETE REQUEST
router.delete('/:id', (req, res) => {
  const key = req.params.id;
  const index = bookmarks.map((bookmark)=>{
return bookmark.link;
}).indexOf(key);
 if (index > -1) {
bookmarks.splice(index, 1);
     res.status(200).send({message: `Deleted bookmark : ${key}.`});
 } else {
   res.status(400).send({message: `Unable to find bookmark of link : ${key}.`});
   }
});
export default router;