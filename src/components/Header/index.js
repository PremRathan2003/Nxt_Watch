import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import './index.css'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  HeaderLogo,
  NavbarHeader,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  LogoutIconButton,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHeader bgColor={bgColor}>
          <Link to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>

          <ActionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <a href="https://www.linkedin.com/in/premrathan/">
              <ProfileImage
                src="https://res.cloudinary.com/dz3mpsjbn/image/upload/v1695057779/Profile-pic_piikdv.jpg"
                alt="profile"
              />
            </a>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer bgColor={bgColor}>
                  <ModalDesc color={textColor}>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer bgColor={bgColor}>
                  <ModalDesc color={textColor}>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavbarHeader>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default withRouter(Header)
