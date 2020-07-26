---
id: numpy-pandas
title: Numpy + Pandas
sidebar_label: Numpy + Pandas
---

By: Matthew Qu & Asher Noel

### Getting Started

Before we begin, we must first install the numpy and pandas libraries as they are not included in the standard Python
library (check out our [guide](www.google.com) if you have any questions about installation TODO update link). When we
import these libraries, we typically abbreviate them as follows:

```python
import numpy as np
import pandas as pd
```

This isn't necessary, but since we'll be calling functions from these libraries so often, it saves us quite a bit of typing!

## NumPy 

### Introduction and Motivation

### Arrays 
#### Array methods 
#### Random methods 

### NumPy vs. Python 



## Pandas

### Introduction 

**Pandas** is a powerful Python library that is specifically designed for data manipulation and analysis. Its name comes
from the term *panel data*, which is data that contains information of individuals over a period of time. 

#### Why use Pandas? 

In general, Pandas makes it easy and intuitive to work with data; this includes cleaning, transforming, and analyzing
data. Data from Pandas is also commonly used alongside other Python libraries such as **SciPy**, **Matplotlib**, and
**Scikit-learn** for use in statistical analysis, data visualization, and machine learning, respectively.

NumPy and Pandas are almost always used in conjunction. In fact, Pandas is built on top of NumPy, and the two libraries
work together internally as well. Because NumPy objects and operations are highly efficient, Pandas also executes very
quickly.

### Data Structures in Pandas

The two main data structures in pandas are **Series** and **Dataframes**. Series can be thought of as columns; they are
a one-dimensional array of values. We can create a Series by passing in an iterable to the argument ```data```:

```python
import pandas as pd

s = pd.Series(data=[5, 10, 15, 20])
print(s)
```
```
# Output
0     5
1    10
2    15
3    20
dtype: int64
```

The first column is the index; by default, it is numerically indexed starting from 0. We can create custom indices by
setting the optional argument ```index``` equal to another iterable. This iterable must be of the same length as that
passed into the ```data``` argument. If ```data``` is a dictionary, the keys become indices and the values make up the data.

If Series are like columns, then Dataframes are like tables with both rows and columns. As with a Series, we can create
a Dataframe from scratch:

```python
df = pd.DataFrame(data={'col1': [1, 2, 3, 4],
                        'col2': [5, 6, 7, 8]},
                  index=["row1", "row2", "row3", "row4"])

print(df)
```
```
# Output
      col1  col2
row1     1     5
row2     2     6
row3     3     7
row4     4     8
```

For a DataFrame, the keys of the dictionary become column names, not indices. We'll be working with DataFrames most of
the time, but Series can arise when we extract data from a DataFrame. We can use the ```loc[]``` function to extract
data based on the label of the index:
```python
print(df.loc["row1"])
```
```
# Output
col1    1
col2    5
Name: row1, dtype: int64
```

Similarly, we can use the ```iloc[]``` function to extract data using numerical indices, not labels. This is useful for
when the indices are relabelled.

