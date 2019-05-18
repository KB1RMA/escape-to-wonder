import React, { Fragment } from 'react';
import { arrayOf, shape, func, string } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const ImageController = ({ dispatch, images }) => (
  <div className="image-controller-contain">
    {images.map((image, i) => (
      <Fragment>
        <div className="image">
          <Typography id="label">Opacity: {image.src} </Typography>
          <Slider
            value={image.opacity}
            onChange={(e, val) => {
              dispatch({ type: 'opacity', opacity: val, index: i });
            }}
          />
        </div>
      </Fragment>
    ))}
    <style jsx>
      {`
        .image-controller-contain {
          position: absolute;
          top: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.6);
          padding: 0 10px;
        }

        .image {
          margin: 15px 0;
        }
      `}
    </style>
  </div>
);

ImageController.propTypes = {
  dispatch: func,
  images: arrayOf(
    shape({
      src: string,
      opacity: string,
    }),
  ),
};

export default ImageController;
