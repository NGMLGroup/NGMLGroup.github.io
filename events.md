---
title: Events
---

## Seminars

<ul>
  {% for post in site.posts %}
    <li>
      {{ post.date | date: "%-d %B %Y %R" }}, {{ post.place }}, <a href="{{ post.url }}">{{ post.title }}</a> {{ post.presenter }}, {{ post.affiliation }}
    </li>
  {% endfor %}
</ul>
