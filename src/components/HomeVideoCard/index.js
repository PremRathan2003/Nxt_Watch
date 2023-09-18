import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'

import {
  ListItem,
  Title,
  ChannelName,
  Dot,
  ViewsAndDate,
} from './styledComponents'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const channelColor = isDarkTheme ? '#909090' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-img"
              />
              <div className="videoDetails">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="profile_logo"
                />
                <div className="video_details_container">
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={channelColor}>{name}</ChannelName>
                  <ViewsAndDate color={channelColor}>
                    {viewCount} views<Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </div>
              </div>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
