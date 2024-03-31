# 1 The Box Model

## 1.1 Introduction to the Box Model

- Browsers load HTML elements with default position values. This often leads to an unexpected and unwanted user experience while limiting the views you can create. In this lesson, you will learn about the _box model_, an important concept to understand how elements are positioned and displayed on a website.
- If you have used HTML and CSS, you have unknowingly seen aspects of the <span style="color: fuchsia"><strong style="color: inherit; font-size: 1.2em; text-decoration: underline; text-underline-offset: 25%">Box Model</strong></span>. For example, if you have set the background color of an element, you may have noticed that the color was applied not only to the area directly behind the element but also to the area to the right of the element. Also, if you have aligned text, you know it is aligned relative to something. What is that something?
- All elements on a web page are interpreted by the browser as *“living” inside of a box*. This is what is meant by the box model.
- Now, we’ll learn about the following aspects of the box model:
	1. The dimensions of an element’s box.
	2. The borders of an element’s box.
	3. The paddings of an element’s box.
	4. The margins of an element’s box.

## 1.2 Block and Inline Boxes

- The main kinds of CSS's boxes are separated into two categories: <span style="color: darkorange; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Block Boxes and Inline Boxes</em></strong></span>. These types refers to how the box behaves in its page flow and its relation to other boxes.
- Boxes have an <span style="color: darkturquoise; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Inner Display type and an Outer Display type</em></strong></span>.

### 1.2.1 Outer display type

- If a box has an outer display type of `block`, then:
	- The box will break onto a new line.
	- The `width` and `height` properties are respected.
	- Padding, margin and border will cause other elements to be pushed away from the box.
	- If `width` is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.
- Some HTML elements, such as `<h1>` and `<p>`, use block as their outer display type by default.

- If a box has an outer display type of `inline`, then:
	- The box will not break onto a new line.
	- The `width` and `height` properties will not apply.
	- Top and bottom padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
	- Left and right padding, margins, and borders will apply and will cause other inline boxes to move away from the box.
- Some HTML elements, such as `<a>`, `<span>`, `<em>` and `<strong>` use inline as their outer display type by default.

### 1.2.2 Inner display type

- The inner display dictates how elements inside that box are laid out.
- Block and inline layout is the default way things behave on the web. By default and without any other instruction, the elements inside a box are also laid out in normal flow and behave as block or inline boxes.
- You can change the inner display type for example by setting `display: flex;`. The element will still use the outer display type `block` but this changes the inner display type to `flex`. Any direct children of this box will become flex items. There are other types of inner display like `grid`.
- Changing the value of the `display` property can change whether the outer display type of a box is block or inline. This changes the way it displays alongside other elements in the layout.

## 1.3 The Box Model

- The <span style="color: fuchsia"><strong style="color: inherit; font-size: 1.2em; text-decoration: underline; text-underline-offset: 25%">Box Model</strong></span> is a CSS layout mechanism that the web browser uses to render content organized by box-shaped elements. Each element is made of four specific areas:
	- `width` and `height`: The width and height of the content area.
	- `padding`: The amount of space between the content area and the border.
	- `border`: The thickness and style of the border surrounding the content area and padding.
	- `margin`: The amount of space between the border and the outside edge of the element.

![[box-model.png||1000]]

- **Content Area**: This area contains the actual content of an element, including text and images. It also sometimes has a `background-color` or `background-image`. The size is settled by properties like `inline-size` and `block-size` or `width` and `height`.

![[contentAreaBoxModel.png||600]]
- **Padding Area**: This area is located between the content and border areas. It can be changed on the top, right, bottom and left sides.
- **Border Area**: This area is located between the margin and padding areas. Their thickness and style can be changed.
- **Margin Area**: This is the outermost area in the Box Model. It borders with the margin areas of neighboring elements. It can be changed on the top, right, bottom and left sides.

## 1.4 Height and Width

