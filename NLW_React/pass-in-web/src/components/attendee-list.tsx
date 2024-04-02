import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 w-72 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search
            size={"16"}
            stroke={"lightgreen"}
          />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar participante..."
            type="email"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="w-full border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="px-4 py-3 text-sm font-semibold text-left">
                <input
                  className="size-4 bg-black/20 rounded border border-white/10"
                  type="checkbox"
                />
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">Código</th>
              <th className="px-4 py-3 text-sm font-semibold text-left">Participantes</th>
              <th className="px-4 py-3 text-sm font-semibold text-left">Data de Inscrição</th>
              <th className="px-4 py-3 text-sm font-semibold text-left">Data do check-in</th>
              <th
                style={{ width: 64 }}
                className="px-4 py-3 text-sm font-semibold text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr
                  key={i}
                  className="border-b border-white/10">
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <input
                      className="size-4 bg-black/20 rounded border border-white/10"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">1234</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">Fábio Felipe dos Santos</span>
                      <span>fabiotrabmat@gmail.com</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">7 dias atrás</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">3 dias atrás</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                      <MoreHorizontal size={"16"} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                className="px-4 py-3 text-sm text-zinc-300"
                colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td
                className="px-4 py-3 text-sm text-zinc-300 text-right"
                colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft size={"16"} />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft size={"16"} />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight size={"16"} />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight size={"16"} />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
