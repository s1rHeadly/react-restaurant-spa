import React, {useRef, useState} from 'react';
import './Intro.scss';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

const Intro = () => {

  const [play, setPlay] = useState(false);

  const videoRef = useRef(null);

  const playVideo = () => {
       setPlay(!play); // get the opposite on click
        // console.log(play);

        if(play){ // if play === true then set to pause
         videoRef.current.pause();
        }else{
          videoRef.current.play();
        }
  }

  
  

  return(
    <div className="app__video" onClick={playVideo}>
         <video
         src={meal}
         type="mp4"
         muted={true}
         loop={true}
         controls={false}
         ref={videoRef}>
         </video>

         <div className="app__video-overlay flex__center">

        <div className="app__video-overlay_circle flex__center">

        {
          play ? (<BsPauseFill color="#fff" fontSize={30} />) : (<BsFillPlayFill color="#fff" fontSize={30} />)
        }
         
  

            

        </div>
      </div>
      </div>
  );
};

export default Intro;
