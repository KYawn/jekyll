---
title: Survey on Security and Privacy of Machine Learning
permalink: /survey
---
## Survey on Security and Privacy of Machine Learning
### Abstract
> ML was used in image processing, natural language processing, pattern recognition, cybersecurity and other fields.

And Scenarios: facial recognition, malware detection, automatic driving, and intrusion detection.
But these algorithms and corresponding training data are vulnerable.

> Academia and industry have found out many security threats against a variety of learning algorithms, including naive Bayes, logistic regression, decision tree, support vector machine (SVM), principle component analysis, clustering, and prevailing deep neural networks.

Survey from two aspects: the training phase and the testing/inferring phase.

defensive techniques, four groups:

* security assessment mechanisms
* countermeasures in the training phase
* countermeasures in the testing or inferring phase
* data security, and privacy

ﬁve notable trends on security threats and defensive techniques of machine learning

1. New security threats towards machine learning are constantly emerging.
2. Security assessment on machine learning based decision systems in adversarial environments becomes a prevailing research area.
3. Data privacy plays an important role in protecting the security of machine learning.
4. Secure deep learning is a new growth point in the ﬁeld of machine learning security.
5. Jointly optimizing security, generalization performance and overhead is required to design secure learning algorithms.

### 1. Introduction

### 2. Basic Concept, Model, Taxonomy
#### 1. Basic of Machine Learning
According to differences of feedbacks, machine learning related works can be categorized into three groups:
* supervised learning: decision tree, support vector machine (SVM), neural networks, etc.
* unsupervised learning: Clustering and auto-encoder.
* reinforcement learning: optimizes behavior strategies via try-and-error.

#### 2. Adversarial Model

Biggio *et al.* argued that well-deﬁned adversarial model should be constructed with four dimensions, goal, knowledge, capability and attacking strategy. 

1. Goal: can be clearly described using both the expected impacts and the attack speciﬁcity of security threats.
2. Knowlodge: divided into two groups named **constrained knowledge** and **complete knowledge** by examining whether or not an attacker know training data, features, learning algorithms, decision functions, classiﬁer parameters and feedback information.
3. Capability: qualitative interpreted from three aspects: (1) Is the impact of security threats causative or exploratory? (2) What is the percentage of training and testing data that are controlled by the attacker? (3) What is the extent of features and parameters that are known by the attacker?
4. Attacking strategy: speciﬁc behaviors of manipulating training and testing data to effectively achieve his/her goals.

#### 3. Security threats taxonomy

##### 1. Influence on classifiers

* Causative Attack: adversaries change the distri of training data, which induces param chagnes of learning models when retraining.
* Exploratory attack: does not modify already trained classifiers, but aims to cause misclassification with respect to adversarial samples or to uncover sensitive info.

##### 2. Security violation

* Integrity attack: try to increase the **false negatives** of existing classifiers when classifying harmful samples.
* Availability attack: on the contrary, increase the **false positives** of classifiers with respect to benign samples.
* Privacy violation attack: able to obtain sensitive and confidential info.

##### 3. Attack specificity 

* Targeted attack: highly directed to reduce the performance of classifiers on one particular sample or one specific group of samples.
* Indiscriminate attack: causes the classifiers to fail in an indiscriminate fashion on a broad range of samples.

![taxonomy of security threats](https://lib.azfs.com.cn/2018-07-15-084523.png)

### 3. Security Threats towards machine learning

