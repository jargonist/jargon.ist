exports.handler = (event, context, callback) => {
  console.log('hello world');
  console.log(process.env);
  console.log(event);
  console.log(context);

  callback(null, { statusCode: 200 });
};
