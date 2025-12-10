---
layout: base
title: "📝 Exploring the AI brain using graphs"
keywords: "LLMs, latent space, Retrieval Augmented Generation"
contact_person: "Benjamin Ricaud"
---

## 📝 Description

The main goal of this project is a better understanding of how large language models structure their inner representation of data, how their "AI brain" is organized. We will collect the embeddings of a AI model for a dataset of documents. The idea is then to create the graphs of embeddings and topics contained in them. By encoding chuncks of text following each other in documents, we want to see the connection between abstract concepts and ideas from the documents inside the AI model.
We will explore the representation of sentences and texts of (small) text encoders such as BERT and [modernBERT](https://arxiv.org/abs/2412.13663) its recent updated version. To map the latent space we will use an approach similar to Retrieval-Augmented Generation [RAG](https://arxiv.org/abs/2005.11401) and create an graph of nearest neighbors in the latent space to structure it.
We will first explore the structure of the graph, see if there are clusters, central concepts or ideas inside the model representation. Then we will then use the graph to evaluate how the AI model chain or connect ideas in documents and as it produces text.
In this project we will make use of simple and advanced tools from network analysis as well as machine learning and generative AI (LLMs). We will use pre-trained models from Huggingface.

**Data:** Open datasets of documents, Wikipedia data

## 📨 Contact

Benjamin Ricaud (<benjamin.ricaud@uit.no>)
