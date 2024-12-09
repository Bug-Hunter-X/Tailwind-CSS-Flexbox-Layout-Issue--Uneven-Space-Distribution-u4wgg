```javascript
<div class="flex">
  <div class="bg-red-500 p-4 flex-grow"></div>
  <div class="bg-blue-500 p-4 flex-grow"></div>
</div>
```
This solution uses `flex-grow` to allow each div to occupy equal amounts of available space.  Alternatively, you could use specific width percentages with fractional values (e.g., `w-[49.99%]`) to address the rounding issues.  The solution will depend on the specific layout needs.