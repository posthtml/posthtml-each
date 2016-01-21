# PostHTML Each
[![npm version](https://badge.fury.io/js/posthtml-each.svg)](http://badge.fury.io/js/posthtml-each)
[![Build Status](https://travis-ci.org/Gurylev/posthtml-each.svg?branch=master)](https://travis-ci.org/Gurylev/posthtml-each)

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