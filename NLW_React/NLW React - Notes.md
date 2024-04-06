# 1 React

- The main points about React are:
	- Components: are ways to create an application in blocks (functions files or JSX files). Nós criamos blocos em duas situações: ^33b207
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
```JS
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
```ts title=usando-estados-no-react.tsx
export function UsandoEstadosNoReact() {
	return (
		<div>
			<input placeHolder="Digite seu email..." type="email"></input>;
		</div>		
	)
}
```
- Se trata de um elemento do tipo `{html}<input>` que pede para que o usuário digite um email. Nesse caso, temos que quando o usuário começar a digitar seu email, será disparados vários eventos para o input, de forma que podemos verificar quando e qual o valor o usuário está digitando. Logo, podemos fazer a seguinte modificação:
```ts title=usando-estados-no-react.tsx
export function UsandoEstadosNoReact() {
	function changeFunctionName() {
		console.log('teste');
	}
	
	return (
		<div>
			<input onChange={changeFunctionName} placeHolder="Digite seu email..." type="email"></input>;
		</div>		
	)
}
```
- Nesse caso, criamos uma forma em JS de receber essa mudança e disparamos a chamada da função `{js}changeFunctionName`, que irá mostrar no console a palavra `{js} "teste"` a cada caractere digitado pelo usuário.

- Podemos então modificar novamente o código para
```ts title=usando-estados-no-react.tsx info:7 note:1
import { ChangeEvent } from 'react';

export function UsandoEstadosNoReact() {
	let valorDigitado = '';

	function changeFunctionName(event: ChangeEvent<HTMLInputElement>) {
		valorDigitado = event.target.value;
		console.log(valorDigitado);
	}

	return (
		<div>
			<input onChange={changeFunctionName} placeHolder="Digite seu email..." type="email"></input>;
		</div>		
	)
}
```
- Agora, criamos uma variável `{js} valorDigitado=''` como uma string vazia. Essa variável será a responsável por receber o valor digitado pelo usuário. Porém, para que possamos utilizar o valor digitado pelo usuário, devemos fornecer para a função `{js}changeFunctionName` o evento que disparou sua chamada. Assim, fornecemos `{js}event` como uma prop para a função, especificando que este evento é do tipo `{ts}ChangeEvent` do React, importado na linha 1. Porém, este evento é genérico e qualquer elemento poderia disparar um evento com essa tipagem, assim, indicamos que o evento será disparado por um `{ts}HTMLInputElement`, ou seja, um elemento HTML do tipo `{html}<input>`, finalmente a tipagem será `{ts} ChangeEvent<HTMLInputElement>`.
- O valor digitado pelo usuário está armazenado na variável `evento` nas propriedade `target` com a sub-propriedade `value`, portanto, o valor recebido fica como na linha 7 do código acima.
- Porém, observe agora o seguinte código:
```ts title=usando-estados-no-react.tsx attention:11-14
import { ChangeEvent } from 'react';

export function UsandoEstadosNoReact() {
	let valorDigitado = '';

	function changeFunctionName(event: ChangeEvent<HTMLInputElement>) {
		valorDigitado = event.target.value;
	}
	
	return (
		<div>
			<input onChange={changeFunctionName} placeHolder="Digite seu email..." type="email"></input>;
			{valorDigitado}
		</div>		
	)
}
```
- Agora na linha 13 a variável com o valor fornecido pelo usuário não será atualizada na tela, isso porquê o React não reconhece que a mudança de estado do elemento aconteceu.
- Para tanto precisamos utilizar o método `{ts} useState` do React para ativarmos a mudança de estado. Nesse caso, modificamos o código acima para:
```ts title=usando-estados-no-react.tsx note:4,7 info:12 attention:13
import { ChangeEvent, useState } from 'react'

