
"use client";

import { memo } from 'react';

import { useOthersConnectionIds } from '@/liveblocks.config';

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectiondId) => (
        <Cursor
          key={connectiondId}
          connectiondId={connectiondId}
        />
      ))}
    </>
  )
}

const CursorsPresence = memo(() => {
  return (
    <>
      <Cursors />
    </>
  )
}
)

CursorsPresence.displayName = "";

export default CursorsPresence;