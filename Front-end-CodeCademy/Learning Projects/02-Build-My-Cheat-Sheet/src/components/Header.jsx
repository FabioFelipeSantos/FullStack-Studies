import { Popover } from "@headlessui/react";

export default function Header(params) {
  return (
    <header className="">
      <div>
        <h1>Tópicos em Desenvolvimento WEB</h1>
        <h3>Uma versão por Fábio Santos</h3>
      </div>
      <Popover className="relative">
        <Popover.Button>Tópicos</Popover.Button>
      </Popover>
    </header>
  );
}
