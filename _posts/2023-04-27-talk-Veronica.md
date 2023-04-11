---
title: "The expressive power of pooling in Graph Neural Networks"
layout: post
date: 2023-04-27 14:30
place: Forskningsparken B417
presenter: "Veronica Lachi"
published: true
---

By {{ presenter }}, University of Siena, Italy. [google Scholar](https://scholar.google.com/citations?user=uly8D-sAAAAJ&hl=it&oi=ao)

**Abtract:** In Graph Neural Networks (GNNs), hierarchical pooling operators generate a coarser representation of the input data by creating local summaries of the graph structure and its vertex features. Considerable attention has been devoted to studying the expressive power of message-passing (MP) layers in GNNs, while a study on how pooling operators affect the expressivity of a GNN is still lacking. Additionally, despite the recent advances in the design of effective pooling operators, there is not a principled criterion to compare them. Our work aims to fill this gap by providing sufficient conditions for a pooling operator to fully preserve the expressive power of the MP layers before it. These conditions serve as a universal and theoretically-grounded criterion for choosing among existing pooling operators or designing new ones. Based on our theoretical findings, we reviewed several existing pooling operators and identified those that fail to satisfy the expressiveness assumptions. Finally, we introduced an experimental setup to empirically measure the expressive power of a GNN equipped with pooling layers, in terms of its capability to perform a graph isomorphism test.

**Resources:** [Paper](https://arxiv.org/abs/2304.01575), [Repository](https://github.com/FilippoMB/The-expressive-power-of-pooling-in-GNNs) 