// netlify/functions/contact.js
const mongoose = require('mongoose');

exports.handler = async function(event, context) {
  // Connect to MongoDB, handle your logic here
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Netlify Function!" }),
  };
};
