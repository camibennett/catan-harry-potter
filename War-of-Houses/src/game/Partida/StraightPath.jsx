import React from 'react';
import PropTypes from 'prop-types';
import { HexGrid, Layout, Hexagon } from 'react-hexgrid';

const StraightPath = ({ start, end, ...props }) => {
  const hexagonSize = 10; // Tamaño de los hexágonos
  const spacing = 1.1; // Espaciado entre hexágonos

  const getHexPixelCoordinates = ({ q, r, s }) => {
    const x = (q * hexagonSize * 1.5) + ((r % 2) * hexagonSize * 0.75);
    const y = r * hexagonSize * Math.sqrt(3) * 0.5;
    return { x, y };
  };

  const startPoint = getHexPixelCoordinates(start);
  const endPoint = getHexPixelCoordinates(end);

  const path = `M${startPoint.x},${startPoint.y} L${endPoint.x},${endPoint.y}`;

  return <path d={path} {...props} />;
};

StraightPath.propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
};

export default StraightPath;
