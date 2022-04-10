import React from 'react';

import './Laurels.scss';
import { SubHeading, MenuItem, AwardCard } from '../../components';
import { images, data } from '../../constants';


const Laurels = (props) => {

  const {awards} = data;

 
 return(
  <div className="app__bg app__wrapper section__padding" id="awards">
  <div className="app__wrapper_info">
    <SubHeading title="Awards & recognition" />
    <h1 className="headtext__cormorant">Our Laurels</h1>

    <div className="app__laurels_awards">
     {
       awards && awards.map((award, index) => {
        return <AwardCard key={index} {...award}/>
       })
     }
    </div>
  </div>

  <div className="app__wrapper_img">
    <img src={images.laurels} alt="laurels_img" />
  </div>
</div>
 );

 };

export default Laurels;
