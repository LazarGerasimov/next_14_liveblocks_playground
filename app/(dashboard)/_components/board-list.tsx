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

  



  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
}

export default BoardList