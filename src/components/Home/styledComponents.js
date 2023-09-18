import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 576px) {
  }
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerImage = styled.img`
  width: 30%;
  height: 30%;
  @media screen and (max-width: 576px) {
    height: 20%;
    width: 50%;
  }
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  color: #000000;
  background: none;
  cursor: pointer;
  outline: none;
  font-weight: 510;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
  cursor: pointer;
  outline: none;
`
export const SearchContainer = styled.div`
    display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 60%;
  height: 40px;
  @media screen and (min-width: 576px) {
    width: 40%;
`
export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  padding-left: 8px;
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 450;
`
export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
  width: 70px;
  border: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
