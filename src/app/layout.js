import { Zilla_Slab } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from 'next/image'

const zilla_slab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="fr">
      <body className={zilla_slab.className}>
        <main className="bg-grey-dark h-auto md:h-full">
          <div className="container mx-auto h-full">
            <div className="flex flex-col justify-center items-center h-full">
              {children}
            </div>
          </div>
          <div className="relative h-5">
            <div className="fixed left-0 bottom-4 w-full flex flex-row justify-center">
              <div className="text-white rounded-3xl bg-light-white p-4 ">
                <ul className="flex flex-inline justify-center md:h-6 md:hover:h-auto transition-all overflow-hidden">
                  <li className="me-2 text-sm">
                    <Link href="/" title="Rendez-vous sur la page d'accueil" alt="Cliquez ici pour accéder à la page d'accueil">
                      <Image className="rounded-lg mx-auto" src="/home-icon.png"
                        width={25}
                        height={25}
                        alt="Icone representant une maison et qui fait référence à la page d'accueil" title="Cliquez sur cette icone pour aller sur la page d'accueil" />
                      Accueil</Link></li>
                  <li className="mx-2 text-sm"><Link href="/presentation" title="Rendez-vous sur la page de présentation" alt="Cliquez ici pour accéder à la page de présentation">
                    <Image className="rounded-lg mx-auto" src="/about-icon.png"
                      width={25}
                      height={25}
                      alt="Icone representant une maison et qui fait référence à la page de présentation de mon profil" title="Cliquez sur cette icone pour aller sur la page A propos" />A propos de moi</Link></li>
                  <li className="mx-2 text-sm"><Link href="/skills" title="Rendez-vous sur la page Mes compétences" alt="Cliquez ici pour accéder à la page regroupant mes compétences"> <Image className="rounded-lg mx-auto" src="/skills-icon.png"
                    width={25}
                    height={25}
                    alt="Icone representant une maison et qui fait référence à la page des compétences" title="Cliquez sur cette icone pour aller sur la page des compétences que je maîtrise" />Mes compétences</Link></li>
                  <li className="ms-2 text-sm"><Link href="/contact" title="Rendez-vous sur la page Contact" alt="Cliquez ici pour accéder à la page de contact"> <Image className="rounded-lg mx-auto" src="/contact-icon.png"
                    width={25}
                    height={25}
                    alt="Icone representant une maison et qui fait référence à la prise de contact" title="Cliquez sur cette icone pour aller sur la page de contact" />Contactez-moi</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html >
  );
}
