function Features({ features }) {
  return (
    <section className="relative z-20 -mt-12 px-4 sm:-mt-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {features.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer rounded-[25px] bg-white px-5 py-7 text-center shadow-[0_0_15px_rgba(0,0,0,0.12)] transition duration-300 sm:px-6 sm:py-9"
          >
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-lugx-blue transition duration-300 group-hover:bg-lugx-pink sm:mb-6 sm:h-22 sm:w-22">
              <img src={item.icon} alt={item.title} className="w-10 sm:w-11" />
            </div>
            <h4 className="text-base font-bold tracking-wide text-lugx-dark uppercase sm:text-[17px]">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;