- An element’s content has two dimensions: a *Height* and a *Width*. By default, the dimensions of an HTML box are set to hold the raw contents (conteúdo bruto) of the box.
- The CSS `height` and `width` properties can be used to modify these default dimensions.
```css
p {
	height: 80px;
	width: 240px;
}
```
- In this example, the `height` and `width` of paragraph elements are set to 80 pixels and 240 pixels, respectively — the `px` in the code above stands for _pixels_.
- Pixels allow you to set the exact size of an element’s box (width and height). When the width and height of an element are set in pixels, it will be the same size on all devices — an element that fills a laptop screen will <span style="color: fuchsia"><strong style="color: inherit; font-size: 1.2em; text-decoration: underline; text-underline-offset: 25%">overflow</strong></span> a mobile screen.
	- An *Overflow* defines how a block level element should handle content that goes beyond its boundaries. Often, the overflow will be set up to `scroll`. This value will create a scrollbar in the box of the content.

```ad-important
When you set the width and height properties of an element with CSS, you just set the width and height of the *content area*. To calculate the total width and height of an element, you must also include the padding and borders.
```

### 1.4.1 Formal Syntax

````ad-important
```css
width | height = auto | <length-percentage [0,∞]> | min-content | max-content | fit-content( <length-percentage [0,∞]> )  

<length-percentage> = <length> | <percentage>

/* <length> values */
width | height: 300px | 25em;

/* <percentage> value */
width | height: 75%;

/* Keyword values */
width | height: max-content | min-content | fit-content | fit-content(20em) | auto;

/* Global values */
width | height: inherit | initial | revert | revert-layer | unset;
```
````

```ad-note
`fit-content` - Use the available space, but not more than max-content, i.e `min(max-content, max(min-content, stretch))`.

`fit-content(<length-percentage>)` - Uses the fit-content formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, <length-percentage>))`.
```

## 1.5 Borders

- A <span style="color: fuchsia"><strong style="color: inherit; font-size: 1.2em; text-decoration: underline; text-underline-offset: 25%">Border</strong></span> is a line that surrounds an element, like a frame around a painting. **Borders** can be set with a specific `width`, `style`, and `color`:
	- `width` — The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: `thin`, `medium`, or `thick`.
	- `style` — The design of the border. Web browsers can render any of [10 different styles](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values). Some of these styles include: `none`, `dotted`, and `solid`.
![[border-styles.png||900]]
	- `color` — The color of the border. Web browsers can render [colors](https://www.codecademy.com/resources/docs/css/colors) using a few different formats, including [140 built-in color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
```css
p {
	border: 3px solid coral;
}
```
- In the example above, the border has a `border-width` property with the value of `3px`, a `border-style` with `solid`, and a `border-color` with `coral`. All three properties are set in one line of code.
- But, even the specification in one line, all these properties are shorthands also. For example, the `border-width` style is a shorthand that comprises the four widths of the border, the `border-top-width`, `border-left-width`, `border-bottom-width`, `border-right-width`.
- The default `border` is `medium none color`, where `color` is the current color of the element. If `width`, `style`, or `color` are not set in the CSS file, the web browser assigns the default value for that property.
```css
p.content-header {
	height: 80px;
	width: 240px;
	border: solid coral;
}
```
- In this example, the border style is set to `solid` and the color is set to `coral`. The width is not set, so it defaults to `medium`. `medium` is a computed value of `3px`.
- The borders of an element will count for the final width of an HTML element when using the CSS box-sizing property. The `width` and `height` properties of an element <span style="color: deepskyblue; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">includes the padding, content, and border</em></strong></span>, <span style="color: firebrick; font-size: 1.2em;"><em style="color: inherit;">but not the margin</em></span>. The width is calculated based on the visible area of the box, which includes the border, padding, and content.
````ad-example
```css
p {
	/* Content Area */
	width: 250px;
	height: 145px;
	
	/* Do not contribute to the total width or height */
	margin: 12px;
	
	/* They will contribute to the total width or height */
	padding: 5px 6px;
	border: 2.5px dashed red;
}
```
In this case, the total width of the HTML element in screen will be `250px + 2 * 5px + 2 * 2.5px = 265px`. For the height we will get `145px + 2 * 6px + 2 * 2.5px = 162px`. The content size is `250px x 145px`.
````
- One way to modify this behavior is by setting the `box-sizing` property. I will add information about this property in another section.

### 1.5.1 Formal Syntax

````ad-important
[[01 - Learn CSS - Selectors and Visual Rules#1.4.1.4.4 Double bar| Double Bar ( || )]]
```css
border = <line-width>  || <line-style>  || <color>; /* <'border-width'> || <'border-style'> || <'border-color'> */

