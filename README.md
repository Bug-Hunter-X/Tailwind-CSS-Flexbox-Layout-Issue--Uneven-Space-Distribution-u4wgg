# Tailwind CSS Flexbox Layout Issue

This repository demonstrates a common issue encountered when using Tailwind CSS's `w-1/2` class within a flexbox container.  While intending to create two equally sized divs, inconsistencies can arise due to rounding errors and varying content lengths.

The `bug.js` file shows the problematic code, and `bugSolution.js` offers a solution using techniques like `flex-grow` or specifying widths more precisely.