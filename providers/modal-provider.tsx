"use client";

import { useEffect, useState } from "react";

import { RenameModal } from "@/components/rename-modal";

export const ModalProvider = () => {

  // Prevent hydration errors
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <RenameModal />
      {/* Additional modals */}
    </>
  )
}