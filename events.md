---
title: Events
---

## Seminars

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> {{ post.date }}, {{ post.place }}
    </li>
  {% endfor %}
</ul>
