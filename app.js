/**
 * MediCore BioSciences - Enterprise Pharma & Healthcare CMS Engine
 * Next-Gen Interactive Controller
 */

const STORAGE_KEYS = {
  PRODUCTS: 'medicore_products_v2',
  ARTICLES: 'medicore_articles_v2',
  DOCTORS: 'medicore_doctors_v2',
  INQUIRIES: 'medicore_inquiries_v2',
  NOTIFICATIONS: 'medicore_notifications_v2',
  THEME: 'medicore_theme_v2',
  SETTINGS: 'medicore_settings_v2',
  PROD_VIEW: 'medicore_prod_view_v2'
};

// Comprehensive Seed Data
const SEED_DATA = {
  products: [
    {
      id: 'MED-101',
      name: 'Cardioxil Plus 50mg',
      generic: 'Metoprolol Tartrate + Hydrochlorothiazide',
      category: 'Cardiology',
      dosage: '50mg/12.5mg Film Coated Tablets',
      batch: 'BT-2026-902',
      stock: 4500,
      price: 680,
      status: 'Active',
      description: 'Selective beta-1 adrenergic receptor blocker and thiazide diuretic formulation for essential hypertension.'
    },
    {
      id: 'MED-102',
      name: 'Meropen-IV 1000mg',
      generic: 'Meropenem Trihydrate (Sterile)',
      category: 'Antibiotics',
      dosage: '1g Dry Powder for Infusion',
      batch: 'BT-2026-09A',
      stock: 1200,
      price: 2450,
      status: 'Active',
      description: 'Ultra-pure carbapenem antibacterial indicated for severe hospital-acquired pneumonia and intra-abdominal sepsis.'
    },
    {
      id: 'MED-103',
      name: 'OncoPlatin Bio 100mg',
      generic: 'Oxaliplatin Concentrate',
      category: 'Oncology',
      dosage: '100mg/20ml Concentrate Vial',
      batch: 'BT-2026-881',
      stock: 350,
      price: 18500,
      status: 'Under Review',
      description: 'Platinum-based antineoplastic chemotherapeutic agent for advanced colorectal carcinoma.'
    },
    {
      id: 'MED-104',
      name: 'Glucorid XR 850mg',
      generic: 'Metformin Hydrochloride (Extended Release)',
      category: 'Endocrinology',
      dosage: '850mg Sustained Release Tablets',
      batch: 'BT-2026-440',
      stock: 12500,
      price: 320,
      status: 'Active',
      description: 'First-line biguanide anti-hyperglycemic agent for Type 2 Diabetes Mellitus with low GI discomfort.'
    },
    {
      id: 'MED-105',
      name: 'NeuroCalm 10mg',
      generic: 'Escitalopram Oxalate USP',
      category: 'Analgesic',
      dosage: '10mg Film-Coated Tablet',
      batch: 'BT-2026-119',
      stock: 3200,
      price: 490,
      status: 'Active',
      description: 'High-affinity selective serotonin reuptake inhibitor (SSRI) for major depressive disorder and anxiety.'
    },
    {
      id: 'MED-106',
      name: 'Pediatrix Oral Drop',
      generic: 'Paracetamol + Zinc Glycinate',
      category: 'Pediatrics',
      dosage: '100mg/ml 15ml Liquid Drops',
      batch: 'BT-2026-302',
      stock: 0,
      price: 180,
      status: 'Out of Stock',
      description: 'Fast-acting pediatric antipyretic solution with immune-supportive chelated zinc.'
    }
  ],

  articles: [
    {
      id: 'ART-201',
      title: 'Phase-III Clinical Efficacy of Targeted Meropenem in Multi-Drug Resistant ICU Isolates',
      category: 'Clinical Trial',
      author: 'Dr. Asad Mahmood, MD, PhD (Infectious Diseases)',
      trialId: 'NCT-05829101',
      status: 'Published',
      date: '2026-10-15',
      summary: 'Multicenter double-blind randomized clinical trial analyzing pharmacokinetic-pharmacodynamic target attainment across 450 critical care patients suffering from carbapenem-resistant bacteremia.'
    },
    {
      id: 'ART-202',
      title: 'MediCore Receives DRAP & WHO-GMP Fast-Track Clearance for Sterile Injectables Line',
      category: 'Press Release',
      author: 'MediCore Corporate Affairs',
      trialId: 'PR-2026-11B',
      status: 'Published',
      date: '2026-10-22',
      summary: 'Official notification regarding the successful completion of ISO 17025 validation and aseptic isolator installation at our Sundar Industrial Estate manufacturing campus.'
    },
    {
      id: 'ART-203',
      title: 'Comparative Stability Profile of Sustained Release Metformin in Tropical Humidity (Zone IVb)',
      category: 'Whitepaper',
      author: 'Quality Assurance & Regulatory Directorate',
      trialId: 'WP-QA-8821',
      status: 'Peer Review',
      date: '2026-10-02',
      summary: '24-month accelerated degradation study evaluating moisture-barrier film coating integrity under 30°C and 75% relative humidity in commercial blister packages.'
    }
  ],

  doctors: [
    {
      id: 'DOC-301',
      name: 'Prof. Dr. Usman Khalid',
      license: 'PMDC-38491-P',
      specialty: 'Interventional Cardiology',
      hospital: 'Punjab Institute of Cardiology (PIC)',
      city: 'Lahore',
      status: 'Advisory Board'
    },
    {
      id: 'DOC-302',
      name: 'Dr. Fatima Zahra, FRCP',
      license: 'PMDC-49102-K',
      specialty: 'Infectious Diseases',
      hospital: 'Aga Khan University Hospital',
      city: 'Karachi',
      status: 'Clinical Investigator'
    },
    {
      id: 'DOC-303',
      name: 'Dr. Bilal Haroon, FCPS',
      license: 'PMDC-22819-I',
      specialty: 'Oncology',
      hospital: 'Shaukat Khanum Memorial Hospital',
      city: 'Peshawar',
      status: 'Active Collaborator'
    },
    {
      id: 'DOC-304',
      name: 'Dr. Ayesha Munir, MD',
      license: 'PMDC-55102-L',
      specialty: 'Endocrinology',
      hospital: 'Services Institute of Medical Sciences',
      city: 'Lahore',
      status: 'Active Collaborator'
    }
  ],

  inquiries: [
    {
      id: 'REQ-901',
      institution: 'Combined Military Hospital (CMH) Rawalpindi',
      contact: 'Brig. Dr. Tariq - Head of Pharmacy',
      medicine: 'Meropen-IV 1000mg',
      quantity: '5,000 Vials',
      date: '2026-10-27',
      status: 'Pending Review'
    },
    {
      id: 'REQ-902',
      institution: 'Indus Hospital & Health Network',
      contact: 'Dr. S. Qureshi - Procurement Lead',
      medicine: 'Cardioxil Plus 50mg',
      quantity: '12,000 Blisters',
      date: '2026-10-26',
      status: 'Pharmacist Verified'
    },
    {
      id: 'REQ-903',
      institution: 'Shifa International Hospitals Islamabad',
      contact: 'Director Clinical Trials',
      medicine: 'OncoPlatin Bio 100mg',
      quantity: '200 Research Samples',
      date: '2026-10-24',
      status: 'Dispatched'
    }
  ],

  notifications: [
    { id: 1, text: 'Batch BT-2026-09A passed 12-month stability purity assay (99.8%).', time: '10 mins ago', type: 'success' },
    { id: 2, text: 'New institutional tender request received from CMH Rawalpindi.', time: '1 hour ago', type: 'info' },
    { id: 3, text: 'Stock warning: Pediatrix Oral Drop inventory reached zero.', time: '3 hours ago', type: 'warn' }
  ]
};

