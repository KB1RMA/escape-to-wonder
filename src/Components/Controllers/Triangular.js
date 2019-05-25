/* global window */
/* eslint-disable operator-linebreak */
import React, { useMemo, useEffect, useCallback } from 'react';
import ReactCursorPosition from 'react-cursor-position';

const ListenerWrapper = ({ dispatch }) => {
  const Listener = ({
    isActive,
    position: { x, y },
    elementDimensions: { height, width },
  }) => {
    console.log(x, y, width, height);
    const diagonalWidthContainer = useMemo(() => {
      const a = 0 - width;
      const b = 0 - height;

      const diagonalWidth = Math.sqrt(a * a + b * b).toFixed(0);
      return diagonalWidth;
    }, [height, width]);

    // Opacity on first image is determined by plane of 0degrees (up and down, so we
    //  determine the percentage based on how far the cursor is from the _bottom_ of the
    //  rectangle to the top.
    const opacity0 = useMemo(() => (((height - y) / height) * 100).toFixed(1), [
      height,
      y,
    ]);

    // Opacity on second image is a percentage of the distance traveled across a
    //   plane 90 degrees diagonal inside the square. So calculate the cursor's
    //   distance from the top-left of the rectangle to the bottom-right.
    const opacity1 = useMemo(() => {
      const a = width - x;
      const b = height - y;
      const diagonalPos = Math.sqrt(a * a + b * b).toFixed(1);

      // What percentage of the total distance is the current position?
      return (
        ((diagonalWidthContainer - diagonalPos) / diagonalWidthContainer) *
        100
      ).toFixed(1);
    }, [width, x, height, y, diagonalWidthContainer]);

    // Opacity on third image is a percentage of the distance traveled across a
    //   plane -90 degrees diagonal of the square. So calculate the cursor's
    //   distance from the top-right of the rectangle to the bottom-left.
    const opacity2 = useMemo(() => {
      const a = height - y;
      const b = 0 - x;
      const diagonalPos = Math.sqrt(a * a + b * b).toFixed(1);

      // What percentage of the total distance is the current position?
      return (
        ((diagonalWidthContainer - diagonalPos) / diagonalWidthContainer) *
        100
      ).toFixed(1);
    }, [x, y, height, diagonalWidthContainer]);

    // Store a memoized callback to send to requestAnimationFrame
    const dispatchImageUpdates = useCallback(() => {
      dispatch({
        type: 'batch_update_opacity',
        imagesToUpdate: [
          { index: 0, opacity: opacity0 },
          { index: 1, opacity: opacity1 },
          { index: 2, opacity: opacity2 },
        ],
      });
    }, [opacity0, opacity1, opacity2]);

    // Trigger a rerender of the images with their new opacities in the DOM
    useEffect(() => {
      if (!isActive) return undefined;

      window.requestAnimationFrame(dispatchImageUpdates);

      return undefined;
    }, [dispatchImageUpdates, isActive, opacity0, opacity1, opacity2]);

    return null;
  };

  return (
    <ReactCursorPosition className="position-listener">
      <Listener />
    </ReactCursorPosition>
  );
};

const TriangularController = ({ images, dispatch }) => (
  <div className="triangular-controller-wrapper">
    <div className="triangle-display" />
    <ListenerWrapper dispatch={dispatch} />
    {images.map((image, i) => (
      <div className={`opacity-of opacity-of-${i}`}>{image.opacity}%</div>
    ))}
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
            width: 100%;
            height: 100%;
            border: solid 1px rgba(0, 0, 0, 0.2);
          }

          .triangle-display {
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.2);

            clip-path: polygon(50% 0, 0 100%, 100% 100%);
          }

          .opacity-of {
            position: absolute;
            color: #fff;

            &-0 {
              left: 50%;
              top: -30px;
              transform: translateX(-50%);
            }

            &-1 {
              right: -40px;
              bottom: -30px;
              transform: translateX(-50%);
            }
          }
        }
      `}
    </style>
  </div>
);

export default TriangularController;
