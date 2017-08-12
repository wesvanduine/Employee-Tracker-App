module.exports = function(sequalize, DataTypes) {
<<<<<<< HEAD
	let Schedule = sequalize.define("Schedule", {
		date_time: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		week: {
			type: DataTypes.INTEGER(255),
			allnowNull: false,
			validate: {
				len: [1]
			}
		},
		timeIn: {
			type: DataTypes.TIME,
			allowNull: false,
			validate: {
				len: [1]
			},
			timeOut: {
				type: DataTypes.TIME,
				allowNull: false,
=======

	let Schedule = sequalize.define("Schedule", {
			date_time: {
				type: DataTypes.INTEGER(255),
				allowNull: true,
				validate: {
					len: [1]
				}
			},
			week: {
				type: DataTypes.INTEGER(255),
				allowNull: true,
>>>>>>> 5da39d6f86af04ec4c0444a4bfdf3684667fc987
				validate: {
					len: [1]
				}
			},
			totalHours: {
				type: DataTypes.INTEGER(255),
				allowNull: true,
				validate: {
					len: [1]
				}
<<<<<<< HEAD
			},
		}
=======
			}
>>>>>>> 5da39d6f86af04ec4c0444a4bfdf3684667fc987
	}); 

	Schedule.associate = function(models) {
		Schedule.belongsTo(models.Employees, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Schedule;
};

