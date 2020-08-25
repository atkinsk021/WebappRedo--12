import express from 'express';
import {bookmarks} from './bookmarks';
//import stubAPI from './stubAPI';

const router = express.Router();

//GET REQUEST
router.get('/', (req, res) => {
  res.send({ bookmarks: bookmarks });
});

//POST REQUEST
router.post('/', (req, res) => {
        let newBookmark = req.body;
        if (newBookmark){
          bookmarks.push({title: newBookmark.title, link : newBookmark.link, visits: newBookmark.visits}) ;
          res.status(201).send({message: "Bookmark Created"});
      }else{
            res.status(400).send({message: "No Bookmark Found in request"});
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


// upvote a post
router.post('/:id/visit', (req, res) => {
  const key = req.params.id;
  const visitBookmark = req.body;
  const index = bookmarks.map((bookmark)=>{
    return bookmark.link;
  }).indexOf(key);
    if (index !== -1) {
              res.status(200).send({message: `Bookmark ${id} visited`});
            } else {
         return res.status(404).send({message: `Unable to find Bookmark ${id}`});
            }
});

export default router;