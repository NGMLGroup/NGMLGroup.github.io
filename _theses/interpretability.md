---
layout: base
title: "🔍 Interpretable Spatio-Temporal Graph Neural Networks for Forecasting"
keywords: "Explainable AI, graph neural networks, spatio-temporal models, forecasting"
contact_person: "Michele Guerra, Simone Scardapane, Filippo Maria Bianchi"
---

## 📝 Description

This project aims to develop **inherently interpretable** graph neural networks (GNNs) and spatio-temporal GNNs for tasks such as forecasting on networks (e.g., traffic, energy, climate, or mobility data). As a conceptual starting point, the thesis builds on ideas from [B-cos networks](https://arxiv.org/abs/2205.10268), which enforce an alignment between inputs and weights so that the model can be summarized by a single linear transform that directly reflects task-relevant features, yielding transparent explanations without relying on post-hoc methods.

The core goal of the thesis is to **transfer and generalize these interpretability-by-design principles** from image-based convolutional networks to **graph-structured and spatio-temporal data**. The student will investigate how alignment-based layers or related mechanisms (e.g., constrained attention, concept-like intermediate representations, or linearized readouts) can be integrated into GNN architectures so that each node, edge, or time step comes with a clear, quantitative explanation of its contribution to the prediction. The focus is not limited to the original B-cos formulation: alternative inherently interpretable architectures and combinations with standard post-hoc explainability methods (e.g., saliency or attribution methods for GNNs) and our recently-developed [Koopman interpretability tool for STGNNs](https://arxiv.org/abs/2410.13469) can also be explored and compared.

From an application perspective, the student will work with **spatio-temporal forecasting problems on graphs**, such as predicting traffic speeds on road networks, power demand on grid nodes, or other phenomena evolving over irregular spatial supports. Using frameworks like [Torch Spatiotemporal](https://torch-spatiotemporal.readthedocs.io/en/latest/) and standard GNN libraries (e.g., PyTorch Geometric), the project will involve (i) designing and implementing interpretable GNN/ST-GNN architectures, (ii) training them on real-world datasets, and (iii) evaluating both predictive performance and interpretability (e.g., faithfulness and human-aligned explanations). By the end of the project, the student will gain experience in modern GNNs, spatio-temporal modelling, and modern techniques for **explainable AI on graphs**, with potential impact in domains where transparency and trust in model decisions are crucial.

**Data:** Public benchmark datasets for spatio-temporal forecasting on graphs (e.g., traffic, energy, or mobility datasets), to be chosen based on the student’s interests and project focus.

## 📚 References

- [B-cos Networks: Alignment is All We Need for Interpretability](https://arxiv.org/abs/2205.10268)
- [Interpreting Temporal Graph Neural Networks with Koopman Theory](https://arxiv.org/abs/2410.13469)
- [Torch Spatiotemporal](https://torch-spatiotemporal.readthedocs.io/en/latest/)
- [Graph Deep Learning for Time Series Forecasting](https://arxiv.org/abs/2310.15978)

## 📨 Contact

Michele Guerra (<michele.guerra@uit.no>),
Filippo Maria Bianchi (<filippo.m.bianchi@uit.no>),
Simone Scardapane (<simone.scardapane@uniroma1.it>)
