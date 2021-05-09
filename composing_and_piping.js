// import { compose, pipe } from "lodash/fp.javaScript";
// import React, { Component } from "react";
// import { toLower } from "lodash";


const fp = require('lodash/fp');
const pipe = fp.pipe;
const compose = fp.compose;
const toLowerCase = fp.toLower;

//non functional way
let input = "    javaScript   ";
let output = "<div>" + input.trim() + "</div>";

//functional way
const trim = (str) => str.trim();
const wrapInDiv = (str) => "<div>" + str + "</div>";
const wrapInDiv2 = (str) => `<div> ${str} </div>`;

//const result = wrapInDiv(trim(input));
//const transform = compose(wrapInDiv, toLower, trim);
const transform = pipe(trim, toLowerCase, wrapInDiv);
console.log(transform(input)); 
