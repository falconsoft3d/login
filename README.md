# 01 Nodejs Passport Mongodb
```
$ nodejs-passport-mongodb
$ npm install
$ npm run dev
```

```
brew tap mongodb/brew
brew install mongodb-community@4.4

brew services start mongodb-community@4.4
brew services stop mongodb-community@4.4
mongod --config /usr/local/etc/mongod.conf --fork
mongod --config /opt/homebrew/etc/mongod.conf --fork
```

```
mongo
use node-login-password-local
show collections
db.users.find()
db.users.find().pretty()
```
