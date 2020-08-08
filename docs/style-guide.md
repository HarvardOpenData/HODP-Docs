---
id: style-guide
title: Style Guide
sidebar_label: Style Guide
---

By: HODP Content Team

For overall guidelines, refer to this document or ask the content team, particularly your lead editor, who will email you when the publishing process begins with an introduction.
- Sahana (sahanasrinivasan@college.harvard.edu)
- Alison (ahu@college.harvard.edu)
- Asher (ashernoel@college.harvard.edu)
- Henry (henryaustin@college.harvard.edu)

## Writing Your Article

Keep in mind these are for traditional text-based articles. If you're submitting a scrollytelling project, a webapp, or an article heavily reliant on interactive viz or other React components, react out to the content team for advice!z

### Items to Turn in
You'll need to turn in a Google Doc with
- Your Draft
- Byline for all main authors
- Link to source(s) of data
- Link to a GitHub repo with raw data, cleaned data
- Link to a GitHub repo with your analyis
- High quality images/graphs placed in the graph where you want them to appear online
- Captions for all images (should include sources for images not created by HODP)
- List of acknowledgements to anyone who edited, managed, contributed to, or created graphics for your article

### Formatting
- Ensure your images are placed in the article draft where you want them located, that they’re large and of high quality and resolution, and that each image has a caption and source (if the source isn’t you)
- Don't put images and text next to each other, format them one after another
- Articles should have at least 4 visuals. Most have 5-10. 
- Specify 3-5 pull quotes by commenting "pull quote" around them. These should be meaty but concise insights or trends you don't want your reader to miss
- Use bolding and italics sparingly but effectively
- Give your article a title and subtitle. Title should be shorter and engaging but capture the gist of the article subject. The subtitle is where you can go more in detail. This subtitle will be the exceprt previewed on social media in the homepage of our website
- Articles should be between 1000 to 1500 words. If you want more or less, talk to your lead content editor.
- Hyperlink external sources and other HODP articles that you reference

:::important

Check out our article guide for guidlines and advice for the actual content of your article. This guide is just for formatting and style.

:::


### Tone

- Avoid memes and gifs
- Keep it conversational, but polished enough live on our site permanently
- Avoid snark and sarcasm, but occasional humor or references to Harvard culture is fine
- Be clear and concise
- Avoid presenting opinions and advocating for solutions to problems unrelated to your data and its specific insights. You can hypothesize or speculate on specific trends if you acknowledge it's speculation
- Maintain high technical standards in your analysis, but explain all your terms and statistical concepts in the article text

### Writing Style
- If you're unsure about wording, capitalization, commas, and other specific syntactical issues, use the [HPR Style Guide](https://drive.google.com/file/d/1FJ6JPzho5S6Le1MnbU9nydJEJ6L-9glC/view?usp=sharing) (page 9 onwards). 
- Note that we're typically more lax than them, so if you're only publishing with us, we won't be super picky about this.
- Do be consistent. Regardless of the convention you pick for a term or capitalization, for example, use it throughout.

### Sources
- All sources should be linked inline (hyperlink the relevant words)
- Images should have the source in the caption in parenthesis, including if it was a graph created by someone on the HODP team. 


## Graphs
All static graphs should be produced in R using ggplot or in Python using ggplot. We have specific standards for graph fonts, formatting, and colors. [TODO: link] will show you how to generate graphs that adhere to these standards.

For interactive data viz, we strongly recommend you use d3 or a React-based interactive visualization library, which you can check out [here](https://docs.hodp.org/docs/d3-1).

Some tips on which types of charts to use when:
- Your artice should include 4+ graphs. We strongly prefer graphs or charts, either static or interactive. We likely won't publish tables or lists.
- All graphs should include capitalized, specific, and concise titles and axis labels.
- Add a legend if and only if there is more than one data series.
- Please add captions to all figures.

## Data
As the Open Data Project, we liked to publish all our data and analysis publically. Put your cleaned data and analysis code in a GitHub repo, and link the repo in your article doc. If your data has sensitive info (survey data demographics, for example), remove it before commiting.

When referencing data in article text, consider how precise you need to be to get across the main point (e.g. round “$5.97 per person” to “nearly $6 per person”). All of the numbers in your article should be the important ones; do the “so what?” test. Make sure you label all data references with the correct, descriptive unit (e.g. About 1 in every 6 Lowellians in our sample reported owning AirPods). 
