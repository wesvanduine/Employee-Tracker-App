module.exports = function(sequalize, DataTypes) {

	let Schedule = sequalize.define("Schedule", {
			date_time: {
				type: DataTypes.INTEGER(255),
				allowNull: true,
				// validate: {
				// 	len: [1]
				// }
			},
			week: {
				type: DataTypes.INTEGER(255),
				allowNull: true,
				// validate: {
				// 	len: [1]
				// }
			},
			timeIn: {
				type: DataTypes.INTEGER(255),
				allowNull: true,
				// validate: {
				// 	// len: [1]
				// }
			},
			timeOut: {
				type: DataTypes.INTEGER(255),
				allowNull: true,
				// validate: {
				// 	len: [1]
				// }
			},
			totalHours: {
				type: DataTypes.INTEGER(255),
				allowNull: true,
				// validate: {
				// 	len: [1]
				// }
			}
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

