import React, { Fragment } from 'react';
import { string } from 'prop-types';

const Image = ({ opacity = 100, src = '' }) => {
  const styleOpacity = opacity / 100;
  return (
    <Fragment>
      <div
        style={{
          opacity: styleOpacity,
          backgroundImage: `url(${process.env.BACKEND_URL}${src})`,
        }}
      />
      <style jsx>
        {`
          div {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background-size: cover;
          }
        `}
      </style>
    </Fragment>
  );
};

Image.propTypes = {
  opacity: (props, propName) => {
    const val = props[propName];

    if (val > 100 || val < 0) {
      return new Error('Opacity must be between 0 and 100');
    }

    return null;
  },
  src: string.isRequired,
};

export default Image;
