import { siteImages } from '../data/gamesData';

function HeroSection({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    e.preventDefault();
    document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      style={{ backgroundImage: `url(${siteImages.bannerBg})` }}
      className="rounded-b-[64px] bg-[#0171f8] bg-cover bg-center pt-28 pb-28 text-white sm:rounded-b-[110px] sm:pt-36 sm:pb-40 md:rounded-b-[150px]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="text-center lg:col-span-7 lg:text-left">
          <h6 className="mb-2 text-sm font-medium tracking-wider uppercase sm:mb-3 sm:text-lg">
            Welcome to lugx
          </h6>
          <h2 className="mb-6 text-3xl leading-tight font-extrabold uppercase sm:mb-8 sm:text-4xl md:text-5xl">
            <span className="relative inline-block">
              BEST
              <img
                src={siteImages.captionDec}
                alt=""
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2"
              />
            </span>{' '}
            GAMING SITE EVER!
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-6 text-white/95 sm:mb-10 sm:text-[15px] sm:leading-7 lg:mx-0">
            LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites.
            You can download and use this layout for commercial purposes. Please tell your friends
            about TemplateMo.
          </p>

          <form
            onSubmit={handleSearch}
            className="relative mx-auto flex max-w-md items-center rounded-full bg-white shadow-lg lg:mx-0"
          >
            <input
              type="text"
              placeholder="Type Something"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 w-full rounded-full bg-transparent pr-28 pl-5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none sm:h-13 sm:pr-36 sm:pl-6"
            />
            <button
              type="submit"
              className="absolute right-0 h-12 cursor-pointer rounded-full bg-[#ee626b] px-4 text-xs font-medium text-white uppercase transition hover:bg-[#0171f8] sm:h-13 sm:px-7 sm:text-sm"
            >
              Search Now
            </button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-[270px] sm:max-w-[340px] lg:max-w-[360px]">
            <img
              src={siteImages.bannerGame}
              alt="Featured Banner Game"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/360x400/0f172a/ffffff?text=LUGX+Game';
              }}
              className="w-full rounded-[25px] shadow-2xl"
            />
            <span className="absolute top-4 right-4 rounded-full bg-[#0171f8] px-3.5 py-1 text-base font-bold text-white shadow-md sm:top-5 sm:right-5 sm:px-4 sm:py-1.5 sm:text-xl">
              $22
            </span>
            <span className="absolute -bottom-4 -left-3 flex h-18 w-18 items-center justify-center rounded-full bg-[#ee626b] text-lg font-extrabold text-white shadow-lg sm:-bottom-6 sm:-left-6 sm:h-24 sm:w-24 sm:text-2xl">
              -40%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;