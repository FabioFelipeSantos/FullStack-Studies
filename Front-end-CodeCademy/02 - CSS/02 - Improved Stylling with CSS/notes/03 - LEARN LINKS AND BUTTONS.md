# 1 Introduction 

Imagine that you are a user who has arrived at the website loaded in the web browser here. What can you interact with, what can you click on to navigate the site? Before clicking anything, scroll through the page and try to guess how elements might behave when clicked. After this, click through and see what actually works. Even if you were totally correct in your assumptions about what was clickable (because you are a competent user of web interfaces or are very lucky!), many users would struggle to interact with this page effectively. This site is a particularly bad example of interface design, and there is a lot of room for improvement.

Part of the reason it is so hard to know how to interact with this website is that there are few to no *signifiers*. To simplify an admittedly complex concept, signifiers (and the related concept of affordances) are indicators that offer clues about how to interact with new objects or situations. For example, a drawer handle’s shape helps indicate to a user how they might interact with it (grab it with their hand and pull to open).

Showing interactivity and clickability through signifiers is a fundamental aspect of user interface design. In this lesson, we will cover some of the high-level best practices for demonstrating interaction and interactivity and some implementations using CSS.

# 2 Browser Link Styles

Web browsers have always taken account of the importance of using signifiers for navigation. By default, browsers include a _user agent stylesheet_, a set of default styles included with the browser (“user agent”) for use on all web pages. The HTML5 specification defines a set of [default behavior for rendering content](https://www.w3.org/TR/html5/rendering.html). These styles are used to ensure that a raw HTML file is styled to be reasonably readable by any user, and user agent stylesheets include styling for headings, tables, links, and more basic HTML elements. Most users do not see these styles too often, because designers override them with their own custom designs. However, it’s important to note that maintaining a consistent user experience pattern, like the default behavior applied by browsers, is important for creating a consistent experience.

Traditionally, links are differentiated from regular text using blue text and underlines to draw users’ attention to their clickability. Many websites and user agent stylesheets still use these link styles.

Browsers also style two other link states: clicked (‘active’), and previously visited. In most user agent stylesheets, clicked (but not yet followed) links appear with red text, and previously visited links are styled with purple text.

# 3 Link Styling

The most important aspect of styling links is differentiating links from surrounding text. The default blue-text, underlined link style accomplishes this differentiation using two CSS properties: `color` and `text-decoration`. These are both good ways to differentiate a link, and they are strong, familiar signifiers to most web users. Additionally, you could use CSS properties for `background-color`, `font-weight`, or `border`.

Link styles should not be replicated in other page text. Link color should sufficiently contrast the text colors in the rest of the design. For example, if links are underlined, other text should not be.

**Anchor text**, the text itself of a link, should be descriptive of the linked resource. Although this is not strictly a design problem, it is important for usability, accessibility, and [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)(*Search Engine Optimization*).

# 4 Tooltips and Titles

In addition to providing descriptive anchor text, it is sometimes helpful to provide additional context to explain links. This context can be particularly helpful when a link contains or consists of an image, icon, or another non-text element.

Additional context can be provided as text using the HTML `title` attribute. Although the `title` attribute can be provided to any HTML element, it is often extremely useful as additional context or advisory text for clickable elements.

Most browsers will display the text of a `title` attribute as a [tooltip](https://en.wikipedia.org/wiki/Tooltip "Wikipedia's entry to tooltips"), meaning when a user hovers their cursor over an element, the text will appear in a small box near the cursor.

To add tooltips to a clickable element like a link, add it as the `title` attribute.

```html
<p>
	<a
		href="https://www.codecademy.com"
		title="Codecademy is an online learning platform">
		Codecademy</a>is the best place to learn to code!
</p>
```

Mouse over the word “Codecademy” below to see this behavior in action!

[Codecademy](https://www.codecademy.com/ "Codecademy is an online learning platform") is the best place to learn to code!

**NOTE**: The `title` attribute is HTML’s built-in way of creating tooltips, but is known to [cause a variety of accessibility issues](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title#accessibility_concerns). Developers have come up with a number of ways to create tooltips that are more accessible, but this generally requires using CSS and JavaScript, which fall out of the scope of this lesson. When creating tooltips in the wild, you should research ways to make them accessible for everyone.

# 5 Hover States and Cursors

- `:hove` - Used to style elements when user hovers over it.
	- If other pseudo-classes like `:link`, `:visited` or `:active` be present, make sure you to put `:hover` after the `:link` and `:visited` but before the `:active` one. Follow the **LVHA** order (`:link` - `:visited` - `:hover` - `:active`).
	- It isn't present on mobile devices, as mobile devices don't have on-screen cursors.
- `cursor` - CSS property that control the behavior of mouse's pointer. [Types of cursors](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#keyword)
```css
/* Default color of <a> element */
a {
	color: blue;
}

a:hover {
	/* Change color to orange when user hovers over <a> element */
	color: orange;
	
	/* Change mouse's pointer */
	cursor: pointer;
}
```

## 5.1 Cursor Formal syntax

[[01 - Learn CSS - Selectors and Visual Rules#1.4.1.5.3 Question mark (?)|? Question Mark]] - optional, and must appear zero or one time
[[01 - Learn CSS - Selectors and Visual Rules#1.4.1.5.5 Hash mark (` `)|"#" hash mark]] - may be repeated one or more times

```css
cursor: 
  [ [ <url> | <url-set> ] [ <x> <y> ]? ]#? [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | grab | grabbing | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out ]  

<url> = <url()> | <src()>

<x> = x

<y> = y

<url()> = url( <string> <url-modifier>* ) | <url-token>

<src()> = src( <string> <url-modifier>* )
```

```css
/* Keyword value */
cursor: auto;
cursor: pointer;
/* … */
cursor: zoom-out;

/* URL with mandatory keyword fallback */
cursor: url(hand.cur), pointer;

/* URL and coordinates, with mandatory keyword fallback */
cursor:
  url(cursor_1.png) 4 12,
  auto;
cursor:
  url(cursor_2.png) 2 2,
  pointer;

/* URLs and fallback URLs (some with coordinates), with mandatory keyword fallback */
cursor:
  url(cursor_1.svg) 4 5,
  url(cursor_2.svg),
  /* …, */ url(cursor_n.cur) 5 5,
  progress;

/* Global values */
cursor: inherit;
cursor: initial;
cursor: revert;
cursor: revert-layer;
cursor: unset;
```

# 6 Link States

- `:link` (not clicked) -> represents an element that has not yet been visited;
- `:visited` -> applies once the link has been visited by the user;
- `:hover` -> used to style elements when user hovers over it;
- `:active` (clicked) -> represents an element (such as a button) that is being activated by the user;

# 7 Skeuomorphism and Flat Design

- The concept of UI elements that **replicate or imitate real-life counterparts** is known as _skeuomorphism_ (Esqueumorfismo) (a derivative object that retains ornamental design cues (attributes) from structures that were necessary in the original. Skeuomorphs are typically used to make something new feel familiar in an effort to speed understanding and acclimation. They employ elements that, while essential to the original object, serve no pragmatic purpose in the new system).
- If a **web button** appears similar to a real-life button on a physical interface, users can reliably figure out that the way to interact with the button is to press it.
- **Flat design** uses simplicity and a lack of clutter (desordem, bagunça) for its UI elements.

# 8 `{html}<button>`: The Button Element

```html
<button>Click me</button>
```

The `<button>` HTML element ([documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)) is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a [form](https://developer.mozilla.org/en-US/docs/Learn/Forms) or opening a dialog.

It has several different [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes) that can be used. Some of these are:
- `disabled` -> This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.
- `form` -> The `<form>` element to associate the button with (its form owner). The value of this attribute must be the id of a `<form>` in the same document. (If this attribute is not set, the `<button>` is associated with its ancestor `<form>` element, if any.)
- We can apply the [Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) too, like:
	- `onclick`
	- `onkeydown`
	- `onkeypress`
	- `onkeyup`
	- `hidden` -> the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed;
	- `title` -> contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip;

For the layout stylization, a minimum interactive size of `44px ⨉ 44px` is recommended.

## 8.1 Buttons: Skeuomorphic styling

- Aims to imitate the appearance and interactivity of a real-life button.
- The use of hover and/or active states is important in order to model interaction with a real button.
```css
button {
	padding: 5px;
	border: 1px solid black;
	border-radius: 5px;
	text-decoration: none;
	box-shadow: 0px 5px;
}

button:hover {
	cursor: pointer;
}

/* While the user is clicking on the button */
button:active {
	margin-top: 5px;
	color: black;
	box-shadow: 0px 0px;
}
```


## 8.2 Buttons: Flat Design

