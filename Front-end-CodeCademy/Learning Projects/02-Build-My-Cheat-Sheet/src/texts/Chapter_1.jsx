import Paragraph from "../components/Paragraph";

export default function Chapter1() {
  return (
    <section className="bg-slate-800/75 p-8 rounded-2xl mt-9">
      <h2 className="text-4xl mb-9">Sobre mim e sobre esse projeto</h2>
      <Paragraph>
        A ideia é simples: irei fazer um caderno de notas nessa página. Nada
        melhor do que criar uma página, para aprender como criar páginas (
        <em className="text-orange-500">pelo menos é o que eu acho!</em>)
      </Paragraph>
      <Paragraph>
        Meu nome é Fábio e sou formado em Matemática e por muitos anos eu
        trabalhei em sala de aula, ensinando diversos tópicos para diferentes
        cursos, embora a maioria foi para curso superior. Porém, em 2023, por
        acontecimentos os quais eu não tinha nenhum controle, acabei que
        precisei me afastar das salas de aula, e para não viver um ócio (eu
        preciso sempre fazer algo), decidi me especializar em desenvolvimento
        web, principalmente Fullstack.
      </Paragraph>
      <Paragraph>
        Eu já vinha programando por muito tempo, principalmente por que eu
        dediquei boa parte da minha jornada como professor em pesquisas voltadas
        para a Análise Estrutural (um tópico deveras interessante da Engenharia
        Civil) e também em Otimização. Ambas áreas requerem um nível
        intermediário a avançado em conhecimento sobre código, implementação
        algorítmica e resolução de problemas. Logo, tive oportunidade de
        aprender e aplicar diversas linguagens de programação, porém, eu
        trabalhei a maior parte do tempo com o <code>Matlab</code>, que usa uma
        versão de
        <code>C++</code>, e com o <code>Python</code>. Agora, estou dando essa
        nova guinada na minha vida, então o jeito é estudar mais e mais, para
        conseguir pelo menos fazer um site decente.
      </Paragraph>
      <Paragraph>
        Eu não seguirei uma estrutura igual muitos cursos fazem, até porquê eu
        estou pegando informação e lendo coisas de tantos lugares diferentes que
        seria complicado fazer um caminho certo de aprendizagem. A questão é: eu
        preciso saber? Então estará nesse site. Quem sabe em um futuro eu possa
        organizar melhor este projeto. Mas não é o intuito. Então sem mais
        delongas, bora para o primeiro tópico.
      </Paragraph>
    </section>
  );
}
