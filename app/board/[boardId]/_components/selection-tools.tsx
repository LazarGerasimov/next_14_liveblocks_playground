"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useSelf } from "@/liveblocks.config";
import { Camera, Color } from "@/types/canvas";
import { memo } from "react";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

const SelectionTools = memo(({
  camera,
  setLastUsedColor
}: SelectionToolsProps) => {

  const selection = useSelf((me) => me.presence.selection);

  const selectionBounds = useSelectionBounds();

  if (!selectionBounds) {
    return null;
  }

  const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
  const y = selectionBounds.y + camera.y;

  return (
    <div>SelectionTools</div>
  )
})

export default SelectionTools