import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-grey-dark">
      <div className="container mx-auto h-screen">
        <div className="flex justify-center items-center md:h-screen h-fit">
          <div className="flex md:bg-light-white rounded-3xl w-full md:w-11/12 h-full md:h-4/5">
            <div className="flex flex-col md:flex-row-reverse items-center content-center justify-center w-full h-full">
              <div className="flex w-full md:w-3/6 justify-center md:justify-start">
                <article className="text-wrap py-24 md:py-0">
                  <h1 className="text-white text-4xl font-bold">Omowumi OLABISI</h1>
                  <p className="text-white text-2xl">Développeuse Web full-stack</p>
                  <p className="text-white">Basée à Limours</p>
                  <p className="text-white">Contacter Omowumi</p>
                </article>
              </div>
              <div className="flex w-full md:w-3/6 justify-center content-center items-center h-fit">
                <video className="video-container rounded-lg " autoPlay playsinline loop muted controls>
                  <source src="/videos/video-omowumi-page-home.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
