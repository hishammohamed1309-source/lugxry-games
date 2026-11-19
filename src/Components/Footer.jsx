import { siteImages } from '../data/gamesData';

function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${siteImages.footerBg})` }}
      className="mt-16 rounded-t-[64px] bg-lugx-blue bg-cover bg-center py-10 text-center text-white sm:mt-24 sm:rounded-t-[110px] sm:py-12 md:rounded-t-[150px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs leading-relaxed text-white sm:text-sm">
          Copyright © 2048 LUGX Gaming Company. All rights reserved. &nbsp;&nbsp; Design:
          TemplateMo
        </p>
      </div>
    </footer>
  );
}

export default Footer;