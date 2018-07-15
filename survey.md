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

An attacker can inject malicious and designated data into training data during the training procedure of machine learning based intrusion detection systems, inducing a significant decrease of the performance of these systems.

**Clustering**  is a kind of unsupervised learning method, which can discover implicit patterns of data distributions. Most of attacks against clustering algorithms reduce their accuracy by injecting malicious data. **Obfuscation attack** is another type of threat that compromises clustering algorithms. It's goal against the targeted cluster is to generate a blend of adversarial samples and normal ones from other clusters without altering the clustering results of these normal samples, resulting in a set of stealthy adversarial samples.

**Deep Learning** : as a typical arch of dl, DNN is demonstrated to be effective in various pattern recognition tasks. DNN is also vulnerable to various adversarial attacks. In image classification, DNN only extracts a small set of features, resulting in poor performance on the images with minor differences. Potential adversaries can exploit such vulnerability to evade anomaly detection. In 2013, Szegedy *et al.* proposed to use the generated image with slight turbulence to deceive the pre-trained DNN.

#### 1. Training Phase

**Poisoning attack** : a type of causative attack, disrupts availability and integrity of models via injecting adversaries samples to the training data. Such adversaries samples are designated to have similar features with malicious samples but incorrect labels, including change of training data distribution. It's not easy to alter the data itself. So the adversaries exploit the vulnerability that stems from **retraining** existing machine learning models. Machine learning based systems are generally required to **periodically update** their decision models to adapt to varying application contexts. So the adversaries can utilize the periodic update characteristic. 

For unsupervised learning, e.g., clustering analysis, it's not applicable for changing the sample labels. However, some researches introduced how to launch poisoning attack against single-linkage and complete-linkage hierarchical clustering. For example, a heuristic strategy can be adopted to measure the impact induced by adversarial samples on clustering accuracy via introducing a *bridge* concept. Then the optimal adversaries samples were selected to effectively reduce the clustering accuracy. Three commonly used graph clustering or embedding techniques:

* Community discovery
* Singular value decomposition (SVD)
* Node2vec

There are two novel attacks, named **targeted noise injection** and **small community**. These attacks can effectively evade graph clustering approaches with limit adversaries knowledge and low cost. Two defense strategies: **Training Classifier with Noise** (similar to adversaries training) and **Improving hyper-parameter selection** , but the defense effect is not significant.

##### 1) Poisoning without modifying features or labels

Adversaries samples selecting methods:

* poisoning models: selected according to the degree of performance reduction in terms of the classification accuracy of learning models over validating data sets. (Feasible on decision tree, nearest neighbor classifier, multilayer perception, and SVM)
* **gradient ascent strategy**: selected by calculating the gradient of objective functions that measure the effectiveness of adversaries samples. (Feasible on SVM, LASSO, PDF malware detection systems)
* **GAN**: generative model is trained to generate candidate adversaries samples. Then, the discriminative model is used to select the optimal samples with a specific loss function.

Comparative results between GAN and direct gradient methods on MNIST and CIFAR-10 data sets validated that GAN was able to rapidly generate high-quality adversaries samples with a large loss value.

##### 2) Poisoning with modifying features or lables

More powerful adversary model has the capability of modifying extracted features or the labels of some training data. 

> Transferring the problem of selecting target labels to an optimization one

* In **label contamination attack**(LCA), an attacker can significantly reduce the performance of SVM by **flipping the labels of some training data**.
* Xiao. *et al.* Extended the model to attack against some black-box linear learning such as SVM and logistic regression.

#### 2. Testing or Inferring Phase

