


const DataTypes = require("sequelize").DataTypes;

function initModels(sequelize) {
  const EventLog = sequelize.define(
    "EventLog",
    {
      trackerId: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "埋点用户ID",
      },
      apikey: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "对应平台Key",
      },
      sdkName: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "埋点类型",
      },
      sdkVersion: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "埋点SDK版本",
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "分类",
      },
      data: {
        type: DataTypes.JSON,
        allowNull: true,
        comment: "数据",
      },
      level: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "级别",
      },
      time: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "时间",
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "类型",
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "当前页面url",
      },
    },
    {}
  );

  EventLog.sync();

  return {
    EventLog,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;