import styled from 'styled-components'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-right: 20px;
  }
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 16px;
  margin-top: -8px;
`
export const ViewsAndDate = styled.p`
  font-family: Roboto;
  margin-top: -5px;
  font-size: 16px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 50px;
  height: 30px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  align-self: center;
`
