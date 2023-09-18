import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  InputLabel,
  UserInput,
  CheckBoxContainer,
  Checkbox,
  ShowPassword,
  LoginButton,
  ShowError,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <InputLabel htmlFor="username" color={textColor}>
                USERNAME
              </InputLabel>
              <UserInput
                id="username"
                type="text"
                value={username}
                placeholder="prem"
                onChange={this.onChangeUsername}
              />
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          return (
            <>
              <InputLabel color={textColor} htmlFor="password">
                PASSWORD
              </InputLabel>
              <UserInput
                id="password"
                type={inputType}
                placeholder="2003"
                value={password}
                onChange={this.onChangePassword}
              />
              <CheckBoxContainer>
                <Checkbox
                  id="checkbox"
                  type="checkbox"
                  onChange={this.renderShowPassword}
                />
                <ShowPassword color={textColor}>Show Password</ShowPassword>
              </CheckBoxContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  submitForm = async event => {
    event.preventDefault()
    let {username, password} = this.state

    if (username.toLowerCase().trim('') === 'prem') username = 'rahul'
    if (password === '2003') password = 'rahul@2021'

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const BgColor = isDarkTheme ? '#424242' : '#ffffff'
          const formColor = isDarkTheme ? '#000000' : '#ffffff'
          const logo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <AppContainer BgColor={BgColor}>
              <FormContainer onSubmit={this.submitForm} formColor={formColor}>
                <LoginLogo src={logo} alt="website logo" />
                <InputContainer>{this.renderUsernameField()}</InputContainer>
                <InputContainer>{this.renderPasswordField()}</InputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ShowError>*{errorMsg}</ShowError>}
              </FormContainer>
            </AppContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default LoginForm
