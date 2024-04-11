---
cssclasses:
---
# 1 Display and Positioning

## 1.1 Flow of HTML

- A browser will render the elements of an HTML <span style="color: cadetblue; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">from left to right, top to bottom</em></strong></span>, in the same order as they exist in the document. This is called the _Flow_ of elements in HTML.
- CSS includes properties that change how a browser <span style="color: coral; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Positions</em></strong></span> elements.
	- `position`
	- `display`
	- `z-index`
	- `float`
	- `clear`

## 1.2 Position

- Take a look at the block-level elements in the image below:
![[blockElements-example.png||850]]

- Block-level elements create a block the full width of their parent elements, and they prevent other elements from appearing in the same horizontal space.
- In the browser to the right, you can see block-level elements also consistently appear on the left side of the browser. This is the default position for block-level elements.
- The default position of an element can be changed by setting its <span style="color: chocolate; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Position Property</em></strong></span>. The `position` property can take one of five values:
	- `static` - the default value (it does not need to be specified) it's the normal flow of the document.
	- `relative`
	- `absolute`
	- `fixed`
	- `sticky`

## 1.3 Position: Relative

- One way to modify the default position of an element is by setting its `position` property to `relative`.
- <span style="color: tomato; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">This value allows you to position an element relative to its default static position on the web page</em></strong></span>.
```css
.green-box {
  background-color: green;
  position: relative;
}
```
- Although the code in the example above instructs the browser to expect a relative positioning of the `.green-box` element, it does not specify where the `.green-box` element should be positioned on the page. 
- This is done by accompanying the `position` declaration with one or more of the following <span style="color: chartreuse; font-size: 1.2em;"><strong style="color: inherit;">offset properties that will move the element away from its default static position</strong></span>:
	- `top` - moves the element down from the top.
	- `bottom` - moves the element up from the bottom.
	- `left` - moves the element away from the left side (to the right).
	- `right` - moves the element away from the right side (to the left).
- It’s also important to note that offset properties will not work if the element’s position property is the default static.
```css
.green-box {
  background-color: green;
  position: relative;
  top: 50px;
  left: 120px;
}
```
- In the example above, the element of green-box class will be moved down 50 pixels, and to the right 120 pixels, from its default static position. The image below displays the new position of the box.
![[position-relative.png||850]]

## 1.4 Position: Absolute

- Another way of modifying the position of an element is by setting its `position` to `absolute`.
- When an element’s position is set to absolute, <span style="color: orange; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">all other elements on the page will ignore the element and act like it is not present on the page</em></strong></span>. 
- The offset properties can be used to determine the final position from there.
![[position-absolute.png||850]]
- The “This website is in progress. Please come back later!” text is displaced from its static position at the top left corner of its parent container.

## 1.5 Position: Fixed

- When an element’s `position` is set to `absolute`, as in the last exercise, the element will scroll with the rest of the document when a user scrolls.
- We can <span style="color: darkorchid; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">fix an element to a specific position on the page</em></strong></span> (regardless of user scrolling) by setting its `position` to `fixed`, and accompanying it with the familiar offset properties top, bottom, left, and right.
```css
.title {
  position: fixed;
  top: 0px;
  left: 0px;
}
```
- In the example above, the `.title` element will remain fixed to its position no matter where the user scrolls on the page, like in the image below:
![[position-fixed.gif||850]]

## 1.6 Position: Sticky

- Since static and relative positioned elements stay in the normal flow of the document, when a user scrolls the page (or parent element) these elements will scroll too. And since fixed and absolute positioned elements are removed from the document flow, when a user scrolls, these elements will stay at their specified offset position.
- The `sticky` value is another `position` value that <span style="color: deeppink; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">keeps an element in the document flow as the user scrolls, but sticks to a specified position as the page is scrolled further</em></strong></span>. This is done by using the sticky value along with the familiar offset properties, as well as one new one.
```css
.box-bottom {
  background-color: darkgreen;
  position: sticky;
  top: 240px;
}
```
- In the example above, the `.box-bottom` `<div>` will remain in its relative position, and scroll as usual. When it reaches 240 pixels from the top, it will stick to that position until it reaches the bottom of its parent container where it will “unstick” and rejoin the flow of the document.
![[position-sticky.gif||850]]

