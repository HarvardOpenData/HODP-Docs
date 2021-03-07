---
id: hypothesis-testing
title: Hypothesis Testing
sidebar_label: Hypothesis Testing
---

By: Asher Noel & Leo Saenger

:::tip
If you have no statistics background, these links are a good place to start: [linear regression](https://towardsdatascience.com/laymans-introduction-to-linear-regression-8b334a3dab09) and [hypothesis testing](https://towardsdatascience.com/hypothesis-testing-explained-as-simply-as-possible-6e0a256293cf	)
:::


Hypothesis testing is a way to test and compare the validity of hypotheses. It has enjoyed the spotlight of much research, but it is not without its flaws: it is a method, not magic. 

## Definitions 

Generally, say that we partition a parameter space $\Theta$ into two disjoint sets $\Theta_0$ and $\Theta_1$ and that we wish to test two hypothesis against each other: specifically, that the parameter of interest is either in one disjoint set or the other. Then we have two hypotheses: 

$H_0 : \theta \in \Theta_0$ and $H_1 : \theta \in \Theta_1$. 

We call $H_0$ the null hypothesis and $H_1$ the alternate hypothesis. 

To test these hypotheses, we need data. Let $X$ be a random variable representing our data. We test a hypothesis by finding a subset of outcomes $R$ in the range of $X$ called the rejection region. If $X \in R$, then we reject the null hypothesis: otherwise, we do not reject the null hypothesis. 

:::note
We never accept the null or alternative hypothesis, we only ever reject $H_0$ or retain $H_0$ 
:::
We define the rejection region $R$ as the region where a test statistic $T$ is above a $critical value$: 

$R = {x : T(x) > c }$. 

The problem in hypothesis testing is of finding an appropriate test statistic $T$ and critical value $c$. 

:::caution
Often, estimation and confidence intervals are better tools than hypothesis testing. Only use hypothesis testing when you want to test a well-defined hypothesis. 
:::

:::note
Fields are moving away from hypothesis testing. One example is the Machine Learning research community. There, models are often compared on the basis of performance on specific datasets. Measures of uncertainty and statistical rigor are as important as ever, but hypothesis testing is not. 
:::

## Errors 

There are two common errors: false positives, also referred to as type I errors, where we reject $H_0$ when $H_0$ is true, and false negatives, or type II errors, when we retain $H_0$ when $H_1$ is true. 


## Power 

The power function of a test with rejection region $R$ is $\beta(\theta) = P(X \in R)$. 

The size of a test is $\alpha = \sup \beta(\theta)$. The supremum of a set is the least upper bound. In other words, the size of a test is the largest probability of rejecting $H_0$ when $H_0$ is true. 

A test has level $\alpha$ if its size is less than or equal to $\alpha$. 

:::note
A level $\alpha$ test rejects $H_0 : \theta = \theta_0$ if and only if the $1-\alpha$ confidence interval does not contain $\theta_0$. 

This is important for two reasons. Consider an example where we have a confidence interval and two values outside the interval, one close and one far. In the first case, the estimated value of $\theta$ is close to $\theta_0$, so the finding is probably of little value. In the second case, the estimated value is far, so the finding has scientific value. This shows that statistical significance does not imply scientific importance, and that confidence intervals can be more informative than tests. 
:::


## P-values 

Often, researchers report more than whether or not they reject or retain the null. Usually, there is a the smallest $\alpha$ at which the test rejects the null: we call this the p-value. 


## Warnings! 

:::caution
If a p-value is large, this has two interpretations: either $H_0$ is true, or $H_0$ is false but the test has low power. A large p-value is not strong evidence in favor of $H_0$.  
:::

:::caution
The p-value is not the probability that the null hypothesis is true! The p-value is the probability under the null of observing a value of the test statistic the same as or more extreme than what was actually observed. 
:::

:::caution
Hypothesis testing is useful when there is evidence to reject $H_0$. If $H_0$ is the status quo, then this makes sense. We cannot use it to prove that $H_0$ is true. Failure to reject $H_0$ can occur because $H_0$ is true or because the test has low power.
:::

:::caution
P-values are also susceptible to p-hacking. This refers to making assumptions about data or tests that influence the p-value to be more favorable, usually to increase the chance of publication. 
:::

:::caution
Different fields have different standards of significance. Physicists oftem aim for much stronger findings than $\alpha = 0.05$, whereas psychologists have accrued a poor reputation for sketchy science. 
:::

:::caution
As a final point about the problems with p-values, they are susceptible to decisions you make about when to collect data, even if that does not change the data you actually observe.

For example, if you toss a coin $n=12$ times and observe  $s = 9$ heads, then if the null hypothesis is that the coin is fair, the one sided test statistic where $t(s) = s$ leads to a p-value of 0.073. This is larger than the magical and arbitrary 5% threshold. 

If instead the modeler kept tossing the coin until they observed $n - s = 3$ tails, then the data-generating distribution is negative binomial. Under this model and the same null hypothesis, we get that the one sided p-value is 0.0327. All of a sudden, without changing the data, there is “significant” evidence of bias in the coin! Long live Bayes :). 
:::


## References

For further reading, check out Harvard’s Statistics 111 course materials, “All of Statistics” by Larry Wasserman, and “Machine Learning: A Probabilistic Perspective” by Kevin Murphy. 
