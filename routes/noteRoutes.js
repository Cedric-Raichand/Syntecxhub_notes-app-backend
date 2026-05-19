const express = require("express");

const router = express.Router();

const Note = require("../models/Note");
const User = require("../models/User");

const authMiddleware = require("../middleware/authMiddleware");


// CREATE NOTE
router.post("/", authMiddleware, async (req, res) => {

  try {

    const note = new Note({
      title: req.body.title,
      content: req.body.content,
      user: req.user.id
    });

    await note.save();

    res.status(201).json(note);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// GET ALL USER NOTES
router.get("/", authMiddleware, async (req, res) => {

  try {

    const notes = await Note.find({
      user: req.user.id,
      archived: false
    });

    res.json(notes);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// GET SINGLE NOTE
router.get("/:id", authMiddleware, async (req, res) => {

  try {

    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json(note);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// UPDATE NOTE
router.put("/:id", authMiddleware, async (req, res) => {

  try {

    const updatedNote = await Note.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id
      },
      req.body,
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json(updatedNote);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// ARCHIVE NOTE
router.put(
  "/:id/archive",
  authMiddleware,
  async (req, res) => {

    try {

      const note = await Note.findOneAndUpdate(
        {
          _id: req.params.id,
          user: req.user.id
        },
        {
          archived: true
        },
        { new: true }
      );

      if (!note) {
        return res.status(404).json({
          message: "Note not found"
        });
      }

      res.json({
        message: "Note archived",
        note
      });

    } catch (err) {

      res.status(500).json({
        error: err.message
      });

    }

  }
);


// DELETE NOTE
router.delete("/:id", authMiddleware, async (req, res) => {

  try {

    const deletedNote = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!deletedNote) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json({
      message: "Note deleted successfully"
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// GET USER WITH NOTES (POPULATE)
router.get(
  "/user/details",
  authMiddleware,
  async (req, res) => {

    try {

      const user = await User.findById(
        req.user.id
      ).populate("notes");

      res.json(user);

    } catch (err) {

      res.status(500).json({
        error: err.message
      });

    }

  }
);

module.exports = router;