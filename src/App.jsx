import "./css/output.css"
import logo from "./images/logo.svg"
import logoMaster from "./images/logo-mastercraft.svg"
import close from "./images/icon-close-menu.svg"
import open from "./images/icon-hamburger.svg"
import bookmark from "./images/icon-bookmark.svg"

function App() {

  return (
    <div className="grid grid-rows-[250px_minmax(900px,_1fr)_100px] grid-cols-[1fr_3fr_1fr] place-content-center bg-slate-400/10">
      <header className="col-span-3 bg-[url(/images/image-hero-desktop.jpg)]">
        <div className="container flex items-center justify-between p-3 mx-auto">
          <img src={logo} alt="logo" />

          <button className="md:hidden">
            <img src={open} alt="" />
          </button>
          <nav className="hidden p-3 md:flex items-center gap-3">
            <a href="" className="text-gray-300 hover:text-gray-100 hover:font-bold">About</a>
            <a href="" className="text-gray-300 hover:text-gray-100 hover:font-bold">Discover</a>
            <a href="" className="text-gray-300 hover:text-gray-100 hover:font-bold">Get Started</a>
          </nav>
        </div>
      </header>
      <main className="col-start-2 col-end-3 -translate-y-20 rounded-md flex flex-col gap-3">
        <div className="rounded-md p-3 relative bg-white">
          <img src={logoMaster} alt="logo mastercraft" className="-translate-y-10 mx-auto" />

          <div className="text-center">
            <h1 className="capitalize text-2xl font-bold text-gray-900">Mastercraft bamboo monitor riser</h1>
            <p className="text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, odio.</p>
          </div>

          <div className="flex justify-between item-center mt-5">
            <button className="rounded-full p-2 cursor-pointer bg-green-900 text-white">
              Back this project
            </button>

            <button className="rounded-full p-2 cursor-pointer flex items-center gap-2  bg-gray-200">
              <img src={bookmark} className="aspect-square w-[2rem]" alt="" />
              bookmark
            </button>
          </div>
        </div>

        <div className="rounded-md p-3 bg-white">
          <div className="flex  gap-1 flex-col md:flex-row md:justify-between">
            <div className="grid gap-4 px-4">
              <h2 className="text-2xl text-gray-900 font-bold">
                ${89413}
              </h2>
              <p className="text-gray-300">
                of ${"100,000"} backed
              </p>
            </div>

            <div className="grid gap-4 border-l border-gray-200 px-4">
              <h2 className="text-2xl text-gray-900 font-bold">
                ${89413}
              </h2>
              <p className="text-gray-300">
                of ${"100,000"} backed
              </p>
            </div>

            <div className="grid gap-4 border-l border-gray-200 px-4">
              <h2 className="text-2xl text-gray-900 font-bold">
                ${"5,007"}
              </h2>
              <p className="text-gray-300">
                total backers
              </p>
            </div>
          </div>

          
        </div>

        <div className="rounded-md p-3 bg-white">
          <h2 className="text-gray-900 font-bold ">About this project</h2>
          <p className="text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, nisi adipisci? Aut ex sequi iure facere nobis soluta, cum voluptates ad, accusamus cumque quod quis asperiores placeat, dolorem tempora vitae!
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
