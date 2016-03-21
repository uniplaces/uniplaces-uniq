# Documentation - COLORS

*General considerations regarding the color palette and it's usage.*

## Table of Contents

  1. [Intro](#intro)
    - [Mixins](#mixins)
    - [Usage](#usage)

### Intro

Color is very important in design – it plays both a visual and psychological role. Having a varied palette that matches the intent of your design greatly contributes to the overall aesthetic of your site.

**Mixins**

Sass $variables provide a great way to reference color values in an organized, reusable way. It is highly suggested that palette colors are named semantically rather than on their appearance. A variable like `$color-blue` has little meaning (other than that the color is blue), whereas `$color-primary` defines the color’s role semantically. This also allows for flexibility for multiple themes, or if brand colors change in the future.

Though $color-variables are a good start, it is often a good idea to keep color variables organized in a Sass map. This way, the colors can be iterated, are more organized, and are more intuitive to reference.

***Source***

```sass
$primary-color-key: 'primary' !default;

@function color($name: 'primary', $variant: $primary-color-key) {
  $color: null;
  // Get the color spectrum
  $color-spectrum: map-get($palette, $name);
  // Get the color variant
  @if $color-spectrum {
    $color: map-get($color-spectrum, $variant);
  }

  @return $color;
}
```

**Usage**

***Creating a Color Palette***

```sass
$palette: (
  'primary': (
    'primary': #00adef,// uniplaces_blue
    'light': #c6eaf8,// tropical_blue
    'medium': #0076a3,// allports
    'dark': #003b52,// prussian_blue
    'contrast': #fff// contrast_white
  ),
  'text': (
    'primary': rgba(0,0,0,0.87),
    'secondary': rgba(0,0,0,0.54),
    'disabled': rgba(0,0,0,0.38),
    'dialog': #4e4e4e
  ),
  ...
);
```

*** Using a color ***

```sass
.button--success {
  background-color: color('success');

  &:hover {
    background-color: color('success', 'light')
  }
}
```

`note:` As you can see in the example above, passing just one argument to the color function will result in selecting the 'primary' key from the palette map. Which effectively is the same as writing `color('success', 'primary')`.
