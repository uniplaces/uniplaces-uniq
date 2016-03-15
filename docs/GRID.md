# Documentation - Grid

* A.K.A Layout Components - provide a single source of truth when working with layout properties and dealing with responsive design layout changes. *

## Table of Contents

  1. [Introduction](#into)
    - [Grid](#grid)
      - [Rows](#rows)
      - [Columns](#columns)

## Introduction

The core concept of a CSS grid system is to provide you with a set of properties, mixins and placeholders to smooth the process of creating, sizing and adapting containers to various viewport sizes (desktop or mobile).

## Grid

This grid is a 12 column flex-based system. This provides a simple way to create define element sizes and positioning but also keeping some flexibility if need be.

***All styles defined by the grid must be used through the provided mixins/placeholders.***

### Rows

The row is the wrapper element in which all columns must be placed.

** Source **

```sass
@mixin row() {
  @include _(flex);
  @include _(flex-wrap);
  margin: 0 auto;
}
```

** Usage **

```sass
.my-element {
  ...
  @include row();
}
```

### Columns

Columns as stated before represent a visual (vertical) division of their parent container.

By default this is 1/12 of the width of the parent container, but as you will see bellow for extra flexibility you are able to change this.

** Source **

```sass
@mixin column($count, $total-columns:$max-columns) {
  ...
  width: $count * 100% / $total-columns;
}
```

** Usage **

```sass
.booking {
  ...
  @include col(6);

  &__image {
    ...
    // in this example we need the column base (or max-columns)
    // to be 24 passing that as the 2nd argument of the mixin
    @include col(6,24);
  }
}
```
