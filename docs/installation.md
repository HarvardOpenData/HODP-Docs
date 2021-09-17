---
id: installation
title: Installation
sidebar_label: Installation
---

By: Ashley Wong

This doc contains instructions for installing most of the tools, packages, and software you will need for the HODP bootcamp (and beyond)!

## Installing the Essentials

### Deepnote
[Deepnote](https://deepnote.com/) is a site that allows you to run jupyter notebooks in the cloud. The nifty thing about Deepnote is that it allows for real-time collaboration (think Google docs style) and it saves you the hassle of having to download any packages or libraries! 

You can create an acount by signing up with your college email (or your GitHub account, if you like). 

During bootcamps:

- We'll send you all a link to the bootcamp's notebook.
- Sign in with either Google or Github.
- Press the blue ```Duplicate``` button (in the title bar next to ```View only```) to create your own copy of the notebook.
- To share your copy of the notebook, press the ```Share``` button in the top right hand corner. 

:::note

Don't forget to make sure that collaborators have at least edit access!

:::

### R Studio Cloud
This one is simple! Go to [rstudio.cloud](https://rstudio.cloud/) and sign up for free! Use your college email if possible!


### Github (Optional)
Github is a site that you can use to store and share your code. All the code for our website can be found on the [HODP github](https://github.com/HarvardOpenData). There are two simple ways to access the code in a repo:
1. Press the green ```Code``` button and download the whole repo as a zip file. Upload the files you want to Deepnote using the ```Upload``` button or run them locally (more on this later). 
2. Click on the ```Upload``` button in Deepnote, select ```Github``` and copy in the repo URL. If Deepnote notifies you that it must clone the repo, press ```Okay``` and then check the file tree on the left. Your repo should now be there!

To have access to more of Github’s functionality (like uploading code), you can use [Git](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) in the command-line or you can use [Github Desktop](https://desktop.github.com/). We’ll cover the latter later in the bootcamp. 



## Advanced Installation - Mac (Optional)
:::warning
These instructions are for Mac users, Windows-specific instructions below!
:::

Below are detailed installation instructions for you to work through. At the end of each section there are **installation checks**. These are designed to help you test that your installation succeeded. Please make sure you pass the check for each section before continuing to the next! Many of these steps depend on previous ones having completed successfully. The exceptions to this are Visual Studio Code and Github Desktop, they are completely independent and can be done on their own.

:::tip 
If any of this goes **catastrophically** wrong and you'd really like to have these tools installed locally and you aren't a CS concentrator (or someone who will be programming regularly), you can follow the **Windows** instructions. These are simpler and should work for Mac users for the most part. 

This is **strongly** discouraged if you care about version control or virtual environments or best practices in general.
:::

### Homebrew
[Homebrew](brew.sh) is a package manager for Mac that makes it extremely convenient to install and update packages! Although you can install things by downloading an installer (e.g install python from [python.org](python.org), using a package manager like Homebrew is considered best practice!

To install Homebrew, open Terminal. You can do this by:
1. Opening Finder, opening your Applications folder, and searching for Terminal.
2. Opening spotlight (cmd-space on most computers) and searching for Terminal.

Once Terminal is open, copy and paste the following code into your command-line ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"```. This will begin installation. Homebrew will ask for you to hit the ```return``` key to start installation, so keep an eye on your terminal!

Don’t worry if you see hundreds of lines flying past, or if you see nothing happening at all -- Homebrew is in the process of installing. That being said: if you see an error message, or if you’re unsure whether Homebrew is still running, feel free to send us a message on slack!

If you get a ```permission denied``` error while installing, try running ```sudo chown -R $(whoami) $(brew --prefix)/*``` before running ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"``` again. 

:::tip
This process can take a long time, maybe it’s time for a game of [codenames](https://www.horsepaste.com/)?

If you want to continue with installation while waiting for Homebrew, feel free to skip to installing Visual Studio Code or Github Desktop. All other steps depend on this one.
:::

**Installation check:** Once brew is done installing, run ```brew help``` in your command-line. If you get some multi-column output, success! Otherwise, if you get a ```command not found``` error, something went wrong. 

### Python and Pip
It’s time to get CS-y! Run ```brew install python``` in your command-line to download the language. This will also automatically install [pip](https://pypi.org/project/pip/), a tool that helps you install libraries for Python (for example NumPy, Pandas etc). 

Even if you see the following output: ```Error: python@3.8 (or some other version) is already installed``` don't worry, you’re may proceed to the installation checks!

**Installation check:** run ```python3 --version``` in the command line. This should return at least version ```3.8.x```. If you get a ```command not found``` error, something went wrong. Also check that pip is working by running ```pip3 --version```, you should get at least version ```20.2.x```. Again if you get a ```command not found``` error, something went wrong.

:::note
Many resources online might tell you to run commands starting with ```python``` or ```pip```. To avoid versioning errors (i.e your computer getting confused between Python2 and Python3), run all commands with ```python3``` or ```pip3```.
:::

### Python Libraries
Time to install some libraries! These libraries contain a lot of pre-made functions that make coding a lot easier. This can include everything from basic math functions to machine learning. Below are the libaries you need to install and the commands to do so (enter all of these in the command-line):
1. [NumPy](https://numpy.org/install/) (pronounced num-pie): ```pip3 install numpy```
2. [Pandas](https://pypi.org/project/pandas/): ```pip3 install pandas```
3. [Urllib3](https://pypi.org/project/urllib3/): ```pip3 install urllib3``` (are you starting to sense a pattern in these download instructions)
4. [Beautiful Soup 4](https://pypi.org/project/beautifulsoup4/): ```pip3 install beautifulsoup4```
5. [SciPy](https://www.scipy.org/install.html) (pronounce s-eye-pie, not skype-y, no matter what [MIT confessions](https://www.facebook.com/beaverconfessions/posts/3008352295900464) might have you believe): ```pip3 install scipy```
6. [MatPlotLib](https://pypi.org/project/matplotlib/): ```pip3 install matplotlib```

Each of these installations should take no more than 2-3 seconds and you should see a success message along the lines of ```Successfully installed [insert package name]``` after every installation.

### Jupyter Notebook
This is the equivalent of what we did in Deepnote, except we will be running Notebooks locally on your computer (Deepnote is a website that allows you to run Jupyter Notebooks in the cloud). Run the following command ```pip3 install notebook``` to install Jupyter Notebook to your computer. This will take a little longer than the previous Python libraries. 

**Installation check:** start up a Jupyter Notebook kernel by running the command ```jupyter notebook```. If you get a ```command not found``` error, please slack #bootcamp-f20. This is a known error and we're working on finding a work around. 

If Jupyer Notebook has been installed correctly, running ```jupyter notebook``` in Terminal should open up a new tab on your default web browser (e.g Chrome, Safari, etc). Here you can click through folders to find the notebook you want. Or you can press the ```New``` button in the top right hand corner to create your own notebook. Try it now! If you play around, you should realise that it feels very similar to Deepnote. 

To stop Jupyter Notebook from running (i.e to shutdown the server), it's **not** enough to just close the tab. You need click on your terminal and press ```Ctrl-c```. You'll be asked the confirm that you want to shut down the server, to which you can respond ```y```. 

:::tip
If you ever want to do a 'force quit' on your terminal or stop a program from running try ```Ctrl-c``` or ```Ctrl-d```. 
:::
<!---
### Installing nvm and Node.js
We're past the halfway point now! It should get easier from here on out. 

The next thing we're going to install is [Node.js](Node.jsnodejs.org) (also called node). This will be essential for web development (or if you want to create [interactive graphics](https://www.d3-graph-gallery.com/index.html) in [d3](https://d3js.org/). However to do that, we need to first install nvm. Nvm is a version manager for node and will help you install and update node quickly and conveniently. 

First, we'll install nvm using brew (not pip -- that was a Python thing!). Run ```brew install nvm```. Unfortunately, this method of installation isn't officially supported by nvm, which means we'll have to take a few extra steps to get it working. First you need to figure out if your terminal is running ```bash``` or ```zsh```. Type the following commands into Terminal ```$ZSH_VERSION``` and ```$BASH_VERSION```. If you get any output (even if it's a ```command not found``` error, that means you're running that scripting language). 

Regardless of whether you use ```bash``` or ```zsh```, run the command ```mkdir ~/.nvm```, this will create a new directory for nvm. Then run ```touch ~/.bash_profile``` if you use ```bash``` or ```touch ~/.zshrc```if you use ```zsh```. This will create a ```.bash_profile``` or ```.zshrc``` if you didn't already have them. Now run ```open ~/.bash_profile```or ```open ~/.zshrc```. This will open a text editor for you to edit the file in. 

Copy these lines into the file: ```export NVM_DIR=~/.nvm``` and ```source $(brew --prefix nvm)/nvm.sh``` (make sure to put them on separate lines).

:::warning
Watch out for autocorrect, it tends to autocapitalize the first word of each line. This can cause your commands to fail.
:::

Run ```source ~/.bash_profile``` or ```source ~/.zshrc``` to update your terminal. You should now pass the installation check below. 

**Installation check:** run ```nvm -v``` and you should see a long list of possible nvm commands printed to your terminal. Please make sure this works before progressing on with the rest of the node.js installation (other segments are fine though). 

Now that we have our version manager, it's time to install the actual framework! Run ```nvm install 12.18.3```. 

:::note
If you're reading this sometime after September 2020, check [here](https://nodejs.org/en/) for the version of node to install and change up the version numbers as necessary.
:::

**Installation check:** running ```node -v``` should now return ```12.18.3``` -- or whatever version you installed.
!--->

### Visual Studio Code  
You're free to install any IDE or text editor you wish, but we recommend [VSCode](https://code.visualstudio.com/) as a good default option. This one is simple: click [here](https://code.visualstudio.com/) to go to vscode's website and press the big blue ```Download for Mac``` button. Follow the instructions (this downloads like any other application you download from the internet). 

**Installation check:** if you can find this in your applications folder and it opens and runs, you're all set!

### Github Desktop
Another simple one! [Github Desktop](https://desktop.github.com/) is a great way to use Github without having to learn the intricacies of Git on the command-line (though you are of course more than welcome to do so -- there are many good online tutorials for this). To install it, simply click [here](https://desktop.github.com/) to go to their website and press the big purple ```Download for MacOS``` button. Follow the instructions and voila! You're done with installations!

**Installation check:** Github desktop has a great tutorial and introduction to Github. Start up the app and complete the tutorial!

:::tip
Congratulations on completing the advanced installation! You can stop reading now, everything else is Windows-specific
:::

## Advanced Installation - Windows (Optional)
:::warning
These instructions are for Windows users, Mac users beware!
:::

Below are detailed installation instructions for you to work through. For those who might be more familiar with programming, you might wonder why we've chosen to forego Anaconda. The short answer is that it's finicky and difficult to get right over written instruction. However, if you see yourself programming frequently in the future (e.g you're a CS concentrator), it might be better for you to search up Windows best practices instead. 

### Python
It's time to get CS-y! Click [here](https://www.python.org/downloads/) to download Python (big yellow button). This works much like downloading from any other app from the internet: follow the installer's instructions and you should be good to go!

**Installation check:** open up Powershell (or however else you access the command-line) and run the command ```python --version``` (you can copy-paste that in and hit enter). You should see something along the lines of ```Python 3.8.5```. If you see something else, try installing Python again and slacking board in the bootcamp channel for help (feel free to do this at any point of the installation process -- and make sure to specify that you use Windows).

This will also automatically install [pip](https://pypi.org/project/pip/), a tool that helps you install libraries for Python (for example NumPy, Pandas etc). 

**Installation check:** open Powershell and run the command ```python -m pip --version```, you should see at least version ```20.2.x``` (though 19 is okay as well). From this point onwards I'll stop specifying that you should be running your commands in Powershell -- you may assume this. 

### Python Libraries
Time to install some libraries! These libraries contain a lot of pre-made functions that make coding a lot easier. This can include everything from basic math functions to machine learning. Below are the libaries you need to install and the commands to do so (enter all of these in the command-line):
1. [NumPy](https://numpy.org/install/) (pronounced num-pie): ```python -m pip install numpy```
2. [Pandas](https://pypi.org/project/pandas/): ```python -m pip install pandas```
3. [Urllib3](https://pypi.org/project/urllib3/): ```python -m pip install urllib3``` (are you starting to sense a pattern in these download instructions)
4. [Beautiful Soup 4](https://pypi.org/project/beautifulsoup4/): ```python -m pip install beautifulsoup4```
5. [SciPy](https://www.scipy.org/install.html) (pronounce s-eye-pie, not skype-y, no matter what [MIT confessions](https://www.facebook.com/beaverconfessions/posts/3008352295900464) might have you believe): ```python -m pip install scipy```
6. [MatPlotLib](https://pypi.org/project/matplotlib/): ```python -m pip install matplotlib```

Each of these installations should take no more than 2-3 seconds and you should see a success message along the lines of ```Successfully installed [insert package name]``` after every installation.

### Jupyter Notebook
This is the equivalent of what we did in Deepnote, except we will be running Notebooks locally on your computer (Deepnote is a website that allows you to run Jupyter Notebooks in the cloud). Run the following command ```python -m pip install notebook``` to install Jupyter Notebook to your computer. This will take a little longer than the previous Python libraries. 

**Installation check:** start up a Jupyter Notebook kernel by running the command ```jupyter notebook```. If you get a ```command not found``` error, please slack #bootcamp-f20. This is a known error and we're working on finding a work around. 

If Jupyer Notebook has been installed correctly, running ```jupyter notebook``` in Terminal should open up a new tab on your default web browser (e.g Chrome, Safari, etc). Here you can click through folders to find the notebook you want. Or you can press the ```New``` button in the top right hand corner to create your own notebook. Try it now! If you play around, you should realise that it feels very similar to Deepnote. 

To stop Jupyter Notebook from running (i.e to shutdown the server), it's **not** enough to just close the tab. You need click on your terminal and press ```Ctrl-c```. You'll be asked the confirm that you want to shut down the server, to which you can respond ```y```. 

:::tip
If you ever want to do a 'force quit' in Powershell or stop a program from running try ```Ctrl-c``` or ```Ctrl``` and ```BREAK```. 
:::
<!---
### Installing nvm and Node.js
We're past the halfway point now! The next thing we're going to install is [Node.js](Node.jsnodejs.org) (also called node). This will be essential for web development (or if you want to create [interactive graphics](https://www.d3-graph-gallery.com/index.html) in [d3](https://d3js.org/).

Click [here](https://nodejs.org/en/download/) and download the Windows installer (we suggest you go for the LTS version -- recommended for most users). Follow the installer's instructions!

**Installation check:** run the command ```node -v```, it should now return at least ```12.18.3```.

### Visual Studio Code  
You're free to install any IDE or text editor you wish, but we recommend [VSCode](https://code.visualstudio.com/) as a good default option. This one is simple: click [here](https://code.visualstudio.com/) to go to vscode's website and press the big blue ```Download for Windows``` button. Follow the instructions (this downloads like any other application you download from the internet). 

**Installation check:** if you can find this in your applications folder and it opens and runs, you're all set!
!--->

### Github Desktop
Another simple one! [Github Desktop](https://desktop.github.com/) is a great way to use Github without having to learn the intricacies of Git on the command-line (though you are of course more than welcome to do so -- there are many good online tutorials for this). To install it, simply click [here](https://desktop.github.com/) to go to their website and press the big purple ```Download for Windows``` button. Follow the instructions and voila! You're done with installations!

**Installation check:** Github desktop has a great tutorial and introduction to Github. Start up the app and complete the tutorial!

