"use client";

import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

const ColorPicker = ({
  onChange
}: ColorPickerProps) => {
  return (
    <div>ColorPicker</div>
  )
}

export default ColorPicker