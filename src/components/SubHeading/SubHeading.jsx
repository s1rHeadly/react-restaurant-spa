import React from 'react';
import './SubHeading.scss';

import { images } from '../../constants';

const SubHeading = (props) => (
  <div className='app__subheading'>
    <p className='p__cormorant'>
      {props.title}
    </p>
    <img src={images.spoon} alt="spoon" />
  </div>
);


SubHeading.defaultProps = {
  title: 'Subheading title'
}

export default SubHeading;
