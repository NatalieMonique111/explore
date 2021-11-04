import * as db from "../server/src/db.mjs";

import * as fs from "fs";

import * as xml2js from "xml2js";

// var fs = require("fs"),
// xml2js = require("xml2js");

var parser = new xml2js.Parser();
fs.readFile("pg/whc.unesco.org.xml", function (err, data) {
  parser.parseString(data, function (err, result) {
    console.dir(result);
    console.log("Done");
  });
});

// console.log("./whc.unesco.org.xml");

//result is json
//inside json row is an array
