---
layout: base
title: "🔋 Power flow optimization with Graph Neural Networks"
keywords: "Power flow oprimization, Energy analytics, Power engineering"
contact_person: "Filippo Maria Bianchi"
---

## 📝 Description

Power flows are usually optimized with numerical solver that are slow and are not robust to perturbations in the grid topology. GNNs can be used to determine how much power each generator should inject on the grid, based on the grid topology, the physical properties of its components, and the load demand.

The project will aim at improving and extending with new functionalities a recently-proposed [GNN-based power solver](https://github.com/JonasBergHansen/Power-Flow-Balancing-with-Decentralized-Graph-Neural-Networks) by:

- Considering the Optimal Power Flow rather than just Power Flow (e.g., minimize additional objectives such as CO2 emission when computing the solution to the power flow);
- Include time, i.e., make a prediction of the production over time given historical consumption on the electrical nodes;
- Make the prediction probabilistic, i.e., generate confidence intervals for the power production of each electrical node;
- Smart generation of training data with a power grid simulator.

## 📚 References

- [GNN-based power solver](https://github.com/JonasBergHansen/Power-Flow-Balancing-with-Decentralized-Graph-Neural-Networks)

## 📨 Contact

Filippo Maria Bianchi (<filippo.m.bianchi@uit.no>)
