import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 30rem;
  height: 4rem;
  padding: 0.75rem 0.625rem;
  border-radius: 0.8rem;
  border: 0.1rem solid #1e75e5;
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(124, 124, 124, 0.5);
  }
`;
