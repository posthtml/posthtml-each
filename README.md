# PostHTML Each

<a href="https://github.com/posthtml/posthtml"><img src="http://posthtml.github.io/posthtml/logo.svg" alt="PostHTML Logo" width="80" height="80" align="right"></a>

[![node](https://img.shields.io/badge/node-0.12.x-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-each)[![dependencies](https://img.shields.io/david/Gurylev/posthtml-each.svg?style=flat-square)](https://david-dm.org/Gurylev/posthtml-each)[![devDependencies](https://img.shields.io/david/dev/Gurylev/posthtml-each.svg?style=flat-square)](https://david-dm.org/Gurylev/posthtml-each)[![Build Status](https://img.shields.io/travis/Gurylev/posthtml-each/master.svg?style=flat-square)](https://travis-ci.org/Gurylev/posthtml-each)

[PostHTML](https://github.com/posthtml/posthtml) plugin that automatically repeat your content.


## Usage

__index.html__
```html
<!-- BEFORE -->
<div class="block" each="3"></div>

<!-- AFTER -->
<div class="block"></div>
<div class="block"></div>
<div class="block"></div>
```