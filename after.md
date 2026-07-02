---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: After Your Paper is Accepted
description: Learn what and how to submit in your replication package.

# Page navigation
page_nav:
    prev:
        content: Before You Submit
        url: '/before/'
    next:
        content: Best Practices
        url: '/best/'
---
After your paper has been accepted (or sometimes during the revision process), you will be asked by the Managing Editor to submit your replication package.

![Link to DCAS Icon](https://datacodestandard.org/assets/img/DCAS-1.0.svg)

The Review of Economic Studies endorses DCAS,
the [Data and Code Availability Standard](https://datacodestandard.org/)
[v1.0]. The instructions below ensure that your replication package meets the DCAS requirements. If you have any questions about the submission process, please contact the [Data Editor]({{ site.baseurl }}/editor/).

# What we do

- We check that you have described the data you used and how to obtain it thoroughly.
- We check that the code runs and produces the same output as in the manuscript you submitted. This includes tables, figures, and numerical output reported in the text of the paper, even when those numbers do not appear directly in a table or figure.

# What if...

- ***You realized while preparing the package that your latest replication attempt does not exactly reproduce the output reported in the accepted manuscript?*** In this case, please contact the Managing Editor, explain the issue, and describe in detail how you would like to change the manuscript and why. The Managing Editor is the best person to judge whether the changes alter the message of the paper and whether they are acceptable. After the Managing Editor approves the changes, please forward the updated manuscript to the Data Editor.
- ***Our replication does not exactly reproduce your output?*** We will work with you to understand why this happened and how to fix it.
- ***Your theory paper does not use data?*** Your paper may still be subject to the Data and Code Availability Standard if you have code that generates simulation output. In that case, you must submit a replication package. We do not require a package for figures that could essentially be drawn by hand, or for TikZ diagrams whose coordinates are not computed. If in doubt, please contact the Data Editor for clarification.
- ***You collected your data?*** Please include all survey or experimental instruments, even if you have already included them in an online appendix. Online appendices do not have a DOI, so including them in the replication package gives them a permanent home, a DOI, and a reuse license, allowing readers to cite them and access them. You may also consider releasing the data in a separate record. If you do, cite that record using its DOI.

# What to include in your replication package

The replication package is a ZIP archive of folders and files that essentially includes:

- a README file *with data citations, instructions on how to acquire the data,* and instructions on how to reproduce the results (details below)
- raw data
- data cleaning and manipulation code
- the analysis data on which the analysis code would run
- the analysis code to construct the research outputs displayed in the paper

There are no specific requirements for software use, file names, or folder structure, but the package should enable another trained computational scientist to run the replication code and reproduce the outputs.

# README file

The README document should be a PDF, plain text, or Markdown file; please do not use Word documents. It should explain to readers how to reproduce your work. It should tell the reader:

- what data were used and, whether or not the data are included in the package, how to access them. The most frequent revision request is the absence of data citations; the second is the lack of adequate instructions on how to access the data.
- details about the code and instructions on how to run the analysis. Another frequent revision request is the lack of clear instructions for replicators.

You should write it with "computational empathy" in mind. Try to make the replicator's job easier by avoiding unnecessary steps. Imagine a trained computational scientist trying to reproduce your work, and give as specific instructions as you can.

The best approach is to follow the template README from the [social sciences data editors website](https://social-science-data-editors.github.io/template_README/).

Specifically:

## Data availability

- Our policy requires you to make available to the journal all the data.
- Requests for exemptions from this policy must be made in a cover letter to the Managing Editor at the time of first submission (see [REStud's submission instructions](https://www.restud.com/submissions/))
- If you cannot include some or all of the data in your package, please check with the data provider about whether the data may be shared with the Data Editor. We are happy to work with you and the data provider to find a solution that allows us to replicate your results, including by signing any necessary agreements. If that is not possible, we will try to obtain access to the data ourselves.
- For confidential data that you cannot include, provide a data preservation statement. We ask you to commit to preserving the data for at least five years.
- In rare cases, authors are asked not to disclose the identity of the data provider. This must be disclosed at the time of submission. In these cases, we follow the policy of the [American Economic Association](https://aeadataeditor.github.io/posts/2026-05-08-private-data). Please consult it and contact the Data Editor to arrange an appropriate resolution.

## Data Availability Statement and description of the data

Citing and describing data sources in the README is the best way to direct readers to them. We ask you to place full data citations in a References section at the end of the README, and to use short in-text citations in the Data Availability Statement (DAS) section, which should contain a full description of all data sources and how to access them. Specifically:

- *Include a formal Data Availability Statement* for each dataset you use. The goal is to describe clearly the steps readers must take if they want to access the data. Please see the [template README](https://social-science-data-editors.github.io/template_README/) for examples and further guidance.
- For clarity, *we recommend enumerating data sources in a list or table*, indicating whether each source is included, which files it corresponds to when included, and the files' paths relative to the root of the package.
- *Provide all details* an independent replicator would need to obtain the data. In particular, the Data and Code Availability Statement "contains information about the sources of data used in the replication package, in addition to or instead of such detailed description in the manuscript. A DCAS goes beyond a typical data citation, as it describes additional information necessary for obtaining the data. These may include required registrations, memberships, application procedures, monetary cost, or other qualifications, beyond a simple URL for download which is typically part of Data Citations." If the data citation does not contain a Document Object Identifier (DOI), be specific about where the data can be accessed. It is not sufficient to provide only a URL or a generic provenance statement. If you provide a URL, do not stop at a generic link to the data provider's website. Instead, provide the specific URL for the data you used and explain the steps the replicator must follow to download it, including which variables you downloaded and when you downloaded them. Some data also have version numbers. Be as detailed as necessary to allow someone else to download the same data you used.
- Include a data dictionary or codebook for each dataset you used. If this information is already embedded in your software, for example in a Stata format file, there is no need to duplicate it.

## Data citations
Each dataset you use should be cited in the README as well as in the manuscript, whether or not you include it in the package.

The best way to avoid redundancy and clutter is to place *full citations only at the end of the README*, in the References section, and refer to them using an *in-text short citation* (for example, `Bureau of the Census (2009)`) in the DAS, the data descriptions, or the data list or table. Do the same in the manuscript wherever you cite the data. If the dataset has a DOI, please include it in the full citation. (This is the same practice you use when citing a book or an article).

The data providers sometimes recommend a "suggested citation." If not, please see the [Data Citation Guide](https://social-science-data-editors.github.io/guidance/Guidance/Data_citation_guide.html) for guidance, and the [additional examples page](https://social-science-data-editors.github.io/guidance/addtl-data-citation-guidance.html) for further examples. The Data Citation Guide also includes a tool that may help you cite datasets that do not have a DOI or a suggested citation format.

## Rights
- Verify that you have the right to share any data you include, and make sure you comply with the data license, which may differ from the license you choose for the package. Note that some licenses require the license text to be distributed together with the data.

*Include the following Statement about Rights in the README:*

* I/We certify that the author(s) of the manuscript have legitimate access to and permission to use the data used in this manuscript.
* I/We certify that the author(s) of the manuscript have documented permission to redistribute/publish the data contained within this replication package.



## Hardware and software requirements

- Include detailed software requirements, including external packages and their versions. To improve replicability, we recommend using virtual environments when the software allows it. You are welcome to use image or container technology, such as Docker, but if you do, please also explain how to run the code without it.
- Describe the hardware you used and how long the code took to run on that system.

## Instructions for the replicator

- You may describe your code as you wish, but you must explain how to run it in a specific section titled "Instructions for the replicator".
- Write your code to minimize the need for manual intervention. This is typically done by avoiding including absolute paths, and by providing scripts that run the entire analysis with a single or a few commands. If you have to include manual steps, please be as specific as possible about what these steps are and how to do them. If we find that there are too many manual steps, we will ask you to automate them.
- Include information about how you controlled random number generation (e.g. in which file did you set the seed)
- Use hardware-independent code. In particular, pay attention to filename capitalization and path separators, for example use "/" rather than "\\". If you used a specific operating system, please specify this in the README.
- Specify from which working directory the code should be run.
- Include a list of all tables and figures specifying which file generates them.
- You may include tables and figures with your package. This helps us check that the code produces identical output but we also check it against the manuscript.

# Upload your replication package to Zenodo

The Review uses [zenodo.org](https://zenodo.org/communities/restud-replication/?page=1&size=20), a research data repository maintained by CERN, to store and share replication materials.

## Uploading the first version of your replication package

1. Package all your files with their full directory structure in a ZIP archive. Please do not use any other archive format and do not compress files within the ZIP archive. Remove extraneous hidden files (the most frequent: __MACOSX directories and .git directories)
2. Please leave the README outside the ZIP file. This makes it easier to inspect the package, improves transparency, and allows the contents to be reviewed when needed to support evaluation and reuse.
3. You need a Zenodo account to publish your files. [Sign up](https://zenodo.org/signup/) if you do not have one yet.
   ![]({{ site.baseurl }}/assets/img/zenodo/before-login.png)
4. Create a [new Zenodo entry](https://zenodo.org/deposit/new?c=restud-replication) for your replication package. Make sure to use this link so that the Review receives your package once you are finished.
5. Upload your ZIP archive to Zenodo by "Drag and drop" or selecting "Upload files." Make sure to push the green "Start upload" button after selecting your files.
   ![]({{ site.baseurl }}/assets/img/zenodo/files-uploaded.png)
6. Generate a Digital Object Identifier (DOI) by clicking "No" and "Get a DOI now!". Make note of the DOI number issued by Zenodo. You will need to cite this in the [Data Availability Statement](https://academic.oup.com/journals/pages/authors/preparing_your_manuscript/research-data-policy#data2) at the end of your manuscript.
   ![]({{ site.baseurl }}/assets/img/zenodo/doi-no.png)
7. Select "Dataset" or "Software" as your upload type.
8. Fill in the required metadata about your upload.
   - Title: "Replication package for: {full title of your manuscript}"
   - Publication date: {keep the Zenodo default - the day you are uploading the package}
   - Creators: These are typically the manuscript authors, but you may also add others who have contributed significantly to the code you are uploading, such as research assistants.
   - Description: Include a full citation of your manuscript and a one-sentence description of what the replication package contains.
   - Do not worry about other metadata, these will be filled out by the journal office once the paper is published.
     ![]({{ site.baseurl }}/assets/img/zenodo/description.png)
9. Select an open access License for your upload. Our [Data Availability Policy]({{ site.baseurl }}/before/#data-availability-policy) requires that you allow readers to download, copy and modify your replication package. We recommend a "Creative Commons Attribution 4.0 International" license, but if you wish to use a different license, select "Other (Attribution)."
   ![]({{ site.baseurl }}/assets/img/zenodo/license-other.png)
10. Submit your record to our community, "restud-replication:" follow the link at the top of the record's edit page ("Select a community"), and search for "Review of Economics Studies."
11. **Do not publish the package at this stage**. To avoid mistakes and errors please "Preview" your package before submitting. "Save draft" and then "Submit for review", read and check the warnings and finally "Submit record for review." Note that once published, you cannot edit or delete your uploaded files (only metadata). You can only edit uploaded files by creating a new version of the package.
    ![]({{ site.baseurl }}/assets/img/zenodo/submit.png)
12. Make a note of the package's ID or URL and include it in the appropriate Typeform mentioned in the acceptance letter. Once you submit the form, the data editor will be notified that the package is ready to be checked.

## Uploading additional versions of your replication package

In case you are asked to make changes to your replication package, follow these steps.

1. Go to the Zenodo entry you have created. You can use the DOI to find it.
2. Click on the green "New version" button.
3. Upload the new ZIP archive and edit metadata if necessary.
4. Change the Publication date.
5. Follow the steps above before saving and publishing.

If you have any questions about replication package submission, please contact the [Data Editor]({{ site.baseurl }}/editor/).
