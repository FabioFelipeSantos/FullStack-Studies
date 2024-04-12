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

# 5 Hex and RGB

The hexadecimal and rgb color system can represent many more colors than the small set of CSS named colors. We can use this new set of colors to refine our web page’s style.

In both hex and RGB, we have three values, one for each color. Each can be one of 256 values. Specifically, `256 * 256 * 256 = 16,777,216`. That is the amount of colors we can now represent. Compare that to the roughly 140 named CSS colors!

Recall that we started with named colors, converted them to hex, and then converted some of the hex colors to rgb. Unless we made a mistake, all of the colors should still be the same, visually. Let’s use our broadened palette to make some more refined color choices.

# 6 Hue, Saturation, and Lightness

The RGB color scheme is convenient because it’s very close to how computers represent colors internally. There’s another equally powerful system in CSS called the hue-saturation-lightness color scheme, abbreviated as _HSL_.

The syntax for HSL is similar to the decimal form of RGB, though it differs in important ways. The first number represents the degree of the hue, and can be between 0 and 360. The second and third numbers are percentages representing saturation and lightness respectively. Here is an example:

```css
color: hsl(120, 60%, 70%);
```

_Hue_ is the first number. It refers to an angle on a color wheel. Red is 0 degrees, Green is 120 degrees, Blue is 240 degrees, and then back to Red at 360. You can see an example of a color wheel below.
![[colors.svg||600]]

_Saturation_ refers to the intensity or purity of the color. The saturation increases towards 100% as the color becomes richer. The saturation decreases towards 0% as the color becomes grayer.

_Lightness_ refers to how light or dark the color is. Halfway, or 50%, is normal lightness. Imagine a sliding dimmer on a light switch that starts halfway. Sliding the dimmer up towards 100% makes the color lighter, closer to white. Sliding the dimmer down towards 0% makes the color darker, closer to black.

HSL is convenient for adjusting colors. In RGB, making the color a little darker may affect all three color components. In HSL, that’s as easy as changing the lightness value. HSL is also useful for making a set of colors that work well together by selecting various colors that have the same lightness and saturation but different hues.

# 7 Opacity and Alpha

All of the colors we’ve seen so far have been opaque, or non-transparent. When we overlap two opaque elements, nothing from the bottom element shows through the top element. In this exercise, we’ll change the _opacity_, or the amount of transparency, of some colors so that some or all of the bottom elements are visible through a covering element.

To use opacity in the HSL color scheme, use `hsla` instead of `hsl`, and four values instead of three. For example:

```css
color: hsla(34, 100%, 50%, 0.1);
```

The first three values work the same as `hsl`. The fourth value (which we have not seen before) is the _alpha_. This last value is sometimes called opacity.

Alpha is a decimal number from zero to one. If alpha is zero, the color will be completely transparent. If alpha is one, the color will be opaque. The value for half-transparent would be `0.5`.

You can think of the alpha value as, “the amount of the background to mix with the foreground”. When a color’s alpha is below one, any color behind it will be blended in. The blending happens for each pixel; no blurring occurs.

The RGB color scheme has a similar syntax for opacity, `rgba`. Again, the first three values work the same as `rgb` and the last value is the alpha. Here’s an example:

```css
color: rgba(234, 45, 98, 0.33);
```

A little unconventional, but still worth mentioning is how hex colors can also have an alpha value. By adding a two-digit hexadecimal value to the end of the six-digit representation (`#52BC8280`), or a one-digit hexadecimal value to the end of the three-digit representation (#F003), you can change the opacity of a hexadecimal color. Hex opacity ranges from `00` (transparent) to `FF` (opaque).

Alpha can only be used with HSL, RGB, and hex colors; we cannot add the alpha value to name colors like `green`.

There is, however, a named color keyword for zero opacity, `transparent`. It’s equivalent to `rgba(0, 0, 0, 0)`, and it’s used like any other color keyword:

```css
color: transparent;
```