<line-width> = <length [0,∞]> | thin | medium | thick;

<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset;

/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;

/* Global values */
border: inherit | initial | revert | revert-layer | unset;
```

<span style="color: azure; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Border Style</em></strong></span>

If set alone, it'll have the following syntax:
[[01 - Learn CSS - Selectors and Visual Rules#1.4.1.5.4 Curly braces (`{ }`)|Curly Braces ({ })]]
```css
border-style = <line-style>{1,4}

/* 1 Value */
border-style: dotted; /* <'border-top-style'> = <'border-right-style'> = <'border-bottom-style'> = <'border-left-style'> = dotted */

/* 2 Values */
border-style: dashed double; /* <'border-top-style'> = <'border-bottom-style'> = dashed, <'border-right-style'> = <'border-left-style'> = double */

/* 3 Values */
border-style: dotted dashed double; /* <'border-top-style'> = dotted, <'border-right-style'> = <'border-left-style'> = dashed, <'border-bottom-style'> = double */

/* 4 Values */
border-style: dotted dashed double groove; /* <'border-top-style'> = dotted, <'border-right-style'> = dashed, <'border-bottom-style'> = double, <'border-left-style'> = groove */
```
````

## 1.6 Border Radius

- Ever since we revealed the borders of boxes, you may have noticed that the borders highlight the true shape of an element’s box: <span style="color: tomato; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Square</em></strong></span>. Thanks to CSS, a border doesn’t have to be square.
- You can modify the corners of an element’s border box with the `border-radius` property.
```css
div.container {
	border: 3px solid blue;
	border-radius: 5px;
}
```
- The code in the example above will set _all four corners_ of the border to a radius of 5 pixels (i.e. the same curvature that a circle with a radius of 5 pixels would have).
- You can create a border that is a perfect circle by first <span style="color: aqua; font-size: 1.2em;"><em style="color: inherit;">creating an element with the same width and height</em></span>, and then <span style="color: lawngreen; font-size: 1.2em;"><em style="color: inherit;">setting the radius equal to half the width of the box, which is 50%</em></span>.
```css
div.container {
	height: 60px;
	width: 60px;
	border: 3px solid blue;
	border-radius: 50%;
}
```
- The code in the example above creates a `<div>` that is a perfect circle.
- If we want to create a "**pill**" shape on a rectangular HTML element, we can use a specific trick. We can provide a sufficiently <span style="color: tomato; font-size: 1.2em;"><em style="color: inherit;">huge absolute value</em></span> as a unit for the property. If this value exceeds half of the shortest side's length, the browser will use the minimum as its `border-radius` in both directions, producing a perfect pill shape on rectangular elements. One way to achieve this effect is by setting `border-radius: 9999px`. 😉

### 1.6.1 Formal Syntax

````ad-important
[[01 - Learn CSS - Selectors and Visual Rules#1.4.1.5.4 Curly braces (`{ }`)|Curly Braces ( { } )]], [[01 - Learn CSS - Selectors and Visual Rules#1.4.1.4.1 Brackets (" [" " ]")| Brackets ( [ ] )]], [[01 - Learn CSS - Selectors and Visual Rules#1.4.1.5.3 Question mark (`?`)|Question Mark ( ? )]]
```css
border-radius = <length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?

<length-percentage> = <length> | <percentage>

```
````

```ad-info

