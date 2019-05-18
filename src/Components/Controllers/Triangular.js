import React, { useMemo, useEffect } from 'react';
import cx from 'classnames';
import ReactCursorPosition from 'react-cursor-position';

const ListenerWrapper = ({ imageIndex, dispatch }) => {
  const Listener = ({
    isActive,
    position: { x, y },
    elementDimensions: { height, width },
  }) => {
    const diagonalWidthContainer = useMemo(() => {
      const a = 0 - width;
      const b = 0 - height;

      const diagonalWidth = Math.sqrt(a * a + b * b).toFixed(0);
      return diagonalWidth;
    }, [height, width]);

    // Opacity on first image is determined by plane of 0degrees (up and down, so we
    //   can just figure out) the percentage y is of the height.
    const opacity0 = useMemo(() => ((y / height) * 100).toFixed(1), [
      height,
      y,
    ]);

    // Opacity on second image is on a plane 90 degrees across the square. So calculate
    //   distance from the top-left of the rectance to the cursor.
    const opacity1 = useMemo(() => {
      const a = 0 - x;
      const b = 0 - y;
      const diagonalPos = Math.sqrt(a * a + b * b).toFixed(1);

      // What percentage of the total distance is the current position?
      return ((diagonalPos / diagonalWidthContainer) * 100).toFixed(1);
    }, [x, y, diagonalWidthContainer]);

    // Opacity on third image is on a plane -90 degrees across the square. So calculate
    //   distance from the top-right of the rectangle to the cursor.
    const opacity2 = useMemo(() => {
      const a = width - x;
      const b = height - y;
      const diagonalPos = Math.sqrt(a * a + b * b).toFixed(1);

      // What percentage of the total distance is the current position?
      return ((diagonalPos / diagonalWidthContainer) * 100).toFixed(1);
    }, [x, y, diagonalWidthContainer, width, height]);

    // Change index 0 image
    useEffect(() => {
      if (!isActive) return undefined;

      dispatch({
        type: 'opacity',
        index: 0,
        opacity: opacity0,
      });

      return undefined;
    }, [isActive, opacity0]);

    // Change index 1 image
    useEffect(() => {
      if (!isActive) return undefined;

      dispatch({
        type: 'opacity',
        index: 1,
        opacity: opacity1,
      });

      return undefined;
    }, [isActive, opacity1]);

    // Change index 2 image
    useEffect(() => {
      if (!isActive) return undefined;

      dispatch({
        type: 'opacity',
        index: 2,
        opacity: opacity2,
      });

      return undefined;
    }, [isActive, opacity2]);

    return null;
  };

  return (
    <ReactCursorPosition
      className={cx('position-listener', `position-key--${imageIndex}`)}
    >
      <Listener />
    </ReactCursorPosition>
  );
};

const TriangularController = ({ images, dispatch }) => (
  <div className="triangular-controller-wrapper">
    <ListenerWrapper imageIndex={0} dispatch={dispatch} />
    <style jsx>
      {`
        .triangular-controller-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 75%;
          height: 75%;

          & > :global(.position-listener) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 75%;
            height: 75%;
            border: solid 1px #000;
          }
        }
      `}
    </style>
  </div>
);

export default TriangularController;