```python
print(df.iloc[0])
```
```
# Output
col1    1
col2    5
Name: row1, dtype: int64
```
```loc[]``` and ```iloc[]``` accept up to two arguments, the first being an expression that determines which rows to
extract, and the same being the same but for the columns (by default, all columns are selected). For example, we can use
[slice notation](https://python-reference.readthedocs.io/en/latest/docs/brackets/slicing.html) to extract the entire
first column:
```python
print(df.iloc[:, 0])
```
```
# Output
row1    1
row2    2
row3    3
row4    4
Name: col1, dtype: int64
```

#### Dataframes in pandas vs. Dataframes in R

TODO: Asher (if you don't think this section is necessary we can delete it)

### Importing and exporting data

We don't usually create DataFrames from scratch using dictionaries or lists - most of the time, we'll want to read
external data stored in another file. Let's work with a real example. The data we'll be using comes from the U.S.
Geological Survey of all earthquakes with magnitude 2.5 or greater that occurred on a randomly chosen day in 2020 (June 14).
You can download the data [here](/static/img/earthquakes.csv).

Pandas has a ```read_csv()``` function that automatically converts CSVs to DataFrames, using the first line as column
names:

```python
import pandas as pd

earthquakes = pd.read_csv("earthquakes.csv")
```

:::tip

Pandas also has the functions ```read_json()``` and ```read_sql_query()``` to read data from JSON files and SQL
databases.

:::

We can similarly export data from DataFrames to other files. This can be done using the ```to_csv()``` function (or
likewise the ```to_json()``` and ```to_sql()``` functions). For example, we can export the ```earthquakes``` DataFrame
(presumably after some changes) and save it under the name ```new_earthquakes```:

```python
earthquakes.to_csv("new_earthquakes.csv")
```

### Working with data in Pandas

We often work with data that contains an abundance of information. For large DataFrames, we can use the ```head()```
function to examine the first five rows. We can also specify a different number of rows; for example, ```earthquakes.head(3)```
would print only the first three rows. Similarly, the ```tail()``` function can be used for viewing the end of the DataFrame.

```python
print(earthquakes.head())
```
```
# Output
                       time  latitude  ...  locationSource  magSource
0  2020-06-14T23:52:42.082Z   24.7959  ...              us         us
1  2020-06-14T22:52:49.059Z   38.1985  ...              nn         nn
2  2020-06-14T22:42:57.810Z   17.9665  ...              pr         pr
3  2020-06-14T22:40:36.458Z   39.4057  ...              us         us
4  2020-06-14T22:29:57.959Z    7.6562  ...              us         us

[5 rows x 22 columns]
```

The output is still condensed, however, and we can see that there are actually 22 columns in our DataFrame. We can
inspect the column names as follows:

```python
print(earthquakes.columns)
```
```
# Output
Index(['time', 'latitude', 'longitude', 'depth', 'mag', 'magType', 'nst',
       'gap', 'dmin', 'rms', 'net', 'id', 'updated', 'place', 'type',
       'horizontalError', 'depthError', 'magError', 'magNst', 'status',
       'locationSource', 'magSource'],
      dtype='object')
```

:::tip

We can also use the ```info()``` function to get column names as well as some other useful data, such as how many
non-empty entries are in each column:

```python
earthquakes.info()
```
```
# Output
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 75 entries, 0 to 74
Data columns (total 22 columns):
 #   Column           Non-Null Count  Dtype  
---  ------           --------------  -----  
 0   time             75 non-null     object 
 1   latitude         75 non-null     float64
 2   longitude        75 non-null     float64
 3   depth            75 non-null     float64
 4   mag              75 non-null     float64
 5   magType          75 non-null     object 
 6   nst              23 non-null     float64
 7   gap              73 non-null     float64
 8   dmin             73 non-null     float64
 9   rms              75 non-null     float64
 10  net              75 non-null     object 
 11  id               75 non-null     object 
 12  updated          75 non-null     object 
 13  place            75 non-null     object 
 14  type             75 non-null     object 
 15  horizontalError  72 non-null     float64
 16  depthError       75 non-null     float64
 17  magError         73 non-null     float64
 18  magNst           73 non-null     float64
 19  status           75 non-null     object 
 20  locationSource   75 non-null     object 
 21  magSource        75 non-null     object 
dtypes: float64(12), object(10)
memory usage: 13.0+ KB
```

:::

Let's index by ```id```, but to avoid creating a new DataFrame, we set an argument ```inplace``` to be ```True```. In
addition, let's extract just the first five columns because they contain the important data:

```python
earthquakes.set_index("id", inplace=True) # modifies the existing DataFrame
earthquake_data = earthquakes.iloc[:, :5] # slice notation for every row and the first five columns
print(earthquake_data.head())
```
```
# Output
                                  time  latitude  longitude  depth   mag
id                                                                      
us6000aew6    2020-06-14T23:52:42.082Z   24.7959   123.2018   10.0  4.10
nn00748598    2020-06-14T22:52:49.059Z   38.1985  -117.9325    4.2  2.50
pr2020166021  2020-06-14T22:42:57.810Z   17.9665   -66.9666    7.0  2.52
us6000aew8    2020-06-14T22:40:36.458Z   39.4057    40.7696   10.0  4.50
us6000abue    2020-06-14T22:29:57.959Z    7.6562   121.7359   10.0  4.90
```

We can also sort by a specific column. Let's look at the most severe earthquakes for this day, so we want to sort by
magnitude from highest to lowest:

```python
earthquakes_data.sort_values(by="mag", ascending=False, inplace=True)
print(earthquakes_data.head())
```
```
# Output
                                time  latitude  longitude  depth  mag
id                                                                   
us6000abnv  2020-06-14T14:24:29.479Z   39.4317    40.7076  10.00  5.9
us6000abr2  2020-06-14T18:06:01.738Z   27.7759    53.3785  10.00  5.2
us6000abte  2020-06-14T21:23:19.165Z   49.1277   158.1032  10.00  5.2
us6000abp7  2020-06-14T14:43:08.390Z   23.3821    70.3548  10.00  5.1
us6000abjt  2020-06-14T03:35:19.148Z   -8.9817   124.1386  68.88  5.1
```

We can also calculate the mean of rows and columns in the same way we would in numpy, specifying ```axis=0``` to average
over all rows (leaving columns) and ```axis=1``` to average over all columns (leaving rows). Specifically, let's
calculate the mean of the  ```depth``` and ```mag``` columns, because taking the average of the other three wouldn't
give us much insight:

```python
means = earthquakes_data.iloc[:, 3:].mean(axis=0)
print(means)
```
```
# Output
depth    46.2060
mag       3.8924
dtype: float64
```

If we want to make changes to a row or column, we can use the ```apply()``` function. This function is used on a Series
and takes in a function to be applied on every element in the Series. For example, every entry in the ```time``` column
has a format similar to ```2020-06-14T14:24:29.479Z```. We can splice the string and get rid of the date and the extra
precision on the time:

```python
new_time = earthquakes_data['time'].apply(lambda x: x[11:19]) # This slice returns the hour, minute, and second
print(new_time.head())
```
```
# Output
id
us6000abnv    14:24:29
us6000abr2    18:06:01
us6000abte    21:23:19
us6000abp7    14:43:08
us6000abjt    03:35:19
Name: time, dtype: object
```

Don't forget to update the DataFrame with the new time!

```python
earthquakes_data['time'] = new_time
print(earthquakes_data.head())
```
```
# Output
                time  latitude  longitude  depth  mag
id                                                   
us6000abnv  14:24:29   39.4317    40.7076  10.00  5.9
us6000abr2  18:06:01   27.7759    53.3785  10.00  5.2
us6000abte  21:23:19   49.1277   158.1032  10.00  5.2
us6000abp7  14:43:08   23.3821    70.3548  10.00  5.1
us6000abjt  03:35:19   -8.9817   124.1386  68.88  5.1
```

Pandas is also commonly used with other data visualization libraries. For example, we can use **plotly** to plot the
locations of the epicenters on a world map:

```python
import plotly.graph_objs as go
from plotly.offline import iplot

data = go.Scattergeo(
    lon=earthquakes_data['longitude'],
    lat=earthquakes_data['latitude'],
    text='Magnitude: ' + earthquakes_data['mag'].apply(str),
    mode='markers',
    marker={'symbol': 'circle', 'size': earthquakes_data['mag'] * 2}
)

layout = dict(
    title='Worldwide Earthquakes on June 14, 2020',
    geo=dict(
        showframe=False,
        projection={"type": "robinson"}
    )
)

cmap = go.Figure(data=[data], layout=layout)
iplot(cmap)
```

![World map depicting earthquakes on June 14, 2020](/img/map.png 'Earthquakes on June 14, 2020')

Hopefully this guide has served as an introduction to numpy and pandas as well as their widespread usefulness in data
science. Another concluding sentence here
