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

Additionally, there are various other features you can change:


| Parameter | Use | Input | Example |
| --------- | --- | ----- | ------- |
|`marker_color` | Specifies what colors corresponds to this trace | Pass in the color of the markers / lines | `go.Scatter(..., marker_color = '#C63F3F')` |
| `name` | Determines the name of that trace on the legend | Pass in a string | `go.Scatter(..., name = 'one category of data')` |
| `mode` | Determines how the scatter plot points appear | Pass in a string, you can use either `lines`, `markers`| `go.Scatter(..., mode = 'lines+markers')` |


You can find more parameters at the [Plotly Scatter documentation](https://plotly.com/python-api-reference/generated/plotly.graph_objects.Scatter.html).

```
import plotly.graph_objects as go

X = [2010, 2011, 2012, 2013, 2014, 2015]
Y_groupA = [457, 572, 893, 793, 901, 950]
Y_groupB = [120, 105, 138, 269, 407, 722]

fig = go.Figure()

fig.add_trace(go.Scatter(
    x=X,
    y=Y_groupA,
    name='Group A',
    mode='lines+markers',
    marker_color=primary_colors[0],
))

fig.add_trace(go.Scatter(
    x=X,
    y=Y_groupB,
    name='Group B',
    mode='lines',
    marker_color=primary_colors[1],
))

fig.update_layout(title="Comparison of Group A and Group B", 
                xaxis={'title':{'text':'Year'}}, 
                yaxis={'title':{'text':'Values'}}, 
                legend={'title':{'text':'Groups'}},
                template=theme_hodp)
                
fig.show()
```

:::note
A lot of the parameters to different type of graphs, e.g. scatter or histogram, etc., are intuitive and have standard names. 2-dimensional data almost always has 
:::

### Bubble Charts

Bubble charts are scatter plots in which a third dimension of the data is shown through the size of markers. Each marker/bubble can also have its own color which could represent a label/category or another value.

```
import plotly.graph_objects as go

fig = go.Figure(data=[go.Scatter(
    x=[1, 3.2, 5.4, 7.6, 9.8, 12.5],
    y=[1, 3.2, 5.4, 7.6, 9.8, 12.5],
    mode='markers',
    marker=dict(
        color=primary_colors,
        size=[15, 30, 55, 70, 90, 110],
        showscale=True
        )
)])
fig.show()
```

## Histograms

Histograms are generally used when representing the distribution of numerical data among categories. Each category (also called a bin) has a count, which is represented by the height of the bar. where the data are binned and the count for each bin is represented. More generally, in plotly a histogram is an aggregated bar chart, with several possible aggregation functions (e.g. sum, average, count...). Also, the data to be binned can be numerical data but also categorical or date data.

```
import plotly.graph_objects as go
import numpy as np
import pandas as pd

# Generate random data
x = np.random.randn(500)

# Plot histogram using HODP colors
fig = go.Figure(data=[go.Histogram(x=x, marker_color=primary_colors[0])])
fig.show()
```

### More Histograms

```
import plotly.graph_objects as go

# Generate random data
a = np.random.randn(500)
b = np.random.randn(500) + 1 # Shifted data

fig = go.Figure()
fig.add_trace(go.Histogram(x=a, marker_color=primary_colors[0], name='Group A'))
fig.add_trace(go.Histogram(x=b, marker_color=primary_colors[1], name='Group B'))

# Overlaid Histogram
fig.update_layout(title = "Overlaid Histogram", barmode='overlay')
fig.update_traces(opacity=0.75) # Reduce opacity to see both histograms
fig.show()

### Stacked Histogram
fig.update_layout(title = "Stacked Histogram",barmode='stack')
fig.show()
```


## Pie Charts

Pie charts are typically used for 1-dimensional categorical data. In plotly go, this means that you use `go.Pie()`. It takes in many inputs, but the most important ones are `values`, e.g. the numerical counts of each category, and `labels`, the names of all categories.

For example, if I had a pie chart of the break down of HODP bootcampers by class year, then the labels would be an array of class years, e.g. `[2021, 2022, ...]`, and the values would be the number of bootcampers in each class year, e.g. `[10, 20, ...]`.


```
labels = ["a", "b", "c"]
values = [10, 20, 15]


fig = go.Figure()

fig.add_trace(go.Pie(
    values=values, 
    labels=labels
))

fig.show()
```

Additional helpful feature and effects include:

| Parameter | Use | Input | Example |
| --------- | --- | ----- | ------- |
|`marker_colors` | Specifies what colors correspond to what categories | Pass in a list of colors | `go.Pie(..., marker_colors = ['#C63F3F', '#F4B436', '#83BFCC'])` |
| `textinfo` | Determines what information appears on the graph itself | Pass in a string, you can use either `label`, `value`, `percent` | `go.Pie(..., textinfo = 'label+value')` |
| `hoverinfo` | Determines what information appears on hover | Pass in a string, you can use either `label`, `value`, `percent` | `go.Pie(..., hoverinfo = 'label+percent')` |


 ```
 labels = ["a", "b", "c"]
values = [10, 20, 15]
colors = ['#C63F3F', '#F4B436', '#83BFCC']

# initialize the figure
fig = go.Figure()

# add a trace
fig.add_trace(go.Pie(
    values=values, 
    labels=labels,
    textinfo='value',
    marker_colors=colors,
    hoverinfo='label+percent'
))

# update the layout
fig.update_layout(
    title="Example", 
    xaxis={'title':{'text':'X Axis Label'}}, 
    yaxis={'title':{'text':'Y Axis Label'}}, 
    legend={'title':{'text':'Legend Title'}},
    template=theme_hodp
)

# display the figure
fig.show()
 ```
 
 ## Bar Charts

Bar charts are great for comparing data across groups, e.g. looking at some variable `Y` over time `X` and comparing at each value of `X` what `Y` is for the different categories. In plotly go, you call `go.Bar()` and include the `x` and `y`.

Each `go.Bar()` adds one category, e.g. one trace, so to compare multiple groups of data on the same bar chart, you call `go.Bar()` for each one.

```
import plotly.graph_objects as go

X = [1990, 1995, 2000, 2005]
Y1 = [10, 12, 13, 12]
Y2 = [10, 10, 10, 10]

fig = go.Figure()

fig.add_trace(go.Bar(
    x=X,
    y=Y1
))

fig.add_trace(go.Bar(
    x=X,
    y=Y2
))

fig.show()
```

Additional helpful feature and effects include:

| Parameter | Use | Input | Example |
| --------- | --- | ----- | ------- |
|`name` | Name of the category in the legend | Pass in a string | `go.Bar(..., name = 'Category A')` |
|`marker_color` | A single color or list of colors for each bar | Pass in a color | `go.Bar(..., marker_color = '#C63F3F')` |
| `hovertext` | Determines the hover text for each bar for each data | Pass in list of strings | `go.Bar(..., hovertext = ['10 points', '12 points'])` |

 
<br></br>
To change the barmode - e.g. whether it's stacked, grouped (side-by-side), etc. - update the figure layout using
```
fig.update_layout(barmode = 'group')
```
and the barmode is either `group`, `stack`, or `relative`.

```
import plotly.graph_objects as go

X = ['a', 'b', 'c', 'd']
Y1 = [11, 2, 5, 3]
Y2 = [3, 9 , 8, 3]

fig = go.Figure()
fig.add_trace(go.Bar(
    x=X, 
    y=Y1, 
    name="Group A",
    marker_color=primary_colors[0],
    hovertext = ["hi", "this", "is", "text"]
))

fig.add_trace(go.Bar(x=X, y=Y2, name="Group B"))

fig.update_layout(barmode='stack')

fig.show()
```

## Box Plots
Box plots are good for displaying key summary information, like the quantiles and outliers, and especially for comparing these statistics across different data. It allows viewers to easily see if there is a difference in mean or spread across groups.

In plotly go, you call `go.Bar()` and pass in either an `x` or a `y` depending on whether you want the box plots to be horizontal or vertical.

```
import plotly.graph_objects as go
import numpy as np

Y1 = np.random.randn(10)
Y2 = np.random.randn(10) + 2

fig = go.Figure()

fig.add_trace(go.Box(
    y=Y1
))

fig.add_trace(go.Box(
    y=Y2
))

fig.show()
```

Additional helpful feature and effects include:

| Parameter | Use | Input | Example |
| --------- | --- | ----- | ------- |
|`name` | Name of the group in the legend | Pass in a string | `go.Box(..., name = 'Category A')` |
|`marker_color` | A color for filling the box | Pass in a color | `go.Box(..., marker_color = '#C63F3F')` |
|`line_color` | A color for the lines | Pass in a color | `go.Box(..., line_color = '#C63F3F')` |
|`boxpoints` | Controls what data points are included (in addition to box) | Either `'all', False, 'suspectedoutliers', 'outliers'` | `go.Box(..., boxpoints = 'outliers')` |

```
import plotly.graph_objects as go
import numpy as np

Y1 = np.random.randn(10)
Y2 = np.random.randn(10) + 2

fig = go.Figure()

fig.add_trace(go.Box(
    x=Y1,
    marker_color = primary_colors[0],
    name = 'group 1',
    boxpoints = 'outliers'
))

fig.add_trace(go.Box(
    x=Y2,
    marker_color = primary_colors[1],
    name = 'group 2',
    boxpoints='suspectedoutliers'
))

fig.show()
```

## Heat Maps

Heatmaps are used to show relationships between two variables, one plotted on each axis. By observing how cell colors change across each axis, you can observe if there are any patterns in value for one or both variables. Heatmaps are great for visualizing 2D data where each pixel has a value associated with it (for example, COVID-19 hotspots!)

```
import plotly.graph_objects as go

fig = go.Figure(data=go.Heatmap(
                    z=[[1, 20, 30],
                      [20, 1, 60],
                      [30, 60, 1]]))
fig.show()
```
