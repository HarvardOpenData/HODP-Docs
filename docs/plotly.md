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

:::note

Many features of a figure's layout, like the axis and legend, take other `plotly` classes as arguments. Many of these classes share different features - e.g. `title` is a class in all the axis and legend classes. This is also the case for the different traces or types of graphs.

Because these things are standardized, it's actually not terrible to read through the [documentation](https://plotly.com/python-api-reference/generated/plotly.graph_objects.html#module-plotly.graph_objects) for many of these classes and understand what features you can customize.

:::


## Template

This is the HODP template. You can just copy-paste this. If you're interested in the specific details, check out the Plotly documentation on Layouts.

```
import plotly.graph_objects as go

# HODP colors
monochrome_colors = ['#251616', '#760000', '#C63F3F', '#E28073', '#F1D3CF']
primary_colors = ['#C63F3F', '#F4B436', '#83BFCC', '#455574', '#E2DDDB']

# HODP template
theme_hodp = go.layout.Template(
    layout=go.Layout(
        title = {'font':{'size':24, 'family':"Helvetica", 'color':monochrome_colors[0]}, 'pad':{'t':100, 'r':0, 'b':0, 'l':0}},
        font = {'size':18, 'family':'Helvetica', 'color':'#717171'},
        xaxis = {'ticks': "outside",
                'tickfont': {'size': 14, 'family':"Helvetica"},
                'showticksuffix': 'all',
                'showtickprefix': 'last',
                'showline': True,
                'title':{'font':{'size':18, 'family':'Helvetica'}, 'standoff':20},
                'automargin': True
                },
        yaxis = {'ticks': "outside",
                'tickfont': {'size': 14, 'family':"Helvetica"},
                'showticksuffix': 'all',
                'showtickprefix': 'last',
                'title':{'font':{'size':18, 'family':'Helvetica'}, 'standoff':20},
                'showline': True,
                'automargin': True
                },
        legend = {'bgcolor':'rgba(0,0,0,0)', 
                'title':{'font':{'size':18, 'family':"Helvetica", 'color':monochrome_colors[0]}}, 
                'font':{'size':14, 'family':"Helvetica"}, 
                'yanchor':'bottom'
                },
        colorscale = {'diverging':monochrome_colors},
        coloraxis = {'autocolorscale':True, 
                'cauto':True, 
                'colorbar':{'tickfont':{'size':14,'family':'Helvetica'}, 'title':{'font':{'size':18, 'family':'Helvetica'}}},
                }
    )
)
```

#  Figure Traces
## Scatterplots / Line Plots

Scatterplots are a great way to graph 2-dimensional data (e.g. you have a predictor and a response, independent and dependent, etc). It essentially plots a point for each row of data `(x,y)` on a graph, so that you may see how all data points look like relative to others.

They're frequently used to accompany different models as a way to visually show why a given model makes sense. 

For example, a linear regression model is often overlayed on top of a scatterplot of the data so that viewers can visually see how well (or poorly) the model fits the data. Other uses include using a color scale for different points on the graph to visually separate different categories of data.

```
import plotly.graph_objects as go

X = [1,2,3,4,5]
Y = [4,5,6,7,8]

fig = go.Figure()

fig.add_trace(go.Scatter(
    x=X,
    y=Y
))

fig.show()
```

