import React, {useRef} from 'react';
import './Gallery.scss';


// get subheading and images
import { SubHeading} from '../../components';
import { images} from '../../constants';

// get social icons from react-icons
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';






const Gallery = () => {

  // get gallery images from the images object we imported
  const {gallery01, gallery02, gallery03, gallery04} = images;
  // add then to a new array so we can use them in a map function 
  const galleryImages = [gallery01, gallery02, gallery03, gallery04];


  const scrollRef = useRef(null);



  const scroll = (direction) => {
      // console.log(direction);
      const { current } = scrollRef;

      if (direction === 'left') {
        current.scrollLeft -= 332; // width of image plus margin right
      } else {
        current.scrollLeft += 332;
      }
   }





  
  return(
   <div className="app__gallery flex__center">


        <div className="app__gallery-content">
          <SubHeading title="instagram"/>
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button type="button" className="custom__button">View More</button>
        </div>



        <div className="app__gallery-images">
            {/* div for images */}
            <div className="app__gallery-images_container" ref={scrollRef}>
           {
           galleryImages.map((item, index) => {
             // get filename from each item
             const name = item.substring(item.lastIndexOf('/') + 1);

             return(
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={item} alt={name} />
                <BsInstagram className="gallery__image-icon"/>
              </div>
             )
              })
              
           }
            </div>

          {/* div for buttons to move left and right*/}
            <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />

            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
            </div>

        </div>

   </div>


  );
};

export default Gallery;
