"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import EmptyBoards from "./empty-boards";
import EmptyFavourites from "./empty-favourites";
import EmptySearch from "./empty-search";
import { Loading } from "@/components/auth/loading";

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

  const data = useQuery(api.boards.get, {
    orgId
  });

  if (data === undefined) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

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
      {JSON.stringify(data)}
    </div>
  )
}

export default BoardList