"use client";

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

  // Case where user search for something that does exist
  if (!data.length && query.search) {
    return (
      <div>
        Try searching for something else
      </div>
    )
  };

  // no favourites case
  if (!data?.length && query.favourites) {
    return (
      <div>
        No favourites
      </div>
    )
  };

  // no boards case
  if (!data?.length) {
    return (
      <div>
        No boards at all
      </div>
    )
  }

  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
}

export default BoardList