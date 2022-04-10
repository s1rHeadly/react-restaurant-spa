import React from 'react';
import './SubHeading.scss';

import { images } from '../../constants';

const SubHeading = (props) => (
  <div className='app__subheading'>
    <p className='p__cormorant'>
      {props.title}
    </p>
    <img src={props.img} alt="spoon" />
  </div>
);


SubHeading.defaultProps = {
  title: 'Subheading title',
  img: images.spoon,
}

export default SubHeading;
