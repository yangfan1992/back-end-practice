var Router = require('../helpers/router.js'),
async = require('async'),
request = require('request'),
ip = require('ip'),
util = require('util'),
_ = require('underscore'),
zlib = require('zlib'),
extend = require('extend'),
crypto = require('crypto'),
bignum = require('../helpers/bignum.js'),
sandboxHelper = require('../helpers/sandbox.js');

// privated fields
var modules, library, self, privated = {}, shared = {};

privated.headers = {};
privated.loaded = false;
privated.messages = {};
