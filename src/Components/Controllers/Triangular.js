import React, { useMemo, useEffect } from 'react';
import cx from 'classnames';
import ReactCursorPosition from 'react-cursor-position';

const ListenerWrapper = ({ imageIndex, dispatch }) => {
  const Listener = ({
    isActive,
    position: { y },
    elementDimensions: { height },
  }) => {
    const roundedYAxis = useMemo(() => y.toFixed(1), [y]);

    const opacity = useMemo(() => ((roundedYAxis / height) * 100).toFixed(1), [
      height,
      roundedYAxis,
    ]);

    useEffect(() => {
      if (!isActive) return undefined;

      dispatch({
        type: 'opacity',
        index: imageIndex,
        opacity,
      });
    }, [isActive, opacity]);

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
