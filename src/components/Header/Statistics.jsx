import React from "react";
import { Row } from "react-bootstrap";
import StatisticsCol from "./Statistic";

const Statistics = ({ statistics }) => {
  return (
    <Row className="d-none d-lg-flex my-5">
      {statistics &&
        statistics.map((statistic) => {
          return <StatisticsCol key={statistic.id} statistic={statistic} />;
        })}
    </Row>
  );
};

export default Statistics;
