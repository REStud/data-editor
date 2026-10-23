---
# Page settings
layout: default
keywords:
comments: false
permalink: /synthetic-data/

# Hero section
title: Submitting simulated confidential data
description: What to provide when you have a data exemption and cannot give the Data Editor access to your confidential data.

# Page navigation
page_nav:
    prev:
        content: Preparing the package
        url: '/package-howto/'
    next:
        content: Uploading to Zenodo
        url: '/zenodo/'
---

*This page is adapted, with gratitude, from the [Procedure for Simulated Confidential Data](https://jpedataeditor.github.io/confidential.html) of the [Journal of Political Economy Data Editor](https://jpedataeditor.github.io/). The example scripts are reproduced from the same source.*

When you have been granted a data exemption (see the [Data and Code Availability Policy]({{ site.baseurl }}/policy/)) and cannot provide the Data Editor with temporary access to your confidential data, you must supply a simulated (synthetic) dataset together with the corresponding simulated output. This page explains what to do, with examples and instructions for using an AI coding assistant.

**If granting temporary access to the data is at all feasible, it is strongly preferred.** Please [contact the Data Editor]({{ site.baseurl }}/editor/) to discuss the options.

# What the Data Editor needs to check

The goal is not to reproduce your published results. It is to verify that your code is complete, self-contained, and logically consistent: given simulated input data with the right structure, the code runs without errors and produces all outputs (tables, figures, in-text numbers) described in the paper. Of course, these outputs will differ from the ones in your paper.

# Steps for authors

Follow these steps in order.

1. **Identify every confidential raw input file** your code reads. List them in your README.
2. **Create a dedicated simulation script** that generates a simulated version of each file. The simulated data must satisfy the following:
   - *Same variable names and types:* column names, data types (integer, float, string, date), and units must match the real data exactly, because your code references them by name.
   - *Same file format:* if your code reads a `.dta` file, supply a `.dta` file; if it reads a `.csv`, supply a `.csv`.
   - *Dimensionality:* the simulated data must have the same number of variables (columns) as the real data. It may have fewer observations (rows), as long as your programs still run correctly. Supply a simple document (`.csv` or `.md`) listing the number of rows and columns of each confidential dataset you use.
   - *Sign and support restrictions:* if a variable is always positive in the real data (e.g. income, price, age), simulate it as positive. If a variable is a dummy, simulate it as 0/1. If a categorical variable takes values {1, 2, 3}, simulate it within that set. You do not need to match the distribution, but violating the support can cause downstream failures.
   - *Coverage of all code paths:* make sure the simulated data contains at least one observation in each group or cell your code conditions on (e.g. all regions, all time periods, all treatment arms).
3. **Set a random seed** at the top of your simulation script so that the simulated data is exactly reproducible.
4. **Run your full pipeline on the simulated data**, from the first cleaning script to the last output script. Fix any errors that arise. Do not skip any script.
5. **Collect the simulated output.** Save every table, figure, and in-text number produced by the simulated run in an `output-simulated/` folder (or an equivalent, clearly labelled folder) inside your replication package.
6. **Include the simulation script** in your replication package (e.g. in `code/simulate/`) so the Data Editor can inspect it and, if needed, regenerate the simulated data.
7. **Document everything in your README:** which files are simulated, how they were generated (with a pointer to the simulation script), and that the `output-simulated/` folder contains the expected outputs of the simulated run.
8. **Submit your package.** The Data Editor will run your pipeline on the simulated data and verify that the output matches what is in `output-simulated/`.

**Important:** the simulated output you provide in step 5 is the reference. The Data Editor must be able to run your code on the simulated data and obtain output identical to your reference output. Make sure your code is deterministic given the same simulated inputs (set seeds for any stochastic steps).

# How to simulate data: examples

The following examples create a simulated firm-year panel with variables `id` (firm identifier), `year`, `revenue` (always positive), `employment` (positive integer), `treated` (binary), and `sector` (categorical, values 1–4).

## Stata

[Download `simulate_confidential.do`]({{ site.baseurl }}/assets/simulate/simulate_confidential.do)

```stata
clear
set seed 42

* --- dimensions ---
local n_firms  200
local n_years  10
local N = `n_firms' * `n_years'

set obs `N'

* firm and year identifiers
gen id   = ceil(_n / `n_years')
gen year = 1990 + mod(_n - 1, `n_years')

* positive continuous variable (log-normal)
gen revenue    = exp(rnormal(10, 1))

* positive integer
gen employment = max(1, round(exp(rnormal(4, 0.8))))

* binary treatment (assigned at firm level so it is constant within firm)
bysort id (year): gen treated = (runiform() < 0.4) if _n == 1
bysort id: replace treated = treated[1]

* categorical sector (1–4), assigned at firm level
bysort id (year): gen sector = ceil(runiform() * 4) if _n == 1
bysort id: replace sector = sector[1]

* label and save
label variable revenue    "Annual revenue (USD)"
label variable employment "Number of employees"
label variable treated    "Treatment indicator"
label variable sector     "Sector (1–4)"

save "data/raw/simulated_panel.dta", replace
```

## R

[Download `simulate_confidential.R`]({{ site.baseurl }}/assets/simulate/simulate_confidential.R)

```r
set.seed(42)

n_firms <- 200
n_years <- 10

panel <- expand.grid(
  id   = 1:n_firms,
  year = 1990:(1990 + n_years - 1)
)

# firm-level variables (constant within firm)
firm_chars <- data.frame(
  id       = 1:n_firms,
  treated  = as.integer(runif(n_firms) < 0.4),
  sector   = sample(1:4, n_firms, replace = TRUE)
)

panel <- merge(panel, firm_chars, by = "id")

# observation-level variables
panel$revenue    <- exp(rnorm(nrow(panel), mean = 10, sd = 1))   # always positive
panel$employment <- pmax(1L, round(exp(rnorm(nrow(panel), 4, 0.8))))  # positive integer

panel <- panel[order(panel$id, panel$year), ]

# save as csv (or use haven::write_dta for .dta)
write.csv(panel, "data/raw/simulated_panel.csv", row.names = FALSE)
```

## Python

[Download `simulate_confidential.py`]({{ site.baseurl }}/assets/simulate/simulate_confidential.py)

```python
import numpy as np
import pandas as pd

rng = np.random.default_rng(seed=42)

n_firms = 200
n_years = 10
years   = range(1990, 1990 + n_years)

# firm-level characteristics
firms = pd.DataFrame({
    "id":      np.arange(1, n_firms + 1),
    "treated": rng.binomial(1, 0.4, n_firms),
    "sector":  rng.integers(1, 5, n_firms),   # 1, 2, 3, or 4
})

# expand to panel
panel = firms.loc[firms.index.repeat(n_years)].copy()
panel["year"] = list(years) * n_firms
panel = panel.reset_index(drop=True)

# observation-level variables
panel["revenue"]    = np.exp(rng.normal(10, 1, len(panel)))          # always positive
panel["employment"] = np.maximum(1, rng.lognormal(4, 0.8, len(panel)).round().astype(int))

panel = panel.sort_values(["id", "year"]).reset_index(drop=True)

# save
panel.to_csv("data/raw/simulated_panel.csv", index=False)
```

# Using an AI coding assistant

If you use an AI coding assistant (Claude, ChatGPT, Copilot, Cursor, …), it can write the simulation script for you, but only your code and documentation should ever reach the model, never the confidential data. "The model never saw the raw rows" is not automatically the same as "this is safe": aggregated statistics can still leak information about individual records, and some data use agreements prohibit sending any derived information off your machine. The approach below is designed around both risks.

## The hard rule: no raw data to the model

An AI model, whether local or API-based, must never be given read access to your confidential raw data files, including through a coding agent that can browse your filesystem on its own.

- Give the agent read access only to your code, README, and codebook/documentation, not to the data directory.
- If the agent wants summary statistics to make the simulated distributions more realistic, do not let it compute them itself. Compute the summary yourself (see below) and hand over only the sanitized result.
- State the rule explicitly in your prompt: "Never open, read, or load any file under `data/raw/`. If you need information about the actual data, stop and ask me for permission first." Treat this as a backstop, not the real control. The real control is removing the agent's filesystem permission to that directory entirely, with a deny rule in your coding tool's settings or by running the agent in a sandbox where the raw files are never available. A prompt instruction can be ignored by a model; a missing file permission cannot.

For example, in Claude Code you can add a `deny` rule for your raw-data path to `.claude/settings.json` (project-level) or `~/.claude/settings.json` (user-level), adjusting the path to wherever your confidential inputs live:

```json
{
  "permissions": {
    "deny": [
      "Read(./data/raw/**)",
      "Bash(cat:./data/raw/**)",
      "Bash(grep:./data/raw/**)"
    ]
  }
}
```

## Optional: calibrate with a disclosure-safe summary

Guessing distributions from code and documentation alone is often good enough. That is the default, and it carries no data-exposure risk. If you want the simulated data to track the real distributions more closely, compute a sanitized summary yourself (e.g. with `skimr::skim()` in R, `summarize` in Stata, or `.describe()` in Python) and hand only that to the model, never the underlying file.

Before sharing that summary with any AI tool, strip it down:

- *Drop identifiers and free text* from the summary entirely (firm names, addresses, any string field).
- *Suppress exact extremes.* An exact minimum or maximum is often one real record. Round to a plausible range instead of passing through the true value.
- *Mask small cells.* Any category, group, or summary row backed by very few observations (a common disclosure-control threshold is n < 5) effectively identifies individual records. Drop or coarsen these rather than reporting them.
- *Check your data use agreement.* Many restricted-data agreements (administrative records, Census-type enclaves, IRB-governed data) prohibit transmitting any derived information to a third-party service, aggregated or not. Sanitizing the summary does not override a stricter contractual restriction. Confirm this is permitted before proceeding, and when in doubt, don't send it.

Only once you have produced that sanitized file should the agent be allowed to read it, and only that file, never the original data.

**Tip:** the simulation script does not need to be written in the same language as your analysis. Use whatever language you find most convenient. All that matters is that it produces output files in the exact format and at the exact paths your analysis code expects to read.

## Prompt

Copy the prompt below, fill in the bracketed sections with a description of your actual data (not the data itself), and paste it into your preferred tool.

```text
You are helping a researcher prepare a simulated version of a confidential dataset for a journal reproducibility check.

Task: Write a complete simulation script that generates fake versions of the confidential
input files listed below. The fake data will be used in place of the real data so the full
analysis pipeline can be run end-to-end by an independent Data Editor.

Hard rule: you must never open, read, or load any confidential raw data file, by any means
(no read_csv/read_dta/read.table or equivalent on the paths listed below, no filesystem
browsing into the data directory). If you need information about the actual data beyond
what is given here, stop and ask for permission before doing anything else — do not try to
read it yourself. The structure below (and, if provided, a sanitized summary file) is all
you should rely on.

Choose the most convenient language for this task — it does NOT need to be the same language
as the analysis pipeline. Good choices include Python, R, Julia, Stata, or any language you
are comfortable with. The only constraint is that the output files are saved in the exact
format and at the exact paths that the analysis code expects to read.

Requirements:
- Same variable names and data types as the real data
- You can use a smaller number of rows than the real data. Ask the user for the minimum required rows for each dataset.
- Same file format and path as the real data (e.g. a .dta file at data/raw/file.dta)
- Respect sign and support restrictions:
    * Always-positive variables (income, price, age) → simulate as positive (e.g. log-normal)
    * Binary variables → simulate as 0/1
    * Categorical variables taking values {a, b, c} → simulate within that set
- Ensure at least one observation in every group/cell the code conditions on
- Set random seed 42 at the top of the script for reproducibility

My confidential input files:
[LIST EACH FILE AND DESCRIBE ITS VARIABLES, e.g.:
  File: data/raw/admin_panel.dta  (read by Stata analysis code)
  Structure: firm-year panel, ~50,000 obs, 200 firms, 1990–2014
  Variables:
    - firm_id (integer, identifier)
    - year (integer, 1990–2014)
    - revenue (float, always positive, USD thousands)
    - employment (integer, always >= 1)
    - treated (binary 0/1, constant within firm)
    - region (categorical, values 1–5)]

Groups/cells my code conditions on (must all appear in simulated data):
[LIST e.g. all 5 regions, all years, both treatment arms]

[OPTIONAL — only if you have produced a sanitized summary as described above:
Here is a disclosure-safe summary of the real data's distributions (identifiers removed,
extremes rounded, small cells suppressed) to calibrate the simulation more closely:
<paste sanitized summary here>]

Please write the complete simulation script and save output to the same path my code expects.
```
