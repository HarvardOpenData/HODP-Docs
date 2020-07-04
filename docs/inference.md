---
id: inference
title: Inference
sidebar_label: Inference
---

By: Asher Noel & Leo Saenger

# Introduction 

Beyond getting data, one usually needs to interpret it, to some degree. For this, we have statistics: a discipline centered around exploring data and a phenomenon of interest, describing causal conclusions about the effect of changing one variable on another, and predicting one variable using another. The purpose of the Statistical Analyses HODP docs is to give bootcampers enough of a working understanding of statistics to intelligently work with data, without assuming any familiarity with statistics at Harvard. As such, there are three Statistical Analyses docs:

The first doc is Inference, which aims to give the basic tools and understanding necessary to explore data. More broadly, inference is the branch of statistics that extracts information from already generated data. 

The second doc  is Hypothesis Testing. Hypothesis testing has been used to validate the work of many experiments, but it is also vulnerable to manipulation and misinterpretation. Broadly, hypothesis testing is the process of testing one hypothesis by comparing it to a null hypothesis. 

The third doc is Regression. Regression is only one form of prediction, but fairly common and can be simple to implement. More generally, regression is the task where a computer program is asked to predict a numerical value given some input, outputting a function $f : \mathcal{R}^n \to \mathcal{R}$. 

# Estimation 

When conducting data analysis, one is often interested in a phenomenon of interest. They might want to know the average amount of water that Harvard students drink each day, the maximal number of trips to Mount Auburn that each Harvard first-year took, or the probability that they have covid given a variety of factors, for example. 

In each of these cases, there is the true “god-given” value: this is the estimand $\theta$. Before sampling data, the exact crystallization of the data is a random variable $X$, and all of the $n$ data can be represented by $\vec{X} \in \mathcal{R}^n$. One does not know if the first person they survey will have drank 14 or 16 oz of water, or something else entirely. Once the value does crystalize, it is often notationally referred to as $y$. An estimator \hat{\theta} is the output of a function $g(\vec{X})$ that attempts to estimate the estimand $\theta$. Because an estimator is a function of unobserved data, it is also a random variable. After observing the data, the estimate is the output of the function $g(\vec{y})$. 

```sh
import numpy as np
from numpy import random
import math

# Define parameters
estimand = p = 0.7 # The true god-given value that generates the data
sample_size = ss = 100 # sample size 

# Generate data
x = random.binomial(n=1, p=estimand, size=ss)
print(x) 

# Define estimator
estimator = x.sum()/ss # The mean of the data 

# Infer parameters 
estimate = p_hat = x.sum()/ss # Data has crystallized, so this is an estimate
standard_error = math.sqrt(p_hat*(1-p_hat)/ss) # Variance of binomial mean is p(1-p)/n
print("Estimate: " + str(estimate))
print("Standard Error " + str(round(standard_error, 3)))
```
```sh
Estimate: 0.69
Standard Error 0.046
```

If the phenomenon of interest is the daily average water intake of Harvard students, then the “true” value, the estimand $\theta$, may be some irrational number close to 64.43 oz, which could only be known if an analyst had perfect information and measurements about the exact water intake of every student. An estimator of $\theta$ may be the mean. In addition to the point estimate, the estimator has an associated standard error $s = \sqrt{Variance(\hat{\theta})}$, where the “e” in error is for “estimator.” In practice, standard error can be estimated with the standard deviation of the sample, which many packages can calculate.  

