import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center font-sans bg-black">
      <main className="flex w-full max-w-3xl flex-col justify-between  bg-black sm:items-start">
        <Image
          src="/M3MLogoSquare1800x1800.png"
          alt="Magnificent Three Music"
          width={1800}
          height={1800}
          priority
        />
        <div className="flex w-full gap-8 justify-center text-center">
          <a
            href="mailto:info@magnificentthreemusic.com"
            className="text-orange-300"
          >
            Contact info@magnificentthreemusic.com
          </a>
        </div>
        <div className="flex grid-rows-1 lg:grid-cols-3 min-h-dvh w-full gap-8 mt-10 justify-start text-center">
          <div className="col-automd:mr-10">
            <Link
              href="https://www.heartofcygnus.com/"
              className="cursor-pointer"
              target="_blank"
              title="Heart of Cygnus"
            >
              <Image
                src="/HoCLogo2025.jpg"
                alt="Heart of Cygnus"
                width={1000}
                height={1000}
                priority
                className="rounded-lg"
              />
            </Link>
          </div>
          <div className="col-auto md:mr-10">
            <Link
              href="https://burningdown.bandcamp.com/"
              className="cursor-pointer"
              target="_blank"
              title="Burningdown"
            >
              <Image
                src="/BDHoldOnCDCoverFleurDeLis6.4.jpg"
                alt="Burningdown"
                width={1000}
                height={1000}
                priority
                className="rounded-lg"
              />
            </Link>
          </div>
          <div className="col-auto">
            <Link
              href="https://www.jeffreyrobertlane.com/"
              className="cursor-pointer"
              target="_blank"
              title="Jeffrey Robert Lane"
            >
              <Image
                src="/jeff_joshuatree_flyingv_cropped.png"
                alt="Jeffrey Robert Lane"
                width={1000}
                height={1000}
                priority
                className="rounded-lg"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
