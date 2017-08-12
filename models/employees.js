module.exports = function(sequelize, DataTypes) {
	let Employees = sequelize.define('Employees', {
		first_name: {
			type: DataTypes.STRING,
<<<<<<< HEAD
			allowNull: false,
=======
			allowNull: true,
>>>>>>> 5da39d6f86af04ec4c0444a4bfdf3684667fc987
			validate: {
				len: [1]
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: [1]
			}
		},
		email: {
			type: DataTypes.STRING,
			unique: {
				args: true,
				msg: 'Oops. Looks like you already have an account with this email address. Please try to login.',
				fields: [sequelize.fn('lower', sequelize.col('email'))]
			},
			validate: {
				isEmail: {
					args: true,
					msg: 'The email you entered is invalid or is already in our system.'
				},
				max: {
					args: 254,
					msg: 'The email you entered is invalid or longer than 254 characters.'
				}
			}
		},
		phone_number: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: [10],
				// isNumeric: true
			}
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				is: /[a-z\A-Z\d]/g
			}
		},
<<<<<<< HEAD
		// Determine employee admin access
		admin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},

		username: {
			type: DataTypes.STRING,
			allowNull: false,
=======

		username: {
			type: DataTypes.STRING,
			allowNull: true,
>>>>>>> 5da39d6f86af04ec4c0444a4bfdf3684667fc987
			unique: {
				args: true,
				msg: 'Oops. Looks like this username has been taken. Please choose another one.',
				fields: [sequelize.fn('lower', sequelize.col('username'))]
			},
			validate: {
				max: {
					args: 15,
<<<<<<< HEAD
					msg: 'The username you entered is invalid or more than 20 characters.'
				}
			}
		},
		password: {
			type: DataTypes.STRING, // Maybe DATATYPE.BINARY
			allowNull: false,
			validate: {
				len: {
					args: [8,100],
					msq: 'The password you entered needs to be at least 8 characters.'
				}
			}
=======
					msg: 'The username you entered is invalid or longer than 20 characters.'
				}
			}
		},
		
		password: {
			type: DataTypes.STRING, // Maybe DATATYPE.BINARY
			allowNull: true,
			// validate: {
				// len: {
				// 	args: [8,16],
				// 	msg: 'The password you entered needs to be 8 - 16 characters.'
				// }
			// }
		},

		// Determine employee admin access
		admin: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false
>>>>>>> 5da39d6f86af04ec4c0444a4bfdf3684667fc987
		}
	});

	Employees.associate = function(models) {
		Employees.hasMany(models.Schedule, {
			onDelete: "cascade"
		});
	};
	return Employees;
};