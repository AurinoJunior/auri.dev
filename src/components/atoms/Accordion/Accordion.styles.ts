import styled from "styled-components";
import { secondary } from "../../../styles/Colors";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  button {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span,
  button {
    color: ${secondary};
  }
`;
