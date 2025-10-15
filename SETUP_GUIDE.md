# 🚀 BrightEdge Digital - Setup Guide

## Prerequisites

Before you start, make sure you have these installed on your Windows laptop:

### 1. **Node.js** (Required)
- Download from: https://nodejs.org/
- Choose the **LTS (Long Term Support)** version
- Download the Windows Installer (.msi)
- Run the installer and follow the setup wizard
- **Important:** Check the box that says "Automatically install necessary tools"

### 2. **Git** (Required)
- Download from: https://git-scm.com/download/win
- Run the installer
- Use default settings (just keep clicking "Next")

### 3. **Code Editor** (Recommended)
- VS Code: https://code.visualstudio.com/
- Or any text editor you prefer

---

## 📥 Installation Steps

### Step 1: Verify Node.js and npm Installation

Open **Command Prompt** or **PowerShell** and type:

```bash
node --version
```
You should see something like: `v20.x.x` or `v18.x.x`

Then type:
```bash
npm --version
```
You should see something like: `10.x.x` or `9.x.x`

If you see version numbers, you're good to go! ✅

---

### Step 2: Clone the Repository

1. **Open Command Prompt or PowerShell**
2. Navigate to where you want to save the project (e.g., Desktop):
   ```bash
   cd Desktop
   ```

3. **Clone the repository:**
   ```bash
   git clone https://github.com/Iamabdulsalam786/BrightEdge.git
   ```

4. **Enter the project folder:**
   ```bash
   cd BrightEdge
   ```

---

### Step 3: Install Dependencies

Inside the project folder, run:

```bash
npm install
```

⏳ **This will take 1-2 minutes.** It downloads all required packages.

You'll see a progress bar and lots of text scrolling. Wait until it finishes and you see the command prompt again.

---

### Step 4: Run the Development Server

Once installation is complete, start the development server:

```bash
npm run dev
```

You should see something like:

```
VITE v7.1.10  ready in 221 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

---

### Step 5: View the Website

1. **Open your web browser** (Chrome, Firefox, Edge, etc.)
2. Go to: **http://localhost:5173/**
3. The BrightEdge Digital website should load! 🎉

---

## 🛑 Stopping the Server

To stop the development server:

- Press `Ctrl + C` in the Command Prompt/PowerShell
- Type `Y` if asked to terminate
- Or just close the Command Prompt window

---

## 🔄 Running It Again Later

After the first setup, you only need to:

1. Open Command Prompt/PowerShell
2. Navigate to the project:
   ```bash
   cd Desktop/BrightEdge
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. Open browser to: http://localhost:5173/

**No need to run `npm install` again!**

---

## ❗ Common Issues & Solutions

### Issue 1: "npm is not recognized"
**Solution:** Node.js wasn't installed properly. Reinstall Node.js and restart your computer.

### Issue 2: Port 5173 is already in use
**Solution:** The server is already running somewhere. Close all Command Prompt windows and try again.

### Issue 3: Installation takes forever
**Solution:** Your internet might be slow. Just wait, it will finish eventually.

### Issue 4: Permission errors
**Solution:** Run Command Prompt as Administrator:
- Right-click on Command Prompt
- Select "Run as administrator"
- Try the installation again

### Issue 5: The website shows blank page
**Solution:** 
- Hard refresh: Press `Ctrl + Shift + R` in your browser
- Clear browser cache and reload

---

## 📁 Project Structure

```
BrightEdge/
├── src/
│   ├── components/      # React components
│   │   ├── Header/     # Navigation header
│   │   ├── About/      # About section
│   │   └── Services/   # Services section
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── package.json        # Dependencies list
└── README.md          # Project documentation
```

---

## 🌐 Building for Production

If you want to build the final production version:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

---

## 💡 Tips

- **VS Code Terminal:** If you use VS Code, you can use the built-in terminal instead of Command Prompt
  - Open VS Code
  - Open the BrightEdge folder
  - Press `` Ctrl + ` `` to open terminal
  - Run `npm run dev`

- **Auto-Refresh:** When you save changes to the code, the website automatically refreshes in the browser!

---

## 🆘 Need Help?

If you encounter any issues:

1. Check if Node.js is installed: `node --version`
2. Check if you're in the correct folder: `dir` (should show package.json)
3. Try deleting `node_modules` folder and running `npm install` again
4. Google the error message - most issues have been solved before!

---

## 📞 Contact

For any questions, reach out to the developer!

---

## ✅ Quick Checklist

- [ ] Node.js installed
- [ ] Git installed
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Server running (`npm run dev`)
- [ ] Website opens at http://localhost:5173/

**If all boxes are checked, you're all set!** 🎉

