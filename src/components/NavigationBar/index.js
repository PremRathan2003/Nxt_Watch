import {Component} from 'react'
import {AiFillHome, AiFillGithub} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  Navbar,
  NavigationLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactHeading,
  ContactInfo,
  ContactImage,
  ContactIcons,
  ContactNote,
  NavigationSmallContainer,
} from './styledComponents'

class NavigationBar extends Component {
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeTab} = value
          const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

          const onClickTabHome = () => {
            changeTab('Home')
          }

          const onClickTabTrending = () => {
            changeTab('Trending')
          }
          const onClickTabGaming = () => {
            changeTab('Gaming')
          }
          const onClickTabSaved = () => {
            changeTab('Saved')
          }

          return (
            <Navbar>
              <NavigationLgContainer bgColor={bgColor}>
                <NavOptions>
                  <NavLink to="/">
                    <NavLinkContainer
                      key="home"
                      bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                      onClick={onClickTabHome}
                    >
                      <AiFillHome
                        size={25}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Home</NavText>
                    </NavLinkContainer>
                  </NavLink>

                  <NavLink to="/trending">
                    <NavLinkContainer
                      key="trending"
                      bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                      onClick={onClickTabTrending}
                    >
                      <HiFire
                        size={25}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Trending</NavText>
                    </NavLinkContainer>
                  </NavLink>
                  <NavLink to="/gaming">
                    <NavLinkContainer
                      key="gaming"
                      bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                      onClick={onClickTabGaming}
                    >
                      <SiYoutubegaming
                        size={25}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Gaming</NavText>
                    </NavLinkContainer>
                  </NavLink>
                  <NavLink to="/saved-videos">
                    <NavLinkContainer
                      key="saved"
                      bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                      onClick={onClickTabSaved}
                    >
                      <CgPlayListAdd
                        size={25}
                        color={activeTab === 'saved' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Saved Videos</NavText>
                    </NavLinkContainer>
                  </NavLink>
                </NavOptions>
                <ContactInfo>
                  <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                  <ContactIcons>
                    <a href="https://www.facebook.com/premrathan.chinnu">
                      <ContactImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                    </a>
                    <a href="https://github.com/PremRathan2003/Nxt_Watch">
                      <AiFillGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/premrathan/">
                      <ContactImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </a>
                  </ContactIcons>
                  <ContactNote color={textColor}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactNote>
                </ContactInfo>
              </NavigationLgContainer>
              <NavigationSmallContainer bgColor={bgColor}>
                <NavLink to="/">
                  <AiFillHome
                    size={30}
                    onClick={onClickTabHome}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                </NavLink>
                <NavLink to="/trending">
                  <HiFire
                    size={30}
                    onClick={onClickTabTrending}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                </NavLink>
                <NavLink to="/gaming">
                  <SiYoutubegaming
                    size={30}
                    onClick={onClickTabGaming}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                </NavLink>
                <NavLink to="/saved-videos">
                  <CgPlayListAdd
                    size={30}
                    onClick={onClickTabSaved}
                    color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                  />
                </NavLink>
              </NavigationSmallContainer>
            </Navbar>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default NavigationBar
