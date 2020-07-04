---
id: style-guide
title: Style Guide
sidebar_label: Style Guide
---

By: HODP Board

For overall guidelines, refer to this document or ask the content team, particularly your lead editor, who will email you when the publishing process begins with an introduction.
- Sahana (sahanasrinivasan@college.harvard.edu)
- Alison (ahu@college.harvard.edu)
- Asher (ashernoel@college.harvard.edu)
- Henry (henryaustin@college.harvard.edu)

## Writing Your Article

### Items to Turn in
You'll need to turn in a Google Doc with
- Your Draft
- Link to source(s) of data
- Link to a GitHub repo with raw data, cleaned data
- Link to a GitHub repo with your analyis
- High quality images/graphs (preferably as files in a folder as well)
- Sources for images that you didn't create
- Captions for all images
- Credit to anyone who helped you with you project (see footer section)

### Formatting
- Ensure your images are placed in the article draft where you want them located, that they’re large and of high quality and resolution, and that each image has a caption and source (if the source isn’t you)
- Don't put images and text next to each other, format them one after another
- Specify 3-5 pull quotews by commenting "pull quote" around them. These should be meaty but concise insights or trends you don't want your reader to miss
- Use bolding and italics sparingly but effectively
- Give your article a title and subtitle. Title should be shorter and engaging but capture the gist of the article subject. The subtitle is where you can go more in detail.
- Articles should be between 1000 to 1500 words. If you want more or less, talk to your lead content editor.

:::important

Check out our article guide for guidlines and advice for the actual content of your article. This guide is just for formatting and style.

:::


### Tone

- Avoid memes and gifs
- Keep it conversational, but professional
- Avoid snark and sarcasm, but occasional humor or references to Harvard culture is fine
- Be clear and concise
- Avoid presenting opinions and advocating for solutions to problems unrelated to your data and its specific insights. You can hypothesize or speculate on specific trends if you acknowledge it's speculation
- Explain terms

### Writing Style
- If you're unsure about wording, capitalization, commas, and other specific writing style issues, use [TODO: link to most recent HPR style guide]
- Note that we're typically more lax than them, so if you're only publishing with us, we won't be super pick about this.
- Do be consistent. Regardless of the convention you pick for a term or capitalization, for example, use it throughout.

### Sources
- All sources should be linked inline (hyperlink the relevant words)
- Images should have the source in the caption in parenthesis, including if it was a graph created by someone on the HODP team. 

### Footer

We include a footer in all of our articles that says:

_This article was an analysis by the [Harvard Open Data Project](https://www.hodp.org/), a student-faculty group that analyzes public Harvard data to hold Harvard institutions accountable. To see our raw data and our analysis, look here [link the github repository for this project]._

_Want to work on more projects like this? Join us!
Thanks to [collaborator 1], [collaborator 2], and [collaborator 3] for help with this article. This article was edited by [your editor(s]_

Please customize the footer template to your project and add it in the bottom of your draft.

## Graphs
All static graphs should be produced in R using ggplot or in Python using ggplot. We have specific standards for graph fonts, formatting, and colors. [TODO: link] will show you how to generate graphs that adhere to these standards.

For interactive data viz, we strongly recommend d3, which you can check out in [TODO: link here].

Some types on which types of charts to use when:
- 

- Your artice should include 4+ graphs. We strongly prefer visuals to lables or lists. 
- All graphs should include capitalized, speciifc, but concise titles and axis labels
- Add a legend if and only if there is more than one data series
- Please add captions to all figures

## Data

:::caution

Avoid "notebook dumps."

:::

This means you should narrow your data down into a storyline [TODO: move into article writing guide?]
  - Look for patterns and outliers that tell a story — use anecdotes to dive into the story telling
  - Be precise with figures at the beginning, but when you’re writing the narrative, consider how precise you need to be to get across the main point (e.g. “$5.97 per person” to “nearly $6 per person”
  - All of the numbers in your article should be the important ones; do the “so what?” test




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
