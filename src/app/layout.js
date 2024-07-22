import { Zilla_Slab } from "next/font/google";
import "./globals.css";

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
        <main className="bg-grey-dark">
          <div className="container mx-auto h-screen">
            <div className="flex flex-col justify-center items-center h-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
