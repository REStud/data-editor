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
        url: '/package-howto/'
---

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

<details class="dcas-panel" markdown="1">
<summary>You used confidential or proprietary data you cannot share (Rules #2-3)</summary>
<div class="dcas-content" markdown="1">
The Data Editor acknowledges that practical difficulties in complying with this policy may exist, as with proprietary datasets with limited access or public use data sets that require consent forms to be signed before use.

- Requests for exemptions from this policy must be made in a cover letter to the Managing Editor at the time of first submission (see [REStud's submission instructions](https://www.restud.com/submissions/)). The article will then be reviewed at the discretion of the Managing Editors and the Data Editor. Exceptions will not be considered later in the review and publication process.
- If you cannot include some or all of the data in your package, **please check first with the data provider about whether the data may be shared with the Data Editor**. We are happy to work with you and the data provider to find a solution that allows us to replicate your results, including by signing any necessary agreements. If that is not possible, we will try to obtain access to the data ourselves.
- For confidential data that you cannot include, provide a data preservation statement. We ask you to commit to preserving the data for at least five years.
- In rare cases, ***authors are asked not to disclose the identity of the data provider***. This must be disclosed at the time of submission. In these cases, we follow the policy of the [American Economic Association](https://aeadataeditor.github.io/posts/2026-05-08-private-data). Please consult it and contact the Data Editor to arrange an appropriate resolution.
</div>
</details>


<details class="dcas-panel" markdown="1">
<summary>You collected primary data (Rules #2,12)</summary>
<div class="dcas-content" markdown="1">
Please include all survey or experimental instruments. A reference to an online appendix of the paper does not suffice: online appendices do not have a DOI. Including them in the replication package gives them a permanent home, a DOI, and a reuse license, allowing readers to cite and access them. You may also consider releasing the data in a separate record. If you do, cite that record using its DOI.

If any accompanying materials, such as experimental instructions, are not written in English, then a translation should be provided. In addition, upon acceptance, authors are expected to provide computer programs, configuration files, or scripts used to run the experiment and/or to analyse the data, and the raw data from the experiment per DCAS rule #2

If applicable, pre-registration of the research project must be documented with a Document Object Identifier for the pre-registration record in the README.

Alternatively, you can publish your data and documentation separately and cite it in the README, adding its DOI. See [here](https://social-science-data-editors.github.io/guidance/Guidance/depositing-data-for-greater-good.html) for guidance.

</div>
</details>

<details class="dcas-panel" markdown="1">
<summary>Your paper does not use data or you only simulated data (Rule #3)</summary>
<div class="dcas-content" markdown="1">
Your paper is still subject to the Data and Code Availability Standard if you used code to generate output. In that case, you must submit a replication package. If in doubt, please contact the Data Editor for clarification.

If you simulated data, you must include the code that generates it together with the code that analyzes it

State in your Data Availability Statement that you did not use primary or secondary data in your project.
</div>
</details>

<details class="dcas-panel" markdown="1">
<summary>You cannot reproduce your results (Rule #8)</summary>
<div class="dcas-content" markdown="1">
In this case, please contact the Managing Editor and describe in detail how you would like to change the manuscript and why. The Managing Editor is the best person to judge whether the changes alter the message of the paper and whether they are acceptable. After the Managing Editor approves the changes, please forward the updated manuscript to the Data Editor.
</div>
</details>

<details class="dcas-panel" markdown="1">
<summary>Our replication does not exactly reproduce your output (Rule #8)</summary>
<div class="dcas-content" markdown="1">
We will work with you to understand why this happened and how to fix it. This may require asking the Managing Editor for approving changes to the accepted manuscript.
</div>
</details>


<details class="dcas-panel" markdown="1">
<summary>Your paper received ethics approvals (e.g., IRB) (Rule #11)</summary>
<div class="dcas-content" markdown="1">
Authors who collect primary data (e.g., via experiment or survey) are required to include the IRB approval documentation (or similar) from their institution.
</div>
</details>
<details class="dcas-panel" markdown="1">
<summary>Including statements of Rights to use and distribute the data (Rule #14)</summary>
<div class="dcas-content" markdown="1">
We ask you to explicitly state the following in your README file:

* I/We certify that the author(s) of the manuscript have legitimate access to and permission to use the data used in this manuscript.
* I/We certify that the author(s) of the manuscript have documented permission to redistribute/publish the data contained within this replication package.
</div>
</details>

<details class="dcas-panel" markdown="1">
<summary>Including a License (Rule #15)</summary>
<div class="dcas-content" markdown="1">
Authors retain the copyright to their own data and code and convey any permissions or restrictions imposed on secondary data they include in the replication package. The authors must permit others to use all files in the deposit for the purpose of replication and are encouraged to permit unrestricted access for broader uses. These permissions are recorded in a license selected on Zenodo when you create your record. We recommend a "Creative Commons Attribution 4.0 International" license.
</div>
</details>

</div>

## Preparing your replication package

Finally, we ask you to follow the [instructions for preparing your replication package and README](/package-howto/) — what to include, how to write the README, and how to upload to Zenodo.


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
