import React, { Fragment } from 'react';
import { arrayOf, shape, func, string, number } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const SliderController = ({ dispatch, images }) => (
  <div className="image-controller-contain">
    {images.map((image, i) => (
      <Fragment key={`image-control-${image.src}`}>
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

SliderController.propTypes = {
  dispatch: func,
  images: arrayOf(
    shape({
      src: string,
      opacity: number,
    }),
  ),
};

export default SliderController;
