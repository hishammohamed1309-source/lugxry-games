function MostPlayed({ games }) {
  return (
    <section
      id="most-played"
      className="rounded-[56px] bg-[#f7f7f7] py-16 sm:rounded-[100px] sm:py-24 md:rounded-[150px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <h6 className="text-xs font-bold tracking-wider text-lugx-pink uppercase sm:text-sm">
              TOP GAMES
            </h6>
            <h2 className="mt-1.5 text-2xl font-extrabold text-lugx-dark sm:mt-2 sm:text-3xl md:text-4xl">
              Most Played
            </h2>
          </div>
          <a
            href="#categories"
            className="rounded-full bg-lugx-pink px-6 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition hover:bg-lugx-blue sm:px-7 sm:py-3 sm:text-sm"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative rounded-[25px] bg-white pb-8 text-center shadow-sm"
            >
              <div className="overflow-hidden rounded-[25px]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-105 lg:h-36"
                />
              </div>

              <div className="px-3 pt-4">
                <span className="mb-1 block text-xs text-gray-500">{game.category}</span>
                <h4 className="truncate text-base font-bold text-lugx-dark transition group-hover:text-lugx-blue">
                  {game.title}
                </h4>
              </div>

              <button
                type="button"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 cursor-pointer rounded-full bg-lugx-pink px-5 py-2 text-xs font-semibold tracking-wider text-white uppercase transition group-hover:bg-lugx-blue"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MostPlayed;