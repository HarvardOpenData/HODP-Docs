---
id: webdev
title: Web Development 101
sidebar_label: Web Development
---

By: Kevin Huang

At the core of web development are three components:
* HTML (Hypertext Markup Language) which give each page structure
* CSS (Cascading Style Sheets) which describes the presentation of documents written in HTML and gives styling to the page
* JavaScript which provides logic for the page to be more interactive

Each is crucially important to creating dynamic webpages and thrive when they are used together.

To guide us through our web development journey, I'll be using constructing a house as an analogy for how each of these
components is important for building a website.


# HTML (The Foundation)

## Purpose

Much like how a house needs structure &mdash; support beams, walls, a ceiling &mdash; every website that you visit also
needs structure. For website development, HTML (HyperText Markup Language) provides that structure. HTML tells the
browser how to display content. Similar to a google doc where you label specific content types &mdash; Header 1,
Header 2, Title &mdash; except they use HTML tags, also known as "elements" (`<p/>`, `<a/>`, `<img/>`).

## Syntax

Breaking down elements further, there are actually two types: **paired elements** and **stand-alone elements**. As the names
suggest, paired elements have a pair of opening and closing tags (`<div></div>`) while stand-alone elements consist of a
singular tag (`<div/>`). For paired elements, once a tag has been opened, all the content that follows is assumed to be
part of that tag until you "close" the tag.

