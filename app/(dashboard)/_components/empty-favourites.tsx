import Image from "next/image"

const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/empty-favourites.svg"}
        height={140}
        width={140}
        alt="empty_search"
      />
      <h2 className="text-2xl font-semibold mt-6">
        No favourite boards!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Add board to your favourites.
      </p>
    </div>
  )
}

export default EmptyFavourites