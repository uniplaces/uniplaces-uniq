# Uniplaces CSS / Sass Style Guide

*A mostly reasonable approach to CSS and Sass*

## Table of Contents

  1. [Terminology](#terminology)
    - [Rule Declaration](#rule-declaration)
    - [Selectors](#selectors)
    - [Properties](#properties)
  1. [CSS](#css)
    - [Formatting](#formatting)
    - [Comments](#comments)
    - [BEM](#bem)
    - [ID Selectors](#id-selectors)
    - [JavaScript hooks](#javascript-hooks)
    - [Border](#border)
  1. [Sass](#sass)
    - [Syntax](#syntax)
    - [Ordering](#ordering-of-property-declarations)
    - [Variables](#variables)
    - [Mixins](#mixins)
    - [Extend directive](#extend-directive)
    - [Nested selectors](#nested-selectors)
  1. [Misc.](#misc)
    - [Colors](#colors)
    - [Over-qualification](#over-qualification)

## Terminology

### Rule declaration

A “rule declaration” is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:

```css
.booking {
  font-size: 18px;
  line-height: 1.2;
}
```

### Selectors

In a rule declaration, “selectors” are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:

```css
.my-element-class {
  /* ... */
}

[aria-hidden] {
  /* ... */
}
```

### Properties

Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:

```css
/* some selector */ {
  background: #f1f1f1;
  color: #333;
}
```

## CSS

### Formatting

* Use soft tabs (2 spaces) for indentation.
* Prefer dashes over camelCasing in class names. Underscores are OK if you're using BEM (see [BEM](#bem) below).
* When using multiple selectors in a rule declaration, give each selector its own line.
* Put a space before the opening brace `{` in rule declarations.
* In properties, put a space after, but not before, the `:` character.
* Put closing braces `}` of rule declarations on a new line.
* Put blank lines between rule declarations and between logical groups of properties.
* Do not use ID selectors (ever).

  * As a future reference please check [CSS Comb](http://csscomb.com/) to enforce coding style and other conventions within an automated workflow.

**Bad**

```css
.booking{
    border-radius:50%;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#lol-no {
  // ...
}
```

**Good**

```css
.booking {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}
```


* Although it's not fully enforced you may divide properties in logical groups within a selector block, in the following order:
  - Layout properties
  - Cosmetic properties

**Good**
```css
.element {
  position: relative;
  display: block;
  width: 100%;
  height: 56px;
  background-color: #fff;
  border: 1px solid #ddd;
}
```

**Acceptable**
```css
.element {
  position: relative;
  display: block;
  width: 100%;
  height: 56px;

  background-color: #fff;
  border: 1px solid #ddd;
}
```

### Comments

* Prefer line comments (`//` in Sass-land) to block comments.
* Prefer comments on their own line. Avoid end-of-line comments.
* Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks

### BEM

We encourage the use of BEM notation for these reasons:

  * It helps create clear, strict relationships between CSS and HTML
  * It helps us create reusable, composable components
  * It allows for less nesting and lower specificity
  * It helps in building scalable stylesheets

**BEM**, or “Block-Element-Modifier”, is a _naming convention_ for classes in HTML and CSS. It was originally developed by Yandex with large codebases and scalability in mind, and can serve as a solid set of guidelines for implementing OOCSS.

  * CSS Trick's [BEM 101](https://css-tricks.com/bem-101/)
  * Harry Roberts' [introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

**Example**

```html
<article class="booking-card booking-card--featured">

  <h1 class="booking-card__title">Great 2 Bedroom apartment in the sunny Lisbon</h1>

  <div class="booking-card__content">
    <p>Vestibulum id ligula porta felis euismod semper.</p>
  </div>

</article>
```

```css
.booking-card { }
.booking-card--featured { }
.booking-card__title { }
.booking-card__content { }
```

  * `.booking-card` is the “block” and represents the higher-level component
  * `.booking-card__title` is an “element” and represents a descendant of `.booking-card` that helps compose the block as a whole.
  * `.booking-card--featured` is a “modifier” and represents a different state or variation on the `.booking-card` block.

### ID selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

### JavaScript hooks

Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality. Javascript and CSS are and should always be

We recommend creating JavaScript-specific ID to bind to:

```html
<button id="request-to-book" class="btn btn-primary">Request to Book</button>
```

### Border

Use `0` instead of `none` to specify that a style has no border.

**Bad**

```css
.foo {
  border: none;
}
```

**Good**

```css
.foo {
  border: 0;
}
```

## Sass

### Syntax

* Use the `.scss` syntax, never the original `.sass` syntax
* Order your regular CSS and `@include` declarations logically (see below)

### Ordering of property declarations

1. Property declarations

    List all standard property declarations, anything that isn't an `@include` or a nested selector.

    ```scss
    .btn--green {
      background: green;
      // ...
    }
    ```

2. `@include` declarations

    Grouping `@include`s at the end makes it easier to read the entire selector.

    ```scss
    .btn--green {
      background: green;
      @include transition(background 0.5s ease);
      // ...
    }
    ```

3. Nested selectors

    Nested selectors, _if necessary_, go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors.

    ```scss
    .btn {
      background: green;
      font-weight: bold;
      @include transition(background 0.5s ease);

      &__icon {
        margin-right: 10px;
      }
    }
    ```

### Variables

Prefer dash-cased variable names (e.g. `$my-variable`) over camelCased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. `$_my-variable`).

### Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

### Extend directive

`@extend` should be minimized because it has unintuitive behavior, especially when used with nested selectors. Instead resort to placeholders (using the notation provided below) if the `@extend` behavior is required to help DRY your code and have a single source of truth.

### Nested selectors

**Do not nest selectors more than two levels deep!**

```scss
.main-container {
  .content {
    // STOP!
  }
}
```

When selectors become this long, you're likely writing CSS that is:

* Strongly coupled to the HTML (fragile) *—OR—*
* Overly specific (powerful) *—OR—*
* Not reusable


Again: **never nest ID selectors!**

If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should **never** need to do this.


## Misc.

### Colors

**Prefer shorthand lowercase version of HEX colors whenever possible.**

***Bad***
```css
.wrong {
  background-color: #FFF;
}
.not-it {
  background-color: rgba(255,0,0,1);
}
```

***Good***
```css
.correct {
  background-color: #fff;
}
.ta-da {
  background-color: #F00;
}
```

### Over-qualification

**Avoid selector over-qualification at all costs.**

CSS over-qualification of selectors adds unnecessary complexity and makes it harder to maintain simple styles.
If global styling is required opt for a classless approach. (*)

***Bad***
```css
a.wrong-link {
  text-decoration: underline;
}
```

***Good***
```css
.correct-link {
  text-decoration: underline;
}
// OR (*)
a {
  text-decoration: underline;
}
```
