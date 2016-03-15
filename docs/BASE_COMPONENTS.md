# Documentation - Base Components

## Table of Contents
  1. [Introduction](#introduction)
  1. [Typography](#typography)
  1. [Class-less Elements](#classless-elements)

## Introduction

To prevent user-agent styles to kick-in and ruin our current design language, much like the reset styles we have to create a set of styles targeting the most common elements to enforce that design language.

Basic style reseting (as found at `_common/_reset.scss`).

## Typography

`_components/_typography.scss` - holds all the most used styles defined inside placeholders - again to act as a single source of truth - without code duplication.

Please refer to the demo page in order to visually check all properties.

All components were sized according to Google's Material Design Typography guidelines - and follow the same naming conventions.

  * [Google Material Design Typography Guidelines](https://www.google.com/design/spec/style/typography.html) - more information can be found here.

** Source **

```sass
body {
  font-family: $primary-font-family;
  font-size: $main-font-size;
  color: $primary-text-color;
}
@include placeholder(display-4) {
  font-size: 112px;
  font-weight: 100;
  margin-bottom: $gutter;
}

...

@include placeholder(body-1) {
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 20px;

  @include breakpoint(medium) {
    font-size: 14px;
  }
}

...
```

** Usage **

As stated before font-styles, or typography styles should be used via placeholder to avoid code duplication, and as so the usage is as follows:

```sass
h1 {
  @include _(display-4);
}
...
```

## Class-less Elements

*** Please refer to the demo page, as including source and examples for all elements would be overkill. ***

** Example **

```sass
h1,
h2,
h3,
h4,
h5,
h6,
p {
  ...
}

header,
article,
menu,
aside {
  ...
}

input {
  ...
}

button {
  ...
}
```
