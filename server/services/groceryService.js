const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/toeicDb';

class GroceryService {

	constructor(req, res) {
		this.req = req
		this.res = res
	}

	insert(name, email, password, db, callback) {
		db.collection('users').insertOne({
			"name": name,
			"email": email,
			"password": password,

		}, function () {
			callback()
		})
	}


	signUp() {
		let self = this;
		let name = this.req.body.name;
		let email = this.req.body.email;
		let password = this.req.body.password;

		try {
			MongoClient.connect(url, function (err, db) {
				assert.equal(null, err);
				self.insert(name, email, password, db, function () {
					db.close()
					return self.res.status(200).json({
						status: 'success'
					})
				})
			});
		}
		catch (error) {
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}
	getAllUser() {
		let self = this;
		try {
			MongoClient.connect(url, function (err, db) {
				assert.equal(null, err);
				let userList = []
				let cursor = db.collection('users').find();
				cursor.each(function (err, doc) {
					assert.equal(err, null);
					if (doc != null) {
						userList.push(doc)
					} else {
						return self.res.status(200).json({
							status: 'list user data success',
							data: userList
						})
					}
				});
			});
		}
		catch (error) {
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}
	getUserById(pas) {
		let self = this;
		try {
			MongoClient.connect(url, function (err, db) {
				assert.equal(null, err);
				let user_email = db.collection('users').find({ password: pas });
				return self.res.status(200).json({
					status: 'list user data success',
					data: user_email
				})
			});
		}
		catch (error) {


		}

	}
}
module.exports = GroceryService