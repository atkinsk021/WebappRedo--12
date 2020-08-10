import express from 'express';
//import {bookmarks} from './bookmarks';
import stubAPI from './stubAPI';

const router = express.Router();

//GET REQUEST
router.get('/', (req, res) => {
  const bookmarks = stubAPI.getAll();
  res.send({ bookmarks: bookmarks });
});

//POST REQUEST
router.post('/', (req, res) => {
        let newBookmark = req.body;
        if (newBookmark && stubAPI.add(newBookmark.title, newBookmark.link)) {
          return res.status(201).send({message: 'Bookmarks Created'});
     }
     return res.status(400).send({message: 'Unable to find Bookmark in request.'});
});

// get a post
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const bookmark = stubAPI.getBookmark(id);

     if (post) {
             return res.status(200).send(bookmark);
            }
            return res.status(404).send({message: `Unable to find Bookmark ${id}`});
});

// upvote a post
router.post('/:id/visit', (req, res) => {
  const id = req.params.id;
         if (stubAPI.visit(id)) {
              return res.status(200).send({message: `Bookmark ${id} visited`});
         }
         return res.status(404).send({message: `Unable to find Bookmark ${id}`});
});

//if (newBookmark){
 // bookmarks.push({title: newBookmark.title, link : newBookmark.link}) ;
 // res.status(201).send({message: "Bookmark Created"});
//}else{
 //   res.status(400).send({message: "Unable to create Bookmark in request. No Bookmark Found in body"});
//}

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