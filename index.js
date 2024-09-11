module.exports = {
  initMongo: require('./init'),
  User: require('./user/user.model'),
  Rehabilitant: require('./rehabilitant/rehabilitant.model'),
  File: require('./file/file.model'),
  CloudFile: require('./cloudFile/cloudFile.model')
}