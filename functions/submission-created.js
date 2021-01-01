exports.handler = async function (event, context, callback) {
  const { payload } = JSON.parse(event.body)

  console.log(payload)

  callback(null, {
    statusCode: 200,
  })
}