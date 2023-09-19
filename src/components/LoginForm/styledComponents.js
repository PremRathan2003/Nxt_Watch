import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.BgColor};
`
export const FormContainer = styled.form`
  background-color: ${props => props.formColor};
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 30%;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const LoginLogo = styled.img`
  width: 40%;
  align-self: center;
  margin-bottom: 15px;
  @media screen and (max-width: 576px) {
    width: 40%;
  }
`
export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  margin-top: 12px;
  flex-direction: column;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
  font-weight: 500;
  margin-top: 8px;
`
export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  align-self: center;
  font-weight: 500;
`
export const LoginButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  height: 30px;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`
export const ShowError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`
