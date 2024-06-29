import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #ff8036;
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-top: 1.5em;

  &:hover {
    opacity: 0.9;
    transition: 0.2s ease-in-out;
  }
`;