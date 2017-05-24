# hz-fillgaps

hz-fillgaps is an haztivity resource.\
hz-fillgaps uses [jquery ui droppable](http://api.jqueryui.com/droppable/) and  [jquery ui draggable](http://api.jqueryui.com/draggable/) under the hood.
## Install
### NPM
```npm i --save @haztivity/hz-fillgaps```
## Dependencies
- JQuery
- JQuery UI dialog
- @haztivity/core
## Usage
1. Import @haztivity/hz-fillgaps
2. Add HzFillgaps to the page
3. Add de html
### Ts
```typescript
import {PageFactory, Page, PageController, PageRegister} from "@haztivity/core";
import template from "./page.pug";
import {HzFillgapsResource} from "@haztivity/hz-fillgaps";
export let page: PageRegister = PageFactory.createPage(
    {
        name: "myPage",
        resources: [
            HzFillgapsResource 
        ],
        template: template
    }
);
```
### Pug
```pugç
div
    .hz-fillgaps(data-hz-resource="HzFillgaps")
        | Lorem ipsum dolor sit amet,
        span.hz-fillgaps__gap consectetur
        | adipiscing elit, sed do eiusmod tempor
        span.hz-fillgaps__gap incididunt
        | ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        span.hz-fillgaps__gap ullamco
        | laboris nisi ut aliquip ex ea commodo consequat.

```
or
### HTML
```html
    <div class="hz-fillgaps" data-hz-resource="HzFillgaps">Lorem ipsum dolor sit amet,<span class="hz-fillgaps__gap">consectetur</span>adipiscing elit, sed do eiusmod tempor<span class="hz-fillgaps__gap">incididunt</span>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<span class="hz-fillgaps__gap">ullamco</span>laboris nisi ut aliquip ex ea commodo consequat.</div>
```
## Options
 
 -- 
 

