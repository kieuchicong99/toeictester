export class SignUp {
	constructor(
		public name: String,
		public password: String,
		public email: String,
		public status: String,
		public level: String,
		// public access_token: string

	) {
		this.name = name;
		this.password = password;
		this.email = email;
		this.level = level;
		this.status = status;
	}
}
export class User {
	constructor(
		public first_name: String,
		public last_name: String,
		public password: String,
		public email: String,
		public status: String,
		public level: String,
		public birthday: String

	) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.password = password;
		this.email = email;
		this.status = status;
		this.level = level;
		this.birthday = birthday;
	}
}
export class Login {
	constructor(
		public access_token: string,
		public role: Number,
		public user: string) {
		this.access_token = access_token;
		this.role = role;
		this.user = user;
	}

}
export class Profile {
	constructor(
		public birthday: string,
		public email: string,
		public sex: string,
		public username: string
	) {
		this.birthday = birthday;
		this.email = email;
		this.sex = sex;
		this.username = username;
	}
}