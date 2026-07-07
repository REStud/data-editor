---
# Page settings
layout: default
keywords:
comments: false
permalink: /package-howto/

# Hero section
title: Preparing your replication package
description: What to include in your replication package and how to write the README.

# Page navigation
page_nav:
    prev:
        content: DCAP
        url: '/policy/'
    next:
        content: Uploading to Zenodo
        url: '/zenodo/'
---
# Preparing your replication package

After your paper has been accepted (or sometimes during the revision process), you will be asked by the Managing Editor to submit your replication package. To ensure a speedy replication review, please follow the instructions below. If you have any questions about the submission process, please contact the [Data Editor]({{ site.baseurl }}/editor/).

## What to include in your replication package

Please prepare the replication package and write its README and the code with **"computational empathy"**; that is, try to make the replicator's job easier by avoiding unnecessary steps. Imagine a trained computational scientist trying to reproduce your work, and give as specific instructions as you can. *Consider that the replicator may not be familiar with your data, your software, and may not use the same hardware or operating system as you.*

The replication package consists of:

1) a **README file** describing the package's content, the data and how to acquire them, the instructions on how to reproduce the results (details below), and all additional information required by the policy described above.

2) a **ZIP archive** of folders and files that essentially includes:

- raw data
- data cleaning and manipulation code
- the analysis data on which the analysis code runs
- the analysis code to construct the research outputs displayed in the paper
- additional content as required by our [Data and Code Availability Policy](policy/)

There are no specific requirements for software use, file names, or folder structure, but the package should enable another trained computational scientist to run the replication code and reproduce the outputs.

We require that you ***upload the README as a separate file alongside the .zip archive*** on Zenodo (you may also include it inside the ZIP archive, as long as it is an identical copy). Keeping the README separate lets editors and readers quickly assess data/code availability, requirements, and run instructions before downloading large archives, improving transparency, accessibility, and screening efficiency.

## README file

- Format: only PDF, plain text, or Markdown; please do not use Word documents.

The README should tell the reader:

- what data were used and how to access them, whether or not the data are included in the package. The most frequent revision request is the absence of data citations (see details below); the second is the lack of adequate instructions on how to access the data.
- details about the code and instructions on how to run the analysis. Another frequent revision request is the lack of clear instructions for replicators.

The best approach is to follow the template README from the [social sciences data editors website](https://social-science-data-editors.github.io/template_README/).

### Data citations

Citing and describing data sources in the README is the best way to direct readers to them. Each dataset you use should be cited in the README as well as in the manuscript, whether or not you include it in the package. Note that this is also [our publisher&#39;s policy](https://academic.oup.com/pages/open-research/research-data).

The best way to avoid redundancy and clutter is to place **full citations in a references section at the end of the README** and use **in-text short citations** (for example, `Bureau of the Census (2009)`) in the rest of the document when you need to refer to a dataset. Do the same in the manuscript whenever you cite the data; this is the same practice you use when citing a book or an article.

If the dataset has a DOI, please include it in the full citation. Verify whether your data provider recommends a "suggested citation." If so, use it; if not, please see the **[Data Citation Guide](/citation-guide/)** for guidance and examples. The Data Citation Guide also includes a tool that may help you cite datasets that do not have a DOI or a suggested citation format.

### Data Availability Statement (DAS) and data description

The DAS section of the README should contain a full description of all data sources, and of how to access them. Specifically:

- **Include a formal Data Availability Statement** for each dataset you use. The goal is to describe clearly the steps readers must take if they want to access the data. Please see the [template README](https://social-science-data-editors.github.io/template_README/) for examples and further guidance.
- For clarity, **we recommend enumerating data sources in a list or table**, indicating whether each source is included, which files it corresponds to when included, and the files' paths relative to the root of the package.
- **Provide all details** an independent replicator would need to obtain the data. In particular, the Data and Code Availability Statement "contains information about the sources of data used in the replication package, in addition to or instead of such detailed description in the manuscript. A DCAS goes beyond a typical data citation, as it describes additional information necessary for obtaining the data. These may include required registrations, memberships, application procedures, monetary cost, or other qualifications, beyond a simple URL for download which is typically part of Data Citations."
- If the data citation does not contain a Document Object Identifier (DOI), **be specific about where the data can be accessed. It is not sufficient to provide only a URL or a generic provenance statement**. If you provide a URL, do not stop at a generic link to the data provider's website. Instead, provide the specific URL for the data you used and explain the steps the replicator must follow to download it, including which variables you downloaded and when you downloaded them. Some data also have version numbers. Be as detailed as necessary to allow someone else to download the same data you used.
- Include a data dictionary or codebook for each dataset you used. If this information is already embedded in your software, for example in a Stata format file, there is no need to duplicate it.

### Statement about Rights

- Verify that you have the right to share any data you include, and make sure you comply with the data license, which may differ from the license you choose for the package. Note that some licenses require the license text to be distributed together with the data. Include it in the data folder.

***Include the following Statement about Rights in the README:***

* I/We certify that the author(s) of the manuscript have legitimate access to and permission to use the data used in this manuscript.
* I/We certify that the author(s) of the manuscript have documented permission to redistribute/publish the data contained within this replication package.

### Hardware and software requirements

- Include detailed software requirements, including external packages and their versions. To improve replicability, we recommend using virtual environments when the software allows it. You are welcome to use image or container technology, such as Docker, but if you do, please also explain how to run the code without it.
- Describe the hardware you used and how long the code took to run on that system.

### Instructions for the replicator

- You may describe your code in as much detail as you wish, but make sure you also explain succinctly how to run it in a specific section titled "Instructions for the replicator," enumerating the steps.
- Include information about how you controlled random number generation (e.g., which file sets the seed).
- Include a list of all tables and figures specifying which file generates them.
- You may include the code's output (e.g. tables and figures) with your package. This helps us check that the code produces identical output (we also compare the output with the manuscript exhibits).

## Code best practices

These are not strict requirements, but we recommend following them and may ask for code revisions to make replication easier along these lines.

- Write your code to minimize the need for manual intervention. If you have to include manual steps, please be as specific as possible about what these steps are and how to do them. Provide scripts that run the entire analysis with a single or a few commands. If we find that there are too many manual steps, we will ask you to automate them.
- Use hardware-independent code. In particular, pay attention to filename capitalization and path separators; for example, use "/" rather than "\\". If you used a specific operating system, please specify this in the README.
- Specify from which working directory the code should be run.
- There is almost never a good reason to include absolute paths and ask the replicator to change them. Use relative paths instead, and specify the working directory in the README. It's also best practice to avoid changing the working directory in the code itself.

## Upload your replication package to Zenodo

Once your package and README are ready, upload them to the Review's Zenodo community. Do not publish the Zenodo record at this stage (Zenodo makes it difficult to remove published records). The record will be visible only to you and to us when you submit it to our community.

Step-by-step instructions — including how to upload the first version and how to submit revised versions — are on the [Uploading to Zenodo]({{ site.baseurl }}/zenodo/) page.
