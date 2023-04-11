---
title: Student projects
---

We are looking for highly motivated students willing to work on graphs and machine learning.
The background and the skills sought for these projects include: machine learning, network science, data mining, Python programming, deep learning.
This page lists some of the available master projects and student summer jobs. The projects are high-impact and generally lead to scientific publications or open source software. 


## Polar weather prediction with Graph neural networks {#polar-weather}

- [x] Master project
- [x] Summer job 2023

* Goal: Design Graph Neural Nets to learn weather forecast in the polar region (GNNs and deep learning).

This project is a part of a larger research project. The master project or summer job will be adapted and focused on a particular (smaller) aspect. 
The main goal is to find new, efficient, Graph neural networks for weather prediction. For the student project, it consists in testing Graph NN models (and creating new ones) on a small dataset and on wind prediction. The summer job aim at analysing weather data from an array of sensors over Norway (see references) using graph theory, network science and machine learning. Potential impact: better understanding of the polar climate, better prediction of polar storms and polar lows. could be highly valuable to find spots for offshore windmills, for an optimal production of energy.

* Data: produced by weather models (we have some experts working on these models) / network of sensors (temperature, wind... + satellite images). Data on an irregular grid (Satellite data, sensors on buoys or inland).
* References: 
Weather prediction with deep learning: [https://sites.google.com/view/meshgraphnets](https://sites.google.com/view/meshgraphnets)  and [Graphcast](https://arxiv.org/pdf/2212.12794.pdf), [Microsoft model](https://www.microsoft.com/en-us/research/group/autonomous-systems-group-robotics/articles/introducing-climax-the-first-foundation-model-for-weather-and-climate/)
Some open data for Norway: [https://seklima.met.no/observations/](https://seklima.met.no/observations/)
* Contact: Benjamin Ricaud

## Dynamic graph and text data, understanding online activity

- [x] Master project

* Goal: There are several different goals under this topic. The main idea is to build graphs between users (if social network), between posts, articles (if database of news articles) and combine them to the information from the texts. We want to detect important news/fakenews and track their spreading in an automatic way. 

The analysis of the text of a single post is often not enough to understand fully its implication and meaning. We need the context. Building a network of documents around the initial post, by using the documents citing each other and/or the ones having similar keyworks, we can have access to this context. However, understanding the key relationships between a text and its context is not straightforward. In this project we will make use of advanced tools from network analysis and machine learning to automatically analyse articles and their context. Information from text will be extracted using GPT (chatGPt or other open source GPT models). Impact: help journalists find news and sources, understand the spreading of fakenews and misinformation.

* Data: Reddit (via API), open databases form the Norwegian public services, Wikipedia data
* Contact: Benjamin Ricaud

## Graph neural networks, geometry and oversmoothing

- [x] Master project

* Goal: Design methods for identifying problematic areas in graphs (bottleneck, hubs) and propose solutions to reduce oversmoothing / oversquashing on graphs.

This is a project focused on the theoretical aspects, involving some maths with graph theory and spectral graph theory and some Python programming.
The oversmoothing / oversquashing phenomenon in graphs neural networks is limiting the power of these models. See [here](https://towardsdatascience.com/over-smoothing-issue-in-graph-neural-network-bddc8fbc2472), and [here](https://towardsdatascience.com/over-squashing-bottlenecks-and-graph-ricci-curvature-c238b7169e16) for a simple explanation. Using the properties of the graph Laplacian can help to identify problems in a graph and propose solutions. We will explore the graph structure as well as the data distribution over it. Potential impact: breaking the limitations of graph machine learning.

* Contact: Benjamin Ricaud

## Clustering and graph coarsening with Graph Neural Networks

- [x] Master project

* Goal: Explore and improve GNN-based approaches to cluster the vertices of a graph. The result of clustering can be used to generate a smaller coarsened graph.

This is a more theoretical project, which focuses on general methodologies for clustering the vertices of an *attributed graph*, i.e., a graph with information associated with its vertices and edges. Based on the clustering results, a smaller graph can be built to summarize as good as possible the information of the original graph. Such an approach can be seen as an equivalent of standard pooling in Convolutional Neural Networks, where the spatial information is gradually coarsened to gradually distill more high-level information from an image.

![Mincut pool](https://github.com/FilippoMB/Spectral-Clustering-with-Graph-Neural-Networks-for-Graph-Pooling/blob/master/figs/mincutpool.png "Mincut pool")

The project will focus on extending general approaches for clustering into a Graph Neural Network framework. The methodologies will be tested on two tasks: i) *clustering* the vertices of large graphs and ii) implementing graph pooling in GNNs for graph *classification*. 

* References: [Pooling in Graph Neural Networks](https://github.com/danielegrattarola/SRC), [Spectral clustering with Graph Neural Networks](https://github.com/FilippoMB/Spectral-Clustering-with-Graph-Neural-Networks-for-Graph-Pooling)

* Contact: Filippo M. Bianchi
