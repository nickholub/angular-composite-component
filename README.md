angular-composite-component
====================

[![Build Status](https://travis-ci.org/nickholub/angular-composite-component.svg?branch=master)](https://travis-ci.org/nickholub/angular-composite-component)

AngularJS Composite Component (Directive). This is also an example of having multiple $transclude in the directive.

Live Demo [http://nickholub.github.io/angular-composite-component](http://nickholub.github.io/angular-composite-component)

Directive [source code](app/directive)

Directive [example usage](app)

```html
<div cs-composite>
    <div cs-section="header">
        Composite Component Header
    </div>
    <div cs-widget cs-name="first widget">
        <div class="alert alert-success">
            Random Value: {{randomValue}}
        </div>
    </div>
    <div cs-widget cs-name="second widget">
        <div class="alert alert-info">
            Percentage: {{percentage}}%
        </div>
    </div>
    <div cs-widget cs-name="third widget">
        <div progressbar class="progress-striped active" type="info" value="percentage">
            {{percentage}}%
        </div>
    </div>
    <div cs-section="footer">
        Composite Component Footer
        <div>Random Value: {{randomValue}}</div>
        <div>Percentage: {{percentage}}%</div>
    </div>
</div>
```


## Running Application

 Install Node.js dependencies:

 ``` bash
    $ npm install
 ```

 Install Bower dependencies:

 ``` bash
    $ bower install
 ```

 Launch Node.js server with Grunt:

 ``` bash
    $ grunt serve
 ```

 Application will be available at http://localhost:9000

Links
-----

[Node.js](http://nodejs.org/) Software platform built on JavaScript runtime

[AngularJS](http://angularjs.org/) JavaScript framework

[Bower](http://bower.io/) Package manager for the web

[Grunt](http://gruntjs.com/) JavaScript Task Runner

