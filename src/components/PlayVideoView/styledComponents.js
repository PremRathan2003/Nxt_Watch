import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 10px;
  border-radius: 8px;
`
export const PlayVideoTitle = styled.p`
  font-family: Roboto;
  font-size: 22px;
  color: ${props => props.color};
  font-weight: 400;
`
export const PlayVideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const PlayVideoStatus = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => props.color};
`
export const PlayVideoDot = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SocialButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
  color: ${props => props.color};
`
export const BtnContainer = styled.div`
  display: flex;
  background: none;
  align-items: center;
`
export const ButtonText = styled.p`
  margin-left: 5px;
  color: ${props => props.color};
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const HrLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.color};
  margin: 0px;
  font-weight: 400;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const SubCount = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`
export const ChannelDesc = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.color};
  padding-left: 15px;
  width: 99%;
  align-self: center;
`
