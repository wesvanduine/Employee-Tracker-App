module.exports = function(sequelize, DataTypes) {
	let Employees = sequelize.define('Employees', {
		first_name: {
			type: DataTypes.STRING,
<<<<<<< HEAD
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
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
			type: DATATYPES.STRING,
			allowNull: false,
			validate: {
				len: [10],
				isNumeric: true
			}
		},
		address: {
			type: DATATYPES.STRING,
			allowNull: false,
			validate: {
				is: /[a-z\A-Z\d]/g
			}
		},
		// Determine employee admin access
		admin: {
			type: DATATYPE.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},

		username: {
			type: DATATYPE.STRING,
			allowNull: false,
			unique: {
				args: true,
				msg: 'Oops. Looks like this username has been taken. Please choose another one.',
				fields: [sequelize.fn('lower', sequelize.col('username'))]
			},
			validate: {
				max: {
					args: 20,
					msg: 'The username you entered is invalid or more than 20 characters.'
				}
			}
		},
		password: {
			type: DATATYPE.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [6,10],
					msq: 'The password you entered needs to be 6 - 10 characters.'
				}
			}
		}

	});

	Employees.associate = function(models) {
		Employees.hasMany(models.Schedule, {
			onDelete: "cascade"
		});
	};
	return Employee;
=======
			// allowNull: false,
			// validate: {
			// 	len: [1]
			// }
		},
		last_name: {
			type: DataTypes.STRING,
			// allowNull: false,
			// validate: {
			// 	len: [1]
			// }
		},
		email: {
			type: DataTypes.STRING,
			// unique: {
			// 	args: true,
			// 	msg: 'Oops. Looks like you already have an account with this email address. Please try to login.',
			// 	fields: [sequelize.fn('lower', sequelize.col('email'))]
			// },
			// validate: {
			// 	isEmail: {
			// 		args: true,
			// 		msg: 'The email you entered is invalid or is already in our system.'
			// 	},
			// 	max: {
			// 		args: 254,
			// 		msg: 'The email you entered is invalid or longer than 254 characters.'
			// 	}
			// }
		},
		phone_number: {
			type: DataTypes.STRING,
			// allowNull: false,
			// validate: {
			// 	len: [10],
			// 	isNumeric: true
			// }
		},
		address: {
			type: DataTypes.STRING,
			// allowNull: false,
			// validate: {
			// 	is: /[a-z\A-Z\d]/g
			// }
		},

		username: {
			type: DataTypes.STRING,
			// allowNull: false,
			// unique: {
			// 	args: true,
			// 	msg: 'Oops. Looks like this username has been taken. Please choose another one.',
			// 	fields: [sequelize.fn('lower', sequelize.col('username'))]
			// },
			// validate: {
			// 	max: {
			// 		args: 15,
			// 		msg: 'The username you entered is invalid or longer than 20 characters.'
			// 	}
			// }
		},
		
		password: {
			type: DataTypes.STRING, // Maybe DATATYPE.BINARY
			// allowNull: false,
			// validate: {
			// 	len: {
			// 		args: [8,16],
			// 		msq: 'The password you entered needs to be 8 - 16 characters.'
			// 	}
			// }
		},

		// Determine employee admin access
		admin: {
			type: DataTypes.BOOLEAN,
			// allowNull: false,
			// defaultValue: false
		}
	});

	Employees.associate = function(models) {
		Employees.hasMany(models.Schedule, {
			onDelete: "cascade"
		});
	};
	return Employees;
>>>>>>> nick
};