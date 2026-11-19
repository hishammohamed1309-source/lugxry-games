function TrendingGames({ games, onAddToCart }) {
  return (
    <section id="trending" className="mx-auto max-w-6xl px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-20">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
        <div>
          <h6 className="text-xs font-bold tracking-wider text-lugx-pink uppercase sm:text-sm">
            Trending
          </h6>
          <h2 className="mt-1.5 text-2xl font-extrabold text-lugx-dark sm:mt-2 sm:text-3xl md:text-4xl">
            Trending Games
          </h2>
        </div>
        <a
          href="#most-played"
          className="rounded-full bg-lugx-pink px-6 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition hover:bg-lugx-blue sm:px-7 sm:py-3 sm:text-sm"
        >
          View All
        </a>
      </div>

      {games.length === 0 ? (
        <div className="rounded-[25px] bg-[#eeeeee] p-10 text-center text-sm text-gray-600">
          لا توجد ألعاب مطابقة لنتيجة البحث الحالية.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="group overflow-hidden rounded-[25px] bg-[#eeeeee]"
            >
              <div className="relative overflow-hidden rounded-[25px]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-52"
                />
                <span className="absolute top-4 right-4 rounded-xl bg-lugx-blue px-3 py-1.5 text-right leading-tight text-white">
                  {game.oldPrice && (
                    <em className="block text-xs font-normal not-italic line-through opacity-85">
                      {game.oldPrice}
                    </em>
                  )}
                  <strong className="text-sm font-bold sm:text-base">{game.price}</strong>
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-5 sm:p-6">
                <div className="min-w-0">
                  <span className="mb-1 block text-xs text-gray-500 sm:text-sm">
                    {game.category}
                  </span>
                  <h4 className="truncate text-base font-bold text-lugx-dark transition group-hover:text-lugx-blue sm:text-[17px]">
                    {game.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => onAddToCart(game)}
                  aria-label={`Add ${game.title} to cart`}
                  className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-lugx-pink text-white transition group-hover:bg-lugx-blue"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default TrendingGames;