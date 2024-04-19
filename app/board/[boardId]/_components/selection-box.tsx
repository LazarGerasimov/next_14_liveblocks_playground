"use client";

import { memo } from "react";


interface SelectionBoxProps {
  onResizeHandlePointerDown: () => void;
}

const SelectionBox = memo(({
  onResizeHandlePointerDown
}: SelectionBoxProps) => {
  return (
    <div>SelectionBox</div>
  )
}
)

export default SelectionBox