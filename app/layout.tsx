import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center p-8 my-6">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
        <br />
        <Link href="/">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Tech Blog</h1>
        </Link><br />
        <p className="text-slate-600">🤟 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="bg-white w-full mt-12 py-6 text-center text-slate-400">
        <h3>by cxsmicguy</h3>
      </div>
    </footer>

  );

  return (
    <html>
      <head />
      <body className="bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-50">
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
        </div>
        {footer}
      </body>
    </html>
  );
}
