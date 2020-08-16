---
id: python
title: Python
sidebar_label: Python
---

By: Yijiang Zhao & Matthew Qu

This guide assumes no prior programming knowledge and gives a brief introduction to Python, one of the most widely used programming languages. Python is incredibly useful for doing data analysis, especially for large data sets.

This bootcamp will make sure that you are comfortable with basic Python and equip you with the tools to Google and Stack Overflow your way through more projects!

## Variables (strings, ints, floats, booleans) & Operations

### Variables & Types

A variable is a way to represent data in Python. We declare a variable by giving it a name and a value. Values of the variable can change and can have different types (e.g. integers or strings).

Here is an example of declaring a variable:
```
y = 3.45
```
Here we have a variable `y` and have assigned it the value `3.45`. Variable names must begin with letters.

To print the value of a variable, we pass the variable to a function called `print`.
```
print(y) # returns 3.45
```
:::tip

Oftentimes, we might want to `print` multiple items. To do so, you can pass multiple arguments into `print`, e.g.
```
x = 50.34
y = 5

print(x, y, 10) # prints out "50.34 5 10"
```
Ask you can see, doing this will automatically separate each printed value with a space.
:::


There are four commonly used types of values:

| Type          |      Example      |   Explanation |
| :------------- | :----------- | :----- |
| `int`      | `1` | An integer |
| `string`     |   `'a string of text'` or `"more text"`    |  Text, wrapped with `''` or `""` |
| `bool` |  `True` or `False`     |  A boolean value, which is either `True` or `False`, or `1` or `0` |
| `float` | `3.14159` | A real number with decimals |


To change the type of a variable, we use the functions `int(), str(), bool(), float()`, where you pass in the value that you want to change, and it returns that value as an `int`, `string`, `bool`, or `float`.

If you pass a `string` into `int()`, it must only contain integers and no decimals nor characters. 


:::caution

`int()` truncates the input, in that it removes everything after the decimal (which is different from flooring). For example, `int(-4.5)` will return `-4`. 

:::

### Operations on Variables
Additionally, you can perform multiple operations on variables.

For operations on integers, doubles, and floats (e.g. the numbers), you can perform basic arithmetic.

For example, if I let
```
x = 7
y = 2
```
then, 

| Operation          |      Example      |   Value | Type|
| :------------- | :----------- | :----- | :-----|
|Addition | `x+y`      | `9` | `int` |
|Subtraction | `x-y`     |   `5`    |  `int`|
|Division| `x / y` |  `3.5`     |  `float` |
|Modulo / Remainder| `x % y` | `1` | `int` |
|Exponent | `x**y` | `49` | `int`|

:::note

Integer division in Python will return a `float` if the quotient is not an integer. 

:::

## Strings
Strings are the data type that are essentially plain text. They are treated as an array, or list, of individual characters.

To declare a string, you must use single or double quotation marks
```
my_str = 'Wow what a string.'
my_other_str = "Wow another string."
```
However, notice that you cannot add in a line break in the middle of your string otherwise an error occurs. To write a multi-line string, you use triple quotation marks, e.g.

```
my_long_str = """
    This string
    takes up
    many lines.
"""
```

