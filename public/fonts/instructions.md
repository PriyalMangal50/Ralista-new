# Font Installation Instructions

To install the custom fonts (Glancyr and Linear Grotesk), please follow these steps:

## Step 1: Create Font Directories
 the following folder structure in the `public` directory:
```
public/Create
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
   - `glancyr-glancyr-thin-200.otf` (rename to `Glancyr-Thin.otf`)
   - `glancyr-glancyr-light-200.otf` (rename to `Glancyr-Light.otf`)
   - `glancyr-glancyr-semibold-600.otf` (rename to `Glancyr-SemiBold.otf`)
   - `glancyr-glancyr-extra-light-100.otf` (rename to `Glancyr-ExtraLight.otf`)

3. From the `ttf` folder, you can also copy these files as alternatives:
   - `glancyr-glancyr-regular-400.ttf`
   - `glancyr-glancyr-medium-500.ttf`
   - `glancyr-glancyr-bold-700.ttf`
   - `glancyr-glancyr-thin-200.ttf`
   - `glancyr-glancyr-light-200.ttf`
   - `glancyr-glancyr-semibold-600.ttf`
   - `glancyr-glancyr-extra-light-100.ttf`

### For Linear Grotesk:
1. Extract your `linear-grotesk-modern-sans-serif-font-family-wjvvcx9.zip` file
2. Navigate to `desktop fonts/otf` folder
3. Copy these files to `public/fonts/linear-grotesk/`:
   - `LinearGrotesk-Regular.otf`
   - `LinearGrotesk-Medium.otf`
   - `LinearGrotesk-Bold.otf`
   - `LinearGrotesk-Thin.otf`
   - `LinearGrotesk-Light.otf`
   - `LinearGrotesk-ExtraLight.otf`
   - `LinearGrotesk-Black.otf`
   - `LinearGrotesk-Italic.otf`
   - `LinearGrotesk-MediumItalic.otf`
   - `LinearGrotesk-BoldItalic.otf`
   - `LinearGrotesk-ThinItalic.otf`
   - `LinearGrotesk-LightItalic.otf`
   - `LinearGrotesk-ExtraLightItalic.otf`
   - `LinearGrotesk-BlackItalic.otf`
   - `Linear Grotesk-SemiBold.otf`
   - `LinearGrotesk-SemiBoldItalic.otf`

## Step 3: Font Declarations
The font faces are already declared in `src/index.css` and will work once you place the font files in the correct locations.

## Current Status
The fonts are currently loaded from Google Fonts as fallbacks. Once you add the custom font files, they will take precedence.