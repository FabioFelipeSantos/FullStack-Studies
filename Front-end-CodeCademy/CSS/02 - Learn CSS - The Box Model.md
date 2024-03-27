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

# 7 Padding Shorthand

- Another implementation of the `padding` property lets you specify exactly how much padding there should be on each side of the content in a single declaration. A declaration that uses multiple properties as values is known as a _shorthand property_.

Padding shorthand lets you specify all of the `padding` properties as values on a single line:

- [`padding-top`](https://www.codecademy.com/resources/docs/css/padding/padding-top)
- [`padding-right`](https://www.codecademy.com/resources/docs/css/padding/padding-right)
- [`padding-bottom`](https://www.codecademy.com/resources/docs/css/padding/padding-bottom)
- [`padding-left`](https://www.codecademy.com/resources/docs/css/padding/padding-left)

You can specify these properties in a few different ways:

###### 7.1.1.1.1.1 Values

```
p.content-header {  padding: 6px 11px 4px 9px;}
```

In the example above, the four values `6px 11px 4px 9px` correspond to the amount of padding on each side, in a clockwise rotation. In order, it specifies the padding-top value (`6px`), the padding-right value (`11px`), the padding-bottom value (`4px`), and the padding-left value (`9px`) of the content.

###### 7.1.1.1.1.2 Values

```
p.content-header {  padding: 5px 10px 20px;}
```

If the left and right sides of the content can be equal, the padding shorthand property allows for 3 values to be specified. The first value sets the padding-top value (`5px`), the second value sets the padding-left and padding-right values (`10px`), and the third value sets the padding-bottom value (`20px`).

###### 7.1.1.1.1.3 Values

```
p.content-header {  padding: 5px 10px;}
```

And finally, if the top and bottom sides can be equal, and the left and right sides can be equal, you can specify 2 values. The first value sets the padding-top and padding-bottom values (`5px`), and the second value sets the padding-left and padding-right values (`10px`).