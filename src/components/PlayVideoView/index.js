import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatusContainer,
  PlayVideoStatus,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  BtnContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelContainer,
  ChannelImage,
  ChannelName,
  ChannelInfo,
  SubCount,
  ChannelDesc,
} from './styledComponents'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const onClickLike = () => {
    clickLiked()
  }
  const onClickDislike = () => {
    clickDisLiked()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const headColor = isDarkTheme ? '#f8fafc' : '#231f20'
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        const likeIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} width="100%" controls />
            <PlayVideoTitle color={headColor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickLike}
                    color={likeIconColor}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText color={textColor}>Like</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickDislike}
                    color={dislikeIconColor}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText color={textColor}>Dislike</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickSave}
                    color={saveIconColor}
                  >
                    <BiListPlus size={25} />
                    <ButtonText color={textColor}>
                      {isSaved ? 'Saved' : 'Save'}
                    </ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <SubCount color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </SubCount>
              </ChannelInfo>
            </ChannelContainer>
            <ChannelDesc color={headColor}>
              {videoDetails.description}
            </ChannelDesc>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default PlayVideoView
