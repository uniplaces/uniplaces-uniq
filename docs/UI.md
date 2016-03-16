# Documentation - COLORS

*General considerations regarding the color palette and it's usage.*

## Table of Contents

  1. [Intro](#intro)
    - [Typography](#typography)
    - [Buttons](#buttons)
    - [Tooltips](#tooltips)
    - [Input](#input)
    - [Tabs](#tabs)
    - [Breadcrumbs](#breadcrumbs)
    - [Images](#images)
    - [Pagination](#pagination)
    - [Badges](#badges)
    - [List](#list)

### Intro

Please refer to the demo page (`demo.html`) to check how each UI component looks.

### Typography

Museo Sans Rounded has been chosen as it provides an elegant yet readable
typeface for both headlines and body text.

Too many type sizes and styles at once can wreck any layout. A typographic scale
has a limited set of type sizes that work well together along with the layout
grid. sizes and styles were developed to balance content density and comfort
under typical usage conditions. Type sizes are specified with px.

### Buttons

Call to action buttons, provide points of interaction with the webapp, so they must on their own represent several states according to the desired action.

Available states are: default (no class needed), success, error, warning and disabled (with matching classes respectively).

**Usage**

***Markup***

```html
<div class="button">Button text</div>

<div class="button button--success">Success Button text</div>
```

***Styles***

Please refer to `_components/_buttons.scss` if you wish to change any of the default button styles.

### Tooltips

Tooltips can be placed along side any other elements to provide contextual information or contextual help.

**Usage**

***Markup***

```html
<div class="tooltip" data-type="i" data-title="Demo Title" data-content="Lorem ipsum dolor ...">i</div>

<div class="tooltip tooltip--alternate" data-type="i" data-title="Demo Title" data-content="Lorem ipsum dolor ...">i</div>
```

***Styles***

Please refer to `_components/_tooltips.scss` if you wish to change any of the default tooltip styles.

### Input

Much like buttons input fields provide a point of data entry to the user, can also have several states representing all possible states of success.

To simplify the usage of input fields in their various states the default user-agent styles were overridden.

**Usage**

***Markup***

```html
<label for="demo">Input Label</label>
<input type="text" name="demo" placeholder="Placeholder Text">

<label for="error">Input Label</label>
<input type="text" name="error" placeholder="Placeholder Text" class="validation--error">
```

***Styles***

Please refer to `_components/_input.scss` if you wish to change any of the default input styles.

### Tabs

Coupled with JS Tabs provide a quick and easy way to switch content visibility or to navigate between pages in the webapp.

Tabs can be aligned to left (default), center or right via modifier class.

**Usage**

***Markup***

```html
<ul class="tabs">
  <li class="tabs__item tabs__item--active">Active Link</li>
  <li class="tabs__item">Default Link</li>
  <li class="tabs__item">Default Link</li>
</ul>
```

***Styles***

Please refer to `_components/_tabs.scss` if you wish to change any of the default tab styles.

### Breadcrumbs

Indicate the current page's location within a navigational hierarchy

Separators are added via CSS through ':before' and content.

**Usage**

***Markup***

```html
<ul class="breadcrumbs">
  <li class="breadcrumbs__item">Home</li>
  <li class="breadcrumbs__item">Bookings</li>
  <li class="breadcrumbs__item">Detail</li>
</ul>
```

***Styles***

Please refer to `_components/_breadcrumbs.scss` if you wish to change any of the default tab styles.

### Images

Images can and should be used directly, but lazy-load support is provided. Image lazy-loading works by have a "lightweight" placeholder image loading by and one the target image comes into the users viewport the correct image loading is triggered. detection occurs by binding a javascript event to the scroll and using the BoundingClientRect() to detect wether the image should be shown or not.

Javascript source code can be found at lazyload.js

**Usage**

***Markup***

```html
<img src="images/placeholder.jpg" data-src="images/example.jpg" alt="Default image" class="lazy-load">
```

***Styles***

Please refer to `_components/_images.scss` if you wish to change any of the default image styles.

### Pagination

Easily scalable and provides large click areas, to navigate between pages in your webapp - must be coupled with
javascript or use anchor tags to provide that navigation.

```html
<ul class="pagination">
  <li class="pagination__item">
    <a href="#">&lt;</a>
  </li>
  <li class="pagination__item">
    <a href="#">1</a>
  </li>
  <li class="pagination__item">
    <a href="#">2</a>
  </li>
  <li class="pagination__item">
    <a href="#">3</a>
  </li>
  <li class="pagination__item">
    <a href="#">&gt;</a>
  </li>
</ul>
```

***Styles***

Please refer to `_components/_pagination.scss` if you wish to change any of the default pagination styles.

### Badges

Easily highlight new or unread items by adding "badge" class and a data-count attribute to the desired element.

**Usage**

***Markup***

```html
<div class="button badge" data-count="27">I have a badge!</div>
```

***Styles***

Please refer to `_components/_badges.scss` if you wish to change any of the default badge styles.

### Lists

List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.

**Usage**

***Markup***

```html
<ul class="list">
  <li class="list__item">Lorem ipsum</li>
  <li class="list__item">Dolor sit amet</li>
  <li class="list__item">if you can read this, you can read.</li>
</ul>
```

***Styles***

Please refer to `_components/_lists.scss` if you wish to change any of the default list styles.


### Messages/Alerts

Wrap any text and an optional dismiss button in .alert and one of the four contextual classes (e.g., .alert--success) for basic alert messages.

**Usage**

***Markup***

```html
<div class="alert alert--success">
  <div class="alert__title">Success message example.</div>
  Lorem ipsum dolor <a href="#">sit amet</a>, consectetur adipisicing elit.
</div>

<div class="alert">
  <div class="alert__title">Neutral/informational message example.</div>
  Lorem ipsum dolor sit amet, consectetur <a href="#">adipisicing elit</a>.
  <div class="alert__close">+</div>
</div>
```

***Styles***

Please refer to `_components/_alerts.scss` if you wish to change any of the message/alert styles.
