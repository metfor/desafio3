import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 30px;
  @media (max-width: 1120px) {
    display: grid;
    grid-row-gap: 30px;
    margin-left: 20px;
  }
`;
