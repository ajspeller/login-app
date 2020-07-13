const User = require('../models/User.model');

exports.register = (req, res, next) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password,
  });

  newUser
    .save()
    .then((result) => {
      console.log('result: ', result);
      // return res.status(200).json({
      //   message: 'New user has been registered',
      // });
      res.redirect('/signup.html');
    })
    .catch((err) => {
      console.log('error: ', err);
      // return res.status(500).json({
      //   message: 'error registering user',
      //   error: err,
      // });
      res.send('error registering user');
    });
};
