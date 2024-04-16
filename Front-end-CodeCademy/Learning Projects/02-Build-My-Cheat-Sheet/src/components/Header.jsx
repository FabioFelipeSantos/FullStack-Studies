import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const Topicos = [
  {
    name: "Tópico 1",
    description: "Introdução ao layout em CSS",
    href: "##",
  },
  {
    name: "Tópico 2",
    description: "Teste",
    href: "##",
  },
  {
    name: "Tópico 3",
    description: "Teste",
    href: "##",
  },
  {
    name: "Tópico 4",
    description: "Teste",
    href: "##",
  },
  {
    name: "Tópico 5",
    description: "Teste",
    href: "##",
  },
  {
    name: "Tópico 6",
    description: "Teste",
    href: "##",
  },
  {
    name: "Tópico 7",
    description: "Teste",
    href: "##",
  },
  {
    name: "Tópico 8",
    description: "Teste",
    href: "##",
  },
];

export default function Header() {
  return (
    <header className="flex justify-around items-center bg-red-500/50 p-7">
      <div className="flex-1 ml-4">
        <h1 className="text-5xl">Tópicos em Desenvolvimento WEB</h1>
        <h3 className="text-xl text-slate-300 ml-4 mt-2">
          Uma versão por
          <a href="#" className="">
            {" "}
            Fábio Santos
          </a>
        </h3>
      </div>
      <div className="w-[15%] text-right px-4 mr-9">
        <Popover className="relative border">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "text-white" : "text-white/90"} group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
              >
                <span className="text-2xl">Tópicos</span>
                <ChevronDownIcon
                  className={`${open ? "text-orange-300" : "text-orange-300/70"} 
                  ml-2 size-9 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-sm px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {Topicos.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                        >
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </header>
  );
}
