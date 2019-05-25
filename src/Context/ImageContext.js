import React, { createContext, useReducer } from 'react';
import { shape, string, number, arrayOf } from 'prop-types';

export const ImageContext = createContext();

/**
 * Holds current image URLs and opacity parameters for the display
 *
 * @param {Object}
 * @param {Array} param.images
 */
export const ImageContextProvider = ({
  images = [
    { src: '/static/images/one.jpg', opacity: 50 },
    { src: '/static/images/two.jpg', opacity: 50 },
    { src: '/static/images/three.jpg', opacity: 50 },
  ],
  children,
}) => {
  const [state, dispatch] = useReducer((state, action) => {}, { images });

  const { images: currentImages } = state;

  return (
    <ImageContext.Provider value={{ images: currentImages, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};

ImageContextProvider.propTypes = {
  images: arrayOf(
    shape({
      src: string,
      opacity: number,
    }),
  ),
};
