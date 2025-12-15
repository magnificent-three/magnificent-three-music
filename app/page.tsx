import Image from "next/image";
import Link from "next/link";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";
import "./backgroundslideshow.module.css";

export default function Home() {
  return (
    <div className="flex justify-center font-sans">
      <BackgroundSlideshow />
      <main
        className="flex p-8 w-full h-screen max-w-3xl flex-col items-center text-center sm:items-start z-10 bg-black opacity-70"
        style={{ padding: "32px"! }}
      >
        <div className="items-center text-center flex-col flex w-full px-8">
          <h1 className="text-5xl my-8 text-orange-300 w-full text-center font-antique-bold">
            Magnificent Three Music
          </h1>
          <h2 className="text-4xl mb-8 text-orange-200 w-full text-center font-antique">
            Story. Composition. Magic.
          </h2>
        </div>
        <div className="flex grid-rows-1 lg:grid-cols-2 w-full justify-start text-center px-8 mb-8">
          <div className="col-auto md:mr-10 opacity-100!">
            <Link
              href="https://www.youtube.com/@burningdown-rocks/videos"
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
        </div>

        <p className="text-xl mb-3 text-orange-300 w-full text-justify">
          What is Magnificent Three Music?
        </p>
        <p className="text-lg mb-3 text-orange-200 w-full text-justify">
          We&apos;re a small, independent music publishing company (ASCAP) with
          two artists on our roster, <strong>Burningdown</strong> (Alternative
          Rock), and <strong>Heart of Cygnus</strong> (Progressive Metal).
        </p>
        <p className="text-xl mb-3 text-orange-300 w-full text-justify">
          What are the Magnificent Three?
        </p>
        <p className="text-lg mb-3 text-orange-200 w-full text-justify">
          These are the three ingredients that make great music: A compelling{" "}
          <strong>Story</strong>, great <strong>Composition</strong>, and a bit
          of <strong>Magic</strong> from the soul of the artist.
        </p>
        <p className="text-xl mb-3 text-orange-300 w-full text-justify">
          Is Magnificent Three Music a One Stop Shop for licensing?
        </p>
        <p className="text-lg mb-3 text-orange-200 w-full text-justify">
          Yes! We own all the rights for our music - songwriter, publishing, and
          sound recording.
        </p>
        <div className="flex w-full gap-8 justify-center text-center">
          <a
            href="mailto:info@magnificentthreemusic.com"
            className="text-orange-300 text-xl"
          >
            Contact info@magnificentthreemusic.com
          </a>
        </div>
      </main>
    </div>
  );
}
