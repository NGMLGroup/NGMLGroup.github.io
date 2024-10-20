---
layout: base
title: Theses
---

We are looking for highly motivated students willing to work on graphs and machine learning.
The background and the skills sought for these projects include: machine learning, network science, data mining, Python programming, deep learning.
This page lists some of the available master projects and student summer jobs. The projects are high-impact and generally lead to scientific publications or open source software. 


## 🎓 Available Theses

<ul>
  {% for thesis in site.theses %}
    {% unless thesis.exclude %}
    <li style="margin-bottom: 20px;">
      <strong><a href="{{ thesis.url }}">{{ thesis.title }}</a></strong><br>
      <em>Keywords:</em> {{ thesis.keywords }}<br>
      <em>Contact Person:</em> {{ thesis.contact_person }}
    </li>
    {% endunless %}
  {% endfor %}
</ul>