import Img from '../../../public/image.svg';
import image from 'next/image';
import styled from 'styled-components';
export const ContainerHeader = styled.div`
  margin: 0;
  width: 100%;
  background: #d7d4ff;
  height: 35rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1120px) {
    height: 50rem;
  }
`;
export const ContentHeader = styled.div`
  max-width: 90rem;
`;
export const MyH1 = styled.h1`
  margin: 0;
  padding-top: 8.59375rem;
  padding-left: 6.3125rem;
  font-family: Merriweather;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.9375rem;
  @media (max-width: 1120px) {
    padding-top: 3.4375rem;
    padding-left: 1.25rem;
    font-size: 1.5rem;
  }
`;
export const MyP = styled.p`
  margin: 0;
  font-family: Lato;
  font-weight: 400;
  font-size: 1.1875rem;
  line-height: 2rem;
  padding-top: 1.09375rem;
  padding-left: 6.25rem;
  @media (max-width: 1120px) {
    padding-top: 1.125rem;
    padding-left: 1.25rem;
    font-size: 0.7rem;
  }
`;
export const MyButton = styled.button`
  width: 9.6875rem;
  height: 3.125rem;
  background: #6c63ff;
  box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
  border-radius: 5px;
  margin-left: 6.25rem;
  margin-top: 2.8125rem;
  color: white;
  border: none;
  @media (max-width: 1120px) {
    margin-left: 1.25rem;
    margin-top: 2rem;
  }
`;
export const MyImg = styled(image)``;
export const BoxImg = styled.div`
  margin-right: 6.5rem;
  margin-top: 4.8125rem;
  @media (max-width: 1120px) {
    display: flex;
    position: absolute;
    margin-top: 450px;
    margin-left: 32px;
    width: 250px;
    height: 250px;
  }
`;
