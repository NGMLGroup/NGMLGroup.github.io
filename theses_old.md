---
layout: base
title: Theses
---

We are looking for highly motivated students willing to work on graphs and machine learning.
The background and the skills sought for these projects include: machine learning, network science, data mining, Python programming, deep learning.
This page lists some of the available master projects and student summer jobs. The projects are high-impact and generally lead to scientific publications or open source software. 


## Polar weather prediction with Graph neural networks {#polar-weather}

- [x] Master project
- [x] Summer job 2024

**Goal:** Design Graph Neural Nets to learn weather forecast in the polar region (GNNs and deep learning).

**Description:**
This project is a part of a larger research project. The master project or summer job will be adapted and focused on a particular (smaller) aspect. 
The main goal is to find new, efficient, Graph neural networks for weather prediction. For the student project, it consists in testing Graph NN models (and creating new ones) on a small dataset and on wind prediction. The summer job aim at analysing weather data from an array of sensors over Norway (see references) using graph theory, network science and machine learning. Potential impact: better understanding of the polar climate, better prediction of polar storms and polar lows. could be highly valuable to find spots for offshore windmills, for an optimal production of energy.

**Data:** produced by weather models (we have some experts working on these models) / network of sensors (temperature, wind... + satellite images). Data on an irregular grid (Satellite data, sensors on buoys or inland).

**References:** 
Weather prediction with deep learning: [https://sites.google.com/view/meshgraphnets](https://sites.google.com/view/meshgraphnets)  and [Graphcast](https://arxiv.org/pdf/2212.12794.pdf), [Microsoft model](https://www.microsoft.com/en-us/research/group/autonomous-systems-group-robotics/articles/introducing-climax-the-first-foundation-model-for-weather-and-climate/)
Some open data for Norway: [https://seklima.met.no/observations/](https://seklima.met.no/observations/)

**Contact:** Benjamin Ricaud

## Graph of text data, using large language models

- [x] Master project

**Goal:** The main idea is to build graphs of documents, graphs of topics contained in them, connecting abstract concepts and ideas inside the documents. We want to detect important news, automatically classify documents and get detailed information about a topic. The approach is in the same vein as Retrieval Augmented Generation [RAG](https://arxiv.org/abs/2005.11401) but we want to leverage the graph structure for a better retrieval of information.

**Description:**
Graphs will be made using the inner representation of a large laguage model. we will start by feeding a deep encoder model such as ada002 or BERT with documents or sections of documents and build a vector database from the embeddings of the model. We will then make a graph of nearest neighbors. We will first explore the structure of the graph, see if there are clusters, central concepts or documents. We will then use the graph to refine the feedback given for a given prompt to the LLM.
In this project we will make use of simple and advanced tools from network analysis as well as machine learning and generative AI (LLMs).

**Data:** Open datasets of documents, databases form the Norwegian public services, Wikipedia data

**Contact:** Benjamin Ricaud

## Graph neural networks and Physics

- [x] Master project

**Goal:** Get inspiration from Physics to design new neural network achitectures. The Laplacian is an operator that is present in Partial Differential Equations and also in graphs. Through this connection we can build new graph neural network achitectures inspired by Physics and inheriting some properties of partial differential equations. The connection between Physics and Machine Learning is a growing and promising direction of research. Some recent studies relates differential equations and graphs [Graph neural diffusion](https://proceedings.mlr.press/v139/chamberlain21a.html) and [neural diffusion and beyond](https://arxiv.org/abs/2310.10121). Moreover, interesting results were found by Tobias Antonsen during his Master project at UiT ([Propagating information like waves in GNNs](https://munin.uit.no/handle/10037/34272)). We want to continue in this direction, exploring other physics equations, possibly related to fuild mechanics and test our models on different datasets, with noisy data.

This is a project focused on the theoretical aspects, involving some maths with graph theory and machine learning and some Python programming. 

**Contact:** Benjamin Ricaud

## Clustering and graph coarsening with Graph Neural Networks

- [x] Master project

**Goal:** Explore and improve GNN-based approaches to cluster the vertices of a graph. The result of clustering can be used to generate a smaller coarsened graph.

**Description:**
This is a more theoretical project, which focuses on developing and implementing general methodologies for clustering the vertices of an *attributed graph*, i.e., a graph with information associated with its vertices and edges. Based on the clustering results, a smaller graph can be built to summarize as good as possible the information of the original graph. Such an approach can be seen as an equivalent of standard pooling in Convolutional Neural Networks, where the spatial information is gradually coarsened to gradually distill more high-level information from an image.
As convolutional layers are interleaved with pooling layers in CNNs, message-passing layers are iterleaved with graph pooling operations in GNNs.

![Mincut pool](figs\projects\mincutpool.png "mincutpool"){: .align-center style="width: 50%;"}

The project will focus on extending general approaches for clustering into a Graph Neural Network framework. The methodologies will be tested on two tasks:

- *clustering* the vertices of large graphs; 
- implementing graph pooling in GNNs for graph *classification*. 

**References:** [Pooling in Graph Neural Networks](https://github.com/danielegrattarola/SRC), [Spectral clustering with Graph Neural Networks](https://github.com/FilippoMB/Spectral-Clustering-with-Graph-Neural-Networks-for-Graph-Pooling)

**Contact:** Filippo M. Bianchi

## Power flow optimization with Graph Neural Networks

- [x] Master project

**Goal:** Optimize the energy production and the energy flows on a power grid using a GNN.

**Description:** Power flows are usually optimized with numerical solver that are slow and are not robust to perturbations in the grid topology. GNNs can be used to determine how much power each generator should inject on the grid, based on the grid topology, the physical properties of its components, and the load demand.

The project will aim at improving and extending with new functionalities a recently-proposed [GNN-based power solver](https://github.com/JonasBergHansen/Power-Flow-Balancing-with-Decentralized-Graph-Neural-Networks) by:

- Considering the Optimal Power Flow rather than just Power Flow (e.g., minimize additional objectives such as CO2 emission when computing the solution to the power flow);
- Include time, i.e., make a prediction of the production over time given historical consumption on the electrical nodes;
- Make the prediction probabilistic, i.e., generate confidence intervals for the power production of each electrical node;
- Smart generation of training data with a power grid simulator.

**Contact:** Filippo M. Bianchi

## Graph representation of time-series

- [x] Master project

**Goal:** Analyze the properties of a time series and its underlying dynamical system with graph-theoretical tools.

**Description:** This is a theoretical project that aims at representing a real-valued time series with a graph, using tools such as the [horizontal visibility graph](https://arxiv.org/abs/1002.4526).
By studying the properties of such a graph it is possible to gain new insights about the properties of the dynamical system, from where the original time series comes from.

**Contact:** Filippo M. Bianchi
