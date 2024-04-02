interface MeuBotaoProps {
  texto: string;
}

function MeuBotao(props: MeuBotaoProps) {
  return <button className="button">{props.texto}</button>;
}

export function App() {
  return (
    <div>
      <MeuBotao texto="Clique Aqui" />
      <MeuBotao texto="Botão 2" />
      <MeuBotao texto="Fábio" />
    </div>
  );
}
