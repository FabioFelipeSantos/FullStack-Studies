# 1 Introduction to Color

CSS supports a wide variety of <span style="color: violet; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Colors</em></strong></span>. These include _named colors_, like `blue`, `black`, and `limegreen`, along with colors described by a numeric value. Using a numeric system allows us to take advantage of the whole spectrum of colors that browsers support. In this lesson, we’re going to explore all the color options CSS offers.

Colors in CSS can be described in three different ways:
- **Named colors** — English words that describe colors, also called <span style="color: tomato; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Keyword Colors</em></strong></span>
- **RGB** — numeric values that describe a mix of red, green, and blue
- **HSL** — numeric values that describe a mix of hue （matiz, tonalidade）, saturation, and lightness

We’ll learn about and explore the benefits of each of these in-depth. Using only named colors, you may feel like you’re picking labeled crayons out of a box. By the end of this lesson, you’ll feel like a painter mixing paints on a palette. 

# 2 Foreground vs Background

Before discussing the specifics of color, it’s important to make two distinctions about color. Color can affect the following design aspects:
- The foreground color
- The background color

Foreground color is the color that an element appears in. For example, when a heading is styled to appear green, the _foreground color_ of the heading has been styled.

Conversely, when a heading is styled so that its background appears yellow, the _background color_ of the heading has been styled.

In CSS, these two design aspects can be styled with the following two properties:

- `color` - this property styles an element’s foreground color.
- `background-color` - this property styles an element’s background color.

```css
h1 {
	color: red;
	background-color: blue;
}
```

In the example above, the text of the heading will appear in red, and the background of the heading will appear blue.

