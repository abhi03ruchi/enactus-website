import React from "react";
import styled from "styled-components";

function menu({ value, handleClick }) {
  return (
    <Container onClick={handleClick} value={value}>
      <span />
      <span />
      <span />
    </Container>
  );
}

export default menu;

const Container = styled.div`
  width: 50px;
  height: 50px;
  border: 0px solid #e1e5e9;
  border-radius: 10px;
//   background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin:10px;

  span {
    position: absolute;
    width: 40px;
    height: 3px;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.5s;
  }

  span:nth-child(1) {
    transform: ${({ value }) =>
      value ? "translateY(0px) rotate(45deg)" : "translateY(-20px)"};
  }
  span:nth-child(2) {
    transform: ${({ value }) =>
      value ? "translateX(80px)" : "translateX(0px)"};
  }
  span:nth-child(3) {
    transform: ${({ value }) =>
      value ? "translateY(0px) rotate(315deg)" : "translateY(20px)"};
    transition-delay: 0.15s;
  }
`;