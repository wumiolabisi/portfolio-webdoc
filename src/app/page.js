import Button from "@/_components/Button";
import Diapositive from "@/_components/Diapositive";
import Video from "@/_components/Video";

export default function Home() {
  return (
    <Diapositive>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full h-full">
        <div className="flex flex-col w-full md:w-3/6 justify-center md:justify-start">
          <article className="text-wrap py-24 md:py-0">
            <h1 className="text-white text-4xl font-bold">Omowumi OLABISI</h1>
            <p className="text-white text-2xl">Développeuse Web full-stack</p>
            <div className="my-4">
              <p className="text-white">Basée à Limours</p>
              <p className="text-white">Disponible 🟢</p>
            </div>
            <Button href="/presentation" title="Commencer l'expérience" label="COMMENCER →" />
          </article>
        </div>
        <div className="flex flex-col w-full md:w-3/6 justify-center content-center items-center h-fit">
          <Video height="video-h-long" src="/videos/video-omowumi-page-home.mp4" replacementImg="/wumi-section-presentation-1.jpg" />
        </div>
      </div>
    </Diapositive>
  );
}
