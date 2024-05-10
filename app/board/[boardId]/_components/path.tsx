

import getStroke from 'perfect-freehand';

interface PathProps {
  x: number;
  y: number;
  points: number[][];
  fill: string;
  onPointerDown?: (e: React.PointerEvent) => void;
  stroke?: string;
};



const Path = ({
  fill,
  points,
  x,
  y,
  onPointerDown,
  stroke
}: PathProps) => {
  return (
    <path />
  )
}

export default Path