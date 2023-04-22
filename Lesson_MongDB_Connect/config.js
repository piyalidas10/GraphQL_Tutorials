/*
${username} - Mongodb username
${password} - Mongodb Password
${cluster} - Mongodb Cluster name
${dbname} - Mongodb database

INSERTING DATA IS WRITTEN IN README FILE
*/
const MONGO_URL = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const JWT_SECRET = 'sdffsdfsdf'; // anything you can give

module.exports = {MONGO_URL, JWT_SECRET};