## 1.7 Z-Index

- When boxes on a web page have a combination of different positions, the boxes (and therefore, their content) can overlap with each other, making the content difficult to read or consume.
```css
.blue-box {
  background-color: blue;
}

.green-box {
  background-color: green;
  position: relative;
  top: -170px;
  left: 170px;
}
```
- In the example above, the `.green-box` element overlaps on top of the `.blue-box` element.
- The `z-index` property controls <span style="color: fuchsia; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">how far back or how far forward an element should appear on the web page when elements overlap</em></strong></span>. This can be thought of as the depth of elements, with deeper elements appearing behind shallower elements.
- The `z-index` property accepts integer values. Depending on their values, the integers instruct the browser on the order in which elements should be layered on the web page.
```css
.blue-box {
  background-color: blue;
  position: relative;
  z-index: 1;
}

.green-box {
  background-color: green;
  position: relative;
  top: -170px;
  left: 170px;
}
```
- In the example above, we set the `.blue-box` position to relative and the `z-index` to 1. We changed position to `relative`, because the `z-index` property <span style="color: gold; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">does not work on static elements</em></strong></span>. The `z-index` of 1 moves the `.blue-box` element forward, because the `z-index` value has not been explicitly specified for the `.green-box` element, which means it has a default `z-index` value of 0.
![[z-index.png||850]]

## 1.8 Inline Display

- Every HTML element has a default display value that dictates if it will fill the entire browser from left to right regardless of the size of their content or will only take up as much horizontal space as their content requires and can be directly next to other elements.
- In this lesson, we’ll cover three values for the `display` property: `inline`, `block`, and `inline-block`.
- The default display for some elements, such as `<em>`, `<strong>`, and `<a>`, is called <span style="color: khaki; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Inline</em></strong></span>. 
- Inline elements <span style="color: lawngreen; font-size: 1.05em;"><em style="color: inherit;">have a box that wraps tightly around their content, only taking up the amount of space necessary to display their content and not requiring a new line after each element</em></span>.
- The `height` and `width` of these elements <span style="color: crimson; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-transform: uppercase;">cannot be specified</em></strong></span> in the CSS document. For example, the text of an anchor tag (`<a>`) will, by default, be displayed on the same line as the surrounding text, and it will only be as wide as necessary to contain its content. `inline` elements cannot be altered in size with the `height` or `width` CSS properties.
```html
To learn more about <em>inline</em> elements, read <a href="#">MDN documentation</a>.   
```
- In the example above, the `<em>` element is `inline`, because it displays its content on the same line as the content surrounding it, including the anchor tag. This example will display:
<div style="width: 600px; margin: 0 auto; padding: 14px; border: 2px solid DeepSkyBlue;">To learn more about <em>inline</em> elements, read <a href="#">MDN documentation</a>.   </div>

- The CSS `display` property provides the ability to make any element an inline element. This includes elements that are not inline by default such as paragraphs, divs, and headings.
```css
h1 {
  display: inline;
}
```
- The CSS in the example above will change the display of all `<h1>` elements to `inline`. The browser will render `<h1>` elements on the same line as other inline elements immediately before or after them (if there are any).
- In inline layout, a mixed stream of text, replaced elements （elements whose contents are not affected by the current document's styles）, and other inline boxes are laid out by fragmenting them into a stack of line boxes. Within each line box, inline-level boxes are aligned to each other vertically or horizontally, depending on the writing mode. Typically, they are aligned by the baselines of their text. This can be changed with CSS.
![[inline-display.png||750]]

## 1.9 Display: Block

