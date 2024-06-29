import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../hook/products/view-product-details-hook';


const ProductGallery = () => {

  const { id } = useParams();
  const [item, images] = ViewProductDetailsHook(id);

  return (
    <div className='product-gallary-card d-flex justify-content-center align-items-center pt-2'>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        autoPlay={true}
        
      />
    </div>
  );
};

export default ProductGallery;