// ==========================================================================
// MediCore BioSciences Engine
// ==========================================================================
class MediCoreCMS {
  constructor() {
    this.products = [];
    this.articles = [];
    this.doctors = [];
    this.inquiries = [];
    this.notifications = [];
    this.charts = {};
    this.productView = localStorage.getItem(STORAGE_KEYS.PROD_VIEW) || 'table';

    this.init();
  }

  init() {
    this.loadState();
    this.bindEvents();
    this.initTheme();
    this.handleRoute();
    this.renderAll();
    this.initCharts();
    this.startClock();
  }

  // Load from LocalStorage or Fallback
  loadState() {
    this.products = JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS)) || SEED_DATA.products;
    this.articles = JSON.parse(localStorage.getItem(STORAGE_KEYS.ARTICLES)) || SEED_DATA.articles;
    this.doctors = JSON.parse(localStorage.getItem(STORAGE_KEYS.DOCTORS)) || SEED_DATA.doctors;
    this.inquiries = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES)) || SEED_DATA.inquiries;
    this.notifications = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) || SEED_DATA.notifications;
    this.saveState();
  }

  saveState() {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(this.products));
    localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(this.articles));
    localStorage.setItem(STORAGE_KEYS.DOCTORS, JSON.stringify(this.doctors));
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(this.inquiries));
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(this.notifications));
  }

  // Live Digital Clock
  startClock() {
    const clockEl = document.getElementById('digitalClock');
    const update = () => {
      if (clockEl) {
        const now = new Date();
        clockEl.innerText = now.toLocaleTimeString('en-GB') + ' PKT';
      }
    };
    update();
    setInterval(update, 1000);
  }

  // ==========================================================================
  // Event Bindings
  // ==========================================================================
  bindEvents() {
    // Navigation
    document.querySelectorAll('.nav-item[data-tab]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.getAttribute('data-tab');
        this.switchTab(tab);
        document.getElementById('sidebar').classList.remove('show');
        document.getElementById('sidebarBackdrop').classList.remove('show');
      });
    });

    // Mobile sidebar toggle
    const openBtn = document.getElementById('openSidebarBtn');
    const closeBtn = document.getElementById('closeSidebarBtn');
    const backdrop = document.getElementById('sidebarBackdrop');
    const sidebar = document.getElementById('sidebar');

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        sidebar.classList.add('show');
        backdrop.classList.add('show');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('show');
        backdrop.classList.remove('show');
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', () => {
        sidebar.classList.remove('show');
        backdrop.classList.remove('show');
      });
    }

    // Theme toggle
    document.getElementById('themeToggleBtn').addEventListener('click', () => this.toggleTheme());

    // Dropdowns
    const notifBtn = document.getElementById('notificationBtn');
    const notifDropdown = document.getElementById('notificationDropdown');
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('show');
      document.getElementById('quickAddMenu').classList.remove('show');
    });

    const quickAddBtn = document.getElementById('quickAddBtn');
    const quickAddMenu = document.getElementById('quickAddMenu');
    quickAddBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      quickAddMenu.classList.toggle('show');
      notifDropdown.classList.remove('show');
    });

    document.addEventListener('click', () => {
      notifDropdown.classList.remove('show');
      quickAddMenu.classList.remove('show');
    });

    // Filter listeners
    document.getElementById('prodSearchInput').addEventListener('input', () => this.renderProducts());
    document.getElementById('prodCategoryFilter').addEventListener('change', () => this.renderProducts());
    document.getElementById('prodStatusFilter').addEventListener('change', () => this.renderProducts());

    document.getElementById('articleSearchInput').addEventListener('input', () => this.renderArticles());
    document.getElementById('articleCategoryFilter').addEventListener('change', () => this.renderArticles());

    document.getElementById('docSearchInput').addEventListener('input', () => this.renderDoctors());
    document.getElementById('docSpecialtyFilter').addEventListener('change', () => this.renderDoctors());

    document.getElementById('inquirySearchInput').addEventListener('input', () => this.renderInquiries());
    document.getElementById('inquiryStatusFilter').addEventListener('change', () => this.renderInquiries());

    // Global Search
    const globalSearch = document.getElementById('globalSearchInput');
    globalSearch.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const val = globalSearch.value.trim();
        if (val) {
          this.switchTab('products');
          document.getElementById('prodSearchInput').value = val;
          this.renderProducts();
          this.showToast(`Found formulations matching: "${val}"`, 'info');
        }
      }
    });

    // Routing
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    this.switchTab(hash);
  }

  switchTab(tabId) {
    const targetPane = document.getElementById(`tab-${tabId}`);
    if (!targetPane) return;

    document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (activeLink) activeLink.classList.add('active');

    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    targetPane.classList.add('active');

    // Breadcrumb text
    const names = {
      dashboard: 'Executive Dashboard',
      products: 'Medicines & Formulations',
      articles: 'Clinical Trials & R&D',
      doctors: 'Physician Network',
      inquiries: 'Hospital Procurement Orders',
      compliance: 'GMP & DRAP Regulatory Audit',
      settings: 'Corporate Settings'
    };
    if (names[tabId]) {
      document.getElementById('breadcrumbCurrent').innerText = names[tabId];
    }

    window.location.hash = tabId;
  }

  // ==========================================================================
  // Renderers & UI Updates
  // ==========================================================================
  renderAll() {
    this.updateStats();
    this.renderDashboardFeatured();
    this.renderProducts();
    this.renderArticles();
    this.renderDoctors();
    this.renderInquiries();
    this.renderNotifications();
  }

  updateStats() {
    const totalProd = this.products.length;
    const totalArt = this.articles.length;
    const totalDocs = this.doctors.length;
    const pendingInquiries = this.inquiries.filter(i => i.status === 'Pending Review').length;

    document.getElementById('statTotalProducts').innerText = totalProd;
    document.getElementById('statTotalArticles').innerText = totalArt;
    document.getElementById('statTotalDoctors').innerText = totalDocs;
    document.getElementById('statPendingInquiries').innerText = pendingInquiries;

    document.getElementById('badgeProductCount').innerText = totalProd;
    document.getElementById('badgePendingInquiries').innerText = pendingInquiries;
  }

  renderDashboardFeatured() {
    const tbody = document.getElementById('dashboardFeaturedProducts');
    const featured = this.products.slice(0, 4);

    tbody.innerHTML = featured.map(p => `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="item-icon icon-cyan" style="width: 32px; height: 32px; font-size: 1rem;"><i class="ri-capsule-line"></i></div>
            <div>
              <strong style="color: var(--text-main); font-weight: 700;">${p.name}</strong>
              <span class="table-sub-detail">${p.generic}</span>
            </div>
          </div>
        </td>
        <td><span class="badge-modern badge-indigo">${p.category}</span></td>
        <td><code>${p.batch}</code></td>
        <td>${p.dosage}</td>
        <td>${this.getStatusBadge(p.status)}</td>
        <td><strong>${p.stock.toLocaleString()}</strong> units</td>
      </tr>
    `).join('');

    // Recent articles timeline
    const timeline = document.getElementById('recentResearchTimeline');
    timeline.innerHTML = this.articles.slice(0, 3).map(a => `
      <div class="time-item">
        <div class="time-orb"><i class="ri-microscope-line"></i></div>
        <div class="time-body">
          <h5>${a.title}</h5>
          <p>${a.author} • <span class="badge-modern badge-cyan">${a.category}</span></p>
        </div>
      </div>
    `).join('');
  }

  getStatusBadge(status) {
    switch (status) {
      case 'Active':
      case 'Published':
      case 'Dispatched':
      case 'Active Collaborator':
        return `<span class="badge-modern badge-green"><i class="ri-checkbox-circle-fill"></i> ${status}</span>`;
      case 'Under Review':
      case 'Pending Review':
      case 'Peer Review':
      case 'Clinical Investigator':
        return `<span class="badge-modern badge-amber"><i class="ri-time-fill"></i> ${status}</span>`;
      case 'Out of Stock':
      case 'Rejected':
        return `<span class="badge-modern badge-rose"><i class="ri-close-circle-fill"></i> ${status}</span>`;
      default:
        return `<span class="badge-modern badge-cyan">${status}</span>`;
    }
  }

  // ==========================================================================
  // PRODUCTS / MEDICINES CRUD & VIEW SWITCHER
  // ==========================================================================
  setProductView(mode) {
    this.productView = mode;
    localStorage.setItem(STORAGE_KEYS.PROD_VIEW, mode);

    const btnTable = document.getElementById('viewModeTable');
    const btnGrid = document.getElementById('viewModeGrid');
    const tableWrap = document.getElementById('productTableView');
    const gridWrap = document.getElementById('productGridView');

    if (mode === 'grid') {
      btnGrid.classList.add('active');
      btnTable.classList.remove('active');
      tableWrap.style.display = 'none';
      gridWrap.style.display = 'grid';
    } else {
      btnTable.classList.add('active');
      btnGrid.classList.remove('active');
      tableWrap.style.display = 'block';
      gridWrap.style.display = 'none';
    }

    this.renderProducts();
  }

  renderProducts() {
    const search = document.getElementById('prodSearchInput').value.toLowerCase();
    const cat = document.getElementById('prodCategoryFilter').value;
    const stat = document.getElementById('prodStatusFilter').value;

    const filtered = this.products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search) || 
                          p.generic.toLowerCase().includes(search) || 
                          p.batch.toLowerCase().includes(search);
      const matchCat = cat === 'all' || p.category === cat;
      const matchStat = stat === 'all' || p.status === stat;
      return matchSearch && matchCat && matchStat;
    });

    document.getElementById('productsCountText').innerText = `Displaying ${filtered.length} of ${this.products.length} formulations`;

    // 1. Render Table View
    const tbody = document.getElementById('productsTableBody');
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="padding: 40px; text-align: center; color: var(--text-muted);">No pharmaceutical formulations match your query.</td></tr>`;
    } else {
      tbody.innerHTML = filtered.map(p => `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 10px;">
              <div class="item-icon icon-cyan" style="width: 34px; height: 34px;"><i class="ri-capsule-line"></i></div>
              <div>
                <strong style="color: var(--text-main); font-weight: 700;">${p.name}</strong>
                <span class="table-sub-detail">${p.generic}</span>
              </div>
            </div>
          </td>
          <td><span class="badge-modern badge-indigo">${p.category}</span></td>
          <td>${p.dosage}</td>
          <td><code>${p.batch}</code></td>
          <td>
            <span style="font-weight: 800; color: ${p.stock === 0 ? 'var(--rose)' : 'inherit'};">
              ${p.stock.toLocaleString()}
            </span> units
          </td>
          <td><strong>₨ ${p.price.toLocaleString()}</strong></td>
          <td>${this.getStatusBadge(p.status)}</td>
          <td class="text-right">
            <button class="action-round-btn" title="Edit Formulation" onclick="app.editProduct('${p.id}')">
              <i class="ri-edit-2-line"></i>
            </button>
            <button class="action-round-btn del-btn" title="Delete Formulation" onclick="app.deleteProduct('${p.id}')">
              <i class="ri-delete-bin-line"></i>
            </button>
          </td>
        </tr>
      `).join('');
    }

    // 2. Render Visual Grid Cards View
    const gridWrap = document.getElementById('productGridView');
    if (filtered.length === 0) {
      gridWrap.innerHTML = `<div style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">No medicines found.</div>`;
    } else {
      gridWrap.innerHTML = filtered.map(p => `
        <div class="med-card-visual">
          <div class="med-top-bar">
            <div class="med-orb"><i class="ri-capsule-fill"></i></div>
            ${this.getStatusBadge(p.status)}
          </div>
          <h4 class="med-brand-title">${p.name}</h4>
          <span class="med-generic">${p.generic}</span>

          <div class="med-meta-tags">
            <span class="badge-modern badge-indigo">${p.category}</span>
            <span class="badge-modern badge-cyan">Lot: ${p.batch}</span>
          </div>

          <p style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 16px; line-height: 1.5;">${p.dosage}</p>

          <div class="med-price-stock">
            <div>
              <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block;">Institutional Price</span>
              <span class="price-text">₨ ${p.price.toLocaleString()}</span>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block;">Inventory Stock</span>
              <span style="font-weight: 800; font-size: 1.1rem; color: ${p.stock === 0 ? 'var(--rose)' : 'var(--emerald)'};">${p.stock.toLocaleString()}</span>
            </div>
          </div>

          <div style="display: flex; gap: 8px; margin-top: 14px;">
            <button class="btn-glass" style="flex: 1; justify-content: center; font-size: 0.8rem; padding: 6px 12px;" onclick="app.editProduct('${p.id}')">
              <i class="ri-edit-line"></i> Edit
            </button>
            <button class="btn-glass" style="color: var(--rose); font-size: 0.8rem; padding: 6px 12px;" onclick="app.deleteProduct('${p.id}')">
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  openAddProductModal() {
    document.getElementById('productForm').reset();
    document.getElementById('prodFormId').value = '';
    document.getElementById('productModalTitle').innerText = 'Add New Formulation';
    this.openModal('productModal');
  }

  editProduct(id) {
    const prod = this.products.find(p => p.id === id);
    if (!prod) return;

    document.getElementById('prodFormId').value = prod.id;
    document.getElementById('prodName').value = prod.name;
    document.getElementById('prodGeneric').value = prod.generic;
    document.getElementById('prodCategory').value = prod.category;
    document.getElementById('prodDosage').value = prod.dosage;
    document.getElementById('prodBatch').value = prod.batch;
    document.getElementById('prodStock').value = prod.stock;
    document.getElementById('prodPrice').value = prod.price;
    document.getElementById('prodStatus').value = prod.status;
    document.getElementById('prodDescription').value = prod.description || '';

    document.getElementById('productModalTitle').innerText = `Edit: ${prod.name}`;
    this.openModal('productModal');
  }

  handleSaveProduct(e) {
    e.preventDefault();
    const id = document.getElementById('prodFormId').value;
    const name = document.getElementById('prodName').value.trim();
    const generic = document.getElementById('prodGeneric').value.trim();
    const category = document.getElementById('prodCategory').value;
    const dosage = document.getElementById('prodDosage').value.trim();
    const batch = document.getElementById('prodBatch').value.trim();
    const stock = parseInt(document.getElementById('prodStock').value, 10);
    const price = parseFloat(document.getElementById('prodPrice').value);
    const status = document.getElementById('prodStatus').value;
    const description = document.getElementById('prodDescription').value.trim();

    if (id) {
      const idx = this.products.findIndex(p => p.id === id);
      if (idx !== -1) {
        this.products[idx] = { ...this.products[idx], name, generic, category, dosage, batch, stock, price, status, description };
        this.showToast(`Updated formulation ${name} successfully!`, 'success');
      }
    } else {
      const newId = 'MED-' + Math.floor(100 + Math.random() * 900);
      this.products.unshift({ id: newId, name, generic, category, dosage, batch, stock, price, status, description });
      this.showToast(`New formulation ${name} added to catalog!`, 'success');
      this.addNotification(`Added formulation ${name} (Batch ${batch})`);
    }

    this.saveState();
    this.closeModal('productModal');
    this.renderAll();
    this.updateCharts();
  }

  deleteProduct(id) {
    const prod = this.products.find(p => p.id === id);
    if (!prod) return;

    if (confirm(`Remove formulation "${prod.name}" from catalog?`)) {
      this.products = this.products.filter(p => p.id !== id);
      this.saveState();
      this.renderAll();
      this.updateCharts();
      this.showToast(`Removed ${prod.name} from inventory.`, 'warning');
    }
  }

  exportProductsCSV() {
    let csv = 'ID,Name,Generic Formula,Category,Dosage,Batch,Stock,Price (PKR),Status\n';
    this.products.forEach(p => {
      csv += `"${p.id}","${p.name}","${p.generic}","${p.category}","${p.dosage}","${p.batch}",${p.stock},${p.price},"${p.status}"\n`;
    });
    this.downloadFile(csv, 'MediCore_Products_Catalog.csv', 'text/csv');
    this.showToast('Products exported to CSV!', 'success');
  }

  // ==========================================================================
  // ARTICLES & CLINICAL RESEARCH
  // ==========================================================================
  renderArticles() {
    const grid = document.getElementById('articlesListGrid');
    const search = document.getElementById('articleSearchInput').value.toLowerCase();
    const cat = document.getElementById('articleCategoryFilter').value;

    const filtered = this.articles.filter(a => {
      const matchSearch = a.title.toLowerCase().includes(search) || a.author.toLowerCase().includes(search);
      const matchCat = cat === 'all' || a.category === cat;
      return matchSearch && matchCat;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">No clinical research papers match your search.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(a => `
      <div class="modern-art-card">
        <div class="art-badge-row">
          <span class="badge-modern badge-indigo">${a.category}</span>
          ${this.getStatusBadge(a.status)}
        </div>
        <h4 class="art-title">${a.title}</h4>
        <p class="art-summary">${a.summary}</p>
        <div class="art-meta-foot">
          <div>
            <strong>${a.author}</strong>
            <span style="display: block; font-size: 0.72rem; color: var(--text-muted);">${a.date} ${a.trialId ? '• ' + a.trialId : ''}</span>
          </div>
          <div>
            <button class="action-round-btn del-btn" title="Delete Article" onclick="app.deleteArticle('${a.id}')">
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  openAddArticleModal() {
    document.getElementById('articleForm').reset();
    document.getElementById('artFormId').value = '';
    this.openModal('articleModal');
  }

  handleSaveArticle(e) {
    e.preventDefault();
    const title = document.getElementById('artTitle').value.trim();
    const category = document.getElementById('artCategory').value;
    const author = document.getElementById('artAuthor').value.trim();
    const trialId = document.getElementById('artTrialId').value.trim();
    const status = document.getElementById('artStatus').value;
    const summary = document.getElementById('artSummary').value.trim();
    const date = new Date().toISOString().split('T')[0];

    const newId = 'ART-' + Math.floor(200 + Math.random() * 800);
    this.articles.unshift({ id: newId, title, category, author, trialId, status, summary, date });

    this.saveState();
    this.closeModal('articleModal');
    this.renderAll();
    this.showToast(`Clinical publication posted successfully!`, 'success');
  }

  deleteArticle(id) {
    const art = this.articles.find(a => a.id === id);
    if (!art) return;
    if (confirm(`Remove publication "${art.title}"?`)) {
      this.articles = this.articles.filter(a => a.id !== id);
      this.saveState();
      this.renderAll();
      this.showToast('Article removed.', 'info');
    }
  }

  // ==========================================================================
  // PHYSICIANS DIRECTORY
  // ==========================================================================
  renderDoctors() {
    const tbody = document.getElementById('doctorsTableBody');
    const search = document.getElementById('docSearchInput').value.toLowerCase();
    const spec = document.getElementById('docSpecialtyFilter').value;

    const filtered = this.doctors.filter(d => {
      const matchSearch = d.name.toLowerCase().includes(search) || d.hospital.toLowerCase().includes(search) || d.license.toLowerCase().includes(search);
      const matchSpec = spec === 'all' || d.specialty === spec;
      return matchSearch && matchSpec;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="padding: 30px; text-align: center; color: var(--text-muted);">No physicians match the filter.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(d => `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="item-icon icon-emerald" style="width: 32px; height: 32px; font-size: 1rem;"><i class="ri-stethoscope-line"></i></div>
            <strong style="color: var(--text-main); font-weight: 700;">${d.name}</strong>
          </div>
        </td>
        <td><code>${d.license}</code></td>
        <td><span class="badge-modern badge-indigo">${d.specialty}</span></td>
        <td>${d.hospital}</td>
        <td>${d.city}</td>
        <td>${this.getStatusBadge(d.status)}</td>
        <td class="text-right">
          <button class="action-round-btn del-btn" title="Remove Physician" onclick="app.deleteDoctor('${d.id}')">
            <i class="ri-delete-bin-line"></i>
          </button>
        </td>
      </tr>
    `).join('');
  }

  openAddDoctorModal() {
    document.getElementById('doctorForm').reset();
    this.openModal('doctorModal');
  }

  handleSaveDoctor(e) {
    e.preventDefault();
    const name = document.getElementById('docName').value.trim();
    const license = document.getElementById('docLicense').value.trim();
    const specialty = document.getElementById('docSpecialty').value;
    const hospital = document.getElementById('docHospital').value.trim();
    const city = document.getElementById('docCity').value.trim();
    const status = document.getElementById('docStatus').value;

    const newId = 'DOC-' + Math.floor(300 + Math.random() * 700);
    this.doctors.unshift({ id: newId, name, license, specialty, hospital, city, status });

    this.saveState();
    this.closeModal('doctorModal');
    this.renderAll();
    this.showToast(`Physician ${name} registered successfully!`, 'success');
  }

  deleteDoctor(id) {
    const doc = this.doctors.find(d => d.id === id);
    if (!doc) return;
    if (confirm(`Remove physician ${doc.name}?`)) {
      this.doctors = this.doctors.filter(d => d.id !== id);
      this.saveState();
      this.renderAll();
      this.showToast(`Removed physician from directory.`, 'info');
    }
  }

  // ==========================================================================
  // INQUIRIES & B2B ORDERS
  // ==========================================================================
  renderInquiries() {
    const tbody = document.getElementById('inquiriesTableBody');
    const search = document.getElementById('inquirySearchInput').value.toLowerCase();
    const stat = document.getElementById('inquiryStatusFilter').value;

    const filtered = this.inquiries.filter(i => {
      const matchSearch = i.institution.toLowerCase().includes(search) || i.medicine.toLowerCase().includes(search) || i.id.toLowerCase().includes(search);
      const matchStat = stat === 'all' || i.status === stat;
      return matchSearch && matchStat;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="padding: 30px; text-align: center; color: var(--text-muted);">No hospital procurement requests match.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(i => `
      <tr>
        <td><code>${i.id}</code></td>
        <td><strong style="color: var(--text-main); font-weight: 700;">${i.institution}</strong></td>
        <td>${i.contact}</td>
        <td><span class="badge-modern badge-cyan">${i.medicine}</span></td>
        <td><strong>${i.quantity}</strong></td>
        <td>${i.date}</td>
        <td>${this.getStatusBadge(i.status)}</td>
        <td class="text-right">
          <select class="modern-select" style="padding: 5px 12px; font-size: 0.8rem;" onchange="app.updateInquiryStatus('${i.id}', this.value)">
            <option value="Pending Review" ${i.status === 'Pending Review' ? 'selected' : ''}>Pending</option>
            <option value="Pharmacist Verified" ${i.status === 'Pharmacist Verified' ? 'selected' : ''}>Verified</option>
            <option value="Dispatched" ${i.status === 'Dispatched' ? 'selected' : ''}>Dispatched</option>
            <option value="Rejected" ${i.status === 'Rejected' ? 'selected' : ''}>Reject</option>
          </select>
        </td>
      </tr>
    `).join('');
  }

  updateInquiryStatus(id, newStatus) {
    const inq = this.inquiries.find(i => i.id === id);
    if (!inq) return;

    inq.status = newStatus;
    this.saveState();
    this.renderAll();
    this.showToast(`Order #${id} updated to "${newStatus}"`, 'success');
  }

  exportInquiriesCSV() {
    let csv = 'Order Ref,Institution,Contact Person,Medicine,Quantity,Date,Status\n';
    this.inquiries.forEach(i => {
      csv += `"${i.id}","${i.institution}","${i.contact}","${i.medicine}","${i.quantity}","${i.date}","${i.status}"\n`;
    });
    this.downloadFile(csv, 'MediCore_Orders_Log.csv', 'text/csv');
    this.showToast('Inquiries exported to CSV!', 'success');
  }

  // ==========================================================================
  // NOTIFICATIONS
  // ==========================================================================
  renderNotifications() {
    const list = document.getElementById('notificationList');
    if (this.notifications.length === 0) {
      list.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.8rem;">No unread alerts.</div>`;
      return;
    }

    list.innerHTML = this.notifications.map(n => `
      <div class="notif-item">
        <i class="ri-pulse-line"></i>
        <div style="flex:1;">
          <span style="color: var(--text-main); font-weight: 500;">${n.text}</span>
          <span class="notif-time">${n.time}</span>
        </div>
      </div>
    `).join('');
  }

  addNotification(text) {
    this.notifications.unshift({ id: Date.now(), text, time: 'Just now', type: 'info' });
    if (this.notifications.length > 8) this.notifications.pop();
    this.saveState();
    this.renderNotifications();
  }

  clearNotifications() {
    this.notifications = [];
    this.saveState();
    this.renderNotifications();
    this.showToast('Notifications cleared', 'info');
  }

  // ==========================================================================
  // CHARTS (Ultra Modern Chart.js)
  // ==========================================================================
  initCharts() {
    const ctxProd = document.getElementById('productionChart');
    if (ctxProd) {
      const gradientCyan = ctxProd.getContext('2d').createLinearGradient(0, 0, 0, 260);
      gradientCyan.addColorStop(0, 'rgba(14, 165, 233, 0.35)');
      gradientCyan.addColorStop(1, 'rgba(14, 165, 233, 0.0)');

      const gradientTeal = ctxProd.getContext('2d').createLinearGradient(0, 0, 0, 260);
      gradientTeal.addColorStop(0, 'rgba(6, 182, 212, 0.25)');
      gradientTeal.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

      this.charts.production = new Chart(ctxProd, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          datasets: [
            {
              label: 'Solid Orals (K units)',
              data: [120, 145, 130, 175, 195, 215, 240, 265, 290, 320],
              borderColor: '#0ea5e9',
              backgroundColor: gradientCyan,
              tension: 0.4,
              fill: true,
              borderWidth: 3,
              pointBackgroundColor: '#0ea5e9',
              pointBorderColor: '#fff',
              pointRadius: 4,
              pointHoverRadius: 7
            },
            {
              label: 'Sterile Parenteral (K units)',
              data: [45, 55, 62, 58, 75, 85, 92, 98, 115, 130],
              borderColor: '#06b6d4',
              backgroundColor: gradientTeal,
              tension: 0.4,
              fill: true,
              borderWidth: 3,
              pointBackgroundColor: '#06b6d4',
              pointBorderColor: '#fff',
              pointRadius: 4,
              pointHoverRadius: 7
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              grid: { color: 'rgba(226, 232, 240, 0.35)' },
              ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } }
            },
            x: {
              grid: { display: false },
              ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } }
            }
          }
        }
      });
    }

    this.renderCategoryChart();
  }

  renderCategoryChart() {
    const ctxCat = document.getElementById('categoryChart');
    if (!ctxCat) return;

    const catCounts = {};
    this.products.forEach(p => {
      catCounts[p.category] = (catCounts[p.category] || 0) + 1;
    });

    const labels = Object.keys(catCounts);
    const data = Object.values(catCounts);

    if (this.charts.category) {
      this.charts.category.destroy();
    }

    this.charts.category = new Chart(ctxCat, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            '#0ea5e9', // Cyan
            '#06b6d4', // Teal
            '#6366f1', // Indigo
            '#10b981', // Emerald
            '#f59e0b', // Amber
            '#f43f5e'  // Rose
          ],
          borderWidth: 0,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 10,
              font: { family: 'Plus Jakarta Sans', size: 11, weight: 600 }
            }
          }
        },
        cutout: '72%'
      }
    });
  }

  updateCharts() {
    this.renderCategoryChart();
  }

  // ==========================================================================
  // THEME MANAGEMENT (Dark / Light)
  // ==========================================================================
  initTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME) || 'theme-light';
    document.body.className = saved;
    this.updateThemeIcon(saved);
  }

  toggleTheme() {
    const isDark = document.body.classList.contains('theme-dark');
    const newTheme = isDark ? 'theme-light' : 'theme-dark';
    document.body.className = newTheme;
    localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    this.updateThemeIcon(newTheme);
    this.showToast(`Switched to ${isDark ? 'Light' : 'Dark'} mode`, 'info');
  }

  updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (theme === 'theme-dark') {
      icon.className = 'ri-sun-fill';
    } else {
      icon.className = 'ri-moon-clear-line';
    }
  }

  // ==========================================================================
  // MODALS & TOASTS
  // ==========================================================================
  openModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.add('show');
  }

  closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove('show');
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
      success: 'ri-checkbox-circle-fill text-emerald',
      error: 'ri-error-warning-fill text-rose',
      warning: 'ri-alert-fill text-amber',
      info: 'ri-information-fill text-cyan'
    };

    toast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <i class="${icons[type] || icons.info}" style="font-size: 1.3rem;"></i>
        <span style="font-weight: 600;">${message}</span>
      </div>
      <button style="background:none; border:none; color:inherit; cursor:pointer;" onclick="this.parentElement.remove()">
        <i class="ri-close-line"></i>
      </button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  downloadFile(content, fileName, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  saveSettings(e) {
    e.preventDefault();
    const settings = {
      name: document.getElementById('setCompanyName').value,
      license: document.getElementById('setLicense').value,
      address: document.getElementById('setAddress').value,
      email: document.getElementById('setEmail').value,
      phone: document.getElementById('setPhone').value,
      currency: document.getElementById('setCurrency').value
    };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    this.showToast('Corporate settings saved successfully!', 'success');
  }

  resetDemoData() {
    if (confirm('Reset all formulations, research papers, and hospital orders to initial demo data?')) {
      localStorage.clear();
      this.loadState();
      this.renderAll();
      this.updateCharts();
      this.showToast('System reset to demo pharmaceutical database.', 'info');
    }
  }
}

// Instantiate Global App
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new MediCoreCMS();
  // Apply saved view
  const savedView = localStorage.getItem(STORAGE_KEYS.PROD_VIEW) || 'table';
  app.setProductView(savedView);
});
