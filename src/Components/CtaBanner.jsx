import { siteImages } from '../data/gamesData';

function CtaBanner() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="pointer-events-none absolute top-0 left-1/2 hidden -translate-x-1/2 lg:block">
        <img
          src={siteImages.ctaBg}
          alt="CTA Background"
          className="h-[460px] w-[480px] rounded-[25px] object-cover"
        />
      </div>

      <div className="relative z-10 grid items-end gap-6 lg:grid-cols-12 lg:gap-8 lg:pt-12">
        <div className="rounded-[25px] bg-[#f7f7f7] p-6 sm:p-10 md:p-12 lg:col-span-5">
          <h6 className="text-xs font-bold tracking-wider text-lugx-pink uppercase sm:text-sm">
            Our Shop
          </h6>
          <h2 className="mt-3 mb-4 text-2xl leading-snug font-extrabold text-lugx-dark sm:mt-4 sm:mb-6 sm:text-3xl">
            Go Pre-Order Buy &amp; Get Best <em className="not-italic text-lugx-blue">Prices</em>{' '}
            For You!
          </h2>
          <p className="mb-6 text-sm leading-6 font-semibold text-gray-600 sm:mb-8 sm:leading-7">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.
          </p>
          <a
            href="#trending"
            className="inline-block rounded-full bg-lugx-pink px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase transition hover:bg-lugx-blue sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Shop Now
          </a>
        </div>

        <div className="hidden lg:col-span-2 lg:block" />

        <div className="rounded-[25px] bg-[#f7f7f7] p-6 sm:p-10 md:p-12 lg:col-span-5">
          <h6 className="text-xs font-bold tracking-wider text-lugx-pink uppercase sm:text-sm">
            NEWSLETTER
          </h6>
          <h2 className="mt-3 mb-6 text-2xl leading-snug font-extrabold text-lugx-dark sm:mt-4 sm:mb-8 sm:text-3xl">
            Get Up To $100 Off Just Buy{' '}
            <em className="not-italic text-lugx-blue">Subscribe</em> Newsletter!
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
            <input
              type="email"
              required
              placeholder="Your email..."
              className="h-12 w-full rounded-full bg-white pr-32 pl-5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none sm:h-13 sm:pr-38 sm:pl-6"
            />
            <button
              type="submit"
              className="absolute right-0 h-12 cursor-pointer rounded-full bg-lugx-pink px-4 text-[11px] font-semibold tracking-wider text-white uppercase transition hover:bg-lugx-blue sm:h-13 sm:px-6 sm:text-xs"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;