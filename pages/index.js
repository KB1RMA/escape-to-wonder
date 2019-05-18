import React, { Fragment, useReducer } from 'react';
import Image from '../src/Components/Image';
import ImageController from '../src/Components/Controller';

const reducer = (state, action) => {
  const { images } = state;

  switch (action.type) {
    case 'opacity':
      images[action.index].opacity = action.opacity;

      return {
        ...state,
        images,
      };
    default:
      throw new Error('Invalid action type');
  }
};

export default () => {
  const initialState = {
    images: [
      { src: '/static/images/one.jpg', opacity: 50 },
      { src: '/static/images/two.jpg', opacity: 50 },
      { src: '/static/images/three.jpg', opacity: 50 },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { images } = state;

  return (
    <Fragment>
      <div className="image-container">
        {images.map(({ src, opacity }, i) => (
          <Image key={`image-${src}`} src={src} opacity={opacity} />
        ))}
        <ImageController images={images} dispatch={dispatch} />
        <style jsx>
          {`
            .image-container {
              width: 100%;
              height: 100%;
              position: relative;
            }
          `}
        </style>
      </div>
    </Fragment>
  );
};
