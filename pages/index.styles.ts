import { css } from '@emotion/react';

export const styles = {
  main: css`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
  typo: css`
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #FCFCFC;
    opacity: 0.9;
  `,
  bottom: css`
    position: absolute;
    bottom: 40px;
    text-align: center;
  `
};