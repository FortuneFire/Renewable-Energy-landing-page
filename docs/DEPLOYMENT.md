# Deployment Guide

## Overview
This project uses Git-based deployment with cPanel hosting. All updates are deployed from GitHub to the live server.

---

## System Architecture

- Source Control: GitHub
- Hosting: cPanel
- Live Site: power.pronouncedtech.com
- Deployment Method: Manual Pull via cPanel Git Version Control

---

## Folder Structure (Server)

/home/pronounc/public_html/power.pronouncedtech.com/

- index.html
- assets/
- css/
- js/

---

## Deployment Flow

1. Make changes locally
2. Commit changes
3. Push to GitHub
4. Open cPanel
5. Go to Git Version Control
6. Click "Pull or Deploy"
7. Refresh live site

---

## Git Workflow

git add .
git commit -m "Update site"
git push origin main

---

## Rules

- Do NOT edit files directly on server
- GitHub is the source of truth
- Always deploy via cPanel Pull

---

## Important Notes

- Ensure repository is linked in cPanel before deployment
- Ensure target folder is empty before initial clone
- Use Ctrl + F5 if changes do not appear

---

## Troubleshooting

### Changes not showing
- Clear browser cache
- Confirm correct folder path

### Pull fails
- Repo not linked properly in cPanel
- Wrong branch selected

### Clone error (folder not empty)
- Delete existing files or use a fresh folder