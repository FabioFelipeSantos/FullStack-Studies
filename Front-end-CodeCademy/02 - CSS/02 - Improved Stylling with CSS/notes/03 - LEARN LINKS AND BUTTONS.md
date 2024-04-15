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

