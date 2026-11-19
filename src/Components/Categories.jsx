function Categories({ categories }) {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-10 text-center sm:mb-14">
        <h6 className="text-xs font-bold tracking-wider text-lugx-pink uppercase sm:text-sm">
          Categories
        </h6>
        <h2 className="mt-1.5 text-2xl font-extrabold text-lugx-dark sm:mt-2 sm:text-3xl md:text-4xl">
          Top Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group overflow-hidden rounded-[25px] bg-lugx-blue text-center text-white"
          >
            <h4 className="py-4 text-base font-bold sm:py-5 sm:text-[17px]">{cat.name}</h4>
            <div className="overflow-hidden rounded-[25px]">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-44"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;