---
title: Events
---

## Seminars

<ul>
  {% for post in site.posts %}
    <li>
      {{ post.date | date_to_long_string }}, {{ post.place }}, <a href="{{ post.url }}">{{ post.title }}</a> {{ post.presenter }}, {{ post.affiliation }}
    </li>
  {% endfor %}
</ul>
