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

# 3 Hexadecimal

One syntax that we can use to specify colors is called _hexadecimal_. Colors specified using this system are called _hex colors_. A hex color begins with a hash character (`#`) which is followed by three or six characters. The characters represent values for red, blue and green.

```css
darkseagreen: #8FBC8F
sienna:       #A0522D
saddlebrown:  #8B4513
brown:        #A52A2A
black:        #000000 or #000
white:        #FFFFFF or #FFF
aqua:         #00FFFF or #0FF
```

In the example above, you may notice that there are both letters and numbers in the values. This is because the hexadecimal number system has 16 digits (0-15) instead of 10 (0-9) like in the standard decimal system. To represent 10-15, we use A-F.

Notice that `black`, `white`, and `aqua` are all represented with both three characters and six characters. This can be done with hex colors whose number pairs are the same characters. In the example above, `aqua` can be represented as `#0FF` because both of the first two characters are `0` and the second and third pairs of characters are both `F`s. Keep in mind that all three character hex colors can be represented with six characters (by repeating each character twice) but the same is not true in reverse.

You can include hex colors just as you would include named colors: `background-color: #9932cc;`, and the letters can be uppercase or lowercase.

All HEX colors can be transformed into RGB colors. To do that, we have to make an accounting of all HEX pairs that are possible before the HEX pair of the color. For example: take the `#8BC13E` color. The first pair is `8B`. So, until 8, we have 8 options for the first component and 16 options for the second, resulting in `8 * 16 = 128`. Now, with 8 in the first place, the second place can go from 0 to A, 11 options. Thus, the `8B` will be the number `128 + 11= 139` in RGB color. For `C1` we have `12*16 + 1 = 193` and for `3E` we have `3*16 + 14 = 62`. Therefore, the resulting RGB color will be `rgb(139, 193, 62)`.

# 4 RGB Colors

There is another syntax for representing colors, commonly referred to as “RGB value” or just “RGB”, that uses decimal numbers rather than hexadecimal numbers, and it looks like this:

```css
h1 {
	color: rgb(23, 45, 23);
}
```

Each of the three values represents a color component, and each can have a decimal number value from 0 to 255. The first number represents the amount of red, the second is green, and the third is blue. These [colors](https://www.codecademy.com/resources/docs/css/colors) are exactly the same as hex, but with a different syntax and a different number system.

In general, hex and RGB color representations are equivalent. Which you choose is a matter of personal taste. That said, it’s good to choose one and be consistent throughout your CSS, because it’s easier to compare hex to hex and RGB to RGB.