export function UsandoEstadosNoReact() {
	const [search, setSearch] = useState('');
	
	function changeFunctionName(event: ChangeEvent<HTMLInputElement>) {
		setSearch(event.target.value);
	}
	
	return (
		<div>
			<input onChange={changeFunctionName} placeHolder="Digite seu email..." type="email"></input>;
			{search}
		</div>		
	)
}
```
- O método `{js}useState（''）` fornece duas saídas de variáveis. A primeira variável será o valor que será ajustado pelo evento, e a segunda variável será a função responsável por fazer a mudança e atualizar o valor da primeira variável. Nesse caso específico, a variável ajustada será `{js}search=''` e ela é inicializada como uma string vazia pelo método `{js}useState`, como podemos ver na linha 4, e a função responsável por fazer a modificação do valor dessa variável foi chamada de `{js} setSearch`.
- Logo, quando o usuário modificar o email será disparado o `{js} onChange` (linha 12) do `{html} <input>` que chamará a função `{js} changeFunctionName（event）`, e dentro dessa função teremos a função do método `{js}useState`, `{js} setSearch(event.target.value)` （linha 7）, que tomará o valor digitado pelo usuário com `{js}event.target.value` e atualizará a variável `{js}search`.
- Agora, quando o usuário entrar com qualquer valor no `{html} <input>` esse valor será renderizado novamente na tela (linha 13).

# 5 Utilizando o useEffect() do React

No React sempre que algum evento for disparado, toda a nossa aplicação deverá rodar novamente para fazer as atualizações e para que o React possa rodar seu algoritmo interno de renderização da página. Por exemplo:
```ts title=useEffect note:21-23 attention:4-6
import { useState } from 'react';

export function myComponent() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [value3, setValue3] = useState('');

	function add1() {
		setValue1(value1 + 1);
	}
	
	function subtract1() {
		setValue2(value2 - 1);
	}

	function leavePage() {
		alert(`Estamos saindo dessa página! ${value3}$`);
	}
	return (
		<div>
			<button onClick={add1}>Aumentar 1</button>
			<button onClick={subtract1}>Diminuir 1</button>
			<button onClick={leavePage}>Sair</button>
		</div>
	)
}
```
- Nessa aplicação, são apresentados três `{html}<button>` na tela (linhas 21 a 23). Se caso o usuário clicar em qualquer um dos três, os `{js}useState` (linhas 4 a 6) serão disparados e todo o código entre as linhas 7 e 18 será executado.
- Porém, imagine que entre essas linhas haja algum tipo de código que demande um certo tempo de operação, ou que seja preciso ser disparado especificamente pelo terceiro botão. Neste caso, podemos fazer uso do método `{js}useEffect` do React. Sua sintaxe básica é
```ts title=useEffect()
useEffect( (props) => {} , [var1, var2, ...])
/* useEffect( função, [ativador(es)]) */
```
- Usando esse método, a função dentro do `{js}useEffect` só será disparada se caso um dos `{js}var1, var2, ...` forem modificados pelo `{js}useState`.

# 6 URL State

Podemos utilizar do conceito do URL State do Browser para armazenar informações a respeito dos estados das interações entre o usuário e o site.




# 7 Outras Bibliotecas

## 7.1 Faker JS

Para dados aleatórios utilizamos o [Faker JS](https://fakerjs.dev/). Veja um exemplo de código:
```ts title=utilizandoFakerJS.ts
import { fakerPT_BR } from "@faker-js/faker";  

export const attendees = Array.from({ length: 200 }).map(() => {
  return {
    id: fakerPT_BR.number.int({ min: 10000, max: 20000 }),
    name: fakerPT_BR.person.fullName(),
    email: fakerPT_BR.internet.email().toLocaleLowerCase(),
    createdAt: fakerPT_BR.date.recent({ days: 30 }),
    checkedInAt: fakerPT_BR.date.recent({ days: 7 }),
  };
});
```
- Com a saída desse arquivo sendo o array `{js} attendees`, basta utilizar essa variável na aplicação.

## 7.2 Date FNS

Para formatar datas no JS, utilizamos a biblioteca [Date FNS](https://date-fns.org/). Exemplo do código:
```ts title=formatandoDatas.ts
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatandoDatas() {
	return (
		<div>
			<div>{formatRelative(someDate.createdAt, new Date(), { locale: ptBR })}</div>
		   <div>{formatRelative(someDate.checkedInAt, new Date(), { locale: ptBR })}</div>
		</div>
	)
}
```

## 7.3 Day JS

Outra biblioteca para alterar o formato de datas é a [Day JS](https://day.js.org/en/).
```powershell title=Comando_CLI_de_Instalação
npm install dayjs
```

Exemplo de utilização
```ts title=Utilizando_DayJS
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function AttendeeList() {
	return <div>{dayjs().to(someDate)}</div>
	)
}
```

