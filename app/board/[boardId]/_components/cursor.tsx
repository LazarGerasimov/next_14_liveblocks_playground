"use client";

import { memo } from "react";
import { MousePointer2 } from "lucide-react";
import { connectionIdToColor } from "@/lib/utils";

interface CursorProps {
  connectionId: string;
}

const Cursor = memo(({
  connectionId
}: CursorProps) => {
  return (
    <div>Cursor</div>
  )
}
)

Cursor.displayName = "Cursor";

export default Cursor