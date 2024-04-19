# 1 Wireframing

- Wireframes communicate how a design intends to lay out the product;
- Emphasize usability over aesthetics;
- Allow developers to provide feedback on the design;
- Help developers break lay out a development plan;
- Wireframes are like blueprints (projeto arquitetônico). They help us visualize how our web content should appear to the user;
- Wireframes should omit the stylization of the components like colors, fonts, buttons, etc. They should focus on the structure of the app.
![[how-wireframes-should-like.png||850]]

- In wireframes, the developer should break them down into small components like the logo, header, main content, and footer.
- For all components, the developer has to determine which components repeatedly appear and which don't. Each type of component has different implementations.
# 2 From Design to Website

- First: think in your website underlying structure as being grids as we build them out in HTML and CSS.
- In this way, we must work with common HTML tags to define the sections of the site, like: the `{html}<header>`, `{html}<nav>`, `{html}<main>`, `{html}<section>`, `{html}<footer>`, etc.
- These tags should focus on visual hierarchy and visual continuity of the site.
- Usually, the focal point of a website is the main content at its center. Here, we have all the information that brings our intent to the site. After our eyes take a look at the focal point, we tend to see the header of the website. In the header, we will usually see the navigation menus, the title in an `H1` tag, and subtitles in paragraphs or inferior heading tags. For last, we look at the footer of the website. Other links, sections, navigation links, social icons, etc., could appear here and bring more content that the users can look at.
- How we move through our design, we must think about visual continuity. The design must have a sense of visual, visual cohesion, and visual continuity.
- The continuity is achieved through colors type, fonts, and by adding similar sections to our web site.
- For the web design workflow, we can move through:
	- Gather our main content: images, texts, videos, sounds (all the visual information);
	- After that, we make design decisions above the content gathered like: which colors we should use, which fonts make sense with the content.
	- Lastly, we can create a style guide that guide us in the structuration by the HTML and how they should appear using CSS.
-  For the process:
	1. Take it one section at a time;
	2. Allow HTML and CSS to inform your layout;
	3. Look for similarities and differences as you begin to choose HTML tags and CSS selectors;
	4. Continue to apply and build your 'style guide';
	5. Be open to changes as you move through your design process.
- To avoid be overwhelmed, think about which HTML tags we should use
```html
<body>
	<header>
		<section>Title</section>
		<nav>Links</nav>
	</header>
	<main>
		<section></section>
		<section></section>
		<section></section>
		.
		.
		.
	</main>
	<footer></footer>
</body>
```

- This video show how to proceed to achieve the first structure of our website.
![[how-implement-our-wireframe.mp4]]

