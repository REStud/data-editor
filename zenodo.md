---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Uploading to Zenodo
description: How to upload and submit your replication package to the Review's Zenodo community.

# Page navigation
page_nav:
    prev:
        content: Preparing the package
        url: '/package_howto/'
    next:
        content: After package acceptance
        url: '/after-acceptance/'
---

The Review uses [zenodo.org](https://zenodo.org/communities/restud-replication/?page=1&size=20), a research data repository maintained by CERN, to store and share replication materials. This page explains how to upload and submit your replication package. For what the package and README must contain, see the [Data and Code Availability Policy and Guidance]({{ site.baseurl }}/guidance/) page.

# Uploading the first version of your replication package

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
9. Select an open access License for your upload. Our [Data and Code Availability Policy]({{ site.baseurl }}/guidance/#the-data-availability-policy) requires that you allow readers to download, copy and modify your replication package. We recommend a "Creative Commons Attribution 4.0 International" license, but if you wish to use a different license, select "Other (Attribution)."
   ![]({{ site.baseurl }}/assets/img/zenodo/license-other.png)
10. Submit your record to our community, "restud-replication:" follow the link at the top of the record's edit page ("Select a community"), and search for "Review of Economics Studies."
11. **Do not publish the package at this stage**. To avoid mistakes and errors please "Preview" your package before submitting. "Save draft" and then "Submit for review", read and check the warnings and finally "Submit record for review." Note that once published, you cannot edit or delete your uploaded files (only metadata). You can only edit uploaded files by creating a new version of the package.
    ![]({{ site.baseurl }}/assets/img/zenodo/submit.png)
12. Make a note of the package's ID or URL and include it in the appropriate Typeform mentioned in the acceptance letter. Once you submit the form, the data editor will be notified that the package is ready to be checked.

# Uploading additional versions of your replication package

In case you are asked to make changes to your replication package, follow these steps.

1. Go to the Zenodo entry you have created. You can use the DOI to find it.
2. Click on the green "New version" button.
3. Upload the new ZIP archive and edit metadata if necessary.
4. Change the Publication date.
5. Follow the steps above before saving and publishing.

If you have any questions about replication package submission, please contact the [Data Editor]({{ site.baseurl }}/editor/).
