---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Before You Submit
description: Read our Data Availability Policy to see how it applies to your research.

# Page navigation
page_nav:
    prev:
        content: Replicate a Paper
        url: '/replicate/'
    next:
        content: After Your Paper is Accepted
        url: '/after/'
---
By submitting to the journal, you indicate that you accept the Data Availability Policy. In short, the default rule is that you are required to submit all code and data necessary to reproduce your work, and permit any reader of the journal to use them.

# Data Availability Policy

[![Link to DCAS Icon](https://datacodestandard.org/assets/img/DCAS-1.0.svg)](https://datacodestandard.org/)

The Review of Economic Studies endorses DCAS, 
the [Data and Code Availability Standard](https://datacodestandard.org/)
[v1.0], and its data and code availability policy is 
compatible with DCAS.

{% for rule in site.data.rules -%}
{% if rule.group %}
| | **{{ rule.group }}** | {% else -%}
{% endif %} 
| {{ forloop.index}} | {{ rule.topic }} | {{ rule.description }} |{% endfor %}

Replication packages will be posted in the Review's [Replication Archive](https://zenodo.org/communities/restud-replication/).

The Managing Editor should be notified at the time of submission if the above requirements cannot be met for any reason (see details below).
We reserve the right to refuse publication of papers whose authors do not comply with these requirements.

As soon as possible after receiving instructions from the Journal Manager, authors of accepted papers are expected to send their data, programs, and sufficient details to permit replication, in electronic form, to the Review office.
Questions regarding any aspect of this policy should be forwarded to the Data Editor.

README files should include information on the operating system-software version combination used in the analysis and ideally an estimate for computation time (possibly with hardware specifications used in the execution of the programs).
Software requirements should explicitly list all modules, libraries, toolboxes and commands used that are not part of the core software.
Programs that rely on random number generators should set seeds to allow replication.  
If it is necessary to execute programs in a particular order, this should be made explicit in the README files.

The Data Editor acknowledge that practical difficulties in complying with this policy may exist, as with proprietary datasets with limited access or public use data sets that require consent forms to be signed before use.
Exemptions in such cases are possible, but authors must provide interested investigators the necessary information on how to obtain the data (even if the data are provided by a third party at a monetary cost).
This information should be provided in the README file and a copy of the relevant programs to generate the final results is still required.
In some specific cases, computer programs may have value in themselves and the authors may not make them public.
Similarly, there may be compelling reasons to restrict usage, and if Managing Editors agree, we will post a notice on the web site regarding such restrictions.

Requests for exemptions should be clearly stated when the article is first submitted.  The article will then be reviewed at the discretion of the Managing Editors and the Data Editor. Exceptions will not be considered later in the review and publication process.

# What if your dataset is confidential?
There may be cases when you cannot share the dataset directly. This does not lead to automatic exemption from the Data Availability Policy. Please note, *at the time of submission*, why you cannot comply fully with the policy.

# Submission instructions
Please see detailed [submission instructions here](https://www.restud.com/submissions/).
