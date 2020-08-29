import express from 'express';
import Bookmark from './bookmarkModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line


//GET ALL BOOKMARKS
router.get('/', async (req, res) => {
  try {
    const bookmarks = await Bookmark.find();
    res.status(200).json(bookmarks);
  } catch (error) {
    handleError(res, error.message);
  }
});

//CREATE A BOOKMARK
router.post('/', asyncHandler(async (req, res) => {
  const bookmark = await Bookmark.create(req.body);
  res.status(201).json(bookmark);
}));

//UPDATE A BOOKMARK
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const bookmark = await Bookmark.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!bookmark) return res.sendStatus(404);
  return res.json(200, bookmark);
}));

//DELETE A BOOKMARK
router.delete('/:id', asyncHandler(async (req, res) => {
  const bookmark = await Bookmark.findById(req.params.id);
  if (!bookmark) return res.send(404);
  await bookmark.remove();
  return res.status(204).send(bookmark);
}));

//VISIT A BOOKMARK
router.post('/:id/visits', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const bookmark = await Bookmark.findById(id);
  bookmark.visits++;
  await bookmark.save();
  return res.status(201).send({bookmark});
}));

//GET INDIVIDUAL BOOKMARK
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const bookmark = await Bookmark.findById(id);
  return res.send({bookmark});
}));


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};


export default router;