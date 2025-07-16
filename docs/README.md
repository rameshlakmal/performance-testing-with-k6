## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Generating Reports](#generating-reports)
- [Script Details](#script-details)
- [References](#references)

## Overview

This project provides a set of performance testing scripts using [k6](https://k6.io/), a modern load testing tool for developers and testers. The repository includes example scripts for the JPetStore demo application and documentation for running and reporting on tests.

## Project Structure

```
JPetStore-Load-Test.js     # Load test for JPetStore demo app
JPetStore-Soak-Test.js     # Soak test for JPetStore
JPetStore-Spike-Test.js    # Spike test for JPetStore
JPetStore-Stress-Test.js   # Stress test for JPetStore
docs/                      # Documentation (README, index.html)
.github/                   # GitHub workflows
.gitignore                 # Git ignore file
```

## Getting Started

1. **Install k6**
   - Download the [k6 binary](https://grafana.com/docs/k6/latest/set-up/install-k6/) for your OS.
2. **Clone this repository**

   ```sh
   git clone https://github.com/rameshlakmal/performance-testing-with-k6

   ```

3. **Install dependencies**
   - No dependencies required for basic k6 usage.

## Running Tests

To run a test script, use the following command:

```sh
k6 run <script name.js>
```

For example:

```sh
k6 run JPetStore-Load-Test.js
k6 run JPetStore-Soak-Test.js
k6 run JPetStore-Spike-Test.js
k6 run JPetStore-Stress-Test.js
```

## Script Details

- **JPetStore-Load-Test.js**: Load test for the Swagger Petstore API, simulating a ramp-up to 100 users, steady load, and ramp-down. Checks `/store/inventory` endpoint for 200 status and enforces a 99% threshold under 150ms.
- **JPetStore-Soak-Test.js**: Soak test for JPetStore, designed to test system stability over an extended period.
- **JPetStore-Spike-Test.js**: Spike test for JPetStore, simulating sudden increases in load.
- **JPetStore-Stress-Test.js**: Stress test for JPetStore, pushing the system beyond normal load to find breaking points.

## Generating Reports

k6 outputs results to the console by default. To generate HTML reports, you can use third-party tools such as [k6-reporter](https://github.com/benc-uk/k6-reporter):

### 1. k6 Web Dashboard

k6 provides a built-in web dashboard that can be enabled and exported as an HTML report. This is the most convenient way to get a detailed, interactive report.

**To generate an HTML report using the k6 web dashboard:**

```sh
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run <script.js>
```

- `K6_WEB_DASHBOARD=true` enables the web dashboard feature.
- `K6_WEB_DASHBOARD_EXPORT=html-report.html` exports the dashboard as a standalone HTML file after the test run.
- Replace `<script.js>` with your test script (e.g., `JPetStore-Load-Test.js`).

After running the command, open `html-report.html` in your browser to view the interactive report.

### 2. K6 HTML Report Exporter

k6 provides a built-in web dashboard that can be enabled and exported as an HTML report. This is the most convenient way to get a detailed, interactive report.

**To generate an HTML report using the K6 HTML Report Exporter:**

Import the Reporter Module

```js
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
```

Add this outside the default test function

```js
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
```

After test execution, a user-friendly HTML report will be saved to the filesystem.

## References

- [k6 Documentation](https://grafana.com/docs/k6/latest/)
- [k6 Scripting API](https://k6.io/docs/javascript-api/)
- [k6 GitHub Repository](https://github.com/grafana/k6)

---
