import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const PageNumberContainer = styled.ul`
  display: flex;
  justify-content: center;
`;

const Pagination = props => {
  return (
    <PageNumberContainer>
      {props.pageNumbers.map(page => {
        return (
          <li key={page}>
            <Button
              buttonType={"button"}
              buttonName={page}
              class={"page"}
              action={() => {
                props.setStartAndEnd(
                  page * props.baseEndItem - props.baseEndItem,
                  page * props.baseEndItem
                );
              }}
            />
            {/* <button
              onClick={() => {
                props.setStartAndEnd(
                  page * props.baseEndItem - props.baseEndItem,
                  page * props.baseEndItem
                );
              }}
            >
              {page}
            </button> */}
          </li>
        );
      })}
    </PageNumberContainer>
  );
};

export default Pagination;
