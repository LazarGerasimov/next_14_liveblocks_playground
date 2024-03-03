"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";


const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button>
            <Plus className="text-white"/>
          </button>
        </div>
      </DialogTrigger>
    </Dialog>
  )
}

export default NewButton;