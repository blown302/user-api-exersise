/**
 * repository to perform CRUD operations on User entities.
 */

const {USER_DATASOURCE, USER_ENTITY_REFRESH_COUNT} = require('../config/config');

const request = require('request-promise-native');
let _users = [];

exports.getUsers = async () => {
  const newUsers = await Promise.all(createRequests());
  _users = _users.concat(newUsers);
  return _users;
};

exports.createUser = (user) => {
  _users.push(user);
};

exports.findUserByName = (name) => {
  const lowerCaseName = name.toLowerCase();
  return _users.find(u => u.firstname.toLowerCase() === lowerCaseName);
};

function createRequests() {
  return Array.from({length: USER_ENTITY_REFRESH_COUNT}, createRequest)
}

async function createRequest() {
  const user = (await request(USER_DATASOURCE, {json: true})).results[0];
  return {
    gender: user.gender,
    firstname: user.name.first,
    city: user.location.city,
    email: user.email,
    cell: user.cell
  }
}