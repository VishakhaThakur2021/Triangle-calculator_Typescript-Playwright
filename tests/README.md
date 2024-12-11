# Playwright and Typescript Testing Framework Setup and Guide

This guide explains how to set up a Playwright and Typescript testing framework, including folder structure, initial dependencies, and generating reports.

## Project Setup

### Step 1: Clone the project from github

- Clone the project from the repository into a folder

### Step 2: ### Prerequisites

- Make sure Node.js installed by typing "node -v" in terminal
- Download - https://nodejs.org/en

### Step 3: ### To initializes and install Playwright project with the latest version of the Playwright library.

- npm init playwright@latest

### Step 4: ### Run the tests

- go to terminal > go to project folder > npx playwright test

HTML report will be automatically generated in browser.

### Step 5: ### Installing and generating allure report

- go to package.json , Add "allure-playwright": "^3.0.7" inside dev dependencies.
- go to playwright.config.ts , Add reporter: [["allure-playwright"]]
- npm install @playwright/test allure-playwright
- npx playwright tests
- npm install -D allure-commandline
- allure generate ./allure-results --clean
- allure open
