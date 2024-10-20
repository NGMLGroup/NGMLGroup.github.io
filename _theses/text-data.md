---
layout: base
title: "Graph of text data, using large language models"
keywords: "LLMs, Retrieval Augmented Generation"
contact_person: "Benjamin Ricaud"
---


## 📝 Description
The main idea is to build graphs of documents, graphs of topics contained in them, connecting abstract concepts and ideas inside the documents. We want to detect important news, automatically classify documents and get detailed information about a topic. The approach is in the same vein as Retrieval Augmented Generation [RAG](https://arxiv.org/abs/2005.11401) but we want to leverage the graph structure for a better retrieval of information.

Graphs will be made using the inner representation of a large laguage model. we will start by feeding a deep encoder model such as ada002 or BERT with documents or sections of documents and build a vector database from the embeddings of the model. We will then make a graph of nearest neighbors. We will first explore the structure of the graph, see if there are clusters, central concepts or documents. We will then use the graph to refine the feedback given for a given prompt to the LLM.
In this project we will make use of simple and advanced tools from network analysis as well as machine learning and generative AI (LLMs).

**Data:** Open datasets of documents, databases form the Norwegian public services, Wikipedia data

## 📨 Contact:
Benjamin Ricaud <benjamin.ricaud@uit.no>