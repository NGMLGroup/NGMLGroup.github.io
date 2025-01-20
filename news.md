---
layout: base
title: Events
---

## 📆 Events

<ul>
  {% assign sorted_events = site.events | sort: 'date' | reverse %}
  {% for post in sorted_events %}
    <li>
      {{ post.date | date: "%-d %B %Y %R" }}, {{ post.place }}, <a href="{{ post.url }}">{{ post.title }}</a> {{ post.presenter }}, {{ post.affiliation }}
    </li>
  {% endfor %}
</ul>

## 🗞️ Past News

<ul>
  {% assign sorted_news = site.news | sort: 'date' | reverse %}
  {% for post in sorted_news %}
    <li>
      {{ post.date | date: "%-d %B %Y" }}, <a href="{{ post.url }}">{{ post.title }}</a> 
    </li>
  {% endfor %}
</ul>