![Structure for HTML](https://github.com/HarvardOpenData/HODP-Docs/blob/master/static/img/html-element-structure.png?raw=true 'html structure')

Before we move forward, here is a table of a few important HTML tags.

| HTML Tag                              | Description                                                                            |
| ------------------------------------- | -------------------------------------------------------------------------------------- |
| `<h1></h1>`, … , `<h6></h6>`          | Different size headers.                                                                |
| `<p></p>`                             | Paragraph content.                                                                     |
| `<a href="https://www.hodp.org"></a>` | Used to link one page (often link to different site) from another.                     |
| `<img src="hodp.jpg"/>`               | Embeds an image into an HTML page.                                                     |
| `<div></div>`                         | Used as a container for elements which is then styled with CSS or manipulated with JS. |
| `<br/>`                               | Inserts a single line break in the page.                                               |

:::note

This is a very abbreviated list of important HTML tags (there are actually almost 100 tags total). To see the rest of
the possible HTML tags, you can check out [w3schools.com](https://www.w3schools.com/tags/default.asp). This is a very
valuable resource in general when learning a new language as they have guides for HTML, css, javascript, python, etc.

:::

This pattern of `open tag → content → end tag` is important as it allows you to contain content types in other content
types. For example, for this block of html
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test HTML</title>
        <!-- Title of the page - what is show in the browser's tab -->
    </head>
    <body>
        <h1>Hello World!</h1>
        <!-- Header element with the text "Hello World!" -->
        <img src="https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg"/>
        <!-- Image element that renders the Harvard crest -->
        <div>
            Check out hodp <a href="https://hodp.org">here</a>.
        </div>
        <!-- div element containing text with also a link to the hodp website -->
    </body>
</html>
```
When this HTML is rendered, we see that, for example, because the `<a></a>` tag is contained (nested) within the `<div></div>` tag,
the address is contained within the body of the div.

![Example of rendered html](https://github.com/HarvardOpenData/HODP-Docs/blob/master/static/img/html_test.png?raw=true 'html test')

Outside the already mentioned tags, we also added some required elements to our HTML such that it is readable to a
browser:

| HTML Tag          | Description                                                                                                            |
|-------------------|------------------------------------------------------------------------------------------------------------------------|
| `<!DOCTYPE html>` | A standalone element that tells the browser the page is written using HTML 5 so that it knows how to read it.          |
| `<html></html>`   | A tag telling the browser from and to where the page is to be read. Inside this tag, all the page elements are placed. |
| `<head></head>`   | A tag that encloses the page header elements which contain important metadata.                                         |
| `<body></body>`   | A tag that contains all the contents of the page that are to be rendered.                                              |

### Attributes and Values

Many HTML tags allow adding attributes with values (to the tags). An example for this is `<a>` tag for adding hyperlinks
or tags for adding images `<img>`. Both of the noted tags are of inline type. Below are some examples of attributes and
values being applied to HTML tags.

```html
<a href="https://www.hodp.org/">Hyperlink</a>
<!-- by setting the href attribute, we can add links to other pages in our html -->

<img src="catpicture.jpg">
<!-- by setting the src attribute, we can add images to our html -->

<p class="landmark">Bla bla bla</p>
<!-- attribute is "class", with a value of "landmark" -->
```

### ID and Class

In addition to tags that define the types of HTML elements, each HTML element can be assigned a unique ID and one, or
more Classes. The importance of ID's and Classes will become clearer once we start working with CSS but for now, let's
get a strong grasp of how to use them.

ID's should be unique, in well written HTML code. It is like a full name of one, particular HTML element.

```html
<h2 id="heading-1">Heading</h2>
<p id="averel">Text - in a paragraph.</p>
<p>Paragraph-<a id="superlink" href="https://www.hodp.org/">hyperlink</a>!</p>
```

Unlike ID's, Classes are not unique. Several types of HTML elements can have the same Class. Also, one element can have
several Classes. Building onto our example from before

```html
<h2 id="heading-1" class="emphasized">Heading</h2>
<p id="averel">Text - in a paragraph.</p>
<p class="emphasized underlined">Paragraph 2</p>
```

Notice how the `<h2>` tag got one class "emphasized" while the second `<p>` tag got two classes: "emphasized" and
"underlined".

Using HTML, you can add headings, format paragraphs, control line breaks, make lists, emphasize text,create special
characters, insert images, create links, build tables, control some styling, and much more.

# CSS

## Purpose

On top of the foundations of the house, we still need to paint the walls, add decorations, and move in furniture for the
house to look nice. Similarly, using just HTML, a webpage can look quite barren. By using CSS, we can turn a drab HTML
page into a lively, modern site. More specifically, CSS describes how HTML elements are displayed when rendered like

><span style="color:red">Color</span>, <span style="font-family: Comic Sans MS, Comic Sans">fonts</span>,  s  p  a  c  i  n  g, etc.

Besides CSS, there are alternatives like
* SCSS ([Sassy Cascading Style Sheets](https://sharkcoder.com/tools/scss)) which is a pre-processor scripting language that compiles into CSS
* and SASS ([Syntactically Awesome Style Sheets](https://sass-lang.com/)) which is a syntax that builds onto and is a superset of CSS.

In this guide, we will only tackle CSS but a lot of the same syntax will be transferable to SCSS and SASS.

## Syntax

CSS code consists of a set of rule-sets with selectors (identifiers for what to target) and
declarations (properties and their corresponding values).

![Structure for CSS](https://github.com/HarvardOpenData/HODP-Docs/blob/master/static/img/css.png?raw=true 'css structure')

### Selector

Selectors are used to identify what HTML elements are targeted for declarations to be applied to. Below is a list of css
selectors and what types of html elements that they select.

| CSS Selector            | Example         | Selected element in HTML                                                |
|-------------------------|-----------------|-------------------------------------------------------------------------|
| `.class`                | `.intro`        | Any element with the classname "intro" `<p class="intro">paragraph</p>` |
| `#id`                   | `#firstname`    | Any element with the id "firstname" `<p id="firstname">jack</p>`        |
| `*`                     | `*`             | Any element at all                                                      |
| `element`               | `p`             | Any `<p></p>`                                                           |
| `:pseudo_class`         | `a:hover`       | Any `<a>` that the cursor hovers over                                   |
| `::pseudo_element`      | `p::first-line` | The first line of any `<p>` tag                                         |

:::note

There are many more combinations of certain selectors and modifiers such that CSS can more specifically
identity what and when certain elements need to change. Here is a
[w3 resource](https://www.w3schools.com/cssref/css_selectors.asp) for css selectors if you want to dig into all the
possible combinations.

:::

#### Selector Grouping

If I want to use one rule-set for several classes or elements, I can list them all, separated with a comma. You can see
below an example of selector grouping selecting all the `<p>`, `<div>`, and `<h1>` tags.

```css
p, div, h1 {
    color: red;
}
```

#### Selector Chaining

If I want to be more specific for when a rule-set should be applied, we can use selector chaining. Using the following
ruleset, we only select `<p>` elements with the ID "firstname". `<p id="firstname">` while excluding other `<p>` elements
and other elements with the ID "firstname".

```css
p#firstname {
    font-size: 5em;
}
```

#### Selector Nesting

Remember how nesting is an important aspect of HTML. We can use that property as part of our CSS by specifying elements
nested within other elements. Using the following ruleset, we only select `<p>` elements contained within `<div>` elements
while excluding `<p>` elements outside `<div>` elements.

```css
div p {
    color: red;
}
```

### Declarations

Declarations identify what styling changes will be applied to each selector. For all declarations within one rule-set,
they are grouped together using curly brackets.

```css
{
  color: red;
  text-align: center;
  background-color: green;
}
```

:::caution

Within each declaration, we see a property, a colon ":", a value, and a semi-colon ";". This syntax is required for the
CSS to be readable.

:::

More specifically, a property is an attribute that can be changed using CSS and the value defines what that property
will be changed to. Below is a list of common properties and corresponding values.

| Properties   | Values                                 |
|--------------|----------------------------------------|
| color        | red, blue, green, purple, yellow, etc. |
| font-family  | times new roman, arial, courier, etc.  |
| font-size    | Units are rem, em, px, pt, etc.        |
| font-weight  | normal, bold, bolder, lighter, etc.    |
| border-style | dotted, dashed, solid, groove, etc.    |
| text-align   | left, right, center, justify           |
| padding      | Units are rem, em, px, pt, etc.        |
| margin       | Units are rem, em, px, pt, etc.        |

:::note

There are actually 533 distinct property names and many values for each so instead of putting them all into one gigantic
table here, I’ll just provide the official source for all
[CSS properties](https://www.w3.org/Style/CSS/all-properties.en.html) as well as a more
[human parsable resource](https://www.w3schools.com/cssref/).

:::

## The Result

Combining selectors and declarations, we can now apply our knowledge to our example from before. Adding
`<link rel="stylesheet" href="styles.css"/>` inside the head element from the example html, we can create a
styles.css file with

```css
h1 {
    color: red;
}

img {
    height: 5em;
}

div {
    background-color: pink;
}
```

Now when rendering the page, we see

![Example using HTML and CSS together](https://github.com/HarvardOpenData/HODP-Docs/blob/master/static/img/html_and_css.png?raw=true 'html and css')

You can see where each of our css rule-sets took effect: the header is now the color red, the image is now much smaller,
and the background of the div element is now pink.

# Javascript

## Purpose

Finally, to make a house liveable, we have to add some "dynamic" functionality. Working plumbing and toilets,
electricity and lights, & of course wifi. Similarly, while HTML and CSS are important for giving the webpage structure
and making it look nice, it is not a dynamic webpage. To make a page reactive to user input and to make it more useful
than just a page with text on it, we need to use JavaScript.

JavaScript is a very powerful client-side scripting language used mainly for enhancing the interaction of a user with
the webpage. Some use cases are
* Checking if the user has entered a valid e-mail address in a form field.
* Trapping user-initiated events such as button clicks, link navigation, mouse overs, etc.
* Fetching data from outside sources (APIs)

## Syntax

:::note

Some important things to note before moving forward:
* Semicolons are not required to end each line of JS but are suggested.
* White space, line breaks, and indents are ignored [generally](https://en.wikipedia.org/wiki/JavaScript_syntax#Whitespace_and_semicolons)
  but everyone should still format code with those in mind so that it is readable.
* Code after double slashes `//` or between `/*` and `*/` is treated as a comment.

:::

### Variables

Like other programming languages (Python, R, Java, etc.), variables are at the core of JavaScript. They store and
transfer information. To create a variable, we need certain keywords to initialize the variable:

```javascript
var global = "hello";
// The "var" keyword provides global and function scope which means it can be used anywhere in the file.

let local = "bonjour";
// The "local" keyword is like "var" but instead, it provides block scope which means it can be only be used in the context in which it was initialized.

const immutable = "ni hao";
// The "const" keyword is like "let" but instead, it is immutable which means the value of the variable can never be reassigned.
```

You can see that there is an overall syntax for variable assignment

```javascript
<keyword> <variable_name> = <value>;
```

While type declaration is not needed when initializing a variable, keep in mind that there are still data types in JS:

| Data Type | Example                                        |
|-----------|------------------------------------------------|
| string    | text like "Hello World!"                       |
| number    | decimal like `3.14159` or an integer like `15` |
| boolean   | `true` or `false`                              |

#### Operators

Like in math, JavaScript uses operators (`+`, `-`, `*`, `/`) to compute values and uses the assignment operator (`=`) to
assign values to variables (whether it be on initialization or afterwards). For example,

```javascript
let x, y;
x = 5;
y = 10;
x = x * y;
// At the end of the javascript, x will be equal to 50 and y will be equal to 10.
```

On top of the arithmetic operators, there is a pretty nifty trick that you can do by combining with the assignment
operator. Observe the table below which gives a couple examples of assignment operators which can reduce code length.

| Operator | Equivalent |
|----------|------------|
| x *= y   | x = x * y  |
| x /= y   | x = x / y  |
| x += y   | x = x + y  |
| x -= y   | x = x - y  |

#### Arrays

An array is a special variable, which can hold more than one value at a time. If you have a list of items, instead of
storying each value as a single variable like

```javascript
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
```

you can instead create an array like

```javascript
let cars = ["Saab", "Volvo", "BMW"]
```

Now, it is a lot more space efficient (coding-wise) storing and easier to parse.

Like Python and Java, JavaScript is 0-indexed which means that if you want to access the first item in an array, you use
`cars[0]` and if you want to access the n-th item, you use `cars[n - 1]`. While this might seem unintuitive at first,
with enough time, it come like natural.

:::note

Check out properties of arrays like `.length` and methods like `.sort()` which can be really useful when using JS arrays.

:::

#### Objects

Let's now jump from arrays (which are a special type of object) to JS objects. Specifically, JavaScript objects have a
specific syntax that needs to be followed. Let's check out the example from below.

```javascript
let car = {
    brand: "Tesla",
    owner: "Elon Musk",
    model: "X"
};
```

Here we have a car object being initialized with 3 distinct properties:
* brand which is assigned the value of "Tesla"
* owner which is assigned the value of "Elon Musk"
* model which is assigned the value of "X"

Wrapping around the entire object are a pair of opening and closing curly braces. Only by following this syntax can an
object be created.

Now with an object defined, we can access all the value stored within an object using two specific ways:
* Dot-notation which accesses a property of an object using a dot (`car.brand` returns "Tesla")
* Bracket-notation which accesses a property of an object using brackets and quotes (`car["brand"]` returns "Tesla" as well)

### Loops

Loops are important so that we can generalize our code and that if we know about the structure of the information that
is either being passed in or is being passed out, we don't have to rewrite the same code multiple times. For example,
instead of writing,
```javascript
let arr = [0,1,2,3,4,5,6];
let total = 0;
total += arr[0];
total += arr[1];
total += arr[2];
total += arr[3];
total += arr[4];
total += arr[5];
total += arr[6];
```

we can instead write

```javascript
let arr = [0,1,2,3,4,5,6];
let total = 0;

for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
```

which is much more succinct and dynamically handles the length of the array so that we don't have to hardcode for every
possible length. There are a couple of different types of loops that can be created in JS but for the sake of brevity,
we'll only be discussing 2 here: for loops and while loops.

#### For Loop

A for loop has the following syntax:

```javascript
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

where
* `statement 1` is executed (one time) *before* the execution of the code block
* `statement 2` defines the condition for executing the code block
* `statement 3` is executed (every time) *after* the code block has been executed.

#### While Loop

A while loop has the following syntax:

```javascript
while (condition) {
  // code block to be executed
}
```

where the `condition` is checked *each time* before executing the code block.

## Connecting JS with HTML

Given events that happen for a specific HTML element, JavaScript can react and execute code. Using the below example
element as a template, there are a litany of events that can run JavaScript.

```html
<element event="some JavaScript">
```

Located here are some of the available "listener" properties that you can add to an HTML element. These listen for
changes to occur on the website and then to run Javascript when those changes occur.

| Event       | Description                                                  |
|-------------|--------------------------------------------------------------|
| onchange    | Runs when the element has been changed  in some way or form. |
| onclick     | Runs when the element has been clicked.                      |
| onmouseover | Runs when the cursor runs over the element.                  |
| onmouseout  | Runs when the cursor is moved off the element.               |
| onkeydown   | Runs when a keyboard key is pressed.                         |
| onload      | Runs when the page has finished loading                      |

In addition, we can further integrate into HTML by outputting the result of JavaScript onto HTML.

| Method                        | Explanation                                                                                              |
|-------------------------------|----------------------------------------------------------------------------------------------------------|
| `document.getElementById(id)` | Fetches the selected HTML element by id. Using the innerHTML property, you can insert text or more html. |
| `document.write()`            | Will reload the page with just the specified text.                                                       |
| `window.alert()`              | Creates an alert box with the specified text.                                                            |
| `window.print()`              | Prints the current screen to a PDF which can be either printed physically or saved on your computer.     |
| `console.log()`               | Prints data onto the console for that webpage.                                                           |

Using the `document.getElementById(id)` method for example, let's look at the code snippet below.
```javascript
<body>
    <p id="demo">Hi.</p>
    <script>
        document.getElementById("demo").innerHTML = "Hello World!";
    </script>
</body>
```

Intuitively, it would seem that the HTML should render Hi. However, instead of

>Hi.

being rendered, we instead see

> Hello World!

That is because when the page is loaded, the JavaScript automatically runs and changes the text to "Hello World!" (since
it selects the element with the ID "demo" which just so happens to be `<p id="demo">Hi.</p>`).

# Conclusion

Now that we've gone over HTML, CSS, JavaScript and had a glimpse into how they interact, hopefully you've developed some
web dev skills. However, we’ve only dipped our toes into HTML, CSS, and JavaScript and hardly brushed the surface of Web
Development as a whole. There are frameworks to build rich single page applications like Angular and alternatives to
JavaScript like TypeScript. There’s always more to learn so don't hesitate to reach out! We're always open to helping
teach more!

