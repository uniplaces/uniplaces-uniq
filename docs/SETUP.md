# Documentation - SETUP

*Setup & Dependency installation and other general considerations.*

## Table of Contents

  1. [Setup](#setup)
    - [Tools](#tools)
    - [Development](#development)

### Tools

When developing for the UniQ - Uniplaces Internal CSS Framework you will be developing in a Node/Grunt driven workflow.

**Installing Node**

Download & Install NodeJS from:
```
https://nodejs.org/en/
```

**Installing GruntJS**

GruntJS is NodeJS Task automator module and although not mandatory it is advised that you install GruntJS globally.

To do so in you terminal window run the following command:

```
$ npm install grunt-cli -g
```

### Development

Once you clone the git repository, in your terminal window navigate to the root of the project directory and run the following command:

```
$ npm install
```
This command will install all the necessary dependencies (node package modules) for you to start developing.

After all dependencies are installed you can start developing and in order to do so you'll need one of two grunt commands:

```
$ grunt serve
```

This command creates a local server and open a preview in your browser window and automatically reload the webapge every time a change to your code is made.
Warnings will be fired if you have errors in your code, please check them on a per build basis.

```
$ grunt build
```

Will transform your SCSS into CSS, minify and concatenate those files and export main.css (that you can include in your webpage).
