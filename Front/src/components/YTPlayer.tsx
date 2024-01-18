import YouTube, { YouTubeProps } from 'react-youtube';

function YoutubePlayer() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    //event.target.pauseVideo();
    event.target.mute();
    event.target.playVideo();
  }

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube style={{display: 'flex', width: '70%', height: 'auto'}} videoId="lGVi90m8yE8" opts={opts} onReady={onPlayerReady} />;
}

export default YoutubePlayer;