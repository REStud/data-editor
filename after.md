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

# What to include in your replication package
The replication package is a ZIP archive of folders and files that includes
- the analysis code to construct the research outputs displayed in the paper
- the analysis data on which the analysis code would run
- a README file with data citations and instructions on how to reproduce the results
- data cleaning and manipulation codes
- raw data

There are no specific requirements for software use, file names and folder structure, but the package should enable any other trained computational scientist to run the replication code and create the outputs. This will be verified by the Data Editor.

![Link to DCAS Icon](https://datacodestandard.org/assets/img/DCAS-1.0.svg)

The Review of Economic Studies endorses DCAS, 
the [Data and Code Availability Standard](https://datacodestandard.org/)
[v1.0]. Use it as a checklist of what needs to be included in the replication package.

## README
The README document is key to explain readers how to reproduce your work. It tells the reader
- what is included in the package (for example, which figure is produced by which script)
- how to use it (for example, what software versions and packages are required)
- how to access the data used (by default, it is included in the package, but a citation and a Data Availability Statement is still necessary)

Imagine a trained computational scientist trying to reproduce your work and give as specific instructions as you can. Please see [several worked-out examples here](https://social-science-data-editors.github.io/template_README/).

The README can be in PDF, plain text, or Markdown format.

# Upload your replication package to Zenodo
The Review uses [zenodo.org](https://zenodo.org/communities/restud-replication/?page=1&size=20), a research data repository maintained by CERN, to store and share replication materials. 

## Uploading the first version of your replication package
1. Package all your files with their full directory structure in a ZIP archive. Please do not use any other archive format and do not compress files within the ZIP archive (i.e., no ZIP within the ZIP). 
2. You need a Zenodo account to publish your files. [Sign up](https://zenodo.org/signup/) if you do not have one yet. 
![]({{ site.baseurl }}/assets/img/zenodo/before-login.png)
3. Create a [new Zenodo entry](https://zenodo.org/deposit/new?c=restud-replication) for your replication package. Make sure to use this link so that the Review receives your package once you are finished.
4. Upload your ZIP archive to Zenodo by "Drag and drop" or selecting "Upload files." Make sure to push the green "Start upload" button after selecting your files.
![]({{ site.baseurl }}/assets/img/zenodo/files-uploaded.png)
5. Generate a Digital Object Identifier (DOI) by clicking "No" and "Get a DOI now!". Make note of the DOI number issued by Zenodo. You will need to cite this in the [Data Availability Statement](https://academic.oup.com/journals/pages/authors/preparing_your_manuscript/research-data-policy#data2) at the end of your manuscript.
![]({{ site.baseurl }}/assets/img/zenodo/doi-no.png)
6. Select "Dataset" or "Software" as your upload type.
7. Fill in the required metadata about your upload.
	- Title: "Replication package for: {full title of your manuscript}"
	- Publication date: {keep the Zenodo default - the day you are uploading the package}
	- Creators: Typically same as manuscript authors, but can you can add others who have contributed significantly to the code you are uploading (such as research assistants).
	- Description: Include a full citation of your manuscript and a one-sentence description of what the replication package contains.
	- Do not worry about other metadata, these will be filled out by the journal office once the paper is published.
![]({{ site.baseurl }}/assets/img/zenodo/description.png)
8. Select an open access License for your upload. Our [Data Availability Policy]({{ site.baseurl }}/before/#data-availability-policy) requires that you allow readers to download, copy and modify your replication package. We recommend a "Creative Commons Attribution 4.0 International" license, but if you wish to use a different license, select "Other (Attribution)."
![]({{ site.baseurl }}/assets/img/zenodo/license-other.png)
9. To avoid mistakes and errors please "Preview" your package before submitting. "Save draft" and then "Submit for review", read and check the warnings and finally "Submit record for review." This will notify the Data Editor who will review the files you submitted. Note that once published, you cannot edit or delete your uploaded files (only metadata). You can only edit uploaded files by creating a new version of the package. 
![]({{ site.baseurl }}/assets/img/zenodo/submit.png)

## Uploading additional versions of your replication package
In case you are asked to make changes to your replication package, follow these steps.
1. Go to the Zenodo entry you have created. You can use the DOI to find it.
2. Click on the green "New version" button. 
3. Upload the new ZIP archive and edit metadata if necessary. Follow the steps above before saving and publishing.

If you have any questions about replication package submission, please contact the [Data Editor]({{ site.baseurl }}/editor/).