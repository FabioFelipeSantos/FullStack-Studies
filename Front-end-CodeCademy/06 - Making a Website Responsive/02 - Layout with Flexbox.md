# 1 Summary

- *Flex container*s are helpful tools for creating websites that respond to changes in screen sizes.
- Child elements of flex containers will change size and location in response to the size and position of their parent container.
```css title="How set the display to the Flex Container System"
div.container {  
  display: flex;  
}
```
- The children are flex items. Child elements will not begin on new lines.
- To allow flex containers to be inline elements, we can use the value `{css}display: inline-flex`.
```html
<div class='container'>
	<p>I’m inside of a flex container!</p>
	<p>A flex container’s children are flex items!</p>
</div>
<div class='container'>
	<p>I’m also a flex item!</p>
	<p>Me too!</p>
</div>
```

```css
.container {
	width: 200px;
	height: 200px;
	display: inline-flex;
}
```
- There are two container `div`'s. Without a width, each div would stretch the entire width of the page. The paragraphs within each div would also display on top of each other because paragraphs are block-level elements.
- The **size of the parent container** will override the size of its child elements. If the parent element is too small, the flex items will shrink to accommodate the parent container’s size.
```html
<div class='container'>
	<div class='child'>
		<h1>1</h1>
	</div>
	<div class='child'>
		<h1>2</h1>
	</div>
</div>
```

```css
.container {
	width: 200px;
}

.child {
	display: inline-flex;
	width: 150px;
	height: auto;
}
```
- The `.child` `div`'s will take up more width (300 pixels) than the `container` div allows (200 pixels). The `.child` `div`'s will shrink to accommodate the container’s size.
- We can specify **how flex items spread out** from left to right, along the _main axis_. To position the items from left to right, we use a property called `justify-content`.
```css info=3
.container {
	display: flex;
	justify-content: flex-end;
}
```
- Possible values for `justify-content`:
	- `flex-start` — all items will be **positioned in order, starting from the left** of the parent container, with no extra space between or before them.
	- `flex-end` — all items will be **positioned in order, with the last item starting on the right side** of the parent container, with no extra space between or after them.
	- `center` — all items will be **positioned in order, in the center of the parent container** with no extra space before, between, or after them.
	- `space-around` — items will be **positioned with equal space before and after each item, resulting in double the space between elements**.
	- `space-between` — items will be **positioned with equal space between them, but no extra space before the first or after the last elements**.
- The `align-items` property makes it possible to **space flex items vertically**.
```css info=3
.container {  
	display: flex;
	align-items: baseline;
}
```
- Used values for the `align-items` property:
	- `flex-start` — all elements will be **positioned at the top of the parent container**.
	- `flex-end` — all elements will be **positioned at the bottom of the parent container**.
	- `center` — the center of all elements will be **positioned halfway between the top and bottom of the parent container**.
	- `baseline` — **the bottom of the content of all items will be aligned with each other**.
	- `stretch` — if possible, **the items will stretch from top to bottom of the container** (this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).
- These five values tell the elements how to behave along the _cross axis_ of the parent container. In these examples, **the cross axis stretches from top to bottom of the container**.
- *Flex items* shrink proportionally when the flex container is too small. However, if the parent container is larger than necessary then the flex items will not stretch by default. The `flex-grow` property allows us to specify if items should grow to fill a container and also which items should grow proportionally more or less than others.
```html
<div class='container'>
	<div class='side'>
		<h1>I’m on the side of the flex container!</h1>
	</div>
	<div class='center'>
		<h1>I'm in the center of the flex container!</h1>
	</div>
	<div class='side'>
		<h1>I'm on the other side of the flex container!</h1>
	</div>
</div>
```

```css
.container {
	display: flex;
}
.side {
	width: 100px;
	flex-grow: 1;
}
.center {
	width: 100px;
	flex-grow: 2;
}
```