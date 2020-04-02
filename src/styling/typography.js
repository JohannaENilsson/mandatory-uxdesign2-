const Typography = require('typography');

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Playfair Display', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Gentium Basic', 'serif'],
    // See below for the full list of options.
  })
  
  // Output CSS as string.
  console.log(typography.toString());
  
