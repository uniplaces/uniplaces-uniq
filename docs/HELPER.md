# Documentation - Helper Components

*Helper components - set of opinionated mixins, placeholders and variables to make you development faster and easier.*

## Table of Contents

  1. [Helper Components](#helper-components)
    - [Mixins](#mixins)
    - [Placeholders](#placeholders)
    - [Variables](#variables)

## MIXINS

Mixins provider a single source of truth for modular CSS, making it easy to maintain and scale components.

### Creation

Mixins should be created with a component level context, to make it easier to find and change styles if need be. For example a mixin that will be used to style a grid should be placed in _components/_grid.scss. It is also advisable (where deemed necessary) to always define default values for the arguments passed to a mixin.

```sass
@mixin column($count, $total-columns:$max-columns) {
  ...
	width: $count * 100% / $total-columns;
}
```

### Usage

It's deemed best practice to place mixins at the bottom of each set of properties where it will be used (unless you intend to override some of the inherited properties).

```sass
.booking-detail {
  ...
  @include col(6);
}
```

### Warning

Although mixin usage helps in providing a single source of truth for a given set of styles it **will result in code duplication** in the output CSS file.
Please use common sense and look into placeholders if defining really long sets of styles (without code duplication).

## Placeholders

Much like mixins, placeholders provide a common place for editing sets of styles spread out through your code. But unlike mixins placeholders group selectors and apply the given set of properties to them.

### Creation

Placeholders should be created with a "reusable set of properties" mindset, so it's deemed best to created them inside a global *.scss file (i.e. _common/...).

```sass
@include placeholder(limited-full-width) {
  position: relative;
  display: block;
  width: 100%;
  max-width: 1200px;
  ...
}
```

### Usage

It's imperative that the following usage is maintained

```sass
.main {
  @include _placeholder(limited-full-width);
}
...
.header {
  @include _placeholder(limited-full-width);
}
```

### Warning

Placeholders should always be created and included inside your code with the instructions given above, as this is the only way you will be able to include placeholders inside of the @media query blocks.

Please bear in mind that placeholders group selectors around your given set of properties, so always double check where the placeholder is being included in the output CSS file to avoid inheritance issues.

***CSS Code output:***

```css
.main,
.header {
  position: relative;
  display: block;
  width: 100%;
  max-width: 1200px;
  ...
}
```

## Variables

** Much line %placeholders variables have a global scope, so they must be included in a global SCSS file. **

### Definition

```sass
$gutter: 16px;
$max-columns: 12;
$input-border: #{2px solid};
```

### Usage

```sass
.booking {
  padding: $gutter;
}
```
