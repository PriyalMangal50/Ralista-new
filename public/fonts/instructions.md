# Font Installation Instructions

To install the custom fonts (Glancyr and Linear Grotesk), please follow these steps:

## Step 1: Create Font Directories
Create the following folder structure in the `public` directory:
```
public/
  fonts/
    glancyr/
    linear-grotesk/
```

## Step 2: Extract Font Files

### For Glancyr:
1. Extract your `glancyr.zip` file
2. From the `otf` folder, copy these files to `public/fonts/glancyr/`:
   - `glancyr-glancyr-regular-400.otf` (rename to `Glancyr-Regular.otf`)
   - `glancyr-glancyr-medium-500.otf` (rename to `Glancyr-Medium.otf`)
   - `glancyr-glancyr-bold-700.otf` (rename to `Glancyr-Bold.otf`)

### For Linear Grotesk:
1. Extract your `linear-grotesk-modern-sans-serif-font-family-wjvvcx9.zip` file
2. Navigate to `desktop fonts/otf` folder
3. Copy these files to `public/fonts/linear-grotesk/`:
   - `LinearGrotesk-Regular.otf` (keep same name)
   - `LinearGrotesk-Medium.otf` (keep same name)
   - `LinearGrotesk-Bold.otf` (keep same name)

## Step 3: Font Declarations
The font faces are already declared in `src/index.css` and will work once you place the font files in the correct locations.

## Current Status
The fonts are currently loaded from Google Fonts as fallbacks. Once you add the custom font files, they will take precedence.