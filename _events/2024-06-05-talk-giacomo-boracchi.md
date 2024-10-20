---
title: "QuanTrees: Histograms for Monitoring Multivariate Data Streams"
layout: post
date: 2024-06-05 10:15
place: "Forskningsparken: Klasserom 1 (Forskningsparken) B281"
presenter: "Giacomo Boracchi"
affiliation: "Politecnico di Milano, Italy"
published: true
---

# QuanTrees: Histograms for Monitoring Multivariate Data Streams

## Abstract
Change detection problems are ubiquitous in science and engineering: promptly detecting changes is often crucial to understanding the dynamics of a monitored process and activating suitable countermeasures. During this talk, I will present QuantTree (QT), a particular type of histogram yielding a very practical and powerful change detection algorithm for monitoring multivariate data streams. The significant advantages of QuantTree are its nonparametric nature, which allows adapting to any stationary distribution, and its theoretical properties, which enable setting a priori the detection thresholds without resorting to bootstrap. I will then illustrate QT-EWMA, an efficient extension of QT that combines QT with an Exponential Weighted Moving Average scheme to perform sequential monitoring. I will conclude my talk with Class Distribution Monitoring (CDM), an effective concept-drift detection scheme that uses QT-EWMA to monitor the class-conditional distributions of a data stream.
 
## Presenter
- Name: Giacomo Boracchi
- Affiliation: Politecnico di Milano, DEIB - Dipartimento di Elettronica, Informazione e Bioingegneria - Milano, Italy
- Webpage: https://boracchi.faculty.polimi.it/

### Bio
Giacomo Boracchi is Associate Professor of Computer Engineering at Dipartimento di Elettronica, Informazione e Bioingegneria of the Politecnico di Milano (DEIB). Giacomo has received a Ph.D. in information technology (DEIB, 2008), and an MSc degree in Mathematics (Universitá Statale di Milano, 2004). His primary research interests concern image processing and machine learning, in particular, image restoration and analysis, change/anomaly detection, domain adaptation, and learning in nonstationary environments. He has been/currently is the advisor of 8 Ph.D. students, regularly teaching deep learning and image processing courses and giving tutorials at major conferences (ICASSP, ICIP, ICPR, IJCNN).
 
He is currently leading research projects applying machine learning and image-understanding algorithms to design new industrial solutions with STMicroelectronics, Gilardoni Raggi X, and Cisco. He is the author of more than 90 papers in international conferences and journals, and since 2018 he has served as an Associate Editor for the IEEE Transactions on Image Processing. In 2015 he received the IBM Faculty Award; in 2016 the IEEE Transactions on Neural Networks and Learning Systems Outstanding Paper Award; in 2017, the Nokia Visiting Professor Scholarship; in 2021, an nVidia Applied Research Grant.
 
 
## References
- Giacomo Boracchi, Diego Carrera, Cristiano Cervellera, Danilo Macciò "QuantTree: Histograms for Change Detection in Multivariate Data Streams" International Conference Machine Learning (ICML) 2018
    - [paper](http://proceedings.mlr.press/v80/boracchi18a.html)
    - [code](https://github.com/diegocarrera89/quantTree)
 
- Luca Frittoli, Diego Carrera and Giacomo Boracchi, "Nonparametric and Online Change Detection in Multivariate Datastreams using QuantTree" IEEE Transactions on Data Knowledge and Engineering, 2022,
    - [paper](https://boracchi.faculty.polimi.it/docs/2022_08_TKDE_Sequential_QTree_Frittoli.pdf)
    - [code](https://github.com/diegocarrera89/quantTree)
    - [project page](https://boracchi.faculty.polimi.it/Projects/QT-EWMA.html)
 
- Diego Stucchi, Luca Frittoli, Giacomo Boracchi "Class Distribution Monitoring for Concept Drift Detection" IEEE-INNS International Joint Conference on Neural Networks (IJCNN) 2022
    - [preprint](https://boracchi.faculty.polimi.it/docs/2022_01_IJCNN_Class_Distribution_Monitoring_CDM.pdf)
    - [code](https://github.com/diegocarrera89/quantTree)
    - [project page](https://boracchi.faculty.polimi.it/Projects/CDM_Class_Distribution_Mo)