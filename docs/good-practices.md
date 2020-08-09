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

#### Maintain our open data mission

Though HODP's work has diversified over the years, our core purpose is still to make data and its insights accessible. To that end, while you're thinking about projects and later working on one, keep in mind our open data mission:

How can you use data to hold people in power accountable, teach others, or help our community? How can we make our data and analysis themselves accessible and transparent?

When it comes to writing articles, this mission translates to making sure you explain where your data is from, what it contains, and how you extracted insights from it. 
Though your insights and results themselves should be backed by rigorous analytical and statistical work, use layman's terms when possible, explain specialized concepts, and don't assume too much prior knowledge. 
We want to make sure that our readers trust us and can hold our work accountable, even as we deliver the results of highly technical work.

Ultimately, these are the core tenets of our projects:
- Support ransparent data, transparent code, and a transparent campus
- Tell a story
- Hold the poweful accountable
- Keep Harvard informed
- Ground your work in rich datasets, statistical analysis, and data-driven visuals

#### Strike a HODP tone

We're not publishing academic work, nor is this a blog. We want to strike a journalistic middle ground. 
Don't opine or editorialize, but do use layman's terms when possible and explain your technical work clearly. It's still okay to drop a joke or reference Harvard culture. 
Generally, err on the side of conversational but professional. Keep in mind your audience –– the larger Harvard and Cambridge community, out of which our readers are mostly students –– and our goals, the core tenets listed above. Your tone should match your goal and audience.
To get a sense of our usual tone and style, check our [existing projects](https://www.hodp.org/projects) or our inspiration, [FiveThirtyEight](https://fivethirtyeight.com/). 

#### Find an idea meaningful to you

The best "best practice" for working on a HODP project –– whether a survey project or a webapp –– is to find an idea meaningful to you. 
You won't want to get in to the nitty-gritty of the data in R or perfect that D3 visualization if you don't care about the questions you're asking.

Some questions to ask yourself when ideating:
- What have I always wondered about Harvard? What do I wish I knew?
- Who do I think doesn’t have enough accountability for their actions in our community?
- What’s a fixture of campus life that people would enjoy learning more about?

#### Stick to the data but tell a story

Don't give your opinions on the data. If you have a hypothesis, state it, but also state that it's just a hypothesize. Your inferences and insights should be backed up by rigorous statistical analysis. 

It's also important to strike a balance between sticking to closely to listing your results and telling a story. 

:::caution

Avoid "notebook dumps."

:::

This means you shouldn't just list a bunch of numerical results you cranked out of your data. Definitely don't slap in screenshots of the output of your code. 

This artice is a story more than a report: start with an introduction of what you're researching, why it's imporant, and what questions you're asking. 
Every result you find should be explained in words and integrated into this larger story. Group your results by subject and add transitions that explain why the results are important or interesting.





