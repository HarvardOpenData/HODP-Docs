---
id: good-practices
title: Good Practices
sidebar_label: Good Practices
---

By: Alison Hu, Sahana Srinivasan, and Melissa Kwan


## Data best practices

As a data scientist, you have a responsibility to understand your data, handle it properly, and communicate your findings with honesty and transparency. The first piece - understanding your data - is one of the most important but often overlooked steps to the data science process.

When you find a data set of interest, it may be tempting to hit the ground running, but first it's important to check where your data is coming from. Consider [this](https://fivethirtyeight.com/features/nigeria-kidnapping/) FiveThirtyEight article, in which the author relied on data from a news reporting database to count the number of kidnappings occurring in Nigeria. It turned out that the database was counting the number of instances kidnappings appeared on the news rather than distinct events; thus, the author misrepresented the magnitude of kidnappings by an exponential amount.

This example also illustrates the importance of understanding the context of your data. Oftentimes, your data points will represent living, breathing individuals, and it is important to keep this in mind as you're working with your data. Who or what is represented by your data? Who or what is *not* represented in your data? [Here](https://gijn.org/2017/03/27/data-biographies-getting-to-know-your-data/) is a good framework to follow in gaining a clearer understanding of your data.

Finally, before diving into your work, ask yourself: What am I trying to achieve through this analysis? What is the end goal, and what do I hope to convey to my readers? This doesn't mean you should know the "answer" to your research question(s) -- that's where the data analysis comes in! -- but it's important to acknowledge the motivation behind your work and lay the foundation for a successful project.

## Visualization best practices

## Analysis best practices

## Writing best practices

#### Our Open Data Mission

Though HODP's work has diversified over the years, our core purpose is still to make data and its insights accessible. To that end, while you're thinking about projects and later working on one, keep in mind our open data mission:

How can you use data to hold people in power accountable, teach others, or help our community? How can we make our data and analysis themselves accessible and transparent?

When it comes to writing articles, this mission translates to making sure you explain where your data is from, what it contains, and how you extracted insights from it. Use layman's terms and don't assume too much prior knowledge. We want to make sure that our readers trust us and can hold our work accountable as well.

When you publish your article, we'll also ask you to publish your data, raw and cleaned, and your code, for the sake of transparency and for cleaning.

#### Tone of a HODP Article

We're not publishing academic, nor is this a blog. We want to strike a journalistic middle ground. Don't opine or editorialize, but do use layman's terms and explain your work clearly. It's still okay to drop a joke or reference Harvard culture. Generally, err on the side of conversational but professional. 

#### Writing Guidelines

## What HODP does



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