We will cover some simple operations with strings, including concatenation and parsing, but for more information, see [W3Schools Python String Methods](https://www.w3schools.com/python/python_ref_string.asp).

### Concatenation
Concatenation is act of putting two `strings` together. Python has multiple ways to concatenate strings, including using a `+` to "add" two strings together:
```
"a" + "b" # returns "ab"
```
Alternatively, you can just leave a space between the two strings:
```
"a" "b" # returns "ab" as well
```
Additionally, if you would like to duplicate your string, you can "multiply" strings, e.g.
```
"abc" * 3 # returns "abcabcabc"
```
Concatenation must only involve strings, otherwise Python raises an error.

### Quotation Marks
One tricky thing is that if you use quotation marks to define a string, how do you actually include quotation marks within a string?

There are a couple work arounds. If you define a string using single quotation marks, then everything before the next single quotation mark is included in the string. 
```
print('"""""""') # prints out all the double quotation marks
```
Of course, the reverse is true if you define a string with double quotation marks, you can liberally use single quotation marks inside the string.

Alternatively, you can use the escape character `\` before each quotation mark in your string, as that indicates that you want to treat the next character literally. 
```
print("He said, \"Hello.\"") # prints out the quotations marks around "Hello."
```


### String Indexing
Earlier, we mentioned how Python treats strings like lists of characters. Thus, like lists, you can index into them to get the character at any given index or position. Like most languages, Python begins indexing at `0`. So a list of size `n` will have indices from `0` to `n-1`.

```
my_string = "hodp 1234"
print(my_string[0]) # the first character, or "h"
print(my_string[-1]) # the last character, or "4"
print(len(my_string)) # the length of the string, or 9
```


### Other Methods
We'll touch on a few other common string methods.

First, if you want to lowercase or uppercase a string, you can use the functions `lower()` and `upper()`.
```
my_string = "abcABC123"
print(my_string.lower()) # returns "abcabc123"
print(my_string.upper()) # returns "ABCABC123"
```

Second, if you want to split a string into an array or list by some delimiter, you can use the function `split` which takes in a delimiter, e.g. `" "` or `","`, and returns the list of that string split by that delimiter.
```
my_string = "a. b. c."

print(my_string.split(" ")) # split my string based on spaces, or " "
# returns ["a.", "b.", "c."]

print(my_string.split(".")) # split my string based on periods, or "."
# returns ["a", " b", " c", ""]
```
:::note

When using `split()`, it will remove the delimiter you used. Additionally, an empty string is a part of the string as well, and will also be included in the list that is returned if your string begins with and / or ends with the delimiter.

:::

Lastly, if you want to replace all of one character, you can use the function `replace()` which takes in a string to be replaces, and another string to replace it with.
```
my_string = "bootcamp"
print(my_string.replace('o', '0')) # returns "b00tcamp"
```

## Lists and List methods
Lists are an easy and flexible way to store different types of information. Since lists are ordered, they can also be accessed via index (e.g. the first item of the list being at index `0`).

To declare a list, use brackets `[ ]` to enclose the list and commas `,` to separate each item.
```
my_list = ["a string", 2, 1.5, True]
```
Notice how a single list can contain multiple data types.

To declare an empty list, 
```
empty_v1 = []
empty_v2 = list()
```
The `list()` function creates an empty list, but also turns the input into a list.

Here, we will cover some basic info about lists and common list operations.

### Accessing Elements in Lists
One way of accessing items within a list is by index. 
:::note

Lists of size `n` (e.g. have `n` elements) begin at index 0 and go to (n-1)

:::
Additionally, given a list `lst` and integer index `i`, you can access the `i`th element by using brackets. E.g. `lst[i]` returns the `i`th element in `lst`.
```
lst = ["a", "b", "c", "d"]

print(lst[0]) # the first item in the list is at index 0, returns 'a'
print(lst[3]) # the fourth item of the list is at index 3, returns 'd'

print(lst[-1]) # the last item of the list, returns 'd'
print(lst[-2]) # the second to last item of the list, returns 'c'
```

You can also use a semi-colon `:` to access a subset of items in a list. For example `lst[a:b]` returns items from index `a` and up to but not including the item at index `b`. If `a` is not specified, then it assumes `a` is index `0`. Similarly, if `b` is not specified, then it assumes `b` is the index of the last item in the list, or index `n-1`.

For example,
```
lst = ["a", "b", "c", "d"]

print(lst[2:]) # returns ['c', 'd']
print(lst[:2]) # returns ['a', 'b']
print(lst[1:3]) # returns ['b', 'c']
```

In addition to retrieving an item by index, you can also get the index an element appears in using the list method `index()`.
```
lst = ['b','c','a','d','a']
print(lst.index("a")) # returns 2
```
:::note

Note that `index()` returns the index of the first time the input appears in the list. E.g. for a list `lst` and element `a`, `lst.index('a')` returns the index of the first `'a'`.

:::

### Adding Elements to List

To add an item to a list, you can append items to the end of the list, or insert a value into a specific index.
To append items to a list, use the list method `append()`.
```
lst = [1,3,5,2]
lst.append(4) # returns [1,3,5,2,4]
```

:::warning

Using `append()` mutates the list, e.g. it changes the list in place.

:::
To insert an item, you can use `insert()`, which gives a list `lst`, index `i`, and an element `elt`, `lst.insert(i, elt)` inserts element `elt `into `lst` at index `i`.
```
lst = ['a','c','d']
lst.insert(1,'b') # inserts element 'b' into index 1
print(lst) # returns ['a','b','c','d']
```

### Removing Elements from List
To remove an item from a list, you can remove by index or value. Like `append()`, these methods will mutate the list in place.
To remove by index,
```
lst = [1,3,5,2,4]
del lst[0] # removes the item at index 0
print(lst) # returns [3,5,2,4]
```
To remove by element value, you can use `lst.remove(item)` which removes the first element of the list `lst` whose value matches `item`.
```
lst = [1,3,5,2,4]
lst.remove(3) # removes the element 3
print(lst) # returns [1,5,2,4]
```

### List Operations
Additionally, there are multiple operations you can perform on lists.

To concatenate lists, you can use the addition `+` operator.
```
lst1 = [1,2,3]
lst2 = [4,5,6]

print(lst1 + lst2) # returns [1,2,3,4,5,6]
```

If you want to repeat a list, you can use the multiplcation `*` operator.
```
lst = [0,1]

print(lst * 3) # returns [0,1,0,1,0,1]
```

Similar to getting the length of a `string`, to get the length of a list, use the built-in Python function `len()`.
```
lst = ['a','b','c']
print(len(lst)) # returns 3
```

To reverse a list's order, `lst.reverse()` will reverse all items in `lst` in place.
```
lst = ['d','a','c','b']
lst.reverse()
print(lst) # returns ['b','c','a','d']
```

To sort a list, `lst.sort()` will sort all items in `lst` in place.
```
lst = ['d','a','c','b']
lst.sort()
print(lst) # returns ['a','b','c','d']
```

## Dictionaries 
Dictionaries are like named lists, in that they are mutable and can hold values. However, unlike lists, they attach a key, as opposed to an index, to each value. These key-value pairs make up the dictionary. Values can be any data-type (e.g. strings, ints, lists, dictionaries, etc) while keys must be **unique** and immutable (e.g. strings, ints, etc. but not lists).

An example of a declaration of a dictionary is:
```
grades = {"freshman": 9, "sophomore": 10, "junior": 11, "senior": 12}
```
where to get the value `9`, we would access it with the key:
```
grades["freshman"]
```
We'll explore more dictionary functions below.

### Creating Dictionaries
First, let us declare a dictionary `grades`.
```
grades = {
    "freshman": 9,
    "sophomore": 10
}
```
To add items to a dictionary, you give a value to a key, and if the key does not yet exist, it creates a new key-value pair. If a key already exists, it resets the value.

```
grades["junior"] = 11
grades["senior"] = 12

print(grades) # returns {"freshman": 9, "sophomore": 10, "junior": 11, "senior": 12}
```

### Dictionary Operations
There are various functions to be used with dictionaries.

To get a list of keys of the dictionary `grades`, use `grades.keys()`.
```
print(list(grades.keys())) # returns ['freshman','sophomore','junior','senior']
```
Similarly, to get a list of values of a dictionary `grades`, use `grades.values()`.
```
print(list(grades.values())) # returns [9,10,11,12]
```
To get a list of the items as tuples, e.g. in key-value pairs, use `grades.items()`.
```
print(list(grades.items())) # returns [('freshman', 9), ('sophomore', 10), ('junior', 11), ('senior', 12)]
```


## Conditionals
Conditionals are `if` statements, which takes some boolean expression (e.g. an expression that evaluates to true or false) and "if" `True`, performs an action.

More concisely, in Python syntax, it is:
```
if (...):
    # do something
elif (...):
    # do something else
else:
    # do something else
```
For example, 
```
# we have integers x and y
x = 5 
y = 5

# this if statement prints a phrase if x > y
if (x == y):
    print(x, "is equal to", y)
```
and since `x == y`, it will print `'5 is equal to 5'`.

But what about when `x` is not equal to `y`? Below, we have a more comprehensive `if` statement using `elif` (short for "else if") and `else`.

```
# a more comprehensive if statement
x = 8 
y = 8

if (x > y):
    print(x, "is greater than", y)
elif (x < y):
    print(x, "is less than", y)
else:
    print(x, "is equal to", y)
```
Here, we check if `x > y`, and if that is not true, then it goes to the next statement in the chain, `elif`. If the `elif` statement is not true (e.g. `x` is not `< y`), then it will jump to the next statement (which can be more `elif` statements or `else`). Finally, the last statement, `else`, means if none of the other statements evaluate to `True`, perform the action below.


## Loops
In Python, whenever you want to iterate over a list, dictionary, string, etc. (any iterable), you can use for loops to perform an action on each element of the iterable.

An example of a for loop would be, if I had some list named `students`,
```
for student in students:
    # do something
```
where I chose `student` to refer to each element of the list `students` (but any valid variable name would have worked as well).

### Loop by Element
Elaborating on this, if I have a list `students`,
```
students = ["Anna", "Brian", "Chi", "Dilhan"]

# for each element in students
for student in students:
    print("My name is " + student + ".")
```
Then the above for loop will print 
```
"""
My name is Anna.
My name is Brian.
My name is Chi.
My name is Dilhan.
"""
```
### Loop by Index
If I want to loop through the list by index, I can use `range()`, 
```
# for each index i in students
for i in range(len(students)):
    print(students[i])

# this returns
"""
Anna
Brian
Chi
Dilhan
"""
```

:::note
`range(a,b,k)` is an incredibly useful function which returns a sequence of numbers from `a` up to (but not including) `b` in step sizes of `k`. If you do not pass in `k`, it automatically assumes step sizes of `1`. And if you only pass in one item, it will be `b`, and `range(b)` will return a sequence of ints from `a=0` up to `b` in step sizes of `k=1`.

For example
```
a = 5
b = 10

print(list(range(a,b))) # returns [5, 6, 7, 8, 9]

print(list(range(b))) # returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(list(range(a,b,2))) # returns [5, 7, 9]
```

### Loop by Index and Element
If I want to know both the index and the element, I can use `enumerate()` which returns an object similar to a list of tuples (but is not actually a list of tuples).
```
# for each index and element in students
for i, s in enumerate(students):
    print("My name is", s, "and I am in position", i)

# this returns
"""
My name is Anna and I am in position 0
My name is Brian and I am in position 1
My name is Chi and I am in position 2
My name is Dilhan and I am in position 3
"""
```
:::note

For a given list `lst`, `enumerate(lst)` will return an enumerate object which pairs each element with a counter, defaulting to the counter being `0`. You can change this counter by passing an some number `k`, e.g. `enumerate(lst, k)` which will then return (index, element) pairs with indices being the original index (e.g. from `0` to `n-1`) plus `k` (so now it will be from `k + 0` to `k + n-1`.

It is important to know that to actually get the list of (index, element) tuples from `enumerate`, you must convert the object to a list. For example, 
```
list(enumerate(students)) # returns [(0, 'Anna'), (1, 'Brian'), (2, 'Chi'), (3, 'Dilhan')]
list(enumerate(students , 2)) # returns [(2, 'Anna'), (3, 'Brian'), (4, 'Chi'), (5, 'Dilhan')]
```
but `enumerate(students)` just returns `<enumerate object>`.
:::

### Loop in Dictionaries
To use for loops with dictionaries, you can use the above mentioned `keys()`, `values()`, and `items()` methods which return lists of keys, values, or key-value pairs. 

For example, if I have dictionary `grades`
```
grades = {"freshman": 9, "sophomore": 10, "junior": 11, "senior": 12}
```
The below for loops will print `"freshman is grade 9"` and so on, but in two different ways.
```
# for each key, value pair in the dicionary
for name, year in grades.items():
  print(name, "is grade", year)

# for each key in the dictionary
for key in grades.keys():
  print(key, "is grade", grades[key])
```



## Functions
Oftentimes, we will want to perform the same action (with the same chunk of code) in multiple areas. To avoid copy & pasting everything multiple times, we define functions. Functions can take in inputs and return an output. 

The syntax for defining a function is:
```
def square(x):
    return x**2
```
where `square(x)` takes in a variable and returns the value squared. To call this function, we can run
```
square(2)
```
which would then return `4`. Notice how it is not actually another variable or `x`. This is because `x` is just what the function internally calls the input, and is not necessarily the name of the input outside of the function definition.

:::important

What happens when the input, lets call it `x`, is both defined outside the function *and* inside the function?
```
x = 10
def square(x):
    return x ** 2
```
Here `x` is defined as a variable outside of the function, and is also defined as the input variable to `square`. Python will treat the `x` as the last defined variable of that name, e.g. inside of the function definition, `x` will refer to the input as that was when `x` was last defined, but outside of the function definition, calling `x` will return the value `10` as the input variable is only defined within the function definition, and outside of that, `x = 10` is the last time `x` is defined.

Thus, 
```
square(5) # returns 25
```
:::

Another important thing to note is that if you use functions that mutate any variable (e.g. change it in place) within your function definition, then that variable, as you might have guessed, will be mutated.

For example, below I define two functions which take as input some variable `n` and add it onto the end of the list.
```
def extend_0(lst, n):
    lst = lst + [n]
    return lst

def extend_1(lst, n):
    return lst.append(n)
```
Here, `extend_0` does not mutate the list as `+` returns a value and does not change `lst` in place; this function will then return some new list. However, `extend_1` uses `append()` which does mutate `lst` and changes it in place. Additionally, since `append()` performs an action and does not have a return value, it will return `None`.
```
lst = [1,2,3,4]

print(extend_0(lst, 5)) # returns [1, 2, 3, 4, 5]
print(lst) # returns [1, 2, 3, 4]

print(extend_1(lst,5)) # returns None
print(lst) # returns [1, 2, 3, 4, 5]
```
:::note

Whenever there is no specified return value, Python will return `None`. Thus, functions that mutate and do not return a value, like `append()` or `remove()`, or simply perform an action, like `print()`, will all return `None`.

:::


## Modules and Packages
Oftentimes, there are functions that people want to use for different projects and don't want to copy over or rewrite the same function multiple times. This is where imports come in. 

Python has an incredibly large amount of available libraries for doing almost anything you could possibly need, from making graphs, to analyzing data, to even implementing neural networks.

To access these libraries we use imports. For example, some common libraries for data analysis are NumPy and Pandas. Thus, to use these libraries, you would
```
import NumPy as np
import pandas as pd
```
where we have imported the libraries NumPy and Pandas, and gave them a "nickname" so that we don't have to type the entire word each time we call on a function from the library.

To use functions from these libraries, e.g. NumPy's `array` function, which takes in a list and returns an `ndarray` (NumPy's own array), I would
```
lst = [1,2,3,4,5]
lst = np.array(lst)
print(lst) # returns [1 2 3 4 5], a NumPy matrix
```
If I do not want to type the `np.array` each time I call the function, or only want to import that function and not the whole library, I can specify that I just want to import `array`, e.g.:
```
from NumPy import array
```
and then I can just type `array()` each time I call the function. 
```
lst = array(lst)
print(lst) # returns [1 2 3 4 5]
```

## What Next?
Hopefully this guide served as a helpful introduction to basic Python and Python syntax, and will equip you with the understanding to explore further on your own! If you have any questions or would like to learn more, feel free to get in touch with anyone on HODP Board!

For more advanced topics, see [Python Intermediate](https://hodp-docs.netlify.app/docs/python-intermediate) which goes into more advanced topics like classes, list comprehensions, and more.

For more information on NumPy and Pandas, two of the most popular and commonly used libraries for data analysis, see [NumPy + Pandas](https://hodp-docs.netlify.app/docs/NumPy-pandas).
