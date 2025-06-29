
const express = require('express');
const router  = express.Router();
const message = require('../db/queries/messages');

router.post('/:id', (req, res) => {
  const messageBody = req.body;
  const id = req.params.id;
  message.submitMessage(id, messageBody.message)
    .then(() => {
      setTimeout(() => {
        res.redirect('back');
      }, 2000);
    });
});

router.get('/:id', (req, res) => {
  message.getMessages(req.params.id)
    .then((messages) => {

      res.render("messages.ejs", {messages});
    })
    .catch((err) => {
      console.log(err.message);
    });
});


module.exports = router;
