exports.handler = function handler(event, context, callback) {
  console.log(context);

  callback(null, { statusCode: 200 });
};
