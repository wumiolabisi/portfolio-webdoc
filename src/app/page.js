import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-grey-dark">
      <div className="container mx-auto h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="flex md:bg-light-white rounded-3xl w-11/12 h-4/5">
            <div className="flex md:flex-row-reverse items-center content-center justify-center w-full h-full">
              <div className="flex w-3/6 justify-start">
                <article className="text-wrap">
                  <h1 className="text-white text-4xl font-bold">Omowumi OLABISI</h1>
                  <p className="text-white text-2xl">Développeuse Web full-stack</p>
                  <p className="text-white">Basée à Limours</p>
                  <p className="text-white">Contacter Omowumi</p>
                </article>
              </div>
              <div className="flex w-3/6 justify-evenly items-center h-full">
                <video className="video-container rounded-lg " autoPlay width="320" height="240" playsinline loop muted controls>
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
