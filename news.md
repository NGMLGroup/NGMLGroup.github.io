---
layout: base
title: Events
---

## Events

<ul>
  {% for post in site.events %}
    <li>
      {{ post.date | date: "%-d %B %Y %R" }}, {{ post.place }}, <a href="{{ post.url }}">{{ post.title }}</a> {{ post.presenter }}, {{ post.affiliation }}
    </li>
  {% endfor %}
</ul>

## Past news

<ul>
  {% for post in site.news %}
    <li>
      {{ post.date | date: "%-d %B %Y" }}, <a href="{{ post.url }}">{{ post.title }}</a> 
    </li>
  {% endfor %}
</ul>