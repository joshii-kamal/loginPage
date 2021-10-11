const router = require("express").Router();
const _ = require('lodash');
const User = require('../models/user');
const ApiError = require('../error/ApiError');
require('dotenv').config();

router.route('/user').post(async (req, res, next) => {
  let result = {};
  const userData = await User.findOne(
    {
      $and: [
        { email: req.body.email },
        { password: req.body.password }
      ]
    }
  );
  if (_.isEmpty(userData)) {
    next(ApiError.badRequest('user not found'));
    return;
  }
  console.log('userData', { phoneNo: userData.phoneNo, email: userData.email });
  result.userData = userData;
  res.send(result);
});

// register
router.route('/user/add').post(async (req, res, next) => {
    const isUserAvailable = await User.findOne(
        {
            $or: [
                { userName: req.body.userName },
                { email: req.body.email }
            ]
        }
    );
    if (!_.isEmpty(isUserAvailable)) {
        next(ApiError.badRequest('user already exists'));
        return ;
    }
    const newUser = new User(req.body);
    // res.send(newUser);
    newUser.save()
    .then(() => res.json("user added!"))
    .catch(err => { next(ApiError.badRequest(err)); return }); 
});

module.exports = router;