```

7 Padding

- The space between the contents of a box and the borders of a box is known as <span style="color: aqua; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Padding</em></strong></span>. Padding is like the space between a picture and the frame surrounding it. In CSS, you can modify this space with the `padding` property.
```css
p.content-header {
	border: 3px solid coral;
	padding: 10px;
}
```
- The code in this example puts 10 pixels of space between the content of the paragraph (the text) and the borders, on all four sides.
- The `padding` property is often used to expand the background color and make the content look less cramped (apertado). 
- If you want to be more specific about the amount of padding on each side of a box’s content, you can use the following properties:
	- `padding-top`
	- `padding-right`
	- `padding-bottom`
	- `padding-left`
- Each property affects the padding on only one side of the box’s content, giving you more flexibility in customization.
```css
p.content-header {
	border: 3px solid fuchsia;
	padding-bottom: 10px;
}
```
- In the example above, only the bottom side of the paragraph’s content will have a `padding` of 10 pixels.
- Other specifics stylization for one side of the box is also achieved for the following properties: `border-width`, `border-style`, or `border-color`. We just need to add one of the words top, right, bottom, or left between the words border, width, or color. For example: `border-top-width: 25px`.

### 1.6.2 Padding Shorthand

- It's a way to specify all of the `padding` properties **by a single declaration**, known as a _shorthand property_.
	- `padding-top`
	- `padding-right`
	- `padding-bottom`
	- `padding-left`
````ad-important
[[01 - Learn CSS - Selectors and Visual Rules#1.4.1.5.4 Curly braces (`{ }`)|Curly Braces]]
```css
padding: <length-percentage [0, ∞]>{1,4}
```
<span style="color: orangered; font-size: 1.2em;"><em style="color: inherit;">Possibilities</em></span>
```css
padding: <length-percentage [0, ∞]>
padding: <length-percentage [0, ∞]> <length-percentage [0, ∞]>
padding: <length-percentage [0, ∞]> <length-percentage [0, ∞]> <length-percentage [0, ∞]>
padding: <length-percentage [0, ∞]> <length-percentage [0, ∞]> <length-percentage [0, ∞]> <length-percentage [0, ∞]>
```
````
- You can specify these properties in a few different ways, with the property values ranging from one to four.

#### 1.6.2.1 Four Values

```css
p.content-header {
	padding: 6px 11px 4px 9px;
}
```
- The four values correspond to the amount of padding on each side, <span style="color: tomato; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">in a clockwise rotation</em></strong></span>. In order, `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.

#### 1.6.2.2 Three Values

```css
p.content-header {
	padding: 5px 10px 20px;
}
```
- The first value sets the `padding-top`, the second value sets the `padding-left` and `padding-right`, and the third value sets the `padding-bottom`.

#### 1.6.2.3 Two Values

```css
p.content-header {
	padding: 5px 10px;
}
```
- The first value sets the `padding-top` and `padding-bottom`, and the second value sets the `padding-left` and `padding-right`.

#### 1.6.2.4 One Values

```css
p.content-header {
	padding: 5px;
}
```
- Sets the specified value to all the paddings.
- 
## 1.7 Margin

- The fourth and final component of the box model is <span style="color: palegoldenrod; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Margin</em></strong></span>.
- Margin refers to the **space directly outside of the box**. The `margin` property is used to specify the size of this space.
```css
p {
	border: 1px solid aquamarine;
	margin: 20px;
}
```
- The example above will place `20px` of space on the outside of the paragraph’s box on all four sides. So, other HTML elements cannot come within 20 pixels of the paragraph's border.
- If you want to be even more specific about the amount of margin on each side of a box, you can use the following properties: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.
```css
p {
	border: 3px solid DarkSlateGrey;
	margin-right: 15px;
}
```
- Only the right side of the paragraph’s box will have a margin of 15 pixels.

### 1.7.1 Margin Shorthand

- The shorthand syntax for margins is the same as padding.
- <span style="color: cyan; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Margin Shorthand</em></strong></span> lets you specify all of the `margin` properties as values on a single line in this sequence: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`. We can adjust the `margin` property with a range from one to four values, like `padding`.
````ad-check
```css
p.margin-4 {
margin: 6px 10px 5px 12px; /* To each side of the box */
}

p.margin-3 {
margin: 6px 10px 5px; /* Top, right = left, bottom */
}

p.margin-2 {
margin: 6px 10px; /* Top = bottom, right = left */
}

p.margin-1 {
margin: 6px; /* Top = right = left = bottom */
}
```
````

## 1.8 Auto

- The `margin` property also lets you center content. However, you must follow a few syntax requirements. 
```css
div.headline {
	width: 400px;
	margin: 0 auto;
}
```
- Here, `margin: 0 auto;` will center the `div`s in their containing elements. The `auto` value instructs the browser to adjust the left and right margins until the element is centered within its containing element.
- A `width` must be set for that element. Otherwise, the width of the div will be automatically set to the full width of its containing element, like the `<body>`, for example.
- It’s not possible to center an element that takes up the full width of the page, since the width of the page can change due to display and/or browser window size.

