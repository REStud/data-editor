---
# Page settings
layout: default
keywords:
comments: false
redirect_from:
    - /after/

# Hero section
title: Data and Code Availability Policy
description: The Review's data and code availability policy

# Page navigation
page_nav:
    prev:
        content: Homepage
        url: '/'
    next:
        content: Preparing your replication package
        url: '/package_howto/'
---
<style>
.dcas-accordion { margin: 1.5rem 0; }
.dcas-panel { margin-bottom: .5rem; overflow: hidden; }
.dcas-panel > summary { cursor: pointer; padding: .75rem 2.25rem .75rem 1rem; font-weight: 700; list-style: none; position: relative; background: #f6f7f9; }
.dcas-panel > summary::-webkit-details-marker { display: none; }
.dcas-panel > summary::after { content: "\002B"; position: absolute; right: 1rem; top: .75rem; font-weight: 700; }
.dcas-panel[open] > summary::after { content: "\2212"; }
/*.dcas-panel[open] > summary { border-bottom: 1px solid #e2e2e2; } */
.dcas-panel[open] > div.content {padding: .3rem 0 0 1rem; }
.dcas-table { width: 100%; margin: 0; border-collapse: collapse; }
.dcas-table th, .dcas-table td { text-align: left; vertical-align: top; padding: .5rem .75rem; border-bottom: 1px solid #eee; font-size: .92rem; }
.dcas-table thead th { background: #fafafa; }
.dcas-table td:first-child, .dcas-table th:first-child { width: 2rem; text-align: center; color: #999; }
</style>

By submitting to the journal, you indicate that you accept the Data and Code Availability Policy. In short, the default rule is that you are required to submit all code and data necessary to reproduce your work, and permit any reader of the journal to use them.

# The Data and Code Availability Policy

![Link to DCAS Icon](https://datacodestandard.org/assets/img/DCAS-1.0.svg)

The Review of Economic Studies endorses DCAS,
the [Data and Code Availability Standard](https://datacodestandard.org/)
[v1.0], and its data and code availability policy is
compatible with DCAS.

Questions regarding any aspect of this policy should be forwarded to the [Data Editor]({{ site.baseurl }}/editor/).

## The DCAS requirements

The Data and Code Availability Standard sets out sixteen requirements, organized into four areas. Expand each area below to read the standard's text. These are the criteria we use when reviewing your replication package.

<div class="dcas-accordion">
{%- for rule in site.data.rules -%}
{%- if rule.group and rule.group != "" -%}
{%- unless forloop.first %}</tbody></table></details>{% endunless -%}
<details class="dcas-panel"><summary>{{ rule.group }}</summary><table class="dcas-table"><thead><tr><th>#</th><th>Requirement</th><th>Description</th></tr></thead><tbody>
{%- endif -%}
<tr><td>{{ forloop.index }}</td><td><strong>{{ rule.topic }}</strong></td><td>{{ rule.description | markdownify | remove: '<p>' | remove: '</p>' | strip_newlines }}</td></tr>
{%- if forloop.last %}</tbody></table></details>{% endif -%}
{%- endfor -%}
</div>

## Specific requirements

The following guidelines clarify and complement the DCAS requirements listed above, and explain how exceptions can be granted to rules 2-4.

<div class="dcas-accordion">

## Preparing your replication package

Finally, we ask you to follow the [instructions for preparing your replication package and README]({{ site.baseurl }}/readme/) — what to include, how to write the README, and how to upload to Zenodo.

<script>
document.addEventListener('DOMContentLoaded', function () {
  var panels = document.querySelectorAll('.dcas-accordion .dcas-panel');
  panels.forEach(function (panel) {
    panel.addEventListener('toggle', function () {
      if (panel.open) {
        panels.forEach(function (other) {
          if (other !== panel) { other.open = false; }
        });
      }
    });
  });
});
</script>
