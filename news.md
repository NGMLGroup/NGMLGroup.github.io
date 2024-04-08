---
title: News
---

<ul>
  {% for post in site.news %}
    <li>
      {{ post.date | date: "%-d %B %Y" }}, <a href="{{ post.url }}">{{ post.title }}</a> 
    </li>
  {% endfor %}
</ul>