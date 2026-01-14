# ects-mcenjoy
This project provides a simple JavaScript class to convert numerical scores into the European Credit Transfer and Accumulation System (ECTS) grades.

## Installation

Install ects-converter with npm

```bash
  npm install ects-mcenjoy
```

## Usage/Examples

```javascript
const ECTS = require("ects-mcenjoy");

const studentScore = new ECTS(85);
console.log(studentScore.ectsFromScore()); // Output: "B"
```
