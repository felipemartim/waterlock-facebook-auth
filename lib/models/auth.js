'use strict';

var _ = require('lodash');

exports.attributes = function(attr){
  var template = {
    facebookId: {
      type: 'integer',
      unique: true
    },
    name:{
      type: 'string'
    },
    email: {
      type: 'string',
      unique: true
    }
  };

  _.merge(template, attr);
  _.merge(attr, template);
};
