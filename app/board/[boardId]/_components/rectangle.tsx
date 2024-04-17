import { RectangleLayer } from "@/types/canvas";


interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string
};


const Rectangle = ({
  id,
  layer,
  onPointerDown,
  selectionColor
}: RectangleProps) => {
  return (
    <div>Rectangle</div>
  )
}

export default Rectangle