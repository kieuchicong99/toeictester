export class SignUp {
	constructor(
		public name: String,
		public password: String,
		public email   : String,
		public status : String,
		public level : String
		
	) {
		this.name = name;
		this.password = password;
		this.email = email;
		this.level = level;
		this.status = status;
	}
}