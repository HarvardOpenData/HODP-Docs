---
id: plotly
title: Plotly Python
sidebar_label: Plotly
---

By: Yijiang Zhao and Cynthia Chen

`Plotly` is a library which allows you to easily make interactive graphs (and these interactive graphs can be added to your articles on our website)!

We'll be using `plotly.graph_objects` because it is highly customizable, but alternatives include `plotly.express` which returns figures of the same type as `plotly.graph_objects` and streamlines much of the process of making graphs, but is less customizable.

# Plotly Graph Object Figures

In `plotly.graph_objects`, you will often begin with making a figure.
```
import plotly.graph_objects as go

fig = go.Figure()
```
(or however you would like to call your figure). This just a blank canvas to which you can add your traces. Traces are essentially the name `plotly` gives to a collection of data that you are planning to plot or visualize. 

After you've made your figure `fig`, you can add your traces. (You can also define your traces, layout, etc. when creating your figure, but I think it is nice style to separate the initializing, adding traces, and formatting).

If, for example, I had 2-dimensional data that suited a scatterplot, I could add a trace in the form of a scatter plot.

```
X = [...] # list of observations of the predictor variable
Y = [...] # list of observations of the response variable

fig.add_trace(go.Scatter(
    x = X,
    y = Y
))
```

# Figure Layout

You can edit features of a graph's layout, e.g. the x-axis, title, etc. This is great for making your graph look better and more readable. The function to do so is `go.Figure.update_layout()`. You can define layout when you initialize the figure, but I think it is cleaner to update later.

Layout has many parameters, which you can read about at the [Plotly Layout documentation](https://plotly.com/python-api-reference/generated/plotly.graph_objects.Layout.html). However, for most things, you should just know that there are parameters: 


| Parameter | Type |
| --------- | ---- |
| `title`   | `String` |
| `xaxis`   | `Dictionary` or `Layout.XAxis` type |
| `yaxis`   | `Dictionary` or `Layout.YAxis` type |
| `legend`  | `Dictionary` or `Layout.Legend` type |
| `template` | `Dictionary` or `Layout.Template` type |


As you can see, it's quite complicated. However, for template, you should always set it to the HODP template, which takes cares of a lot of font, size, and other formatting.

An important parameter you should know is how to set the title, labels, and legend. Below, we have updated a layout which has title "Total Votes", X-axis label "Year", Y-axis label "Total Votes", and legend title "Political Party".


```
fig = go.Figure()

fig.update_layout(
    title="Total Votes", 
    xaxis={'title':{'text':'Year'}}, 
    yaxis={'title':{'text':'Total Votes'}}, 
    legend={'title':{'text':'Political Party'}},
    template=theme_hodp
)
```

You can see that all of the `Layout.XAxis`, `Layout.YAxis`, and `Layout.Legend` types have a parameter called `title` which in turn has a parameter called `text`. By changing the `text` of the `title` of each of the layout's parameters, you can set the x-axis label, y-axis label, and legend title, respectively.

