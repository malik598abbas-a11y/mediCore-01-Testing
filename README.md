# MediCore LifeSciences - Modern Pharmaceutical & Healthcare CMS

A modern, responsive, high-performance Content Management System (CMS) designed specifically for Medical, Pharmaceutical, and Healthcare enterprises. Built purely with **HTML5, CSS3, and JavaScript (ES6+)**.

---

## 🌟 Key Features & Modules

### 1. Executive Analytics Dashboard
- **Real-time Key Metrics:** Active formulations count, clinical trials in progress, affiliated doctors & labs, pending hospital B2B procurement requests.
- **Interactive Charts (Chart.js):**
  - Monthly Therapeutic Production & Demand trends (Tablets/Capsules vs Sterile IVs).
  - Dynamic Therapeutic Portfolio Distribution (Cardiology, Antibiotics, Oncology, etc.).
- **Live Audit & Activity Feed:** Recent clinical updates, batch stability logs, and quick action shortcuts.

### 2. Medicines & Products Management (Core CMS)
- Complete catalog with: Brand Name, Generic Formulation, Category, Dosage Form, Batch Number, Stock, Price (PKR), and DRAP/FDA Regulatory Status.
- **Full CRUD Capabilities:**
  - Add new medicines with validation.
  - Edit existing medicines inline.
  - Delete formulations with confirmation.
- Filter by therapeutic category and approval status.
- Real-time search across brand name, generic formula, and batch code.
- **CSV Export:** One-click data export of entire pharmaceutical inventory.

### 3. Clinical Research & Medical Publications
- Manage clinical trials, whitepapers, press releases, and health advisories.
- Track Clinical Trial IDs (e.g., NCT identifiers) and peer-review status.
- Add and delete scientific papers and public advisories.

### 4. Doctors & Affiliated Physicians Network
- Comprehensive directory of Key Opinion Leaders (KOLs), investigators, and consulting specialists.
- Filter by medical specialty (Cardiology, Oncology, Pediatrics, etc.) and hospital affiliation.
- PMDC registration number tracking.

### 5. Institutional B2B Orders & Sample Dispatches
- Review supply requests from hospitals and medical institutes.
- Live status workflow updates: `Pending Review` ➔ `Pharmacist Verified` ➔ `Dispatched` ➔ `Rejected`.
- Export inquiries to CSV.

### 6. Regulatory Audit & Quality Compliance (GMP / DRAP / WHO)
- WHO Good Manufacturing Practices (GMP) and ISO 9001:2015 tracking.
- Live stability chamber temperature & humidity monitoring logs.
- Quality assay clearance indicators.

### 7. UI / UX Design & Aesthetics
- **Healthcare Color Palette:** Professional medical sapphire (`#0284c7`), clean teal (`#0d9488`), and emerald accents.
- **Dark Mode / Light Mode:** Instant toggle with automatic local storage persistence.
- **Responsive Layout:** Optimized for desktop, tablets, and smartphones with mobile drawer navigation.
- **Toast Notifications System:** Instant feedback on user actions.
- **LocalStorage Data Persistence:** Works 100% in any browser without needing a complex backend setup or database installation.

---

## 🚀 How to Run the Project

1. Navigate to the project directory:
   ```
   C:\Users\HP\.gemini\antigravity\scratch\medical-cms
   ```
2. Double-click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari).
3. Alternatively, you can run a local development server:
   ```bash
   # Using Python 3
   python -m http.server 3000
   ```
   And visit `http://localhost:3000` in your browser.

---

## 📁 File Structure

```text
medical-cms/
├── index.html        # Main CMS Application layout & modals
├── styles.css        # Clean, modern healthcare UI styling & dark/light theme
├── app.js            # CMS logic, local storage DB engine, CRUD & charts
└── README.md         # Documentation & user guide
```
