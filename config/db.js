// module.exports = {
//     database: "mongodb+srv://edis:Nejra123*@cluster0.ilv1y.mongodb.net/auth?retryWrites=true&w=majority",
//     secret: "password"
//   };

exports.URI = `${process.env.MONGO_URL}?retryWrites=true&w=majority`