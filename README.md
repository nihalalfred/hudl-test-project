# Hudl Login Automation

Test automation suite for Hudl login functionality using Playwright and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Chrome browser

### Installation

```bash
npm install
npx playwright install
```

## Environment Setup
Copy .env.example to .env

Add your Hudl test credentials:

```bash
HUDL_EMAIL=your_test_email@example.com
HUDL_PASSWORD=your_test_password
HUDL_BASE_URL=https://www.hudl.com
```

## Running Tests

```bash
# Run all tests
npm run test

# Run tests in headed mode (visible browser)
npm run test:headed

# View test report
npm run test:report
```