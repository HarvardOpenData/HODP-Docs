---
id: installation
title: Installation
sidebar_label: Installation
---

By: Ashley Wong

This doc contains instructions for installing most of the tools, packages, and software you will need for the HODP bootcamp (and beyond!)

## Installing the Essentials

### Deepnote
[Deepnote](https://deepnote.com/) is a site that allows you to run jupyter notebooks in the cloud. The nifty thing about Deepnote is that it allows for real-time collaboration (think Google docs style) and it saves you the hassle of having to download any packages or libraries! 

Deepnote is currently in beta. Here’s how to get access to an account:
- We'll send you all a link to a sample notebook.
- Press ```create account``` in the top right hand corner.
- Sign in with either Google or Github.
- Press the blue ```Duplicate``` button (in the title bar next to ```View only```) to create your own copy of the notebook.

To share your copy of the notebook, press the ```Share``` button in the top right hand corner. 

:::note

Don't forget to make sure that collaborators have at least edit access!

:::

### Github
Github is a site that you can use to store and share your code. All of our bootcamps (and their solutions) can be found on the [HODP github](https://github.com/HarvardOpenData). There are two simple ways to access the code in a repo:
1. Press the green ```Code``` button and download the whole repo as a zip file. Upload the files you want to Deepnote using the ```Upload``` button or run them locally (more on this later). 
2. Click on the ```Upload``` button in Deepnote, select ```Github``` and copy in the repo URL. If Deepnote notifies you that it must clone the repo, press ```Okay``` and then check the file tree on the left. Your repo should now be there!

To have access to more of Github’s functionality (like uploading code), you can use [Git](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) in the command-line or you can use [Github Desktop](https://desktop.github.com/). We’ll cover the latter later in the bootcamp. 


### R Studio Cloud
This one is simple! Go to [rstudio.cloud](https://rstudio.cloud/) and sign up for free! Use your college email if possible!

## Advanced Installation - Mac
:::warning
These instructions are for Mac users, Windows-specific instructions below!
:::

Below are detailed installation instructions for you to work through. At the end of each section there are **installation checks**. These are designed to help you test that your installation succeeded. Please make sure you pass the check for each section before continuing to the next! Many of these steps depend on previous ones having completed successfully.

Homebrew
[Homebrew](brew.sh) is a package manager for Mac that makes it extremely convenient to install and update packages! Although you can install things by downloading an installer (e.g install python from [python.org](python.org), using a package manager like Homebrew is considered best practice!

To install Homebrew, open Terminal. You can do this by:
1. Opening Finder, opening your Applications folder, and searching for Terminal.
2. Opening spotlight (cmd-space on most computers) and searching for Terminal.

Once Terminal is open, copy and paste the following code into your command-line ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"```. This will begin installation. Homebrew will ask for you to hit the ```return``` key to start installation, so keep an eye on your terminal!

Don’t worry if you see hundreds of lines flying past, or if you see nothing happening at all -- Homebrew is in the process of installing. That being said: if you see an error message, or if you’re unsure whether Homebrew is still running, feel free to check with a board member!

If you get a ```permission denied``` error while installing, try running ```sudo chown -R $(whoami) $(brew --prefix)/*``` before running ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"``` again. 

:::tip
This process can take a long time, maybe it’s time for a game of [codenames](https://www.horsepaste.com/)?

If you want to continue with installation while waiting for Homebrew, feel free to skip to installing Visual Studio Code or Github Desktop. All other steps depend on this one.
:::

**Installation check:** Once brew is done installing, run ```brew help``` in your command-line. If you get output, success! Otherwise, if you get a ```command not found``` error, something went wrong. 


