import React from 'react'

const AwardCard = (props) => (
    <div className="app__laurels_awards-card">
      <img src={props.imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{props.title}</p>
        <p className="p__opensans">{props.subtitle}</p>
      </div>
    </div>
  );

export default AwardCard