- Some elements are not displayed in the same line as the content around them. These are called <span style="color: deepskyblue; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-transform: capitalize;">block-level elements</em></strong></span>. These elements fill the entire width of the page by default, but <span style="color: crimson; font-size: 1.2em;"><strong style="color: inherit;">their WIDTH property can also be set</strong></span>. Unless otherwise specified, they are the height necessary to accommodate their content.
- Elements that are block-level by default include all levels of heading elements (`<h1>` through `<h6>`), `<p>`, `<div>` and `<footer>`.
```css
strong {
  display: block;
}
```
- In the example above, all `<strong>` elements will be displayed on their own line, with no content directly on either side of them even though their contents may not fill the width of most computer screens.

## 1.10 Display: Inline-Block

- Inline-block display combines features of both inline and block elements. Inline-block elements <span style="color: aqua; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">can appear next to each other and we can specify their dimensions using the</em></strong></span> `width` and `height` <span style="color: aqua; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">properties</em></strong></span>. Images are the best example of default inline-block elements.
- For example, the `<div>`s below will be displayed on the same line and with the specified dimensions:
![[display-inline-block.png||550]]
- Let’s take a look at the code:
````ad-example
```html
<div class="rectangle">
  <p>I’m a rectangle!</p>
</div>
<div class="rectangle">
  <p>So am I!</p>
</div>
<div class="rectangle">
  <p>Me three!</p>
</div>
```

<br>

```css
.rectangle {
  display: inline-block;
  width: 200px;
  height: 300px;
}
```
````
- There are three rectangular `div`s that each contain a paragraph of text. The `.rectangle` `<div>` s will all appear inline with a width of 200 pixels and height of 300 pixels, even though the text inside of them may not require 200 pixels by 300 pixels of space.

## 1.11 Float

- So far, you’ve learned how to specify the exact position of an element using offset properties. If you’re simply interested in <span style="color: forestgreen; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">moving an element as far left or as far right as possible in the container</em></strong></span>, you can use the `float` property.
- The `float` property is commonly used for <span style="color: firebrick; font-size: 1.2em;"><em style="color: inherit;">wrapping text around an image</em></span>.
```ad-note
However, moving elements left or right for layout purposes is better suited for tools like CSS grid and flexbox, which you’ll learn about later on.
```
- The float property is often set using one of the values below:
	- `left` - moves, or floats, elements as far left as possible.
	- `right` - moves elements as far right as possible.
````ad-example
```css
.green-section {
  width: 50%;
  height: 150px;
}

.orange-section {
  background-color: orange;
  width: 50%;
  float: right;
}
```
````

- In the example above, we float the `.orange-section` element to the right. This works for static and relative positioned elements. See the result of the code below:
![[display-float.png||850]]

- Floated elements must have a width specified, as in the example above. Otherwise, the element will assume the full width of its containing element, and changing the float value will not yield any visible results.

## 1.12 Clear

- The float property can also be used to float multiple elements at once. However, when multiple floated elements have different heights, it can affect their layout on the page. Specifically, elements can “bump” (*bater*) into each other and not allow other elements to properly move to the left or right.
- The `clear` property specifies <span style="color: chartreuse; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-decoration: underline; text-underline-offset: 4px;">how elements should behave when they bump into each other</em></strong></span> on the page. It can take on one of the following values:
	- `left` — the left side of the element will not touch any other element within the same containing element.
	- `right` — the right side of the element will not touch any other element within the same containing element.
	- `both` — neither side of the element will touch any other element within the same containing element.
	- `none` — the element can touch either side.
```css
div {
  width: 200px;
  float: left;
}

div.special {
  clear: left;
}
```
- In the example above, all `<div>`s on the page are floated to the left side. The element with class `special` did not move all the way to the left because a taller `<div>` blocked its positioning. By setting its <code class="myCode">clear</code> property to <code class="myCode">left</code>, the special `<div>` will be moved all the way to the left side of the page.