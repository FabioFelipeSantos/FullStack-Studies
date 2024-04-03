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


# 3 Criando uma concatenação de estilizações no Tailwind CSS

Quando for necessário que façamos a mistura ou substituição de uma estilização para um mesmo componente com Tailwind CSS, podemos utilizar um pacote para o Tailwind CSS chamado [Tailwind Merge](https://www.npmjs.com/package/tailwind-merge). Este pacote permite uma eficiente junção de classes para o Tailwind CSS sem conflito de estilizações.

Para instalação, basta utilizarmos
```cli
npm i tailwind-merge
```

Para utilização fazemos suponha o seguinte código
```JS
import { twMerge } from 'tailwind-merge';
```

Suponha o seguinte código
```JS nums
import { twMerge } from 'tailwind-merge';

twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-4 bg-[#B91C1C] border-2 border-red-500')
```

nesse exemplo, na linha 3 fazemos o merge com o comando `twMerge（）` importado. Como argumentos passamos duas classes diferentes `px-2 py-1 bg-red hover:bg-dark-red` e `p-3 bg-[#B91C1C] border-2 border-red-500`. Como temos `padding` horizontal de `3px` e um `padding` vertical de `1px` na primeira estilização, esses `padding`s serão substituídos por um único `padding` de `4px` que vem da segunda estilização. Já para o `background-color`, temos que o primeiro, `bg-red`, será substituído pelo segundo, `bg-[#B91C1C]`. Em adição à essas substituições, temos que a segunda classe também estiliza um `border` para o componente com os comandos `border-2 border-red-500` que não estão na primeira estilização. Como resultado final teremos

```html
<tag class="hover:bg-dark-red p-4 bg-[#B91C1C] border-2 border-red-500"></tag>
```


# 4 Estados

Estados em React são variáveis que podem ser observadas e quando seu valor muda aquele componente será renderizado novamente.

- Para entendermos este conceito, comecemos com o seguinte código
```ts
export function Name() {
	return <input placeHolder="Digite seu email..." type="email"></input>;
}
```
- Se trata de um elemento do tipo <code class="myCode">input</code> que pede para que o usuário digite um email. Nesse caso, temos que quando o usuário começar a digitar seu email, será disparados vários eventos para o input, de forma que podemos verificar quando e qual o valor o usuário está digitando. Logo, fazendo a seguinte modificação
```ts
function changeFunctionName() {
	console.log('teste');
}

export function Name() {
	return <input onChange={changeFunctionName} placeHolder="Digite seu email..." type="email"></input>;
}
```
- Nesse caso, criamos uma forma em JS de receber essa mudança e disparamos a chamada da função `changeFunctionName`, que irá mostrar no console a palavra <code class="myCode">teste</code> a cada caractere digitado pelo usuário.

- Podemos então modificar novamente o código para
```ts nums hl:4
let valorDigitado = '';

function changeFunctionName(event: ChangeEvent<HTMLInputElement>) {
	valorDigitado = event.target.value;
	console.log(valorDigitado);
}

export function Name() {
	return <input onChange={changeFunctionName} placeHolder="Digite seu email..." type="email"></input>;
}
```
- Agora, criamos uma variável `valorDigitado` como uma string vazia. Essa variável será a responsável por receber o valor digitado pelo usuário. Porém, para que possamos utilizar o valor digitado pelo usuário, devemos fornecer para a função `changeFunctionName` o evento que disparou sua chamada. Assim, fornecemos `event` como uma prop para a função, especificando que este evento é do tipo <code class="myCode">ChangeEvent</code>. Porém, este evento é genérico e qualquer elemento poderia disparar um evento com essa tipagem, assim, indicamos que o evento será disparado por um `HTMLInputElement`, ou seja, um elemento HTML do tipo `input`, finalmente a tipagem será `ChangeEvent<HTMLInputElement>`.
- O valor digitado pelo usuário está armazenado na variável `evento` nas propriedade `target` com a sub-propriedade `value`, portanto, o valor recebido fica como na linha 4 do código acima.
