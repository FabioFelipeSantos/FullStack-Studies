# 1 Introduction to the Box Model

- Browsers load HTML elements with default position values. This often leads to an unexpected and unwanted user experience while limiting the views you can create. In this lesson, you will learn about the _box model_, an important concept to understand how elements are positioned and displayed on a website.
- If you have used HTML and CSS, you have unknowingly seen aspects of the <span style="color: fuchsia"><strong style="color: inherit; font-size: 1.2em; text-decoration: underline; text-underline-offset: 25%">Box Model</strong></span>. For example, if you have set the background color of an element, you may have noticed that the color was applied not only to the area directly behind the element but also to the area to the right of the element. Also, if you have aligned text, you know it is aligned relative to something. What is that something?
- All elements on a web page are interpreted by the browser as *“living” inside of a box*. This is what is meant by the box model.
- Now, we’ll learn about the following aspects of the box model:
	1. The dimensions of an element’s box.
	2. The borders of an element’s box.
	3. The paddings of an element’s box.
	4. The margins of an element’s box.

# 2 The Box Model

- The <span style="color: fuchsia"><strong style="color: inherit; font-size: 1.2em; text-decoration: underline; text-underline-offset: 25%">Box Model</strong></span> is a CSS layout mechanism that the web browser uses to render content organized by box-shaped elements. Each element is made of four specific areas:
	- `width` and `height`: The width and height of the content area.
	- `padding`: The amount of space between the content area and the border.
	- `border`: The thickness and style of the border surrounding the content area and padding.
	- `margin`: The amount of space between the border and the outside edge of the element.

![[box-model.png||1000]]

- **Content Area**: This area contains the actual content of an element, including text and images. It also sometimes has a `background-color` or `background-image`.

![[contentAreaBoxModel.png||600]]
- **Padding Area**: This area is located between the content and border areas. It can be changed on the top, right, bottom and left sides.
- **Border Area**: This area is located between the margin and padding areas. Their thickness and style can be changed.
- **Margin Area**: This is the outermost area in the Box Model. It borders with the margin areas of neighboring elements. It can be changed on the top, right, bottom and left sides.

# 3 Height and Width

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

# 4 Borders

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
- In the example above, the border has a `border-width` property with the value of `3px`, a `border-style` of `solid`, and a `border-color` of `coral`. All three properties are set in one line of code. But, even the specification in one line, all these properties are shorthands also. For example, the `border-width` style is a shorthand that comprises the four widths of the border, the `border-top-width`, `border-left-width`, `border-bottom-width`, `border-right-width`.
- The default `border` is `medium none color`, where `color` is the current color of the element. If `width`, `style`, or `color` are not set in the CSS file, the web browser assigns the default value for that property.
```css
p.content-header {
	height: 80px;
	width: 240px;
	border: solid coral;
}
```
- In this example, the border style is set to `solid` and the color is set to `coral`. The width is not set, so it defaults to `medium`. `medium` is a computed value of `3px`.

# 5 Border Radius

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

# 6 Padding

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

## 6.1 Padding Shorthand

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

### 6.1.1 Four Values

```css
p.content-header {
	padding: 6px 11px 4px 9px;
}
```
- The four values correspond to the amount of padding on each side, <span style="color: tomato; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">in a clockwise rotation</em></strong></span>. In order, `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.

### 6.1.2 Three Values

```css
p.content-header {
	padding: 5px 10px 20px;
}
```
- The first value sets the `padding-top`, the second value sets the `padding-left` and `padding-right`, and the third value sets the `padding-bottom`.

### 6.1.3 Two Values

```css
p.content-header {
	padding: 5px 10px;
}
```
- The first value sets the `padding-top` and `padding-bottom`, and the second value sets the `padding-left` and `padding-right`.

### 6.1.4 One Values

```css
p.content-header {
	padding: 5px;
}
```
- Sets the specified value to all the paddings.
- 
# 7 Margin

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

## 7.1 Margin Shorthand

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

# 8 Auto

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

# 9 Margin Collapse

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

![[Pasted image 20240328170202.png||300]]

# 10 Minimum and Maximum Height and Width

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

# 11 Overflow

- All the components of the box model comprise an element’s size. For example, if an image has 364 pixels for width and 244 pixels for height, how will it occupy the following box?
	- 300 pixels wide
	- 200 pixels tall
	- 10 pixels padding on the left and right
	- 10 pixels padding on the top and bottom
	- 2 pixels border on the left and right
	- 2 pixels border on the top and bottom
	- 20 pixels margin on the left and right
	- 10 pixels margin on the top and bottom

The total dimensions (364px by 244px) are calculated by adding all of the vertical dimensions together and all of the horizontal dimensions together. Sometimes, these components result in an element that is larger than the parent’s containing area.

How can we ensure that we can view all of an element that is larger than its parent’s containing area?

The `overflow` property controls what happens to content that spills, or overflows, outside its box. The most commonly used values are:

- `hidden`—when set to this value, any content that overflows will be hidden from view.
- `scroll`—when set to this value, a scrollbar will be added to the element’s box so that the rest of the content can be viewed by scrolling.
- `visible`—when set to this value, the overflow content will be displayed outside of the containing element. Note, this is the default value.

```
p {  overflow: scroll; }
```

In the example above, if any of the paragraph content overflows (perhaps a user resizes their browser window), a scrollbar will appear so that users can view the rest of the content.

The overflow property is set on a parent element to instruct a web browser on how to render child elements. For example, if a div’s overflow property is set to `scroll`, all children of this div will display overflowing content with a scroll bar.

For a more in-depth look at `overflow`, including additional properties like [`overflow-x`](https://www.codecademy.com/resources/docs/css/overflow/overflow-x) and [`overflow-y`](https://www.codecademy.com/resources/docs/css/overflow/overflow-y) that separate out the horizontal and vertical values, head over to the MDN [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow).