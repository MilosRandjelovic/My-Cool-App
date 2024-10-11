import "../assets/main.css"
import Footer from "../components/Footer"
import NavLink from "../components/NavLink"

export const metadata = {
  title: "My Cool App",
  description: "Funny app created by Next.js and Strapi"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-200 min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
          <div className="absolute z-0 inset-0 overflow-hidden">
            <div className="circle-one blur-3xl w-64 h-64 rounded-full bg-rose-400/60 top-0 right-28 absolute"></div>
            <div className="circle-two blur-3xl w-64 h-64 rounded-full bg-indigo-400/60 bottom-0 left-28 absolute"></div>
          </div>
          <header className="bg-white/50 backdrop-blur z-10">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <h2 className="text-2xl text-gray-500 py-6">My Cool Project</h2>
              <nav>
                <ul className="flex gap-x-7 text-gray-500 text-sm">
                  <li>
                    <NavLink text="Home" path="/" />
                  </li>
                  <li>
                    <NavLink text="Our Team" path="/our-team" />
                  </li>
                  <li>
                    <NavLink text="About Us" path="/about-us" />
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="backdrop-blur z-10 max-w-4xl mx-auto bg-white/50 rounded-xl py-7 px-8 m-6 overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}