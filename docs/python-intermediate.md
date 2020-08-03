---
id: python-intermediate
title: Python - Intermediate
sidebar_label: Python - Intermediate
---

By: Yijiang Zhao & Matthew Qu

This guide assumes a basic knowledge of Python and Python syntax.
If you need a reference or a refresher, check out HODP's Python for beginners [here](https://www.google.com/).
TODO: update link when finished

## File I/O

We often have data stored outside of Python, such as in Excel spreadsheets or other files. Of course, manually copying
over external data into Python would be tedious and also extremely time-consuming if we are working with large amounts
of data. Fortunately, Python supports various operations that allow us to easily manipulate files in our programs.

### Opening files

The built-in ```open()``` function can be used to open a file. ```open()``` has the following syntax:

```python
open(filename[, mode])
```

:::note

```open()``` has several other optional arguments that may be useful in certain cases, but we won't discuss them here.
You can read more about it in the [documentation](https://docs.python.org/3/library/functions.html#open).

:::

The first argument, ```filename```, is either a relative or absolute path to the file that we want to open. The second
argument, ```mode```, specifies whether we want to read, write, or append to the file. Below is a summary of the
different access modes:

```r``` - **read-only**: Default mode. Used when a file only needs to be read and not edited. The file pointer is
placed at the beginning of the file.  
```w``` - **write-only**: Used when a file needs to be edited. If the file does not exist, it is created, and the file
pointer is placed at the beginning of the file. This mode overwrites all current information in an existing file by
deleting the file and creating a new one.  
```x``` - **exclusive creation**: Used to create a new file. The call will fail if the file already exists.  
```a``` - **append**: Used when a file needs to be edited. This mode does not overwrite existing information, and it
will create a new file if it does not exist. The file pointer is placed at the end of the file, so new information will
be added after existing information.  
```+``` - **update**: Used when a file needs to be read and edited. This mode allows for both reading and writing.

In addition, we can also specify if we want to read and write in **text mode** (```t```), where data is translated to text
characters, or **binary mode** (```b```), where data is translated to individual 0 or 1 bits. By default, files are
opened in text mode.

If the mode argument is not given, then the file is opened in read mode. Otherwise, ```mode``` must contain one of the
read, write, create, or append characters, followed by the update and/or binary characters if they are desired. For
example, if we wanted to append and read to a file in binary mode, we would call ```open("file.txt", "a+b")```.

After we have opened a file and are finished with it, we need to close it to free up any resources that were associated
with the file. We do this using the ```close()``` function:

```python
f = open("file.txt", "r+") # opens a file for reading and writing
# do stuff with file
f.close()
```

However, if our program encounters an error while the file is still open, it will exit before closing the file. Python's
automated garbage collection (i.e. Python's way of keeping track of memory usage) usually makes this not a big deal,
but it is still good practice to close files properly whenever possible. A more robust way of ensuring our file properly
closes uses the ```with``` keyword:

```python
with open("file.txt", "r+") as f:
    # do stuff with file
```

This creates a new file object named ```f```, and after the program exits the ```with``` block, the file is
automatically closed.

### File operations

There are several methods to read files. One way of reading a file is to use the ```read([size])``` function. If
```read``` is called without an argument, it will read the entire file and store it as a string (in text mode) or byte
objects (in binary mode). If we specify the ```size``` argument, ```read()``` will only read the next ```size```
characters in the file. For example, suppose we have a file, ```file.txt```, with the following text:

```
This is line 1
This is line 2
This is line 3
```

Then, we can use ```read()``` to print out the entire text:

```python
with open("file.txt", "r+") as f:
    text = f.read()
    print(text)
```
```
# Output
This is line 1
This is line 2
This is line 3
```

If we read from the same file object multiple times, it will continue reading from where we left off. This allows us to
split large files into smaller, more manageable, pieces.

```python
with open("file.txt", "r+") as f:
    print(f.read(6))
    print(f.read(6))
```
```
# Output
This i
s line
```

We can use the ```tell()``` function to return the current position of the file pointer. If we want to change the
pointer position, we use the ```seek()``` function. ```seek()``` has the following syntax:
```python
seek(offset[, from_what])
```

where offset is the number of characters from a specified position, which is determined by the ```from_what``` argument.
```from_what``` can be

* 0 - indicating the start of the file (default)
* 1 - indicating the current pointer position
* 2 - indicating the end of the file

In text mode, ```from_what``` can only be 0 (so it can be omitted), or in the single case of ```seek(0, 2)```, which
moves the pointer to the end of the file. For example, given a file object ```f```, we can call ```f.seek(0)``` to bring
us to the start of the file.

:::note

Whitespaces and newline characters (```\n```) count as characters. In the example above, the first line has 15
characters: 10 letters, 1 number, 3 whitespaces, and 1 newline character.

:::

```readline()``` is another function that, by default, returns a string from the current file pointer to the next line
(including the newline character). It also has a optional ```size``` argument that works in the same way as in
```read()```, although it will never read past the end of the line, even if ```size``` is greater than the length of the
line.

Another useful function is ```readlines()```, which returns a list of all lines in the file. However, if we want to
loop through every line in the file, we can loop through the file object directly:

```python
with open("file.txt", "r+") as f:
    for line in f:
        print(line.replace("\n", "")) # removes the newline character from each line
```
```
# Output
This is line 1
This is line 2
This is line 3
```

We can also write to a file using the ```write()``` function. Remember that using the write mode will completely
overwrite all existing data, so let us use the append mode:

```python
with open("file.txt", "a+") as f:
    f.write("\nThis is the last line")
```

Note that we must include any newline characters ourselves. Because our text file did not have a new line at the end,
we first add it at the start of our string. Now, ```file.txt``` has the following:

```
This is line 1
This is line 2
This is line 3
This is the last line
```

:::important

```write()``` only accepts string arguments. To write numerical or other non-string data to a file, you must first cast
it to a string.

:::

Writing into the middle of an existing file is more difficult. We cannot use ```w``` because this overwrites our data,
and using ```a``` overrides any ```seek()``` calls and appends data at the end of the file. We can work around this by
reading the file into a list, inserting any new data into the list, and then overwriting the old file.

```python
with open("file.txt", "r") as f:
    file_list = f.readlines()

file_list.insert(3, "This is line 4\n") # inserts a new line at index 3, which is line 4

with open("file.txt", "w") as f:
    file_string = "".join(file_list) # joins the list into a single string
    f.write(file_string)
```

Now, when we inspect ```file.txt```, we can see that our changes have been successful:

```
This is line 1
This is line 2
This is line 3
This is line 4
This is the last line
```

### Reading CSVs

When working with data, we sometimes have information that has already been organized. One such common file type is a
comma-separated values (CSV) file. Python has two functions that allow us to easily read CSVs: ```reader()``` and
```DictReader()```. These are both located in the ```csv``` module.

```reader()``` is best suited for small CSV files. Each row in the CSV is returned as a list of strings, so we can
access data using indices. For example, suppose we had a CSV file ```students.txt``` with the following information:
```
name,grade,concentration
Albert,junior,computer science
Brianna,sophomore,economics
Charlie,freshman,government
```

We can use ```reader()``` to parse through this data:

```python
import csv

with open("students.csv") as f:
    reader = csv.reader(f, delimiter=",")
    for row in reader:
        print(row)
```
```
# Output
['name', 'grade', 'concentration']
['Albert', 'junior', 'computer science']
['Brianna', 'sophomore', 'economics']
['Charlie', 'freshman', 'government']
```

We can alter our code slightly to give a summary of the data in our CSV:
```python
import csv

with open("students.csv") as f:
    reader = csv.reader(f, delimiter=",")
    line = 0
    for row in reader:
        if line == 0:
            print("This is a summary of students' {}, {}, and {}".format(row[0], row[1], row[2]))
            line += 1
        else:
            print("{} is a {} concentrating in {}".format(row[0], row[1], row[2]))
```
```
# Output:
This is a summary of students' name, grade, and concentration
Albert is a junior concentrating in computer science
Brianna is a sophomore concentrating in economics
Charlie is a freshman concentrating in government
```

```DictReader()``` is useful for reading in large CSV files. It works similarly to ```reader()```, but as its name
suggests, it stores data in dictionaries rather than lists.

```python
import csv

with open("students.csv") as f:
    reader = csv.DictReader(f, delimiter=",")
    for row in reader:
        print(row)
```
```
# Output
{'name': 'Albert', 'grade': 'junior', 'concentration': 'computer science'}
{'name': 'Brianna', 'grade': 'sophomore', 'concentration': 'economics'}
{'name': 'Charlie', 'grade': 'freshman', 'concentration': 'government'}
```

Using ```DictReader()``` makes data easier to work with because we access information using keys instead of indices,
which makes our code much more understandable (```row["names"]``` will return a name, but ```row[0]``` doesn't
have the same clarity). By default, ```DictReader()``` uses the first row of the CSV as dictionary keys, but it accepts
an optional argument ```fieldnames``` which takes an ordered sequence (e.g. a tuple or list) and uses its elements as
keys.

:::tip

```reader()``` and ```DictReader()``` can also be used to read most delimiter-separated value (DSV) files by changing
the ```delimiter``` argument when necessary. Common delimiters include commas, tabs, and colons, although vertical bars
and spaces are also sometimes used.

:::

There are many other Python modules which have their own methods for reading in external data. One popular module is
**pandas**, which is designed for data manipulation and analysis. Check out HODP's introduction to pandas 
[here](https://www.google.com/)! TODO: update link when finished

## Classes

Python is an object-oriented programming language. Classes allow us to create our own objects beyond the built-in types
that Python offers. Classes can contain variables and functions that together provide the structure of a new object.

Classes are created by using the ```class``` keyword. By convention, class names are capitalized. Let's create a simple
class with no variables or functions:

```python
class MyClass:
    pass
```

:::tip

The ```pass``` keyword is a null statement that can be inserted into empty classes, functions, loops, and conditional
statements to prevent errors from occurring. It is useful as a placeholder for future code.

:::

We can now create an instance of our class as follows:

```python
new_class = MyClass()
```

Of course, our ```new_class``` instance doesn't do anything right now, so let's add a variable and function to our class:

```python
class MyClass:
    var = 3

    def my_function(self):
        print("This is a function inside a class.")
```

Now, when we initialize the instance ```new_class = MyClass()```, we can access the variables and functions using the
dot operator:

```python
new_class.var # returns 3
new_class.my_function() # prints "This is a function inside a class."
```

The call ```new_class.my_function()``` works even though ```my_function``` is defined with the ```self``` parameter
inside the class. This is because ```self``` refers to the instance of the class, and the object itself is passed as the
first argument whenever we call a function inside a class. Therefore, ```new_class.my_function()``` is equivalent to
```MyClass.my_function(new_class)```, and both call ```my_function``` in the instance ```new_class```.

In general, whenever we want to define a function inside a class, the first argument will be ```self```, followed by
any arguments the function might have. These are called **instance methods** because they require an instance of the
class to populate the ```self``` parameter. Instance methods are used most often inside a class, but you can find an
explanation of other types of functions [here](https://realpython.com/instance-class-and-static-methods-demystified/).


### The \_\_init__() function

One important function when dealing with functions is ```__init__()```. The ```__init__()``` function, also known as a
**constructor**, is called whenever a new object of a class is instantiated. ```__init__()``` must have first argument
```self```, but we can also specify additional arguments. Let's create a class ```Fraction``` that will represent
rational numbers:

```python
class Fraction:
    def __init__(self, numer: int, denom: int = 1):
        self.numer = numer
        self.denom = denom
```

Here, we specify that ```numer``` and ```denom``` must be integers, and ```denom``` has default value ```1``` if the
second argument is not provided. Now, when we create an instance of ```Fraction```, we must provide the ```numer```
argument (and optionally the ```denom``` argument), and those values are then assigned to ```self.numer``` and
```self.denom``` respectively. For example, we can create two instances of the ```Fraction``` class:

```python
frac1 = Fraction(3, 4)
frac2 = Fraction(2)
```

Because ```__init__()``` is automatically called when a new object is instantiated, we see that ```frac1.numer``` and
```frac1.denom``` have values ```3``` and ```4```, respectively. Likewise, ```frac2.numer``` has value 2, and we default
the value of ```frac2.denom``` to ```1``` because a second argument was not provided. The two instances have different
values for ```numer``` and ```denom```; hence, they are called **instance variables**. In contrast, **class variables**
are shared among all instances of a class (such as the variable ```var``` in the example ```MyClass``` above). They are
defined outside the ```__init__()``` method.

:::tip

The ```vars()``` function returns a dictionary of all instance variables and their values:

```python
frac1 = Fraction(3, 4)
print(vars(frac1))
```
```
# Output
{'numer': 3, 'denom': 4}
```

:::

### More functions

Right now, our class doesn't do much beyond storing two integers, so let's add a ```simplify()``` function:

```python
from math import gcd

class Fraction:
    def __init__(self, numer: int, denom: int = 1):
        if denom == 0:
            raise Exception("Cannot initialize fraction with denominator 0")
        self.numer = numer
        self.denom = denom

    def simplify(self):
        # reduces fractions to lowest terms
        g = gcd(abs(self.numer), abs(self.denom))
        if g == 0:
            pass # prevents divide by zero error
        else:
            self.numer /= g
            self.denom /= g

        # makes denominator positive if necessary
        if self.denom < 0:
            self.numer *= -1
            self.denom *= -1

        # casts numerator and denominator to integers
        self.numer = int(self.numer)
        self.denom = int(self.denom)
```

We've also added a clause in the constructor to catch if an instance of ```Fraction``` is intialized with a denominator
of 0. Note that ```simplify()``` takes ```self``` as its first argument. This allows us to access instance variables
that were initialized in the ```__init__()``` method. Now, our ```Fraction``` class has a function that makes it behave
more like a rational number! But let's say we wanted to print our ```Fraction``` objects so that they would look like
```3/5``` or ```1/2```. If we try using ```print()```, the output is less than useful:

```python
frac = Fraction(1, 2)
print(frac)
```
```
# Output
<__main__.Fraction object at 0x000001E6A90C0C70>
```

Fortunately, we can use special class functions, denoted by flanking double underscores(```__```). In particular, we
will define the ```__str__()``` function to create a custom string output when printing ```Fraction``` instances.

```python
from math import gcd

class Fraction:
    def __init__(self, numer: int, denom: int = 1):
        if denom == 0:
            raise Exception("Cannot initialize fraction with denominator 0")
        self.numer = numer
        self.denom = denom

    def simplify(self):
        # reduces fractions to lowest terms
        g = gcd(abs(self.numer), abs(self.denom))
        if g == 0:
            pass # prevents divide by zero error
        else:
            self.numer /= g
            self.denom /= g

        # makes denominator positive if necessary
        if self.denom < 0:
            self.numer *= -1
            self.denom *= -1

        # casts numerator and denominator to integers
        self.numer = int(self.numer)
        self.denom = int(self.denom)

    def __str__(self):
        # first simplify the fraction
        self.simplify()

        # handle edge cases
        if self.denom == 0:
            return "undefined"
        if self.denom == 1:
            return str(self.numer)

        # general string format
        return "{}/{}".format(self.numer, self.denom)
```

Now, we can use the ```print()``` function with more success:

```python
print(Fraction(2, 1)) # outputs 2
print(Fraction(3, 5)) # outputs 3/5
```
 
### Inheritance

**Inheritance** is an essential feature in object-oriented programming languages. Inheritance is the ability for a class
to derive properties and functions from another class. The class that inherits from another is called the
**derived (or child) class**, while the class that is being inherited from is called the **base (or parent) class**.

The syntax for creating a class ```Child``` that inherits from a class ```Parent``` is as follows:

```python
class Child(Parent):
    pass
```

In fact, when we create any class in Python, we implicitly inherit from the ```object``` class. We could be thorough
and create a class by writing ```class MyClass(object)```, but it is redundant to do so. As an example, suppose we have
a class ```Triangle``` with a constructor and an ```area()``` function:

```python
from math import sqrt

class Triangle:
    def __init__(self, side1, side2, side3):
        self.side1 = side1
        self.side2 = side2
        self.side3 = side3

    def area(self):
        # Using Heron's formula to calculate area
        print("Using Heron's formula")
        s = (self.side1 + self.side2 + self.side3) / 2
        return sqrt(s * (s - self.side1) * (s - self.side2) * (s - self.side3))
```

Now, we want to create another class, `EquilateralTriangle`, that inherits from our ```Triangle``` class. Because an
equilateral triangle has equal side lengths, its constructor will accept only one argument besides ```self```:

```python
from math import sqrt

class EquilateralTriangle(Triangle):
    def __init__(self, side):
        super().__init__(side, side, side)

    def area(self):
        # Using formula for area of an equilateral triangle
        print("Using equilateral triangle formula")
        return (self.side1 ** 2) * sqrt(3) / 4
```

The constructor for ```EquilateralTriangle``` uses the built-in ```super()``` function. This simply refers to the parent
class, so when we call ```super().__init__()```, we are calling the parent constructor and populating the three argument
with the variable ```side```. This means that an ```EquilateralTriangle``` still has three instance variables,
```side1```, ```side2```, and ```side3```, but they are just initialized to the same value.

:::note

```super()``` can be used to call other functions in the parent class as well, not just the ```__init__()``` function.

:::

We also have another ```area()``` function in the child class, even though the same function exists in the parent class.
This is called **function (or method) overriding**. We've added a ```print``` statement in each function to distinguish
between the two. Take a look at what happens when we create an instance of ```Triangle``` and ```EquilateralTriangle```
and call the ```area()``` function on each:


```python
tri = Triangle(3, 4, 5)
eq_tri = EquilateralTriangle(4)
print(tri.area())
print(eq_tri.area())
```
```
# Output
Using Heron's formula
6.0
Using equilateral triangle formula
6.928203230275509
```

We see that ```eq_tri``` uses the```area()``` function in the child class. But if we didn't implement an ```area()```
function in ```EquilateralTriangle```, our code would still work because ```eq_tri``` would instead call the function
in its parent class. This is why inheritance is so useful - it allows us to create similar classes without repeating
ourselves and writing redundant code.

### Overloading

Many operators and functions we use all the time are special in that they can be used with several data types. For
example, the addition operator ```+``` can be used with types such as integers, strings, and lists, and the ```len()```
function can be used on strings, dictionaries, lists, and more. This is known as **operation overloading** or 
**function overloading**, respectively.

:::important

Function overloading also refers to multiple functions having the same name. In other languages such as Java and C++,
we can overload a function by creating multiple functions of the same name but with different numbers, types, and/or
orders of arguments. For example, in Java, we can overload an ```add()``` function to either take two or three arguments.
When the program is run, the appropriate ```add()``` function will be used depending on the number of arguments.
```java
// This function takes in two arguments
public int add(int x, int y) {
    return x + y;
}

// This function takes in three arguments
public int add(int x, int y, int z) {
    return x + y + z;
}
```

Python, however, doesn't support this type of overloading. We can work around this by using default values, as follows:

```python
def add(x, y, z = 0):
    return x + y + z
```

:::

Let's revisit our ```Fraction``` class from before. As representations of numbers, we should be able to add two
instances of ```Fraction```, but how are we supposed to define the ```+``` operator in our class? As it turns out, if we
try and add two objects together by writing ```obj1 + obj2```, Python calls the function ```obj1.__add__(obj2)```. This
means we can define the ```__add__``` function in ```Fraction``` that takes in two arguments: the first being
```self``` as usual, and the second, conventionally labelled ```other```, which refers to the second ```Fraction``` that
we are trying to sum!

```python
def __add__(self, other):
    numer = (self.numer * other.denom) + (self.denom * other.numer)
    denom = self.denom * other.denom
    return Fraction(numer, denom)
```

Now, if we create two instances of ```Fraction```, we can add them just as we would with any other number:

```python
frac1 = Fraction(1, 2)
frac2 = Fraction(1, 3)
print(frac1 + frac2) # outputs 5/6
```

To create a complete representation of a fraction class, we would need to overload every mathematical operation
compatible with rational numbers, but we'll let you do that yourself! (How could you use the functions for addition and
multiplication to define subtraction and division?) Below is a list of common operators and functions as well as their
internal Python representation:

| Operator/Function        | Expression          | Internal Representation       |
| ------------------------ | :-----------------: | :---------------------------: |
| Addition                 | ```obj1 + obj2```   | ```obj1.__add__(obj2)```      |
| Subtraction              | ```obj1 - obj2```   | ```obj1.__sub__(obj2)```      |
| Multiplication           | ```obj1 * obj2```   | ```obj1.__mul__(obj2)```      |
| Division                 | ```obj1 / obj2```   | ```obj1.__truediv__(obj2)```  |
| Floor Division           | ```obj1 // obj2```  | ```obj1.__floordiv__(obj2)``` |
| Exponentiation           | ```obj1 ** obj2```  | ```obj1.__pow__(obj2)```      |
| Less than                |  ```obj1 < obj2```  | ```obj1.__lt__(obj2)```       |
| Less than or equal to    |  ```obj1 <= obj2``` | ```obj1.__le__(obj2)```       |
| Greater than             |  ```obj1 > obj2```  | ```obj1.__gt__(obj2)```       |
| Greater than or equal to |  ```obj1 >= obj2``` | ```obj1.__ge__(obj2)```       |
| Equal to                 |  ```obj1 == obj2``` | ```obj1.__eq__(obj2)```       |
| Not equal to             |  ```obj1 != obj2``` | ```obj1.__ne__(obj2)```       |
| Length                   | ```len(obj)```      | ```obj.__len__()```           |
| Index                    | ```obj[index]```    | ```obj.__getitem___(index)``` |
| Membership               | ```elem in obj```   | ```obj.__contains__(elem)```  |
| Display (Printing)       | ```print(obj)```    | ```obj.__str__()```           |

## Lambda Functions

**Lambda functions** (also known as lambda expressions or anonymous functions) are simply functions defined without a
name. In Python, they must only contain a single expression in the function body, which is then evaluated and returned.
The syntax for declaring a lambda expression is as follows:
```python
lambda arguments: expression
```
For example, let's say we wanted to create a simple function ```add``` that takes in two numbers as arguments and
returns their sum. Without using lambda functions, we would have
```python
def add(x, y):
    return x + y
```
Equivalently, we can use lambda function syntax to create the same function:
```python
add = lambda x, y: x + y
```
Calling the function via a statement such as ```add(2, 2)``` would output ```4``` in both cases.

However, lambda functions are typically not assigned to a variable, as in the example above. Instead, they are often
used whenever we need a function for a short period of time. This is commonly encountered when we pass in functions
themselves as arguments into other functions. Such functions that take in one or more functions as arguments are called
**higher-order functions**, and we will introduce some common higher-order functions in the next section.

One example of a higher-order function is the built-in ```sorted()``` function, which is used to sort an iterable, such
as a list:
```python
mylist = ["banana", "pear", "apple"]
newlist = sorted(mylist)
# newlist is now ["apple", "banana", "pear"]
```

However, ```sorted()``` also has an optional argument ```key``` which takes in a function that decides the sorted order.
If we wanted to sort our list based on the _length_ of each word, we can do so as follows:
```python
mylist = ["banana", "pear", "apple"]
newlist = sorted(mylist, key=lambda word: len(word))
# newlist is now ["pear", "apple", "banana"]
```
Here, the ```sorted()``` function applies the lambda function to each element in the list and uses its output
(in this case, the length of each word) to determine the final order. We could have also achieved the same result by
creating a function using the ```def``` keyword and passing it in as an argument for ```key```, but lambda functions
allow us to bypass this and create a function directly when we need it.

You can read more about the ```sorted()``` function [here](https://docs.python.org/3/howto/sorting.html#key-functions).

## Map, Filter, Reduce

In the last section, we introduced lambda functions, which were a shorthand way of creating simple, single-line
functions. Now, we will introduce several higher-order functions and also become more comfortable with using lambda
syntax. The following higher-order functions all require an **iterable** as an argument. Put simply, an iterable is any
object that can be used in a ```for``` loop as follows:
```python
for element in iterable:
    # do stuff
```
Some built-in iterables in Python include lists, tuples, dictionaries, and strings. We will be using lists as examples
of iterables in most of our examples here. For a more rigorous explanation of iterables, you can view the documentation
[here](https://docs.python.org/3/glossary.html#term-iterable).

### Map

The ```map()``` function takes a function and an iterable as arguments and applies the function to each element in the
iterable. It has the following syntax:
```python
map(function, iterable, ...)
```
Suppose we had a list of test scores, but then we realized that one of the answers was incorrect and everybody was to
receive an extra point. We could do so as follows:
```python
scores = [90, 85, 97, 91, 87]
new_scores = []
for score in scores:
    new_scores.append(score + 1)
```
With the ```map()``` function, we can make this code more concise:
```python
scores = [90, 85, 97, 91, 87]
new_scores = list(map(lambda score: score + 1, scores))
```
These two pieces of code are equivalent, and they result in the list ```new_scores``` having scores
```[91, 86, 98, 92, 88]```.

:::note

The ```map()``` function doesn't return a list, but rather a ```map``` object (which is an
[iterator](https://docs.python.org/3/glossary.html#term-iterator)). If you want to store the result as a list or other
object, you will need to cast the object to a ```list```.

:::

```map()``` can also take in multiple iterables as arguments; however, ```function``` must have the same number of
arguments as iterables passed into ```map()```. For example, we can use ```map()``` to sum elements of multiple lists by
index into a single list.
```python
list1 = [1, 2, 3, 4]
list2 = [5, 6, 7, 8]
list3 = [9, 10, 11]
sum_list = list(map(lambda x, y, z: x + y + z, list1, list2, list3))
# sum_list is now [15, 18, 21]
```
In the case where iterables are not the same length, ```map()``` does not return an error, but it will end when it
reaches the last element of the shortest list. Therefore, in the example above, ```sum_list``` only has three elements.

### Filter

The ```filter()``` function does what its name suggests: it filters out elements of a list based on a function. The
syntax for ```filter()``` is similar to that of ```map()```:
```python
filter(function, iterable)
```
Note that filter only accepts a single iterable, and so ```function``` must only have a single argument. Furthermore,
```function``` must return a boolean. Then, each element in ```iterable``` is evaluated as ```True``` or ```False```.
If it evaluates ```True```, the element remains; otherwise, it is filtered out. ```filter()```, much like ```map()```,
returns a ```filter``` object, so casting is necessary to store it as a ```list```.

Let us imagine that we have survey responses from a spreadsheet that we have imported it into some lists. One of them
holds ratings for CS50 on a scale from 1 to 5. We want to find the average rating, but because not everyone has taken
the class, some responses are blank, which leads to our list being littered with ```None``` values. We can easily remove
these values from our list using ```filter()```:
```python
ratings = [4, 5, None, 2, 4, None, None, 1, None, 5]
# attempting to call sum(ratings) returns an error

filtered_ratings = list(filter(lambda rating: rating, ratings))
average_rating = sum(filtered_ratings) / len(filtered_ratings)
# average_rating is 3.5
```
At first glance, our function doesn't seem to return a boolean. However, in Python, certain values are considered
"false"; these include ```None```, ```0```, the empty string ```''```, and empty collections such as lists ```[]```,
sets ```set()```, tuples ```()```, and dictionaries ```{}```. Any other values are considered to be ```True```. Our
lambda function, which simply returns each element unchanged, views the ```None``` elements as ```False```
and subsequently filters them out, leaving us with just the ratings.

:::caution

If ```ratings``` instead had responses ranging from 0 to 5, the above code would not have worked as expected. Do you
see why?

:::

Going back to our ```new_scores``` list, we can easily filter for scores in the "A" range:
```python
# new_scores is [91, 86, 98, 92, 88]
a_scores = list(filter(lambda score: score >= 90, new_scores))
# a_scores is now [91, 98, 92]
```

### Reduce

```reduce()``` (also known as ```fold``` in some other languages) takes a function and an iterable and returns a single
value. Unlike ```map()``` and ```filter()```, ```reduce()``` is defined in the ```functools``` module, so we will need
an import statement to use this function. The syntax for ```reduce()``` is as follows:
```python
reduce(function, iterable[, initial])
```
```reduce()``` determines the return value through the following steps:
1. First, ```reduce()``` takes the first two elements of the iterable and applies ```function``` to them, generating an
intermediate value.
2. Then, it takes this value and the third element of the iterable and applies ```function``` again, producing another
value.
3. This process is repeated until the end of the iterable is reached, and then a final value is returned.  

If the optional ```initial``` argument is provided, then ```reduce()``` will first produce an intermediate value by
applying ```function``` to the ```initial``` value and the first element of the iterable. The ```initial``` value comes
before the first element in cases where ```function``` is not commutative.  In addition, we see that ```reduce()```
requires a two-argument function.

Consider the following example:
```python
from functools import reduce

numbers = [5, 3, 2, 7, 6]
product = reduce(lambda x, y: x * y, numbers)
# product is 1260
```
Alternatively, we can think of ```reduce()``` acting on ```numbers``` through a series of nested operations. In the
example above, ```reduce()``` calculates the return value much like how we would calculate the product  
```((((5 * 3) * 2) * 7) * 6)```.

:::tip

When dealing with iterables that may be empty, consider providing an initial value that would not change the outcome of
```reduce()```. Calling ```reduce()``` on an empty iterable will return the initial value if it is provided, but
otherwise it will produce an error. We can make the above example more robust:
```python
from functools import reduce

product = reduce(lambda x, y: x * y, [], 1)
# product is 1 
```
Compare this to the following:
```python
from functools import reduce

product = reduce(lambda x, y: x * y, [])
# raises TypeError: reduce() of empty sequence with no initial value
```

:::

We can also find the maximum value in an iterable using ```reduce()```:
```python
from functools import reduce

numbers = [5, 3, 2, 7, 6]
maximum = reduce(lambda x, y: x if x > y else y, numbers)
# maximum is 7
```
The single-line ```if ... else``` statement in the lambda function is a **conditional expression** (also known as a
ternary operator). These are briefly discussed in the section on list comprehensions, but they are quite
self-explanatory by reading the statement from left to right.

:::important

In the above example, using Python's built-in ```max()``` function would have been a much easier solution. Also, as of
Python 3.8, ```prod()``` is available from the ```math``` module that makes calculating products via ```reduce()```
obsolete as well. In general, using Python's built-in functions instead of creating your own will make your code more
readable and likely more efficient too!

:::

## List Comprehensions

Lists are one of the most important data types in Python. Often, we want to initialize a non-empty list. Suppose that we
need a list consisting of the first ten positive even numbers. We could create the list as follows:
```python
evens = []
for i in range(1, 11):
    evens.append(i * 2)
# evens is now [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

We also learned from the previous section that we can use ```map()``` to achieve the same goal:
```python
evens = list(map(lambda x: x * 2, range(1, 11)))
# evens is now [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

However, the ```map()``` syntax can be difficult to follow, and using a ```for``` loop creates the index variable
```i``` that remains after the loop has completed. There is a third solution that is both concise and does not create
additional variables:

```python
evens = [i * 2 for i in range(1, 11)]
# evens is now [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
``` 

This is known as **list comprehension**.

List comprehension is an elegant way of creating lists from other iterables. List comprehensions have the following
syntax:

```python
new_list = [expression for element in iterable]
```
In the example above, ```expression``` used each element in ```range(1, 11)``` and multiplied it by 2. ```expression```
can also be a call to another function. Because of this, list comprehensions can be used in place of single-iterable
```map()``` functions. That is, given a single-argument function ```f```,
```python
new_list = list(map(f, iterable))
```
is equivalent to
```python
new_list = [f(element) for element in iterable]
```

List comprehensions also support conditional statements with the following syntax:

```python
new_list = [function for element in iterable if conditional]
``` 

If the condition is satisfied, then the value of ```expression``` for the particular ```element``` is added to the list.
Otherwise, it is omitted. This yields an alternative solution for making the same ```evens``` list: we can iterate
through the first 20 integers, removing those not divisible by two!

```python
evens = [i for i in range(1, 21) if i % 2 == 0]
# evens is now [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

Perhaps you've realized that we can use list comprehensions instead of ```filter()``` as well! Given some boolean
function ```f```,
```python
new_list = list(filter(f, iterable))
```
is the same as
```python
new_list = [element for element in iterable if f]
```

Here, ```expression``` is just ```element``` because we do not change any of the elements when using ```filter()```.

When we want to change elements that do not satisfy our conditional (as opposed to filtering them out), we use the
following syntax:

```python
new_list = [expression if conditional for element in iterable]
```

This is a mouthful, so let's illustrate with an example. Given the first ten positive integers, suppose we want to add
three to any integer that is odd and square any integer that is even. We do so as follows:

```python
more_evens = [i + 3 if i % 2 == 1 else i * i for i in range(1, 11)]
# more_evens is now [4, 4, 6, 16, 8, 36, 10, 64, 12, 100]
```

Here, we use a **conditional expression** inside the list comprehension. In Python, a conditional expression is written
in the form
```python
A if C else B
```
where ```A``` and ```B``` are expressions and ```C``` is a condition. If ```C``` evaluates to ```True```, then ```A```
is returned; otherwise, it evaluates to ```B```.

The code inside the list comprehension can be difficult to follow, but remember that we can call other functions in
our expression:

```python
def my_function(i):
    return i + 3 if i % 2 == 1 else i * i

more_evens = [my_function(i) for i in range(1, 11)]
```

This simply splits our code into two more readable chunks.

:::note

When there is an ```else``` clause in our conditional (signifying changing elements instead of filtering), the
conditional statement is moved to be before the ```for``` statement.

:::

Python also supports set and dictionary comprehension in a similar manner to list comprehension. In fact, Python also
allows for **generator** comprehension, although we will not discuss them in detail here. Generators are useful when
iterating through large collections, and you can read more about them [here](https://stackabuse.com/python-generators/).

There are still many, many Python topics beyond what we have covered here, but hopefully these guides have served as a
solid introduction to the capabilities that Python has to offer. If you have any questions or would like to learn more,
feel free to get in touch with anyone on HODP Board!
