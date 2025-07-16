# Performance Testing with k6

This project provides a collection of performance testing scripts and resources using [k6](https://k6.io/), a modern load testing tool for developers and testers. The repository includes example scripts, HAR file imports, and reporting utilities to help you test the performance and reliability of web applications and APIs.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Generating Reports](#generating-reports)
- [Example Scripts](#example-scripts)
- [References](#references)

## Overview
k6 is an open-source load testing tool for testing the performance of APIs, microservices, and websites. This project demonstrates how to use k6 with custom scripts and HAR file imports to simulate real user traffic and analyze system behavior under load.

## Project Structure
```
emp-k6-script.js         # Example k6 script for employee API
emp.js, emp2.js, emp3.js # Additional k6 scripts
emp.har, emp1.har, ...   # HAR files for test generation
JPetStore-*.js           # k6 scripts for JPetStore demo app
k6.exe                   # k6 executable (Windows)
docs/                    # Documentation
report/                  # Test reports
summary.html, html-report.html # Generated HTML reports
```

## Getting Started
1. **Install k6**
   - Download the [k6 binary](https://k6.io/docs/getting-started/installation/) for your OS or use the provided `k6.exe` (Windows).
2. **Clone this repository**
   ```sh
   git clone <repo-url>
   cd K6
   ```
3. **Install dependencies**
   - No dependencies required for basic k6 usage. For advanced reporting, ensure you have Node.js if you want to use additional tools.

## Running Tests
To run a test script, use the following command:

```sh
k6 run <script.js>
```

For example:

```sh
k6 run emp-k6-script.js
```

You can also import HAR files to generate scripts using k6’s [har-to-k6](https://k6.io/docs/using-k6/http-requests-from-har/) converter.

## Generating Reports
k6 outputs results to the console by default. To generate HTML reports:

1. Run the test and output results to a JSON file:
   ```sh
   k6 run <script.js> --out json=output.json
   ```
2. Use a reporting tool (e.g., [k6-reporter](https://github.com/benc-uk/k6-reporter)) to convert JSON to HTML:
   ```sh
   npx k6-reporter output.json
   ```
3. View the generated `summary.html` or `html-report.html` in your browser.

## Example Scripts
- `emp-k6-script.js`: Load test for employee API
- `JPetStore-Load-Test.js`: Load test for JPetStore demo
- `JPetStore-Stress-Test.js`: Stress test for JPetStore
- `JPetStore-Spike-Test.js`: Spike test for JPetStore
- `JPetStore-Soak-Test.js`: Soak test for JPetStore

## References
- [k6 Documentation](https://k6.io/docs/)
- [k6 Scripting API](https://k6.io/docs/javascript-api/)
- [k6 GitHub Repository](https://github.com/grafana/k6)

---
For questions or contributions, please open an issue or submit a pull request.
