"use client";

import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";


interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardButton = ({
  orgId,
  disabled
}: NewBoardButtonProps) => {

  const create = useMutation(api.board.create);

  const onClick = () => {
    create({
      orgId,
      title: "Untitled"
    })
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 hover:bg-blue-800 rounded-lg flex flex-col items-center justify-center py-6",
        disabled && "opacity-75"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">
        New Board
      </p>
    </button>
  )
}

export default NewBoardButton