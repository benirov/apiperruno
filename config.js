'use strict'

module.exports =
{
  port: process.env.PORT || 8080,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/bdproject',
  SECRET_TOKEN : 'mykeytoken'
}