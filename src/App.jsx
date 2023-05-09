import CrossIcon from "./components/components/icons/Crossicon";
import MoonIcon from "./components/components/icons/Moonicon";
const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-semibold letter tracking-[0.5em]">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-red-400"/>
          </button>
        </div>
        <form className=" flex rounded-md mt-8 bg-white overflow-hidden py-2 gap-4 items-center px-3">
          <span className="rounded-full inline-block border-2 h-4 w-4"></span>
          <input
            type="text"
            placeholder="Create a new ToDo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>

      <main className="container mx-auto mt-5 px-3">
        <div className="bg-white rounded-md [&>article]:p-3">
          <article className="flex gap-4 border-b">
            <button className="rounded-full inline-block border-2 h-4 w-4 flex-none"></button>
            <p className="text-gray-400 flex-grow">Complete Online js curse</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b">
            <button className="rounded-full inline-block border-2 h-4 w-4 flex-none"></button>
            <p className="text-gray-400 flex-grow">Complete Online js curse</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b">
            <button className="rounded-full inline-block border-2 h-4 w-4 flex-none"></button>
            <p className="text-gray-400 flex-grow">Complete Online js curse</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="py-3 px-3 flex justify-between">
            <span className="text-gray-400">5 item left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-3 mt-5">
        <div className="bg-white rounded-md p-3 flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center mt-5">Drag and drop reoder list</p>
    </div>
  );
};
export default App;
