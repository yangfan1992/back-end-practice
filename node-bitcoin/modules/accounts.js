var crypto = require('crypto'),
  bignum = require('../helpers/bignum.js'),
  ed = require('ed25519'),
  slots = require('../helpers/slots.js'),
  Router = require('../helpers/router.js'),
  util = require('util'),
  constants = require('../helpers/constants.js'),
  TransactionTypes = require('../helpers/transaction-types.js'),
  Diff = require('../helpers/diff.js'),
  util = require('util'),
  extend = require('extend'),
  sandboxHelper = require('../helpers/sandbox.js');

// privated fields
var modules, library, self, privated = {}, shared = {};