// responsive.js
import { css } from '@mui/styled-engine';

export const mobile = (props) => css`
  @media only screen and (max-width: 380px) {
    ${props}
  }
`;
