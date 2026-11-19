import { useState, useEffect, useRef } from 'react';
import { siteImages } from '../data/gamesData';

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#top');
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const headerRef = useRef(null);

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'Our Shop', href: '#trending' },
    { label: 'Product Details', href: '#most-played' },
    { label: 'Contact Us', href: '#categories' },
  ];

  // تغيير خلفية الهيدر وتحديث القسم النشط أثناء التمرير
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const scrollPosition = window.scrollY + 160;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // إغلاق قائمة الهاتف عند الضغط خارج الهيدر أو الضغط على Escape
  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'fixed rounded-b-[25px] bg-[#0171f8] py-3.5 shadow-lg'
          : 'absolute bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* اللوجو مع بديل نصي تلقائي إذا فشل تحميل الصورة */}
        <a
          href="#top"
          onClick={() => handleLinkClick('#top')}
          className="flex shrink-0 items-center text-white"
        >
          {!logoError ? (
            <img
              src={siteImages.logo}
              alt="LUGX Logo"
              onError={() => setLogoError(true)}
              className="h-auto w-28 sm:w-36 md:w-40"
            />
          ) : (
            <span className="text-3xl font-extrabold tracking-wide text-white">
              LUGX
            </span>
          )}
        </a>

        {/* قائمة الحاسوب */}
        <nav className="hidden items-center gap-1 text-[15px] font-light text-white md:flex lg:gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`rounded-full px-4 py-2 transition ${
                activeLink === link.href
                  ? 'bg-white/15 font-normal text-white'
                  : 'hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="ml-2 cursor-pointer rounded-full bg-[#ee626b] px-6 py-2.5 text-sm font-medium tracking-wider text-white uppercase transition hover:bg-[#1e1e1e]"
          >
            SIGN IN{cartCount > 0 ? ` (${cartCount})` : ''}
          </button>
        </nav>

        {/* زر الثلاث أشرطة للهاتف */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-xl bg-white/15 text-white transition hover:bg-white/25 md:hidden"
        >
          <span
            className={`h-[2.5px] w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? 'translate-y-[7.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2.5px] w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[2.5px] w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? '-translate-y-[7.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* القائمة المنسدلة للهاتف */}
      {menuOpen && (
        <div className="mx-auto mt-3 max-w-6xl px-4 md:hidden">
          <nav className="overflow-hidden rounded-[22px] bg-white py-2 text-center shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block border-b border-gray-100 py-3.5 text-sm font-medium transition ${
                  activeLink === link.href
                    ? 'bg-pink-50/60 text-[#ee626b]'
                    : 'text-[#1e1e1e] hover:bg-gray-50 hover:text-[#ee626b]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="p-3">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-full cursor-pointer rounded-full bg-[#ee626b] py-2.5 text-sm font-semibold tracking-wider text-white uppercase transition hover:bg-[#0171f8]"
              >
                SIGN IN{cartCount > 0 ? ` (${cartCount})` : ''}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;