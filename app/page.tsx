import Image from "next/image";

const ICON_SIZE = 50;

export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center bg-landing-page font-sans px-4 overflow-hidden">

      <div className="absolute 
                -top-100 -right-100 
                md:-top-50 md:-right-60 
                w-150 h-150
                bg-[radial-gradient(circle,rgba(46,170,79,0.1))]
                blur-3xl
                pointer-events-none z-0">
      </div>
      <div className="absolute 
                w-150 h-150
                md:w-200 md:h-200
                bg-[radial-gradient(circle,rgba(0,174,239,0.2),transparent_70%)]
                blur-3xl
                pointer-events-none z-0">
      </div>
      <div className="absolute 
                -bottom-100 -left-100 
                md:-bottom-50 md:-left-60 
                w-150 h-150
                bg-[radial-gradient(circle,rgba(255,56,39,0.05))]
                blur-3xl
                pointer-events-none z-0">
      </div>
      {/* 📷 Photo Camera - Oculto en móvil */}
      <Image
        src="/icon_photo_camera.svg"
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="
          absolute hidden md:block
          top-[21.19%] left-[83.96%]
          opacity-60 z-0 pointer-events-none
        "
      />

      {/* ⭐ Star - Visible en todas partes */}
      <Image
        src="/icon_star.svg"
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="
          absolute
          top-[8%] left-[8%]
          md:top-[18.07%] md:left-[27.50%]
          opacity-60 z-0 pointer-events-none
        "
      />

      {/* ❤️ Favorite (left) - Visible en todas partes */}
      <Image
        src="/icon_favorite_blue.svg"
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="
          absolute
          top-[50%] left-[10%]
          md:top-[61.52%] md:left-[19.86%]
          opacity-60 z-0 pointer-events-none
        "
      />

      {/* ❤️ Favorite (right) - Visible en todas partes */}
      <Image
        src="/icon_favorite_red.svg"
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="
          absolute
          top-[75%] right-[5%]
          md:top-[82.13%] md:left-[85.83%]
          opacity-60 z-0 pointer-events-none
        "
      />

      {/* 🏆 Emoji Events - Oculto en móvil */}
      <Image
        src="/icon_emoji_events.svg"
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="
          absolute md:block
          top-[13%] left-[66%]
          md:top-[66%] md:left-[66%]
          opacity-60 z-0 pointer-events-none
        "
      />

      {/* ✨ Auto Fix High - Visible en todas partes */}
      <Image
        src="/icon_auto_fix_high.svg"
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="
          absolute
          top-[82%] left-[5%]
          md:top-[85.64%] md:left-[6.32%]
          opacity-60 z-0 pointer-events-none
        "
      />

      {/* 🚀 Shutter Speed - Oculto en móvil */}
      <Image
        src="/icon_shutter_speed.svg"
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="
          absolute hidden md:block
          top-[1%] left-[57.50%]
          opacity-60 z-0 pointer-events-none
          h-auto w-auto
        "
      />

      {/* ✔ Verified (bottom) - Oculto en móvil */}
      <Image
        src="/icon_verified green.svg"
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="
          absolute
          top-[45%] left-[52.36%]
          md:top-[85.64%] md:left-[52.36%]
          opacity-60 z-0 pointer-events-none
        "
      />

      {/* ✔ Verified (top left) - Oculto en móvil */}
      <Image
        src="/icon_verified.svg"
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="
          absolute hidden md:block
          top-[15.33%] left-[6.32%]
          opacity-60 z-0 pointer-events-none
        "
      />
      <main className="relative z-10 flex w-full max-w-3xl flex-col items-center justify-center gap-10">
        <Image
          src="/icon_logo.svg"
          alt="FotoVoto Logo"
          width={500}
          height={192}
          className="w-[75%] max-w-125 md:w-[60%] lg:w-full"
          loading="eager"
        />
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="max-w-md leading-8 text-gray-letters text-xs md:text-lg font-bold tracking-[0.35px] mb-4 md:mb-7">
            WHERE THE WORLD VOTE TOGETHER
          </p>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold tracking-tight">
            <span className="block text-white">Which is better.</span>
            <span className="block mt-4 text-orange-letters">Which is worse.</span>
          </h1>
        </div>

        <button className="btn-gradient rounded-full bg-orange-letters px-20 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 md:w-lg ">
          Coming soon!
        </button>

        <div className="flex flex-row gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/store_download_apple.svg"
              alt="Download on Apple Store"
              width={180}
              height={56}
              className="h-12 md:h-20 w-auto"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/store_download_android.svg"
              alt="Download on Google Play"
              width={180}
              height={56}
              className="h-12 md:h-20 w-auto"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