Similarly, an estimator is unbiased if its expectation is the estimand. Formally, we define bias to be $\textrm{bias}(\hat{\theta}) = \mathbb{E}_{\theta}(\hat{\theta) - \theta. The mean squared error (MSE) is equivalent to the sum of the squared bias and standard errors, the proof of which is beyond the scope of the docs. When designing experiments, statisticians often have to tradeoff bias and variance to minimize mean squared error. 

```sh
# Bias of sample mean
bias = estimate - estimand 
print("Bias 1: " + str(round(bias, 3)))

# MSE of sample mean 
mse = bias**2 + standard_error**2 
print("MSE 1: " + str(round(mse, 3)))
```
```sh
Bias 1: -0.02
MSE 1: 0.003
```

Ideally, this estimate would converge to the estimand for asymptotically large values of $n$. We call this consistency: an estimator $\hat{\theta}}$ is consistent if $\hat{\theta} \overset{p}{\longrightarrow}} {\theta}.$. An estimator can be consistent but biased (e.g., estimating the mean with $\sum{n} x_n + \frac{1}{n}$) and inconsistent but unbiased (e.g., estimating the mean with $g(\vec{X}) = x_1 \forall n \geq 2$). 

```sh
# Inconsistent but Unbiased

# Estimator: The first data point
estimator2 = p_hat2 = x[0] 
standard_error2 = math.sqrt(p_hat2*(1-p_hat2)*sample_size)

# Evaluations: 
# E(x_1) = mean(x) = p, so this estimator is unbiased (good)
# But x_1 -/-> p as n --> infinity, so this estimator is NOT consistent (bad) 
bias2 = p_hat2 - estimand
mse2 = bias2**2 + standard_error2**2

print("Estimate 2: " + str(estimate2))
print("Standard Error 2: " + str(standard_error2))
print("Bias 2: " + str(round(bias2, 3)))
print("MSE 2: " + str(round(mse2, 3)))


# Consistent but Biased

# Estimator: The mean + 1/n
estimator3 = p_hat3 = x.sum()/ss + 1/ss
standard_error3 = math.sqrt(p_hat3*(1-p_hat3)/sample_size)

# Evaluations: 
# E(mean(x) + 1/n) = p + 1/n =/= p, so this estimator is biased (bad)
# But p + 1/n --> p as n --> infinity, so this estimator IS consistent (good)
bias3 = p_hat3 - estimand
mse3 = bias3**2 + standard_error3**2

print("Estimate 3: " + str(p_hat3))
print("Standard Error 3: " + str(round(standard_error3, 3)))
print("Bias 3: " + str(round(bias3, 3)))
print("MSE 3: " + str(round(mse3, 3)))
```
```sh
Estimate 2: 1
Standard Error 2: 0.0
Bias 2: 0.3
MSE 2: 0.09
Estimate 3: 0.69
Standard Error 3: 0.046
Bias 3: -0.01
MSE 3: 0.002
```


When doing work in HODP, it is important to be cognizant about as many potential sources of bias as possible whenever collecting or analyzing data and to choose, as best as possible, consistent estimators of a phenomenon of interest. 

# Confidence Intervals 

Point estimates and standard errors are great fits for some phenomenon of interest, but sometimes it is better to have a range of values that describe possible values a fixed yet unknown estimand $\theta$ could take. In the frequentist paradigm, where probabilities describe frequencies, these ranges are called confidence intervals: formally, a confidence interval of an estimand $\theta$ is an interval $C_n = (a,b)$ where the bounds are functions of the data such that $$\mathbb{P}_{\theta}(\theta \in C_n) \geq 1 - \alpha \textrm{for all} \theta \in \Theta$$ where $\Theta is the parameter space and $\alpha$ is the confidence level. 

```sh
# Confidence Interval 

import scipy.stats

alpha = 0.05 # arbitrarily define alpha level
confidence_level = 1 - alpha

normal_025_quantile = a = scipy.stats.norm(0, 1).ppf(alpha/2)
normal_975_quantile = b = scipy.stats.norm(0, 1).ppf(1 - alpha/2)
print("Normal Quantiles: " + str(a) +  ", " + str (b))
CI = np.array([estimate + a*standard_error, estimate + b*standard_error])

print("Mean: " + str(estimate))
print("St. Error: " + str(round(standard_error, 3))) 
print("Confidence Internal: " + np.array_str(CI))
```
```sh
Normal Quantiles: -1.96, 1.96
Mean: 0.68
St. Error: 0.047
Confidence Internal: [0.58857235 0.77142765]
```


