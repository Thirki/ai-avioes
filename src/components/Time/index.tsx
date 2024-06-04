import React from "react";
import { formatDate } from "../../formatter";
import { Wrapper } from "./styles";

interface ITimeProps {
  date: Date;
}

export const Time: React.FC<ITimeProps> = ({ date }) => {
  return (
    <Wrapper>
      <time title={formatDate(date)} dateTime={JSON.stringify(date)}>
        {formatDate(date)}
      </time>
    </Wrapper>
  );
};
