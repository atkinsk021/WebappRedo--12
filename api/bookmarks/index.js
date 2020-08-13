import express from 'express';
import Bookmark from './bookmarkModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all bookmarks, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const bookmarks = await Bookmark.find();
    res.status(200).json(bookmarks);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Create a bookmark, using async handler
router.post('/', asyncHandler(async (req, res) => {
  const bookmark = await Bookmark.create(req.body);
  res.status(201).json(bookmark);
}));

// Update a bookmark
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const bookmark = await Bookmark.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!bookmark) return res.sendStatus(404);
  return res.status(200).json(bookmark);
}));

// Delete a bookmark
router.delete('/:id', asyncHandler(async (req, res) => {
  const bookmark = await Bookmark.findById(req.params.id);
  if (!bookmark) return res.send(404);
  await bookmark.remove();
  return res.status(204).send(bookmark);
}));



/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;