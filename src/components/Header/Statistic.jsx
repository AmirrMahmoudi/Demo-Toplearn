import React from "react";

const StatisticsCol = ({ statistic }) => {
  return (
    <div className="col-lg-4">
      <div className="statistic-img">
        <img src={statistic.image} alt="statistic-info" />
        <span className="title mb-2"> {statistic.count}</span>
        <span className="title">{statistic.title}</span>
      </div>
    </div>
  );
};

export default StatisticsCol;
