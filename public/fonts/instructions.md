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
2. Copy the `.otf` files from the `otf` folder to `public/fonts/glancyr/`
3. Rename them to:
   - `Glancyr-Regular.otf`
   - `Glancyr-Medium.otf` 
   - `Glancyr-Bold.otf`

### For Linear Grotesk:
1. Extract your `linear-grotesk-modern-sans-serif-font-family-wjvvcx9.zip` file
2. Copy the `.otf` files from the `otf` folder to `public/fonts/linear-grotesk/`
3. Rename them to:
   - `LinearGrotesk-Regular.otf`
   - `LinearGrotesk-Medium.otf`
   - `LinearGrotesk-Bold.otf`

## Step 3: Font Declarations
The font faces are already declared in `src/index.css` and will work once you place the font files in the correct locations.

## Current Status
The fonts are currently loaded from Google Fonts as fallbacks. Once you add the custom font files, they will take precedence.