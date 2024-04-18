# 1 Breadcrumbs (Migalhas de Pão)

- Secondary navigation, or breadcrumb navigation, usually consists of a clickable list of pages or attributes that led to the current page.
- With it, users can get a quick feel for where they are on a site.
- They also provide a way for a user to quickly jump backward in their navigation of the site.
- Breadcrumbs are usually displayed as a horizontal list of pages and take up minimal space.
- For consistency, the user hopes that the style of the breadcrumb to be the same across the available webpages.
- A link in breadcrumb need to send the user to a specific page. This is achieved by setting a `{html}href` property to the appropriate page.

## 1.1 Tips on how to code

1. Create a list element with the links:
```html info=3-6
...
<ul class="breadcrumb">
	<li>Link 1</li>
	<li>Link 2</li>
	<li>Link 3</li>
	<li>Link 4</li>
</ul>
...
```
2. Put the list in a horizontal line with `{css}display: inline`:
```css
...
/* Begin the stylization of the breadcrumb */
.breadcrumb > li {
	display: inline;
}
```
3. Add the a separator between two adjacent links. The most common separators are `/` and `>`:
```css
...
/* Put a separator between the links */
.breadcrumb li + li::before {
  padding: 10px;
  content: ">";
}
```
- The `{css}+` is called *Adjacent or Next Sibling* combinator ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator)); it will only select two `{css}li`'s when they are immediately next to each other, with the same parent. The element that will be selected is the second one on the sibling pair.
- The `{css}::before` will create a *pseudo-element* before the selected element ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)). He often appears with the `{css}content: ""` property, to add content that will be displayed just before the selected element.
4. Remove the link underline of the elements just for the breadcrumb:
```css
...
/* Removing the underline */
.breadcrumb a {
	text-decoration: none;
}
```
5. Put some style to the link in a breadcrumb when the user hovers over it:
```css
...
/* Styling the hover action */
.breadcrumb a:hover {
	color: red;
}
```

## 1.2 Creating a more stylish breadcrumb with CSS

1. Create a list element with the links:
```html info=3-14
...
<ul class="breadcrumb">
	<li>
		<a href="">Link 1</a>
	</li>
	<li>
		<a href="">Link 2</a>
	</li>
	<li>
		<a href="">Link 3</a>
	</li>
	<li>
		<a href="">Link 4</a>
	</li>
</ul>
...
```
2. Add some styles to the `{html}<a>` element:
```css
...
/* Stylization of the <a> element */
.breadcrumb a {  
  color: #fff;  
  background: darkcyan;  
  text-decoration: none;  
  position: relative;  
  height: 30px;  
  line-height: 30px;  
  text-align: center;  
  margin-right: 15px;  
  padding: 0 5px;
}
```
3. Make the `{html}<li>` elements inside the `{css}.breadcrumb` container a left floating element:
```css
...
/* Put a separator between the links */
.breadcrumb li {  
  float: left;  
}
```
- With these steps we have created the "body" of the arrows.
4. Use `{css}::before` and `{css}::after` pseudo-elements to create filled rectangles, without any content, before and after each list item:
```css info=3,4,6-8 attention=5
...
/* Creating the pseudo-elements before and after the list item */
.breadcrumb li a::before, .breadcrumb li a::after {  
  content: "";  
  position: absolute;  
  border-color: darkcyan;  
  border-style: solid;  
  border-width: 15px 5px;  
}
```
- The `{css}position: absolute` property will give the pseudo-elements the ability to move in the list elements.
5. Because of the `{css}border-width` property, the total width of our pseudo-elements is `10px`. So, move these elements to a proper location:
```css
...
/* Change the position of these new pseudo-elements */
.breadcrumb a::before {
  left: -10px;
}

.breadcrumb a::after {
  left: 100%;
}
```
6. Use the "trick" to turn these rectangles into arrows, using some portion of the `{css}border` as `transparent`.
```css info=5,10-11
...
/* Creating the arrows from the rectangles. */
.breadcrumb a::before {
  left: -10px;
  border-left-color: transparent;
}

.breadcrumb a::after {  
  left: 100%;  
  border-color: transparent;  
  border-left-color: darkcyan;  
}
```
- This effect is possible because the borders are drawn from the center of the element.

# 2 Types of Breadcrumbs

- **Location** based breadcrumbs are based on where you are with respect to the navigation structure of the website.
- **Attribute** based breadcrumbs are based on the attributes of the page or product that you are browsing. Since the order of these attributes is not prescriptive, you’ll see some sites display these at the same level in the UI.
- **Path** through the site. For example, if they landed on the home page, browsed to the about page and finally the registration page, their breadcrumb trail may look like: `Home > About > Register`.
- Path-based breadcrumbs can be confusing, only use if needed.
- Ensure breadcrumbs will add value before adding to a site.