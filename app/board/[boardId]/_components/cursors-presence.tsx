
"use client";

import { memo } from 'react';

import { useOthersConnectionIds } from '@/liveblocks.config';
import Cursor from './cursor';

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectiondId) => (
        <Cursor
          key={connectiondId}
          connectionId={connectiondId}
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