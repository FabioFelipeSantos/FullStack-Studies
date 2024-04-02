# 1 React

- The main points about React are:
	- Components: are ways to create an application in blocks (functions files or JSX files). Nós criamos blocos em duas situações:
		- Quando percebemos um padrão de repetição. Ou seja, observamos que algo na tela repete várias vezes e conseguimos abstrair o código em um único arquivo, como se estivéssemos criando um novo elemento no HTML.
		-  Quando conseguimos desconectar uma parte da interface de outra porque elas não conversam entre si. Como se elas pudessem existir separadamente.
	- Componentes são funções que retornam HTML.
	- Props (properties):

# 2 Estendendo a Tipagem

Quando quisermos passar os atributos de um elemento HTML que se confunde com um TSX do React, podemos estender a tipagem das `props` dentro do React. Basicamente, fazemos o seguinte: suponha que um componente React é uma <code class="myCode">anchor</code>, ou seja, `<a>`. Seu código será dado por:

```typescript
interface AnchorProps {
	children: string;
}

export function Anchor(props) {
	return <a>{props.children}</a>
}
```

Como os elementos do tipo <code class="myCode">anchor</code> podem receber diversos atributos diferentes, podemos criar uma extensão para as propriedades <code class="myCode">AnchorProps</code> que irão receber os atributos do elemento <code class="myCode">anchor</code>. Para tanto, usamos o comando `interface NomeProps extends ComponentProps<a>`, e fazemos a importação do `ComponentProps` do `react`. Portanto, nosso código ficará

```typescript
import { ComponentProps } from 'react';

interface AnchorProps extends ComponentProps<"a"> {
	children: string;
}

export function Anchor(props) {
	return <a>{props.children}</a>
}
```

Agora nos resta passar os atributos que serão fornecidos à esse componente TSX. Para isso, vamos usar um spread operator na propriedade <code class="myCode">props</code>. Assim,

```typescript
import { ComponentProps } from 'react';

interface AnchorProps {
	children: string;
}

export function Anchor(props) {
	return （
		<a {...props}>{props.children}</a>
	)
}
```

Pronto, terminamos de passar os atributos para nosso <code class="myCode">anchor</code> em React. Finalmente, basta chamarmos esse componente no nosso `app.tsx`:

```ts
<Anchor href"URL para algum site">Texto que será apresentado</Anchor>
```

Dessa forma, esse <code class="myCode">anchor</code> irá apresentar o texto *"Texto que será apresentado"* enquanto que ao clicar no link, seremos encaminhados para a URL que consta no atributo `href=""`.

