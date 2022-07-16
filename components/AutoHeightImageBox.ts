import styled from 'styled-components';

export const AutoHeightImageWrapper = styled.div`
  width: 100%;
  margin-top: 10.5px;
  border-radius: 18px;
  overflow: hidden;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;