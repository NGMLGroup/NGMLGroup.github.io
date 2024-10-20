---
layout: base
title: "Clustering and graph coarsening with Graph Neural Networks"
keywords: "Graph pooling, Graph coarsening, Node clustering"
contact_person: "Filippo Maria Bianchi"
---

# Clustering and graph coarsening with Graph Neural Networks

## 📝 Description
The goal is to explore and improve GNN-based approaches to cluster the vertices of a graph. The result of clustering can be used to generate a smaller coarsened graph.

This is a more theoretical project, which focuses on developing and implementing general methodologies for clustering the vertices of an *attributed graph*, i.e., a graph with information associated with its vertices and edges. Based on the clustering results, a smaller graph can be built to summarize as good as possible the information of the original graph. Such an approach can be seen as an equivalent of standard pooling in Convolutional Neural Networks, where the spatial information is gradually coarsened to gradually distill more high-level information from an image.
As convolutional layers are interleaved with pooling layers in CNNs, message-passing layers are iterleaved with graph pooling operations in GNNs.

![Mincut pool](\figs\projects\mincutpool.png "mincutpool"){: .align-center style="width: 50%;"}

The project will focus on extending general approaches for clustering into a Graph Neural Network framework. The methodologies will be tested on two tasks:

- *clustering* the vertices of large graphs; 
- implementing graph pooling in GNNs for graph *classification*.

## 📚 References:
- [Pooling in Graph Neural Networks](https://github.com/danielegrattarola/SRC)
- [Spectral clustering with Graph Neural Networks](https://github.com/FilippoMB/Spectral-Clustering-with-Graph-Neural-Networks-for-Graph-Pooling)

## 📨 Contact:
Filippo Maria Bianchi <filippo.m.bianchi@uit.no>