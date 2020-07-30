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

Depending on what information you want to capture from a match, you may need to use capture groups (also covered on regexone). These are denoted by parenthesis $$\texttt{()}$$ and tell the program what information to give back to you. For example, $$\texttt{b(a).\*}$$ will match ‘bat’, ‘baa’, ‘bar’, and ‘ba’ but will only return a single ‘a’ to you. 

| If you want to match all of.... | You can use... |
| ------------- | ----------- | 
| id_1 <br> id_2 <br> id_3  | $$\texttt{id_.+}$$ <br> or $$\texttt{id_\d+}$$ if you want to match numerical id numbers only  |
| cats.jpg <br> dogs.jpg <br> but **not** pigs.pdf  | $$\texttt{.\*\.jpg}$$ | 
| cats.jpg <br> whyarethesebothathing.jpeg | $$\texttt{.\*\.jpe?g}$$ |
| <a href='something_long'>Hello</a> <br> <a href='something_else'>Bye</a> | $$\texttt{<a href='[^']\*'>.\*</a>}$$ |

:::caution

Regex is greedy! This means that regex always looks for the longest match possible (i.e if your expression is $$\texttt{banana+}$$ and your text is 'bananaaaaaaaaaaaa', regex will match the full 'bananaaaaaaaaaaaa' every time). This can lead to unexpected behaviour. For example, if you have an expression $$\texttt{id_.+}$$ and the string 'id_1, id_2, id_3', instead of returning three matches--'id_1', 'id_2', 'id_3'--regex will return one long match 'id_1, id_2, id_3'. Why? Because you asked regex for 'id_' followed by one or more of **any** character. Therefore, regex kept searching for valid characters until it hit the end of the string (any couldn't find any more characters). 

:::

You can avoid errors caused by regex being greedy by using things like the not-operator $$\texttt{^}$$. $$\texttt{id_[^,]+}$$ would thus be the same as asking for 'id_' followed by one or more characters that are not commas. As soon as regex sees a comma it will be forced to stop matching, thereby solving the problem where regex matches the whole string in one go!

## Set up
### Necessary Libraries
For basic scraping, we’ll just need to import from two Python libraries: urllib and bs4. Urllib contains modules for handling URLs, and the specific function we want to use from it is urlopen, which opens a url fed into it. Bs4 is a library containing functions for scraping data from the HTML and XML files that result from opening these URLs. 

```python
from urllib.request import urlopen
from bs4 import BeautifulSoup
```

You should then be good to go to start scraping with BeautifulSoup! (If any of the packages aren’t installed, you can easily do so with the $$\texttt{pip}$$ or $$\texttt{pip3}$$ command).

## Scraping and cleaning
### Inspecting an HTML page
Good practice before getting into the actual scraping would be to inspect the HTML page you want to scrape from. For this example, use the [HBS faculty directory](https://www.hbs.edu/faculty/Pages/browse.aspx). 

Right-clicking and selecting “Inspect” allows us to see what HTML elements are available on the page for scraping. For example, we might want to scrape the links associated with each faculty member listed, in which case we’d want the “href” elements from the page. Or maybe we want both the name and title of each faculty member, in which case we’d probably want the divs of class “name.” Inspecting the page you want to scrape before actually scraping lets you determine and strategize how to collect specific information.

### Scraping & Cleaning HBS Faculty Data with BeautifulSoup
Now, we can get to the actual scraping! First, we can define our URL and call $$\texttt{urlopen}$$:

```python
url = "https://www.hbs.edu/faculty/Pages/browse.aspx"
html = urlopen(url)
```

Now we have “html” defined as the variable containing the contents of the webpage we’d like to scrape. Next, we can use the BeautifulSoup package by calling the following function:

```python
soup = BeautifulSoup(html, 'lxml')
```
Through the BeautifulSoup constructor, we’re able to parse, or syntactically analyze and break into parts, the HTML page. The “lxml” attribute isn’t too important, but it’s just us telling BeautifulSoup what kind of HTML parser to use – lxml is generally faster than others.

Now, “soup” contains the parsed HTML page that we want to scrape. We can use “find_all” to return specific HTML elements that we wanted from the page, with an example below:

```python
all_faculty = soup.find_all("div", attrs = {"class" : "name"})
```

Now, “all_faculty” contains the HTML elements from the HBS faculty page that were “div” elements of class “name”. However, if we try printing all_faculty, we get some HTML code mixed in with the actual text that we wanted. To clean this data, we can first convert all_faculty into a string and then use the “get_text()” function to extract all text from it. 

```python
str_faculty = str(all_faculty)
cleantext = BeautifulSoup(str_faculty).get_text(strip = True)
```

Now, printing clean_text should give just the names of HBS faculty! Try this out with other elements you can find on the HBS faculty site if you want.

#### Scraping Links
Scraping the links from a webpage is pretty much the same as scraping a div, header, etc. but you’ll have to use the “.get” function as shown below in an extra step:

```python
all_links = soup.find_all("a")
for link in all_links:
    print(link.get('href'))
```

As shown, “.get” gets you the attributes of different HTML tags. 

## Headless browsers (extension)
Headless browsers are, essentially, web browsers we can use without any Graphical User Interface (GUI). What this means is that we can write programs with instructors for headless browsers to go to specific webpages, click buttons, enter inputs, etc. without actually doing so manually. Using these to help us scrape gives us the advantages of dealing with non-simple websites that may be built on JavaScript and have more than just HTML/CSS, as well as the large increase in speed when compared to real browsers (another way to emulate a web browser and access websites), which have to load all GUI components of a website. 

There are several disadvantages to using headless browsers that you should take note of before deciding whether or not to use one. First, they are overall difficult to deal with – the installation and setup can take a long time and each operation and characteristic of a headless browser can be hard to understand. Additionally, although no bugs may arise when accessing a website through a real browser or manually, headless browsers may have bugs of their own based on the code you write to use them. Lastly, although headless browsers are indeed faster than real browsers, they still take a lot of time for scraping, and clicking through webpages manually will almost certainly be faster. 

:::caution

Installing headless browsers is notoriously difficult. Should you attempt this task, be prepared!

:::

## Practical tips

### Scraping usually isn’t necessary
Scraping (and cleaning) can be a long and tedious process, sometimes it isn’t even permitted by the website. If you want to scrape data, we would recommend trying to find a downloadable source somewhere or contacting the owners of the data to see if they’d send it to you (this worked for HODP when we wanted data from the Harvard Confessions Facebook group).

## The simpler the better
TLDR: Sometimes it’s better to spend 6 minutes doing something manually than 6 hours trying to automate it.

If you have decided that scraping is absolutely necessary, try to keep your scraper simple. For example, let’s say you have a website that lists the favourite foods of every state, but each state has its own webpage (i.e you have to click a link to see details for each state). 

You have two options: you could set up a sophisticated scraper that follows all the relevant links to the state’s pages (and ignores the ones that just link to social media or irrelevant pages) and then uses regex to scrape the actual HTML. 

Or you could poke around the structure of the site a little. It’s quite likely that the link to each state’s page is just domain.com/state-abbbreviation. This means you can then copy a list of all 50 state abbreviations and then write a simple single-page scraper and a for-loop that runs it 50 times. 

Speaking from (Ashley’s) personal experience, one of these solutions is much, much simpler than the other. So resist the temptation to build a super-awesome fully-automated scraper and remember, the simpler the better.