Because the interval is a function of the data and therefore random, a correct interpretation of a 95% confidence level (with the arbitrary confidence level of 0.05 chosen for its popularity) is that the random interval would contain the true estimand in 95% of its crystallizations after observing the data. 

```sh
# How often does this random interval cover the true value of 0.7?

def confidence_interval_95(estimand, sample_size, trials): 
    # estimand: the data-generating true value (integer)
    # sample_size: number of samples per trial (integer)
    # trials: number of experiments and confidence intervals (integer)
  
    x = np.array([random.binomial(n=1, p=estimand, size=sample_size) for i in range(trials)])
    p_hat = x.sum(axis=1)/sample_size # The mean of the data 
    st_error = np.sqrt(p_hat*(1-p_hat)/sample_size) # Variance of binomial mean is p(1-p)/n

    CI_lower = p_hat + a*st_error
    CI_upper = p_hat + b*st_error
    
    truths = (CI_lower < estimand) & (CI_upper > estimand) # Boolean array, true if in range
    
    # Frequency that confidence interval covers the estimand 
    coverage = np.sum(truths)/trials
    return coverage 

results = confidence_interval_95(0.7, 100, 10000)
print(str(round(results, 4)))
```
```sh
0.9524
```


Many times in practice, people will define a 95% confidence interval of the mean to be the range of values within two standard errors of the mean. This biggest assumption that this makes is that the parameter of interest is normally distributed. Fortunately, there are many cases in the real world where the normal distribution shows up. However, there are also many cases when it does not, so it good to know when it might appear. Generally, a reasonably large (in practice, this means loosely $n \geq 30$) sum of random variables sampled from an arbitrary random distribution is approximately normally distributed, per the central limit theorem (proof omitted), implying that the mean, or the sum scaled by a constant factor, is also approximately normally distributed. 

```sh
# Central Limit Theorem 
import matplotlib.pyplot as plt


def plot_means(estimand, sample_size, trials):
    # estimand: the data-generating true value (integer)
    # trials: number of the biggest sample size (integer)

    x = np.array([random.binomial(n=1, p=estimand, size=sample_size) for i in range(trials)])
    p_hat = x.sum(axis=1)/sample_size # The mean of the data 
    

    # An "interface" to matplotlib.axes.Axes.hist() method
    n, bins, patches = plt.hist(x=p_hat, bins='auto', color='#0504aa',
                            alpha=0.7, rwidth=0.85)
    plt.grid(axis='y', alpha=0.75)
    plt.xlabel('Value')
    plt.ylabel('Frequency')
    plt.title('Distribution of Sample Meansm, n= %i' %trials)
    maxfreq = n.max()
    plt.show()
  
plot_means(0.7, 30, 50)
plot_means(0.7, 30, 500)
plot_means(0.7, 30, 5000)
plot_means(0.7, 30, 50000)
```


If ever unsure about the interpretation of statistics or confidence intervals, or whether the technique you are applying works well with your data, feel free to reach out to anyone in HODP in the slack. We recognize that people have varying degrees of expertise when it comes to statistics and drawing inferences from data, and we would love to help!  

#The Benefits of Large Samples

Sample size is one of the most important considerations in many experiments in statistics. More data is great for a lot of reasons: the Strong Law of Large Numbers states that sample means probabilistically converge to their true means, the central limit theorem starts to take stronger effect as asymptotics kick in, and, anytime either the variance or bias of an estimator is indirectly related to sample size, the mean squared error of an estimator decreases. 

Small sample sizes do not mean that an experiment is worthless; it just means that the statistician must be ever more careful when interpreting results. With this in mind, and the language from above, any statistician is ready to dive into analyzing their data. To help with claims about significance and causality, we have created the next docs: Hypothesis Testing. 
