"use client";

import EmptyBoards from "./empty-boards";
import EmptyFavourites from "./empty-favourites";
import EmptySearch from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
};

const BoardList = ({
  orgId,
  query
}: BoardListProps) => {

  const data = []; // add API call;

  // user searches for something that does exist
  if (!data.length && query.search) {
    return (
      <EmptySearch />
    )
  };

  // no favourites case
  if (!data?.length && query.favourites) {
    return (
      <EmptyFavourites />
    )
  };

  // no boards case
  if (!data?.length) {
    return (
      <EmptyBoards />
    )
  }

  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
}

export default BoardList