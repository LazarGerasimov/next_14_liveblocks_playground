"use client";

import { Camera, Color } from "@/types/canvas";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

const SelectionTools = ({
  camera,
  setLastUsedColor
}: SelectionToolsProps) => {
  return (
    <div>SelectionTools</div>
  )
}

export default SelectionTools