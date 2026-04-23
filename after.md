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
- We check that you described how to access the data you used thoroughly
- We check that the code runs and produces the same output as in the manuscript you submitted: this includes tables, figures, and numerical output that is included in the text of the paper but does not directly refer to numbers in figures and tables.

# What if...
- *You realized while preparing the package that your last replication does not exactly reproduce the output reported in th accepted manuscript?* In this case, please contact the Managing Editor and let them know about the issue, and explain in detail how you want to change the manuscript and why. The Managing Editor is the best person go judge if the changes do not alter the message of the paper and if they are acceptable. After the ME's approval, forward to the data editor the updated manuscript.
- *Our replication does not exactly reproduce your output?* We will work with you to understand the reason why this happens and how to fix it.
- *Your theory paper that does not use data* If you have code that generates simulation output, you still have to submit a replication package. We don't require a package only for TikZ figures. If in doubt, feel free to contact the Data Editor for clarification.

# What to include in your replication package
The replication package is a ZIP archive of folders and files that includes
- raw data
- data cleaning and manipulation code
- the analysis data on which the analysis code would run
- the analysis code to construct the research outputs displayed in the paper
- a README file with data citations and instructions on how to reproduce the results

There are no specific requirements for software use, file names and folder structure, but the package should enable any other trained computational scientist to run the replication code and create the outputs.



# README file.
The README document is a PDF, plain text, or Markdown file (please no word documents) that explains readers how to reproduce your work. It tells the reader
- the data used and, whether or not it is included with the package, instructions on how to access it
- details about the code and instructions on how to run the analysis

You should write it under the principle of "computational empathy," that is, try to make the life of a replicator easier by avoiding unnecessary steps. Imagine a trained computational scientist trying to reproduce your work and give as specific instructions as you can.

The best approach is to follow the template README from the [social sciences data editors website](https://social-science-data-editors.github.io/template_README/).

Specifically:

## Data availability
- If you cannot share the data, we ask you to check with the data provider for permission to share the data with the Data Editor. We are happy to work with you and the data provider to find a solution that allows us to replicate your results by signing the necessary agreeements. If this is not possible, we will try to get access to the data ourselves. This is why it is omportant to provide detailed information about how you obtained access to the data, and what data to ask for.
- For confidential data, included a data preservation statement. We ask you to commit to preserving the data for at least five years.
- Include a formal Data Availability Statement for each of the datasets you are using. The goal is to describe clearly the steps that readers have to take if they want to access the data. Please see here (https://social-science-data-editors.github.io/template_README/) for examples and further guidance. In particular, the Data and Code Availability Statement "contains information about the sources of data used in the replication package, in addition to or instead of such detailed description in the manuscript. A DCAS goes beyond a typical data citation, as it describes additional information necessary for obtaining the data. These may include required registrations, memberships, application procedures, monetary cost, or other qualifications, beyond a simple URL for download which is typically part of Data Citations."
- List the data files whether or not they are included in the package and provide a citation for each dataset. If the data does not have a Document Object Identifier (DOI), be specific as to where the data can be accessed. It is not sufficient to provide a URL or a generic provenance statement. Specify what variables you downloaded and when you downloaded them. Sometimes, data has version numbers. Be as detailed as necessary to allow someone else to download the same data you used.
- For each data source, cite the data, its format, how you obtained access, and whether it included with your replication package. Please see here (https://social-science-data-editors.github.io/guidance/addtl-data-citation-guidance.html) for examples and further guidance on how to cite data
- Include a data dictionary or codebook (if this is included in your software, e.g. a stata format file, no need to duplicate this information).
- Verify that you have the rights to share the data you include, and make sure you obey the data license (the license you chose may be different)

## Hardware and software requirements
- Include detailed software requirements, including external packages and their versions. To ensure replicability, we recommend setting up virtual environments when the software allows it. You are welcome to use image/container technology (e.g., Docker) but if you do so please explain also how to run the code without it.
- Describe the hardware you used and how long it took to run it in that system

## Instructions for the replicator
- You may describe your code as you wish but you must explain how to run it in a specific section titled "Instructions for the replicator".
- Write your code to minimize the need for manual intervention. This is typically done by avoiding including absolute paths, and by providing scripts that run the entire analysis with a single or a few commands. If you have to include manual steps, please be as specific as possible about what these steps are and how to do them. If we find that there are too many manual steps, we will ask you to automate them.
- Include information about how you controlled random number generation (e.g. in which file did you set the seed)
- Use hardware-independent code. In particular, pay attention at filename capitalization, and path separators (e.g. use "/" and not "\"). If you used a specific operating system, please specify this in the README.
- Specify from which working directory the code should be run.
- Include a list of all tables and figures specifying which file generates them.
- You may include tables and figures with your package. This helps us check that the code produces identical output but we also check it against the manuscript.



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

9. In the "Communities" section, select our commmunity "restud-replication" to make sure your package is included in the list of replication packages for the Review of Economic Studies.

10. Do not publish the package at this stage. To avoid mistakes and errors please "Preview" your package before submitting. "Save draft" and then "Submit for review", read and check the warnings and finally "Submit record for review." This will notify the Data Editor who will review the files you submitted. Note that once published, you cannot edit or delete your uploaded files (only metadata). You can only edit uploaded files by creating a new version of the package.
![]({{ site.baseurl }}/assets/img/zenodo/submit.png)

## Uploading additional versions of your replication package
In case you are asked to make changes to your replication package, follow these steps.
1. Go to the Zenodo entry you have created. You can use the DOI to find it.
2. Click on the green "New version" button.
3. Upload the new ZIP archive and edit metadata if necessary.
4. Change the Publication date.
5. Follow the steps above before saving and publishing.

If you have any questions about replication package submission, please contact the [Data Editor]({{ site.baseurl }}/editor/).
