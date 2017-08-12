module.exports = function(sequalize, DataTypes) {

	let Schedule = sequalize.define("Schedule", {
			// first_name
			date_time: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					len: [1]
				}
			},
			// last_name
			week: {
				type: DataTypes.STRING,
				allowNull: true,
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

