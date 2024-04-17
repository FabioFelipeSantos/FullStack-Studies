# 1 Breadcrumbs (Migalhas de Pão)

- Secondary navigation, or breadcrumb navigation, usually consists of a clickable list of pages or attributes that led to the current page.
- With it, users can get a quick feel for where they are on a site.
- They also provide a way for a user to quickly jump backward in their navigation of the site.
- Breadcrumbs are usually displayed as a horizontal list of pages and take up minimal space.

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