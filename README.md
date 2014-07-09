angular-composite-directive
====================

AngularJS Composite Directive

```html
<div wt-composite>
    <div wt-section="header">
        Composite Component Title
    </div>
    <div wt-widget wt-name="first widget">
        <div class="alert alert-success">
            Random Value: {{randomValue}}
        </div>
    </div>
    <div wt-widget wt-name="second widget">
        <div class="alert alert-info">
            Random Value: {{randomValue}}
        </div>
    </div>
    <div wt-widget wt-name="third widget">
        <div wt-time></div>
    </div>
    <div wt-section="footer">
        Composite Component Footer
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
