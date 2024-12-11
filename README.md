# Triangle-calculator_Typescript-Playwright
This project is testing rest api endpoints using typescript/playwright framework

# Setup and Guide

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
<img width="746" alt="10" src="https://github.com/user-attachments/assets/a7e3ebe1-5884-4909-a0b3-46011c4b6ab1" />


https://github.com/user-attachments/assets/c4117d85-bb19-447a-84a6-2a8b54ebfcf7

### Step 5: ### Installing and generating allure report

- go to package.json , Add "allure-playwright": "^3.0.7" inside dev dependencies.
- go to playwright.config.ts , Add reporter: [["allure-playwright"]]
- npm install @playwright/test allure-playwright
- npx playwright tests
- npm install -D allure-commandline
- allure generate ./allure-results --clean
- allure open

- 

<img width="959" alt="9" src="https://github.com/user-attachments/assets/d65c2e7a-e8b4-486a-9d3e-8c436435c3b0" />



https://github.com/user-attachments/assets/541ce6b1-254f-4567-b6f3-388a6da14a07



