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

When you have been granted a data exemption (see the [Data and Code Availability Policy]({{ site.baseurl }}/policy/)) and cannot provide the Data Editor with temporary access to your confidential data, you must supply a simulated (synthetic) dataset together with the corresponding simulated output. This page explains what to do, with examples.

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

---

*This page is adapted, with gratitude, from the [Procedure for Simulated Confidential Data](https://jpedataeditor.github.io/confidential.html) of the [Journal of Political Economy Data Editor](https://jpedataeditor.github.io/). The example scripts are reproduced from the same source.*
