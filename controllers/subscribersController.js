const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = (req, res, next) => {
    Subscriber.find({}, (err, subscirbers) => {
        if (err) next(err);
        req.data = subscirbers;
        next();
    });
};

