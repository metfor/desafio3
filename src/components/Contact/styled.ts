import styled from 'styled-components';
export const ContainerContact = styled.div`
  margin-top:30px;
  width: 100%;
  height: 46.875rem;
  background: #d7d4ff;
  justify-content: center;
  display: grid;
  text-align: center;
`;
export const MyH1 = styled.h1`
  margin: 0;
  margin-top: 5.3125rem;
  font-family: Merriwether;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5;
`;

export const FormContact = styled.form`
  display: grid;
  grid-template-columns: 7.5rem;
  grid-template-rows: 5rem 5rem 5rem 11.25rem;
  margin-left: -7.5rem;
  margin-top: -5rem;
`;

export const MyInput = styled.input`
  margin: 0px;
  background: #ffffff;
  border-radius: 6px;
  border-color: #ffffff;
  width: 29.375rem;
  height: 4.0625rem;
  @media (max-width: 1120px) {
    width: 16.4375rem;
    margin-left: 5.9375rem;
  }
`;
export const InputMsg = styled.input`
  margin: 0px;
  padding-bottom: 120px;
  background: #ffffff;
  border-radius: 6px;
  border-color: #ffffff;
  width: 470px;
  height: 165px;
  @media (max-width: 1120px) {
    width: 16.4375rem;
    margin-left: 5.9375rem;
  }
`;
export const ButtonContact = styled.button`
  width: 29.4375rem;
  height: 3.125rem;
  background: #6c63ff;
  box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
  border-radius: 5px;
  color: white;
  border:none;
  @media (max-width: 1120px) {
    width: 16.4375rem;
    margin-left: 5.9375rem;
  }
`;
