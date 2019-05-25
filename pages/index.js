import React, { Fragment, useReducer, useContext } from 'react';
import dynamic from 'next/dynamic';
import { ImageContext } from '../src/Context/ImageContext';
import Image from '../src/Components/Image';
import ImageSettings from '../src/Components/Controllers/ImageSettings';

const SliderController = dynamic(() =>
  import('../src/Components/Controllers/Slider'),
);
const TriangularController = dynamic(() =>
  import('../src/Components/Controllers/Triangular'),
);

const reducer = (state, action) => {
  const { images } = state;

  switch (action.type) {
    case 'opacity':
      images[action.index].opacity = action.opacity;

      return {
        ...state,
        images,
      };
    case 'batch_update_opacity':
      action.imagesToUpdate.map(update => {
        images[update.index].opacity = update.opacity;
      });

      return {
        ...state,
        images,
      };
    default:
      throw new Error('Invalid action type');
  }
};

export default () => {
  const { images } = useContext(ImageContext);

  const initialState = { images };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { images: currentImages } = state;

  return (
    <Fragment>
      <div className="image-container">
        {currentImages.map(({ src, opacity }) => (
          <Image key={`image-${src}`} src={src} opacity={opacity} />
        ))}
        {/* <SliderController images={currentImages} dispatch={dispatch} /> */}
        <TriangularController images={currentImages} dispatch={dispatch} />
        {/* <ImageSettings /> */}
        <style jsx>
          {`
            .image-container {
              width: 100%;
              height: 100%;
              position: relative;
              overflow: hidden;
            }
          `}
        </style>
      </div>
    </Fragment>
  );
};