## 1.9 Margin Collapse

- Top and bottom [margins](https://www.codecademy.com/resources/docs/css/margins), also called vertical margins, _collapse_, while top and bottom padding does not.
- Horizontal margins (left and right), like `padding`, are *always displayed and added together*. For example, if two `div`s with ids `#div-one` and `#div-two`, are next to each other, they will be as far apart as the sum of their adjacent margins.
```css
#img-one {
	margin-right: 20px;
}

#img-two {
	margin-left: 20px;
}
```
- In this example, the space between the `#img-one` and `#img-two` borders is 40 pixels.
---
- Unlike horizontal margins, <span style="color: crimson; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">vertical margins do not add</em></strong></span>. Instead, the <span style="color: chartreuse; font-size: 1.2em;"><strong style="color: inherit;">larger of the two vertical margins</strong></span> sets the distance between adjacent elements.
```css
#img-one {
	margin-bottom: 30px;
}

#img-two {
	margin-top: 20px;
}
```
- In this example, the vertical margin between the `#img-one` and `#img-two` elements is 30 pixels. Although the sum of the margins is 50 pixels, the margin collapses so the spacing is only dependent on the `#img-one` bottom margin.

````ad-example
```html
<div class="container-1">
	<div class="size box-1"></div>
	<div class="size box-2"></div>
</div>
<div class="container-2">
	<div class="box-3"></div>
	<div class="box-4"></div>
</div>
```
```css
.box-1 {
	margin-right: 60px;
}
.box-2 {
	margin-left: 30px;
}  
.box-3 {
  margin-bottom: 30px;
}
.box-4 {
	margin-top: 75px;
}
```
````

![[margin-collapse-values.png||300]]

## 1.10 Minimum and Maximum Height and Width

- To avoid extreme changes in size by resize of web browsers, CSS offers two properties that can limit how narrow or how wide an element’s box can be sized to:
	- `min-width` — this property ensures a minimum width of an element’s box.
	- `max-width` — this property ensures a maximum width of an element’s box.
```css
p {
	min-width: 300px;
	max-width: 600px;
}
```
- Content, like text, can become difficult to read when a browser window is narrowed or expanded. These two properties ensure that content is legible by limiting the minimum and maximum widths of an element.
- You can also limit the minimum and maximum _height_ of an element:
	- `min-height` — this property ensures a minimum height for an element’s box.
	- `max-height` — this property ensures a maximum height of an element’s box.
```css
p {
	min-height: 150px;
	max-height: 300px;
}
```
- What will happen to the contents of an element’s box if the `max-height` property is set too low? It’s possible for the content to spill outside of the box, resulting in content that is not legible. You’ll learn how to work around this issue in the next exercise.

## 1.11 Overflow

- All the components of the box model comprise an element’s size. For example, if an image has 364 pixels for width and 244 pixels for height, how will it occupy the following box?
	- 300 pixels wide
	- 200 pixels tall
	- 10 pixels padding on the left and right
	- 10 pixels padding on the top and bottom
	- 2 pixels border on the left and right
	- 2 pixels border on the top and bottom
	- 20 pixels margin on the left and right
	- 10 pixels margin on the top and bottom
- In this element, the content area will have `300px - 2 * 10px - 2 * 2px = 276px` as width and `200px - 2 * 10px - 2 * 2px = 176px` as height, thus the image is bigger than the content area. 
- How can we ensure that we can view all of an element that is larger than its parent’s containing area?
- The `overflow` property controls what happens with the content when its dimensions surpass (or overflow) the size of its box. The most commonly used values are:
	- `hidden` — when set to this value, any content that overflows will be hidden from view, although the content can be scrolled programmatically.
	- `scroll` — when set to this value, a scrollbar will be added to the element's box so that the rest of the content can be viewed by scrolling.
	- `visible` — when set to this value, the overflow content will be displayed outside of the containing element. Note, this is the default value.
	- `clip` — the overflow is clipped, and the rest of the content will be invisible. Forbids scrolling, including programmatic scrolling.
	- `auto` — Similar to `scroll`, but it adds scrollbars only when necessary.
![[overflows.png||1200]]

```ad-note
The `overflow` property only works for block elements with a specific height.
```

```css
p {
	overflow: scroll;
}
```
- In the example above, if any of the paragraph content overflows (perhaps a user resizes their browser window), a scrollbar will appear so that users can view the rest of the content.
- The overflow property is set on a parent element to instruct a web browser on how to render child elements. For example, if a `div`'s overflow property is set to `scroll`, all children of this div will display overflowing content with a scroll bar.

## 1.12 Resetting Defaults

- All major web browsers have a _user agent_ that applies default styles in the absence of an external stylesheet.
- Often the default are for `padding` and `margin`. This can make it difficult to style a web page.
- There's a way to reset these default values by applying the global selector `*`.
```css
* {
	margin: 0;
	padding: 0;
}
```
- It is often the first CSS rule in an external stylesheet.

## 1.13 Visibility

- Elements can be hidden from view with the `visibility` property.
- The `visibility` property can be set to one of the following values:
	- `hidden` — hides an element.
	- `visible` — displays an element.
	- `collapse` — collapses an element.
```html
<ul>
	<li>Explore</li>
	<li>Connect</li>
	<li class="future">
		Donate
	</li>
</ul>
```

```css
.future {
	visibility: hidden;
}
```
- In the example above, the list item with a class of `future` will be hidden from view in the browser.
- Even when an element is hidden, users can still view the contents of the element by viewing the source code in their browser. Furthermore, the web page will _only_ hide the contents of the element. It will still leave an empty space where the element is intended to display.

```ad-attention
There exist a difference between `display: none` and `visibility: hidden`. An element with `display: none` will be completely removed from the web page. An element with `visibility: hidden`, however, will not be visible on the web page, but the space reserved for it will.
```

# 2 Changing the Box Model

## 2.1 Why Change the Box Model?

- The last lesson focused on the most important aspects of the box model: <span style="color: hotpink; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">box dimensions, borders, padding, and margin</em></strong></span>.
- The *box model*, however, has an awkward limitation regarding box dimensions. This limitation is best illustrated with an example.
```html
<h1>Hello World</h1>
```

```css
h1 {
	border: 1px solid black;
	height: 200px;
	width: 300px;
	padding: 10px;
}
```
- Unfortunately, under the current box model, the border thickness and the padding will affect the dimensions of the box.
- The 10 pixels of padding increases the height of the box to 220 pixels and the width to 320 pixels. Next, the 1-pixel thick border increases the height to 222 pixels and the width to 322 pixels.
- Under this box model, *the border thickness and padding are added to the overall dimensions of the box*. This makes it difficult to accurately size a box. Over time, this can also make all of a web page’s content difficult to position and manage.

## 2.2 Box Model: Content-Box

- Many properties in CSS have a default value and don’t have to be explicitly set in the stylesheet.
- For example, the default `font-weight` of text is `normal`, but this property-value pair is not typically specified in a stylesheet.
- The same can be said about the box model that browsers assume. In CSS, the `box-sizing` property controls the type of box model the browser should use when interpreting a web page.
- The default value of this property is `content-box`. This is the same box model that is affected by border thickness and padding.
![[boxSizingContentBox.png||800]]

## 2.3 Box Model: Border-Box

- Fortunately, we can reset the entire box model and specify a new one: border-box.
```css
* {
  box-sizing: border-box;
}
```
- The code in the example above resets the box model to `border-box` for all HTML elements. This new box model avoids the dimensional issues that exist in the former box model you learned about.
- In this box model, the height and width of the box will remain fixed. The border thickness and padding will be included inside of the box, which means the overall dimensions of the box do not change.

````ad-example
```html
<h1>Hello World</h1>
```

<br>

```css
* {
  box-sizing: border-box;
}

h1 {
  border: 1px dashed #4f768e;
  height: 150px;
  width: 200px;
  padding: 20px;
}
```
````
- In the example above, the `height` of the box would remain at 150 pixels and the `width` would remain at 200 pixels. The border thickness and padding would remain entirely inside of the box.
![[borderBoxForBoxSizing.png||850]]

