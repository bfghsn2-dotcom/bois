# Artis'Olive Wood - Deployment Guide

## ✅ What Was Fixed

### Image Organization
- Created `images/` folder to organize all product photos
- Moved all 28 product images from root directory to `images/` folder
- Updated all image paths in `app.js` to use `images/` prefix

### Previous Issue
- Product images were in the root directory with no folder structure
- This could cause deployment issues and poor organization

### Updated File Structure
```
artis-olive-wood/
├── images/                    # NEW: Product photos folder
│   └── [28 product images]
├── index.html
├── products.html
├── app.js                     # UPDATED: Image paths now use images/filename.jpg
├── styles.css
├── logo.png
├── .gitignore                 # NEW: Ensures images are deployed
└── vercel.json                # NEW: Vercel deployment config
```

## 🚀 Deployment to Vercel

### Steps to Deploy
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Fix: Organize product images and update paths for Vercel"
   git push origin main
   ```

2. Connect to Vercel (if not already done)
3. Vercel will automatically detect and deploy your changes

### What to Check
- ✅ All 18 product photos should now display on the Products page
- ✅ Images should load on both local and Vercel environments
- ✅ Image paths are relative (no absolute paths)

## 🔍 Troubleshooting

If images still don't show on Vercel:

1. **Clear cache**: Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. **Check file permissions**: Ensure all files in the images folder are readable
3. **Verify git tracking**: Run `git status` to confirm all image files are staged
4. **Check browser console**: Open DevTools (F12) and check for 404 errors in the Network tab

## 📝 Testing Locally
Before deploying to Vercel, test locally:
1. Open `products.html` in your browser
2. All 18 products should display with their images
3. Images should load from the `images/` folder

## 📦 Files Modified/Created
- **Modified**: `app.js` - Updated all image paths to use `images/` prefix
- **Created**: `images/` folder - Contains all product photos
- **Created**: `.gitignore` - Prevents accidental exclusion of images
- **Created**: `vercel.json` - Optimizes deployment settings

---

**Note**: All image files are now properly organized and will be included in your Vercel deployment. The `vercel.json` file also configures proper caching for performance.
