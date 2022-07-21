import styled from 'styled-components';

export const AutoHeightImageWrapper = styled.div`
  width: 100%;
  margin-top: 18.5px;
  border-radius: 8px;
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