import styled from 'styled-components';

export const FormContainer = styled.form`
  // width: 30%;
  padding: 1em;
  background: linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.9));
  // border: 1px solid #0179c6;
  border-radius: 0.3em;
`;

export const FormFieldset = styled.fieldset`
  padding: 1em;
  border: 2px solid #0179c6;
  border-radius: 0.3em;
`;

export const FormLegend = styled.legend`
  background-color: #0179c6;
  padding: 0.5em;
  border-radius: 0.5em;
  font-size: 0.9em;
  font-weight: 500;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  margin-top: 2.5em;
  color: white;
  cursor: pointer;

  svg {
    margin-right: 0.5em;
    transition: color 0.3s;
  }

  &:hover {
    color: #0179c6;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
`;

export const FormOption = styled.p`
  font-size: 0.8em;
  text-align: center;
  margin-top: 1.5em;
  color: white;

  span {
    color: #0179c6;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #005489;
    }
  }
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 0.7em;
  margin-top: 1em;
  border-radius: 0.5em;
  border: none;
  background-color: #0179c6;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005489;
  }
`;
