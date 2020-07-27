---
id: scraping
title: Scraping
sidebar_label: Scraping
---

By: Ashley Wong & Ethan Lee

## Scraping and its applications
Web scraping is a useful technique for collecting data when it isn’t available for download or doesn’t exist in an aggregated form. When we scrape websites we build spiders which help us crawl through webpages and collect the information we want. A simple scraper like the one below takes a url, loads up the page, and uses regex to store certain parts of the HTML (more on what regex is later). More complex scrapers might clickthrough links for you or they might be able to interact with Javascript elements. 

Examples of scraping include: how student organisations seem to get every Harvard student’s email without ever asking for it, HODP’s crime map (we scrape the HUPD police logs). 

```python
from urllib.request import urlopen
import re #Regex Library

def getHtmlFromUrl(url): 
    return urlopen(url).read().decode("utf-8")
    
people = re.findall("<h4 class=\"media-heading\" .*>(.+?)<\/h4>", hodpHtml)
print(people)
```

## Don't break the internet: good practices
:::important

Always follow a site's terms of service when doing a HODP project!

:::

### Respect robots.txt
This file contains instructions for scrapers, letting you know which pages on the site can and cannot be scraped. You can find the robots.txt file by adding $$\texttt{/robots.txt}$$ to any domain name (e.g [facebook.com/robots.txt](facebook.com/robots.txt), [reddit.com/robots.txt](reddit.com/robots.txt)). Sometimes this is enforced (by blocking bots) and sometimes it isn’t. Either way, you should always follow a website’s policy. 

### Check the website's policy
That brings us to our second point, always check the website’s policy! While robots.txt specifies which specific pages bots can and cannot access, you should always check the website’s policy for more human-readable information and to see how the data you scrape can be used. For example, Facebook disallows any automated collection of its data. 

### Don't break anything
Make sure other (human) users have enough bandwidth to use the site. Scrapers can send dozens of requests a second, so it’s good practice to set a delay between requests (e.g 10 seconds). Be especially mindful of this if you’re scraping a small website that might not be built for large amounts of traffic. 

:::tip

If your scraper can follow links (e.g you're using the Python package scrapy), make sure to restrict the domain of the links it will acess to prevent your spider from crawling the entire internet!

:::

## Basic regex
Regular expressions (or regex for short) are search patterns that allow you to to match strings and substrings. Regex is very useful if your HTML page follows a standard naming convention (e.g $$\texttt{id_1}$$, $$\texttt{id_2}$$, $$\texttt{id_3}$$) and you’re trying to capture all of those id’s in one quick search.

We would strongly recommend [regexone.com](regexone.com) to anyone who’s trying to learn regex! It walks you through all the different types of pattern matching and has a lot of interactive exercises. If you want to test whether your own regular expression is correct, there are easier ways than running it through an actual scraper. You could always test it out with some dummy text on [regex101.com](regex101.com), just make sure that your language preferences are set correctly!

### Quick regex
Here are some expressions you can use if you’re looking to match something right now (we would still recommend actually learning regex through [regexone.com](regexone.com) though)! 

Depending on what information you want to capture from a match, you may need to use capture groups (also covered on regexone). These are denoted by parenthesis $$\texttt{()}$$ and tell the program what information to give back to you. For example, $$\texttt{b(a).*}$$ will match ‘bat’, ‘baa’, ‘bar’, and ‘ba’ but will only return a single ‘a’ to you. 


## Set up
## Scraping and cleaning
## Headless browsers
## Practical tips

## Markdown Syntax

To serve as an example page when styling markdown based Docusaurus sites.

## Headers

# H1 - Create the best documentation

## H2 - Create the best documentation

### H3 - Create the best documentation

#### H4 - Create the best documentation

##### H5 - Create the best documentation

###### H6 - Create the best documentation

---

## Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

---

## Lists

1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.

* Unordered list can use asterisks

- Or minuses

+ Or pluses

---

## Links

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

## Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

---

## Code

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```r
title <- "R syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

## Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

## Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::
