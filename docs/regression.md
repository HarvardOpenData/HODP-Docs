---
id: regression
title: Regression
sidebar_label: Regression
---

By: Asher Noel & Leo Saenger

## Regression

Regression is defined as the best linear predictor of $Y_i$ given $X_i$, specifically, regression gives us $\alpha$ and $\beta$ that minimize $a$ and $b$ in the mean squared error $E(Y_i - a - b X_i)^2$. Regression is perhaps a blunt instrument, but a very useful one. It has many attractive properties and does not require many strong assumptions about the distribution of our data, and gives answers that are easy to interpret.

We can easily derive $\beta$ and $\alpha$ simply by taking the first order conditions of the Mean Squared Error (MSE) expression above, and solving them. This shows us (with a little algebra) that 

$$\beta = \frac{E[(Y_i-E(Y_i))X]}{E[(X_i-E(X_i))X_i]} = \frac{C(X_i,Y_i)}{V(X_i)}$$
$$\alpha = E[Y_i] - E[X_i]\beta$$

Phew! We will not go too in depth through these derivations, although there are many good ones out there.

:::note

**Asymptotic Inference**

In practice, of course, we do not have data on the population, we make inferences through samples. This is much of a traditional statistics or econometrics textbook, and not worth rehashing here. The intuition you have about the distribution of test statistics and sampling applies directly to the OLS case — whatever a regression coefficient means, it has a sampling distribution that is easy to describe and understand. We are indeed playing it a bit fast and loose with population and sample concepts here, and are apologetic for this.

:::

### Making Regression Make Sense 

This section is borrowed heavily from the textbook “Mostly Harmless Econometrics”, which I highly recommend. Perhaps the most intuitive way to understand why we like regression is the Linear Approximation Theorem, which shows us that $\alpha$ and $\beta$ are the values of $a$ and $b$ that minimize 

$$MSE_{E[Y|X]}(a,b) = E(E[Y_i|X_i]-a-bX_i)^2$$

The conditional expectation function — $E[Y_i|X_i]$ — is also fitted by the regression slope and intercept. Why do we care about the CEF? It describes the essential features of the relationship we are attempting to investigate – it is **by construction** the best predictor of the dependent variable. (Recall also that in fact $E[E[Y_i|X_i]] = E[Y_i]$ by the Law of Iterated Expectations, which bolsters this). 

In other words, even if the CEF is bumpy and nonlinear, the regression line will always thread it. Regression describes the *essential features* of statistical relationships, even if it doesn’t pin them down directly. We’re interested in the *distribution* of $Y_i$, not individual data points — so we shouldn’t lose (too much) sleep over potential CEF nonlinearities, or binary outcome variables.

:::important

Regression is as good as the CEF we are trying to approximate and the variables we choose. We might find a relationship that could end up entirely being the result of unobservables. You should *always* be suspicious of results that seem “too good” or “too significant” – the default assumption, as always, is that no such relationship exists (and you have made a mistake). 

:::

So, we’ve seen that regression “inherits” the CEF. That is, we have a casual regression when the CEF is causal. But what does it mean for the CEF to be causal? When is that true?

### Potential Outcomes and Causation 

#### Framework

#### Selection Bias and Random Assignment

### Understanding Regression Output 

#### $R^2$

### Roadblocks

#### Omitted Variables Bias 

#### Bad Control 

#### Heteroskedasticity, Serial Correlation

### Multivariate Regression

#### Multivariate Regression as an Automatic Matchmaker

### Non-linear methods and Extensions

#### Instrumental Variables

#### Differences in Differences

#### Regression Discontinuities

#### Non-linear methods

## Images

—

## Admonitions

:::tip

This is a tip

:::


:::caution

This is a caution

:::

:::warning

This is a warning

:::
