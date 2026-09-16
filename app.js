/**
 * Inkwazi Field Guide Portfolio of Evidence
 * Assessor Navigation, Markdown Engine & Lightbox
 */

(function () {
    'use strict';

    // =========================================================================
    // Portfolio Navigation Manifest
    // =========================================================================
    const portfolioStructure = [
        {
            group: "Guiding & Safety",
            items: [
                { id: "guided-walks", file: "Guiding.md", title: "Guided Walks Protocol", icon: "🧭", summary: "Briefing standards, walk grades, tracking & neutrality" },
                { id: "rifle-handling", file: "Rifle Handling.md", title: "Rifle Handling", icon: "🎯", summary: ".375 H&H manual of arms, ammo checks, rapid fire" },
                { id: "dangerous-animals", file: "Dangerous Animal Behavior.md", title: "Dangerous Animal Behavior", icon: "⚠️", summary: "Awareness, confrontation & charge engagement matrix" }
            ]
        },
        {
            group: "Assessments",
            items: [
                { id: "eval-shooting", file: "Assessments/Shooting Range.md", title: "Shooting Range Qualification", icon: "📋", summary: "Prone, kneeling, standing scores & target evidence" },
                { id: "eval-rapid-fire", file: "Assessments/Rapid Fire Practice.md", title: "Rapid Fire Practice", icon: "🎯", summary: "Rapid fire shooting drill qualification & target assessment" },
                { id: "eval-predator-lane", file: "Assessments/Predator Lane.md", title: "Predator Lane Walk", icon: "🐾", summary: "Tracking, situational awareness & debrief findings" },
                { id: "eval-storytelling", file: "Assessments/Sand Forest Storytelling.md", title: "Sand Forest Storytelling", icon: "📖", summary: "Guest engagement & narrative delivery feedback" },
                { id: "eval-knowledge-test", file: "Assessments/Week 1 Knowledge Test.md", title: "Week 1 Knowledge Test", icon: "📝", summary: "Endemics, tracks & regional biodiversity test" }
            ]
        },
        {
            group: "Worksheets",
            items: [
                { id: "ws-arthropods", file: "Worksheets/Arthropods.md", title: "Arthropods Worksheet", icon: "🦂", summary: "Anatomy, scorpion families & metamorphosis" },
                { id: "ws-birds", file: "Worksheets/Birds.md", title: "Birds Worksheet", icon: "🦅", summary: "Avian morphology, raptors, nesting & Star Birds" },
                { id: "ws-trees", file: "Worksheets/Trees.md", title: "Trees & Grasses Worksheet", icon: "🌿", summary: "Stem histology, veld ecology & chemical defense" },
                { id: "ws-astronomy", file: "Worksheets/Astronomy.md", title: "Astronomy Worksheet", icon: "🌌", summary: "Celestial bodies, moon phases, solar system & satellites" },
                { id: "ws-off-road-driving", file: "Worksheets/Off-road Driving.md", title: "Off-road Driving", icon: "🚙", summary: "4x4 vehicle operations, recovery & terrain driving" },
                { id: "ws-night-drives", file: "Worksheets/Night Drives.md", title: "Night Drives", icon: "🌙", summary: "Spotlighting protocols, nocturnal animal safety & night driving" }
            ]
        },
        {
            group: "Mammals",
            isFolder: true,
            folderId: "folder-mammals",
            folderTitle: "Mammals",
            folderIcon: "🐘",
            items: [
                { id: "mammal-buffalo", file: "Mammals/Buffalo.md", title: "African Buffalo", icon: "🐃", summary: "Herd hierarchy, pathfinder dynamics & wallowing" },
                { id: "mammal-cheetah", file: "Mammals/Cheetah.md", title: "Cheetah", icon: "🐆", summary: "Anatomy, daytime hunting & cub sightings" },
                { id: "mammal-elephant", file: "Mammals/Elephant.md", title: "African Elephant", icon: "🐘", summary: "Dentition aging, matriarchy & musth bulls" },
                { id: "mammal-giraffe", file: "Mammals/Giraffe.md", title: "Giraffe", icon: "🦒", summary: "Nuchal ligament biomechanics & jugular valves" },
                { id: "mammal-hippo", file: "Mammals/Hippo.md", title: "Hippopotamus", icon: "🦛", summary: "Underwater nursing, territorial bulls & grazing" },
                { id: "mammal-leopard", file: "Mammals/Leopard.md", title: "Leopard", icon: "🐆", summary: "Cub rearing cycles & scent marking logs" },
                { id: "mammal-lion", file: "Mammals/Lion.md", title: "Lion", icon: "🦁", summary: "Prides, male coalitions & hunting strategy" },
                { id: "mammal-zebra", file: "Mammals/Plains Zebra.md", title: "Plains Zebra", icon: "🦓", summary: "Harem abduction, bachelor groups & foal bonding" },
                { id: "mammal-hyaena", file: "Mammals/Spotted Hyaena.md", title: "Spotted Hyaena", icon: "🐾", summary: "Clan biology, twin rivalry & lactation" },
                { id: "mammal-white-rhino", file: "Mammals/White Rhino.md", title: "White Rhino", icon: "🦏", summary: "Social structure & reproduction" },
                { id: "mammal-rhino", file: "Mammals/White vs Black Rhino.md", title: "White vs Black Rhino", icon: "🦏", summary: "Track morphology & lobe differentiation" }
            ]
        },
        {
            group: "Birds",
            isFolder: true,
            folderId: "folder-birds",
            folderTitle: "Birds",
            folderIcon: "🦜",
            items: [
                { id: "bird-list", file: "Birds/Bird List.md", title: "Bird List", icon: "📋", summary: "Recorded bird species list" },
                { id: "bird-donkeybridges", file: "Birds/Donkeybridges.md", title: "Bird Call Donkeybridges", icon: "🎵", summary: "Acoustic mnemonics for reserve calls" },
                { id: "bird-general", file: "Birds/General.md", title: "General Notes", icon: "🪶", summary: "Darter plumage wetting & waterbird flight" }
            ]
        },
        {
            group: "Trees",
            isFolder: true,
            folderId: "folder-trees",
            folderTitle: "Trees",
            folderIcon: "🌳",
            items: [
                { id: "flora-trees", file: "Trees/Trees.md", title: "Trees & Species Notes", icon: "🌳", summary: "Key species, ant-thorn symbiosis & leaf anatomy" },
                { id: "flora-trees-list", file: "Trees/Trees List.md", title: "Trees List", icon: "📋", summary: "Interactive species list & scientific name recall test" }
            ]
        },
        {
            group: "Botany & Ecology",
            items: [
                { id: "eco-arthropods", file: "Arthropods.md", title: "Arthropods & Invertebrates", icon: "🕷️", summary: "Phinda button spider & field survey logs" },
                { id: "eco-amphibians", file: "Amphibians.md", title: "Amphibians", icon: "🐸", summary: "Phinda rainfrog & foam nest frog thermoregulation" },
                { id: "eco-reptiles", file: "Reptiles.md", title: "Reptiles", icon: "🐍", summary: "Southern African rock python reproduction" },
                { id: "eco-anti-predator", file: "Anti-predator defense.md", title: "Anti-Predator Defenses", icon: "🛡️", summary: "Batesian/Müllerian mimicry, aposematism & thanatosis" },
                { id: "eco-astronomy", file: "Astronomy.md", title: "Astronomy", icon: "🌙", summary: "Lunar phases and night celestial navigation" }
            ]
        },
        {
            group: "Institutional Context",
            items: [
                { id: "context-andbeyond", file: "&Beyond.md", title: "&Beyond & Phinda", icon: "🌍", summary: "Phinda return to nature & Wild Impact" }
            ]
        }
    ];

    // Build linear sequence for next/prev buttons
    const linearSequence = [];
    portfolioStructure.forEach(group => {
        group.items.forEach(item => {
            linearSequence.push({
                id: item.id,
                file: item.file,
                title: item.title,
                group: group.folderTitle || group.group
            });
        });
    });

    // Quick map by id and file
    const itemById = new Map();
    const itemByFile = new Map();
    linearSequence.forEach((item, index) => {
        const fullItem = { ...item, index };
        itemById.set(item.id, fullItem);
        itemByFile.set(item.file, fullItem);
    });

    // DOM Elements
    const navContainer = document.getElementById('nav-container');
    const contentEl = document.getElementById('content');
    const loaderEl = document.getElementById('loader');
    const currentCrumbEl = document.getElementById('current-crumb');
    const pagerPrevBtn = document.getElementById('pager-prev');
    const pagerNextBtn = document.getElementById('pager-next');
    const pagerPrevTitle = document.getElementById('pager-prev-title');
    const pagerNextTitle = document.getElementById('pager-next-title');
    const paginationFooter = document.getElementById('pagination-footer');
    const sidebar = document.getElementById('sidebar');
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const printBtn = document.getElementById('print-btn');
    const searchInput = document.getElementById('nav-search-input');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');

    // =========================================================================
    // Sidebar Rendering
    // =========================================================================
    function renderNavigation() {
        navContainer.innerHTML = '';

        // Dashboard Link at Top
        const dashLink = document.createElement('a');
        dashLink.href = '#dashboard';
        dashLink.className = 'nav-item';
        dashLink.id = 'nav-link-dashboard';
        dashLink.innerHTML = `<span>📊 Overview Dashboard</span>`;
        dashLink.addEventListener('click', onNavClick);
        navContainer.appendChild(dashLink);

        portfolioStructure.forEach(section => {
            const groupEl = document.createElement('div');
            groupEl.className = 'nav-group';

            if (section.isFolder) {
                // Collapsible folder (e.g. Mammals, Birds)
                const folderWrap = document.createElement('div');
                folderWrap.className = 'nav-folder';
                folderWrap.id = section.folderId;

                const folderTitle = document.createElement('div');
                folderTitle.className = 'nav-group-title nav-folder-toggle';
                folderTitle.innerHTML = `
                    <span>${section.folderIcon} ${section.folderTitle}</span>
                    <span class="folder-arrow">▶</span>
                `;
                folderTitle.addEventListener('click', () => {
                    folderWrap.classList.toggle('open');
                });
                folderWrap.appendChild(folderTitle);

                const subList = document.createElement('ul');
                subList.className = 'nav-sub-list';

                section.items.forEach(item => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = `#${item.id}`;
                    a.className = 'nav-sub-item';
                    a.id = `nav-link-${item.id}`;
                    a.innerHTML = `${item.title}`;
                    a.dataset.id = item.id;
                    a.addEventListener('click', onNavClick);
                    li.appendChild(a);
                    subList.appendChild(li);
                });

                folderWrap.appendChild(subList);
                groupEl.appendChild(folderWrap);
            } else {
                // Regular group
                const title = document.createElement('div');
                title.className = 'nav-group-title';
                title.textContent = section.group;
                groupEl.appendChild(title);

                section.items.forEach(item => {
                    const a = document.createElement('a');
                    a.href = `#${item.id}`;
                    a.className = 'nav-item';
                    a.id = `nav-link-${item.id}`;
                    a.innerHTML = `<span>${item.icon} ${item.title}</span>`;
                    a.dataset.id = item.id;
                    a.addEventListener('click', onNavClick);
                    groupEl.appendChild(a);
                });
            }

            navContainer.appendChild(groupEl);
        });
    }

    function onNavClick() {
        if (window.innerWidth <= 960) {
            sidebar.classList.remove('open');
        }
    }

    // =========================================================================
    // Markdown Preprocessing & Enhancements
    // =========================================================================
    function renderPdfViewer(src, title) {
        return `<div class="pdf-viewer-container">
            <div class="pdf-toolbar">
                <span class="pdf-toolbar-title">📄 ${title}</span>
                <div class="pdf-toolbar-actions">
                    <button type="button" class="action-btn pdf-action-btn pdf-load-btn" onclick="const wrap=this.closest('.pdf-viewer-container').querySelector('.pdf-embed-wrapper'); wrap.innerHTML='<iframe src=\\'${src}#view=FitH\\' class=\\'pdf-embed-frame\\' title=\\'${title}\\'></iframe>'; this.style.display='none';">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        <span>Preview PDF</span>
                    </button>
                    <a href="${src}" target="_blank" rel="noopener noreferrer" class="action-btn pdf-action-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        <span>Open</span>
                    </a>
                    <a href="${src}" download class="action-btn pdf-action-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span>Download</span>
                    </a>
                </div>
            </div>
            <div class="pdf-embed-wrapper">
                <div class="pdf-placeholder" onclick="this.closest('.pdf-viewer-container').querySelector('.pdf-load-btn').click();">
                    <div class="pdf-placeholder-icon">📄</div>
                    <p class="pdf-placeholder-text">Click to load interactive PDF preview (${title})</p>
                    <p class="pdf-placeholder-sub">Saves mobile data until requested</p>
                </div>
            </div>
        </div>`;
    }

    function preprocessMarkdown(raw) {
        let text = raw;

        // 1. Convert Obsidian embeds: ![[Image.png|width]] or ![[Document.pdf]]
        text = text.replace(/!\[\[([^\]|]+)(?:\|(\d+))?\]\]/g, (match, filename, width) => {
            const cleanFilename = filename.trim();
            const isPdf = /\.pdf$/i.test(cleanFilename);

            if (isPdf) {
                return renderPdfViewer(encodeURI(cleanFilename), cleanFilename);
            }

            const webpFilename = cleanFilename.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            const safeSrc = encodeURI(webpFilename);
            const fallbackSrc = encodeURI(cleanFilename);
            const styleAttr = width ? `style="max-width: min(${width}px, 100%);"` : '';
            return `<div class="image-container"><img src="${safeSrc}" alt="${cleanFilename}" ${styleAttr} loading="lazy" class="zoomable-image" onerror="if(this.src.endsWith('.webp')){this.src='${fallbackSrc}';}"><div class="image-caption">${cleanFilename.replace(/\.(png|jpg|jpeg|webp)$/i, '')}</div></div>`;
        });

        // 2. Convert standard markdown images or pdf embeds
        text = text.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
            const cleanSrc = src.trim();
            const isPdf = /\.pdf$/i.test(cleanSrc);

            if (isPdf) {
                const title = alt || cleanSrc;
                return renderPdfViewer(encodeURI(cleanSrc), title);
            }

            const webpSrc = cleanSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            const safeSrc = encodeURI(webpSrc);
            const fallbackSrc = encodeURI(cleanSrc);

            return `<div class="image-container"><img src="${safeSrc}" alt="${alt}" loading="lazy" class="zoomable-image" onerror="if(this.src.endsWith('.webp')){this.src='${fallbackSrc}';}"><div class="image-caption">${alt}</div></div>`;
        });

        // 3. Convert Obsidian wiki-links: [[Target Page]]
        text = text.replace(/\[\[([^\]]+)\]\]/g, (match, pageName) => {
            const clean = pageName.trim();
            // Check if pageName matches any file or title
            const found = linearSequence.find(item => 
                item.title.toLowerCase() === clean.toLowerCase() ||
                item.file.replace(/\.md$/i, '').toLowerCase() === clean.toLowerCase() ||
                item.file.toLowerCase().includes(clean.toLowerCase())
            );
            if (found) {
                return `<a href="#${found.id}" class="wiki-link">📄 ${clean}</a>`;
            }
            return `<span class="wiki-link-text"><strong>${clean}</strong></span>`;
        });

        return text;
    }

    function postProcessHtml(container, currentItem) {
        // 1. Wrap all tables in a responsive scroll container
        const tables = container.querySelectorAll('table');
        tables.forEach(table => {
            if (!table.parentElement.classList.contains('table-wrapper')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'table-wrapper';
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            }
        });

        // 2. Enhance assessment feedback sections
        const headings = container.querySelectorAll('p, h2, h3, h4');
        headings.forEach(el => {
            const text = el.textContent.trim();
            if (/^What went well/i.test(text)) {
                el.classList.add('callout-box', 'callout-success');
            } else if (/^Room for improvement/i.test(text)) {
                el.classList.add('callout-box', 'callout-warning');
            }
        });

        // 3. Attach click-to-zoom on images
        const images = container.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('click', () => {
                openLightbox(img.src, img.alt || img.getAttribute('title') || 'Evidence Diagram');
            });
        });

        // 4. Setup Trees List Test Mode & Interactive Controls (Only on Trees List page)
        setupTreeListInteractivity(container, currentItem);
    }

    function setupTreeListInteractivity(container, currentItem) {
        if (!currentItem || currentItem.id !== 'flora-trees-list') return;
        // Find all top-level paragraph or heading elements: "Common Name (*Scientific Name*)"
        const pElements = Array.from(container.querySelectorAll('p, h2, h3, h4'));
        const speciesNodes = [];

        pElements.forEach(p => {
            if (p.closest('.tree-list-wrapper')) return;

            const html = p.innerHTML.trim();
            const match = html.match(/^([^()]+?)\s*\((?:<em>|\*)(.*?)(?:<\/em>|\*)\)/i);
            if (match) {
                const commonName = match[1].replace(/<[^>]+>/g, '').trim();
                const sciName = match[2].replace(/<[^>]+>/g, '').trim();

                let nextEl = p.nextElementSibling;
                let listEl = null;
                if (nextEl && nextEl.tagName === 'UL') {
                    listEl = nextEl;
                }

                speciesNodes.push({
                    titleEl: p,
                    listEl: listEl,
                    commonName: commonName,
                    sciName: sciName
                });
            }
        });

        if (speciesNodes.length === 0) return;

        // Remove any old wrapper if re-rendering
        const oldWrapper = container.querySelector('.tree-list-wrapper');
        if (oldWrapper) oldWrapper.remove();

        // Create main wrapper & control toolbar
        const listWrapper = document.createElement('div');
        listWrapper.className = 'tree-list-wrapper';

        const toolbar = document.createElement('div');
        toolbar.className = 'tree-toolbar';
        toolbar.innerHTML = `
            <div class="mode-switch-group">
                <button class="mode-btn" data-mode="test-sci" type="button">🧠 Test Scientific</button>
                <button class="mode-btn" data-mode="test-common" type="button">🧠 Test Common</button>
            </div>
            <div class="tree-search-wrap">
                <input type="text" class="tree-search-input" placeholder="Quick search species or notes..." aria-label="Search species">
            </div>
            <div class="tree-actions-group">
                <button class="action-sub-btn expand-notes-btn" type="button">📂 Expand All Notes</button>
            </div>
        `;

        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'species-cards-container';

        speciesNodes.forEach(item => {
            const card = document.createElement('div');
            card.className = 'species-card-accordion';

            const summary = document.createElement('div');
            summary.className = 'species-card-header';
            summary.innerHTML = `
                <div class="species-card-titles">
                    <span class="common-name-badge">${item.commonName}</span>
                    <span class="sci-name-badge"><em>(${item.sciName})</em></span>
                </div>
                ${item.listEl ? `
                    <button class="notes-toggle-arrow" type="button" aria-label="Toggle notes" aria-expanded="false">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                ` : ''}
            `;
            card.appendChild(summary);

            if (item.listEl) {
                const body = document.createElement('div');
                body.className = 'species-card-body';
                body.appendChild(item.listEl.cloneNode(true));
                card.appendChild(body);

                const arrowBtn = summary.querySelector('.notes-toggle-arrow');
                if (arrowBtn) {
                    arrowBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const isOpen = card.classList.toggle('open');
                        arrowBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                    });
                }
            }

            cardsContainer.appendChild(card);

            item.titleEl.style.display = 'none';
            if (item.listEl) item.listEl.style.display = 'none';
        });

        listWrapper.appendChild(toolbar);
        listWrapper.appendChild(cardsContainer);

        const h1 = container.querySelector('h1');
        if (h1 && h1.nextSibling) {
            container.insertBefore(listWrapper, h1.nextSibling);
        } else {
            container.appendChild(listWrapper);
        }

        let currentMode = 'study';
        let allExpanded = false;

        const modeBtns = toolbar.querySelectorAll('.mode-btn');
        const expandBtn = toolbar.querySelector('.expand-notes-btn');
        const searchInput = toolbar.querySelector('.tree-search-input');
        const allCards = cardsContainer.querySelectorAll('.species-card-accordion');

        function setMode(mode) {
            currentMode = mode;
            listWrapper.dataset.mode = mode;
            modeBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.mode === mode);
            });

            allCards.forEach(card => {
                const commonBadge = card.querySelector('.common-name-badge');
                const sciBadge = card.querySelector('.sci-name-badge');

                if (commonBadge) commonBadge.classList.remove('masked');
                if (sciBadge) sciBadge.classList.remove('masked');

                if (mode === 'test-sci' && sciBadge) {
                    sciBadge.classList.add('masked');
                } else if (mode === 'test-common' && commonBadge) {
                    commonBadge.classList.add('masked');
                }
            });
        }

        modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetMode = btn.dataset.mode;
                if (currentMode === targetMode) {
                    setMode('study');
                } else {
                    setMode(targetMode);
                }
            });
        });

        if (expandBtn) {
            expandBtn.addEventListener('click', () => {
                allExpanded = !allExpanded;
                allCards.forEach(card => {
                    if (card.querySelector('.species-card-body')) {
                        card.classList.toggle('open', allExpanded);
                        const arrowBtn = card.querySelector('.notes-toggle-arrow');
                        if (arrowBtn) arrowBtn.setAttribute('aria-expanded', allExpanded ? 'true' : 'false');
                    }
                });
                expandBtn.textContent = allExpanded ? '📁 Collapse All Notes' : '📂 Expand All Notes';
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const q = e.target.value.toLowerCase().trim();
                allCards.forEach(card => {
                    const text = card.textContent.toLowerCase();
                    card.style.display = text.includes(q) ? 'block' : 'none';
                });
            });
        }

        allCards.forEach(card => {
            const commonBadge = card.querySelector('.common-name-badge');
            const sciBadge = card.querySelector('.sci-name-badge');

            if (commonBadge) {
                commonBadge.addEventListener('click', (e) => {
                    if (currentMode !== 'study') {
                        e.stopPropagation();
                        commonBadge.classList.toggle('masked');
                    }
                });
            }

            if (sciBadge) {
                sciBadge.addEventListener('click', (e) => {
                    if (currentMode !== 'study') {
                        e.stopPropagation();
                        sciBadge.classList.toggle('masked');
                    }
                });
            }
        });
    }

    // =========================================================================
    // Content Loader
    // =========================================================================
    async function loadPage(pageId) {
        // Highlight active sidebar item
        document.querySelectorAll('.nav-item, .nav-sub-item').forEach(el => el.classList.remove('active'));
        
        // Show loader
        contentEl.style.display = 'none';
        loaderEl.classList.add('active');

        if (!pageId || pageId === 'dashboard' || pageId === 'overview') {
            renderDashboard();
            updateBreadcrumb("Overview Dashboard");
            updatePager(null);
            loaderEl.classList.remove('active');
            contentEl.style.display = 'block';
            const dashLink = document.getElementById('nav-link-dashboard');
            if (dashLink) dashLink.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'instant' });
            return;
        }

        const currentItem = itemById.get(pageId);
        if (!currentItem) {
            render404(pageId);
            loaderEl.classList.remove('active');
            contentEl.style.display = 'block';
            return;
        }

        // Activate nav link
        const activeLink = document.getElementById(`nav-link-${currentItem.id}`);
        if (activeLink) {
            activeLink.classList.add('active');
            // Ensure parent folder is open
            const parentFolder = activeLink.closest('.nav-folder');
            if (parentFolder) parentFolder.classList.add('open');
        }

        updateBreadcrumb(currentItem.group, currentItem.title);
        updatePager(currentItem);

        // Direct PDF handling if file is a PDF
        if (currentItem.file.toLowerCase().endsWith('.pdf')) {
            const safeSrc = encodeURI(currentItem.file);
            contentEl.innerHTML = `<h1>${currentItem.title}</h1>${renderPdfViewer(safeSrc, currentItem.title)}`;
            loaderEl.classList.remove('active');
            contentEl.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'instant' });
            return;
        }

        try {
            const response = await fetch(encodeURI(currentItem.file));
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            const rawMarkdown = await response.text();
            const processedMarkdown = preprocessMarkdown(rawMarkdown);

            // Configure marked
            marked.setOptions({
                gfm: true,
                breaks: true,
                headerIds: true
            });

            const parsedHtml = marked.parse(processedMarkdown);
            contentEl.innerHTML = DOMPurify.sanitize(parsedHtml, {
                ADD_TAGS: ['iframe', 'object', 'embed', 'svg', 'path', 'line', 'polyline', 'rect', 'circle'],
                ADD_ATTR: ['target', 'loading', 'style', 'src', 'title', 'frameborder', 'download', 'rel', 'class', 'viewBox', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'd', 'points', 'x1', 'y1', 'x2', 'y2', 'x', 'y', 'width', 'height']
            });

            postProcessHtml(contentEl, currentItem);

            loaderEl.classList.remove('active');
            contentEl.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'instant' });

        } catch (err) {
            console.error("Failed to load file:", err);
            loaderEl.classList.remove('active');
            contentEl.innerHTML = `
                <div class="callout-box callout-warning">
                    <h2>⚠️ Unable to load evidence note</h2>
                    <p>Could not load file: <code>${currentItem.file}</code></p>
                    <p>${err.message}</p>
                </div>
            `;
            contentEl.style.display = 'block';
        }
    }

    // =========================================================================
    // Dashboard Generator (Visual Cards for Assessors)
    // =========================================================================
    function renderDashboard() {
        let cardsHtml = '';

        portfolioStructure.forEach(section => {
            const title = section.folderTitle || section.group;
            const icon = section.folderIcon || section.items[0]?.icon || '📁';
            const count = section.items.length;
            const firstId = section.items[0]?.id || '';

            const subItemsList = section.items.map(it => it.title).slice(0, 3).join(', ') + 
                (section.items.length > 3 ? ` +${section.items.length - 3} more` : '');

            cardsHtml += `
                <a href="#${firstId}" class="dash-card">
                    <div>
                        <div class="dash-card-header">
                            <span class="dash-card-icon">${icon}</span>
                            <span class="dash-card-badge">${count} ${count === 1 ? 'Topic' : 'Topics'}</span>
                        </div>
                        <h2 class="dash-card-title">${title}</h2>
                        <p class="dash-card-desc">${subItemsList}</p>
                    </div>
                    <div class="dash-card-footer">
                        <span>Open Section</span> →
                    </div>
                </a>
            `;
        });

        contentEl.innerHTML = `
            <div class="dashboard-hero">
                <h1>Portfolio of Evidence</h1>
                <p>6-Week Practical Field Guide Training & Assessment Records</p>
            </div>
            <div class="dashboard-grid">
                ${cardsHtml}
            </div>
        `;
    }

    function render404(id) {
        contentEl.innerHTML = `
            <div class="callout-box callout-warning">
                <h2>Page Not Found</h2>
                <p>The requested topic <code>#${id}</code> could not be located in this portfolio.</p>
                <p><a href="#dashboard">Return to Overview Dashboard</a></p>
            </div>
        `;
    }

    // =========================================================================
    // Breadcrumbs & Linear Pager
    // =========================================================================
    function updateBreadcrumb(group, title) {
        if (!title) {
            currentCrumbEl.textContent = group;
        } else {
            currentCrumbEl.textContent = `${group} / ${title}`;
        }
    }

    function updatePager(currentItem) {
        if (!currentItem) {
            paginationFooter.style.display = 'none';
            return;
        }
        paginationFooter.style.display = 'flex';

        const index = currentItem.index;
        const prevItem = index > 0 ? linearSequence[index - 1] : null;
        const nextItem = index < linearSequence.length - 1 ? linearSequence[index + 1] : null;

        if (prevItem) {
            pagerPrevBtn.classList.remove('hidden');
            pagerPrevBtn.href = `#${prevItem.id}`;
            pagerPrevTitle.textContent = prevItem.title;
        } else {
            pagerPrevBtn.classList.add('hidden');
        }

        if (nextItem) {
            pagerNextBtn.classList.remove('hidden');
            pagerNextBtn.href = `#${nextItem.id}`;
            pagerNextTitle.textContent = nextItem.title;
        } else {
            pagerNextBtn.classList.add('hidden');
        }
    }

    // =========================================================================
    // Image Lightbox
    // =========================================================================
    function openLightbox(src, caption) {
        lightboxImg.src = src;
        lightboxCaption.textContent = caption || '';
        lightboxModal.classList.add('active');
        lightboxModal.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        lightboxImg.src = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // =========================================================================
    // Sidebar Quick Search Filter
    // =========================================================================
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const navItems = navContainer.querySelectorAll('.nav-item, .nav-sub-item');

        navItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const matches = text.includes(query);
            item.style.display = matches ? 'flex' : 'none';
        });

        // Ensure folders stay open if children match
        const folders = navContainer.querySelectorAll('.nav-folder');
        folders.forEach(folder => {
            if (query) {
                folder.classList.add('open');
            }
        });
    });

    // =========================================================================
    // Mobile Drawer & Print Actions
    // =========================================================================
    menuToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    mobileCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    printBtn.addEventListener('click', () => {
        window.print();
    });

    // =========================================================================
    // Toast Notification System
    // =========================================================================
    const toastContainer = document.getElementById('toast-container');
    function showToast(message, type = 'info', duration = 3500) {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let icon = 'ℹ️';
        if (type === 'success') icon = '✅';
        if (type === 'error') icon = '⚠️';
        if (type === 'warning') icon = '⏳';

        toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(12px) scale(0.9)';
            toast.style.transition = 'all 0.25s ease';
            setTimeout(() => toast.remove(), 260);
        }, duration);
    }

    // =========================================================================
    // Field Capture & Settings UI Controller
    // =========================================================================
    function setupFieldCapture() {
        if (!window.FieldCapture) return;

        const { SCHEMA, MarkdownInjector, client: ghClient, outbox } = window.FieldCapture;

        // Trigger Elements
        const mobileFab = document.getElementById('mobile-fab');
        const fabBadge = document.getElementById('fab-badge');
        const topbarCaptureBtn = document.getElementById('topbar-capture-btn');
        const topbarSettingsBtn = document.getElementById('topbar-settings-btn');
        const sidebarSettingsBtn = document.getElementById('sidebar-settings-btn');
        const outboxSyncBtn = document.getElementById('outbox-sync-btn');
        const outboxBadgeCount = document.getElementById('outbox-badge-count');

        // Capture Modal Elements
        const captureModal = document.getElementById('capture-modal-container');
        const captureBackdrop = document.getElementById('capture-modal-backdrop');
        const captureCloseBtn = document.getElementById('capture-close-btn');
        const targetPill = document.getElementById('capture-target-pill');
        const targetIcon = document.getElementById('capture-target-icon');
        const targetName = document.getElementById('capture-target-name');
        const targetGroup = document.getElementById('capture-target-group');
        const targetSelect = document.getElementById('capture-target-select');
        const headingGroup = document.getElementById('capture-heading-group');
        const headingChipsContainer = document.getElementById('capture-heading-chips');
        const headingSelect = document.getElementById('capture-heading-select');
        const treeSpeciesGroup = document.getElementById('capture-tree-species-group');
        const treeSearchInput = document.getElementById('capture-tree-search');
        const treeDatalist = document.getElementById('tree-species-datalist');
        const birdInputGroup = document.getElementById('capture-bird-input-group');
        const birdInput = document.getElementById('capture-bird-input');
        const birdLabel = document.getElementById('capture-bird-label');
        const mnemonicGroup = document.getElementById('capture-mnemonic-group');
        const mnemonicInput = document.getElementById('capture-mnemonic-input');
        const sightingBox = document.getElementById('capture-sighting-box');
        const sightingDate = document.getElementById('capture-sighting-date');
        const sightingLocation = document.getElementById('capture-sighting-location');
        const noteGroup = document.getElementById('capture-note-group');
        const noteLabel = document.getElementById('capture-note-label');
        const noteText = document.getElementById('capture-note-text');
        const previewToggle = document.getElementById('capture-preview-toggle');
        const previewArrow = document.getElementById('preview-arrow-icon');
        const previewCard = document.getElementById('capture-preview-card');
        const previewPath = document.getElementById('capture-preview-path');
        const previewContent = document.getElementById('capture-preview-content');
        const statusMsg = document.getElementById('capture-status-msg');
        const submitBtn = document.getElementById('capture-submit-btn');
        const submitText = document.getElementById('capture-submit-text');
        const submitSpinner = document.getElementById('capture-spinner');
        const outboxBtn = document.getElementById('capture-outbox-btn');

        // Settings Modal Elements
        const settingsModal = document.getElementById('settings-modal-container');
        const settingsBackdrop = document.getElementById('settings-modal-backdrop');
        const settingsCloseBtn = document.getElementById('settings-close-btn');
        const ghTokenInput = document.getElementById('gh-token-input');
        const toggleTokenVisibility = document.getElementById('toggle-token-visibility');
        const ghRepoInput = document.getElementById('gh-repo-input');
        const ghBranchInput = document.getElementById('gh-branch-input');
        const modeDirectRadio = document.getElementById('mode-direct');
        const modePrRadio = document.getElementById('mode-pr');
        const testConnectionBtn = document.getElementById('test-connection-btn');
        const connectionStatusPill = document.getElementById('connection-status-pill');
        const saveSettingsBtn = document.getElementById('save-settings-btn');
        const clearTokenBtn = document.getElementById('clear-token-btn');
        const settingsOutboxCount = document.getElementById('settings-outbox-count');
        const settingsSyncOutboxBtn = document.getElementById('settings-sync-outbox-btn');
        const settingsOutboxList = document.getElementById('settings-outbox-list');

        let currentTargetObj = null;
        let currentSelectedHeading = '';

        // Tree species master list for datalist
        const knownTrees = [
            "Lebombo wattle", "Buffalo thorn", "Lavender feverberry", "Balloon thorn",
            "Scented-pod thorn", "Num-num", "Magic guarri", "Ribbed currant",
            "Thorny karee", "Tamboti", "White stemmed guarri", "Sneezewood",
            "Pepper bark", "Elephant's Pudding", "Torchwood / Green-thorn", "Swazi ordeal",
            "Black Monkey Orange", "Green Monkey Orange", "Spider Flower Poison Rope",
            "Sausage tree", "Sicamore Fig", "False Tamboti", "Umbrella thorn",
            "Sticky thorn", "Sand num-num", "Bushveld Saffron", "Weeping Boer-Bean", "Natal mahogany"
        ];
        if (treeDatalist) {
            treeDatalist.innerHTML = knownTrees.map(t => `<option value="${t}">`).join('');
        }

        // Populate Target Switcher dropdown
        function initTargetSelect() {
            targetSelect.innerHTML = '';
            Object.keys(SCHEMA).forEach(catKey => {
                const cat = SCHEMA[catKey];
                const optgroup = document.createElement('optgroup');
                optgroup.label = `${cat.icon} ${cat.title}`;

                cat.targets.forEach(t => {
                    const opt = document.createElement('option');
                    opt.value = t.id;
                    opt.textContent = `${t.icon || '📄'} ${t.name}`;
                    optgroup.appendChild(opt);
                });

                targetSelect.appendChild(optgroup);
            });
        }
        initTargetSelect();

        // Switch Topic pill toggle
        if (targetPill) {
            targetPill.addEventListener('click', () => {
                targetGroup.classList.toggle('hidden');
            });
        }

        targetSelect.addEventListener('change', () => {
            const selected = window.FieldCapture.ALL_TARGETS.find(t => t.id === targetSelect.value);
            if (selected) {
                renderFormForTarget(selected);
                targetGroup.classList.add('hidden');
            }
        });

        // Render form dynamically for target
        function renderFormForTarget(target) {
            currentTargetObj = target;
            targetSelect.value = target.id;
            targetIcon.textContent = target.icon || '📄';
            targetName.textContent = target.name;

            // Reset inputs
            treeSearchInput.value = '';
            birdInput.value = '';
            mnemonicInput.value = '';

            const targetType = target.type || 'heading_based';

            if (targetType === 'species_bullet') {
                // Trees list
                headingGroup.classList.add('hidden');
                birdInputGroup.classList.add('hidden');
                mnemonicGroup.classList.add('hidden');
                sightingBox.classList.add('hidden');
                treeSpeciesGroup.classList.remove('hidden');
                noteGroup.classList.remove('hidden');
                noteLabel.textContent = "Species Field Note";
                noteText.placeholder = "e.g. Canopy tree in Sand Forest; wine-red pods...";
            } else if (targetType === 'bird_checklist') {
                // Bird Checklist
                headingGroup.classList.add('hidden');
                treeSpeciesGroup.classList.add('hidden');
                mnemonicGroup.classList.add('hidden');
                sightingBox.classList.add('hidden');
                noteGroup.classList.add('hidden');
                birdInputGroup.classList.remove('hidden');
                birdLabel.textContent = "Bird Species Name";
                birdInput.placeholder = "e.g. Narina Trogon";
            } else if (targetType === 'donkeybridge') {
                // Donkeybridge
                headingGroup.classList.add('hidden');
                treeSpeciesGroup.classList.add('hidden');
                sightingBox.classList.add('hidden');
                noteGroup.classList.add('hidden');
                birdInputGroup.classList.remove('hidden');
                mnemonicGroup.classList.remove('hidden');
                birdLabel.textContent = "Bird Species Name";
                birdInput.placeholder = "e.g. Emerald-spotted Wood Dove";
                mnemonicInput.placeholder = "e.g. 'ko-koweet-koweet' or high pitched whistle";
            } else {
                // Heading based (Mammals, Trees General, Birds General, Reptiles, Amphibians, Arthropods)
                treeSpeciesGroup.classList.add('hidden');
                birdInputGroup.classList.add('hidden');
                mnemonicGroup.classList.add('hidden');
                headingGroup.classList.remove('hidden');
                noteGroup.classList.remove('hidden');
                noteLabel.textContent = "Observation / Finding";
                noteText.placeholder = "Enter findings, observations, or biological details...";

                renderHeadingChips(target.headings || []);
            }

            updatePreview();
        }

        function renderHeadingChips(headings) {
            headingChipsContainer.innerHTML = '';
            if (headings.length === 0) return;

            // Pick default heading (e.g. "Field Sightings" or first heading)
            let defaultHeading = headings.includes(currentSelectedHeading) ? currentSelectedHeading : headings[0];
            currentSelectedHeading = defaultHeading;

            headings.forEach(h => {
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = `heading-chip ${h === currentSelectedHeading ? 'active' : ''}`;
                chip.textContent = h;
                chip.addEventListener('click', () => {
                    currentSelectedHeading = h;
                    headingChipsContainer.querySelectorAll('.heading-chip').forEach(c => {
                        c.classList.toggle('active', c.textContent === h);
                    });
                    onHeadingSelected(h);
                });
                headingChipsContainer.appendChild(chip);
            });

            onHeadingSelected(currentSelectedHeading);
        }

        function onHeadingSelected(heading) {
            const isSighting = /sighting|encounter|survey/i.test(heading);
            sightingBox.classList.toggle('hidden', !isSighting);

            if (isSighting && !sightingDate.value) {
                const today = new Date();
                sightingDate.value = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
            }

            updatePreview();
        }

        treeSearchInput.addEventListener('input', updatePreview);
        birdInput.addEventListener('input', updatePreview);
        mnemonicInput.addEventListener('input', updatePreview);
        sightingDate.addEventListener('input', updatePreview);
        sightingLocation.addEventListener('input', updatePreview);
        noteText.addEventListener('input', updatePreview);

        // Format Toolbar
        document.querySelectorAll('.fmt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const fmt = btn.dataset.fmt;
                const start = noteText.selectionStart;
                const end = noteText.selectionEnd;
                const val = noteText.value;
                const sel = val.substring(start, end);

                let inserted = '';
                if (fmt === 'bullet') {
                    inserted = sel ? `- ${sel}` : '- ';
                } else if (fmt === 'bold') {
                    inserted = `**${sel || 'text'}**`;
                } else if (fmt === 'italic') {
                    inserted = `*${sel || 'text'}*`;
                } else if (fmt === 'subbullet') {
                    inserted = sel ? `\t- ${sel}` : '\t- ';
                }

                noteText.value = val.substring(0, start) + inserted + val.substring(end);
                noteText.focus();
                noteText.selectionStart = noteText.selectionEnd = start + inserted.length;
                updatePreview();
            });
        });

        // Live Markdown Preview
        previewToggle.addEventListener('click', () => {
            const isOpen = previewCard.classList.toggle('hidden');
            previewArrow.classList.toggle('open', !isOpen);
        });

        function buildPayload() {
            if (!currentTargetObj) return null;
            const targetType = currentTargetObj.type || 'heading_based';
            const file = currentTargetObj.file;
            const noteRaw = noteText.value.trim();

            if (targetType === 'species_bullet') {
                const species = treeSearchInput.value.trim();
                const bullet = noteRaw.startsWith('-') ? noteRaw : `- ${noteRaw}`;
                return {
                    type: 'species_bullet',
                    targetFile: file,
                    speciesName: species,
                    formattedNote: bullet,
                    commitMsg: `field-note(trees): add note for ${species}`
                };
            } else if (targetType === 'bird_checklist') {
                const species = birdInput.value.trim();
                return {
                    type: 'bird_checklist',
                    targetFile: file,
                    birdSpecies: species,
                    formattedNote: `- ${species}`,
                    commitMsg: `field-note(birds): record ${species}`
                };
            } else if (targetType === 'donkeybridge') {
                const species = birdInput.value.trim();
                const mnemonic = mnemonicInput.value.trim();
                return {
                    type: 'donkeybridge',
                    targetFile: file,
                    birdSpecies: species,
                    mnemonic: mnemonic,
                    formattedNote: `- ${species}: *${mnemonic}*`,
                    commitMsg: `field-note(birds): add call mnemonic for ${species}`
                };
            } else {
                const heading = currentSelectedHeading || (currentTargetObj.headings && currentTargetObj.headings[0]) || 'Notes';
                const isSighting = /sighting|encounter|survey/i.test(heading);
                let formattedNote = '';

                if (isSighting) {
                    const date = sightingDate.value.trim() || 'Undated';
                    const loc = sightingLocation.value.trim();
                    const locPart = loc ? ` (${loc})` : '';
                    const body = noteRaw ? `: ${noteRaw}` : '';
                    formattedNote = `- **${date}**${locPart}${body}`;
                } else {
                    if (noteRaw.startsWith('-') || noteRaw.startsWith('*')) {
                        formattedNote = noteRaw;
                    } else {
                        formattedNote = `- ${noteRaw}`;
                    }
                }

                return {
                    type: 'heading_based',
                    targetFile: file,
                    heading: heading,
                    formattedNote: formattedNote,
                    commitMsg: `field-note: update ${currentTargetObj.name} (${heading})`
                };
            }
        }

        function updatePreview() {
            const payload = buildPayload();
            if (!payload) return;

            if (payload.type === 'species_bullet') {
                previewPath.innerHTML = `Target: <code>${payload.targetFile}</code> &rarr; Species: <b>${payload.speciesName || '(select tree)'}</b>`;
            } else if (payload.type === 'bird_checklist' || payload.type === 'donkeybridge') {
                previewPath.innerHTML = `Target: <code>${payload.targetFile}</code>`;
            } else {
                previewPath.innerHTML = `Target: <code>${payload.targetFile}</code> &rarr; <code># ${payload.heading}</code>`;
            }

            const markdownToRender = payload.formattedNote || '*No note entered yet...*';
            try {
                previewContent.innerHTML = DOMPurify.sanitize(marked.parse(markdownToRender));
            } catch (e) {
                previewContent.textContent = markdownToRender;
            }
        }

        // Open modal & contextually lock target
        function openCaptureModal() {
            statusMsg.classList.add('hidden');
            targetGroup.classList.add('hidden');

            const hash = window.location.hash.replace(/^#/, '');
            const target = window.FieldCapture.getTargetByIdOrFile(hash);
            renderFormForTarget(target);

            captureModal.classList.add('active');
            captureModal.setAttribute('aria-hidden', 'false');
        }

        function closeCaptureModal() {
            captureModal.classList.remove('active');
            captureModal.setAttribute('aria-hidden', 'true');
        }

        mobileFab.addEventListener('click', openCaptureModal);
        topbarCaptureBtn.addEventListener('click', openCaptureModal);
        captureCloseBtn.addEventListener('click', closeCaptureModal);
        captureBackdrop.addEventListener('click', closeCaptureModal);

        // Submit Note Action
        submitBtn.addEventListener('click', async () => {
            const payload = buildPayload();
            if (!payload) return;

            // Target-specific validation ONLY
            if (payload.type === 'species_bullet') {
                if (!payload.speciesName) {
                    showToast("Please select or type a Tree species.", "warning");
                    treeSearchInput.focus();
                    return;
                }
                if (!noteText.value.trim()) {
                    showToast("Please enter a note for this tree.", "warning");
                    noteText.focus();
                    return;
                }
            } else if (payload.type === 'bird_checklist') {
                if (!payload.birdSpecies) {
                    showToast("Please enter a Bird species name.", "warning");
                    birdInput.focus();
                    return;
                }
            } else if (payload.type === 'donkeybridge') {
                if (!payload.birdSpecies) {
                    showToast("Please enter a Bird species name.", "warning");
                    birdInput.focus();
                    return;
                }
                if (!payload.mnemonic) {
                    showToast("Please enter the call sound / mnemonic.", "warning");
                    mnemonicInput.focus();
                    return;
                }
            } else {
                // Heading based
                const isSighting = /sighting|encounter|survey/i.test(payload.heading);
                if (!noteText.value.trim() && !isSighting) {
                    showToast("Please enter a note before saving.", "warning");
                    noteText.focus();
                    return;
                }
            }

            // Check GitHub token
            if (!ghClient.hasToken()) {
                openSettingsModal();
                showToast("Please enter your GitHub Token first.", "warning", 5000);
                return;
            }

            // UI loading state
            submitBtn.disabled = true;
            submitSpinner.classList.remove('hidden');
            submitText.textContent = "Saving to GitHub...";
            statusMsg.classList.add('hidden');

            try {
                // Fetch file from GitHub
                const { content, sha } = await ghClient.getFile(payload.targetFile);
                let updatedContent = '';

                if (payload.type === 'species_bullet') {
                    updatedContent = MarkdownInjector.injectTreeSpeciesBullet(content, payload.speciesName, payload.formattedNote);
                } else if (payload.type === 'bird_checklist') {
                    updatedContent = MarkdownInjector.injectBirdChecklistSpecies(content, payload.birdSpecies);
                } else if (payload.type === 'donkeybridge') {
                    updatedContent = MarkdownInjector.injectDonkeybridge(content, payload.birdSpecies, payload.mnemonic);
                } else {
                    updatedContent = MarkdownInjector.injectUnderHeading(content, payload.heading, payload.formattedNote);
                }

                if (ghClient.config.mode === 'pr') {
                    const prResult = await ghClient.createPullRequest(payload.targetFile, updatedContent, payload.commitMsg, payload.commitMsg);
                    showToast(`Pull Request created: #${prResult.number}`, "success", 4500);
                } else {
                    await ghClient.directCommit(payload.targetFile, updatedContent, sha, payload.commitMsg);
                    showToast("Note committed to portfolio!", "success", 4000);
                }

                // Reset form
                noteText.value = '';
                sightingLocation.value = '';
                closeCaptureModal();

                // Reload current view if viewing target file
                const currentItem = itemById.get(window.location.hash.replace(/^#/, ''));
                if (currentItem && currentItem.file === payload.targetFile) {
                    loadPage(currentItem.id);
                }

            } catch (err) {
                console.error("Direct commit error:", err);
                outbox.enqueue(payload);
                showToast(`Saved to Outbox (${err.message})`, "warning", 5000);
                closeCaptureModal();
            } finally {
                submitBtn.disabled = false;
                submitSpinner.classList.add('hidden');
                submitText.textContent = "Save Note";
            }
        });

        // Force Save to Outbox Button
        outboxBtn.addEventListener('click', () => {
            const payload = buildPayload();
            if (!payload) return;
            outbox.enqueue(payload);
            showToast("Note saved to offline Outbox queue.", "info", 3500);
            noteText.value = '';
            closeCaptureModal();
        });

        function parseRepoInput(value) {
            const raw = (value || '').trim();
            if (!raw) {
                return { owner: 'julianzille', repo: 'inkwazi-poe' };
            }
            const parts = raw.split('/').map(p => p.trim()).filter(Boolean);
            if (parts.length >= 2) {
                return { owner: parts[0], repo: parts[1] };
            }
            return {
                owner: ghClient.config.owner && ghClient.config.owner !== 'inkwazi-poe' ? ghClient.config.owner : 'julianzille',
                repo: parts[0] || 'inkwazi-poe'
            };
        }

        // Settings Modal Controller
        function openSettingsModal() {
            ghTokenInput.value = ghClient.config.token || '';
            const owner = (ghClient.config.owner && ghClient.config.owner !== 'inkwazi-poe') ? ghClient.config.owner : 'julianzille';
            const repo = ghClient.config.repo || 'inkwazi-poe';
            ghRepoInput.value = `${owner}/${repo}`;
            ghBranchInput.value = ghClient.config.branch || 'main';
            if (ghClient.config.mode === 'pr') {
                modePrRadio.checked = true;
            } else {
                modeDirectRadio.checked = true;
            }
            updateOutboxSettingsUI();
            settingsModal.classList.add('active');
            settingsModal.setAttribute('aria-hidden', 'false');
        }

        function closeSettingsModal() {
            settingsModal.classList.remove('active');
            settingsModal.setAttribute('aria-hidden', 'true');
        }

        topbarSettingsBtn.addEventListener('click', openSettingsModal);
        sidebarSettingsBtn.addEventListener('click', openSettingsModal);
        settingsCloseBtn.addEventListener('click', closeSettingsModal);
        settingsBackdrop.addEventListener('click', closeSettingsModal);

        toggleTokenVisibility.addEventListener('click', () => {
            ghTokenInput.type = ghTokenInput.type === 'password' ? 'text' : 'password';
        });

        testConnectionBtn.addEventListener('click', async () => {
            connectionStatusPill.className = 'connection-status-pill';
            connectionStatusPill.textContent = 'Testing connection...';
            try {
                const { owner, repo } = parseRepoInput(ghRepoInput.value);
                const branch = ghBranchInput.value.trim() || 'main';

                ghClient.saveConfig({
                    token: ghTokenInput.value.trim(),
                    owner: owner,
                    repo: repo,
                    branch: branch
                });

                const info = await ghClient.testConnection();
                connectionStatusPill.classList.add('status-connected');
                connectionStatusPill.textContent = `Connected: ${info.fullName} (${info.canPush ? 'Push OK' : 'Read only'})`;
                showToast("GitHub Connection verified!", "success");
            } catch (err) {
                connectionStatusPill.classList.add('status-failed');
                connectionStatusPill.textContent = `Error: ${err.message}`;
                showToast(err.message, "error", 5000);
            }
        });

        saveSettingsBtn.addEventListener('click', () => {
            const { owner, repo } = parseRepoInput(ghRepoInput.value);

            ghClient.saveConfig({
                token: ghTokenInput.value.trim(),
                owner: owner,
                repo: repo,
                branch: ghBranchInput.value.trim() || 'main',
                mode: modePrRadio.checked ? 'pr' : 'direct'
            });

            showToast("Settings saved successfully.", "success");
            closeSettingsModal();
        });

        clearTokenBtn.addEventListener('click', () => {
            if (confirm("Clear saved GitHub token from this device?")) {
                ghClient.saveConfig({ token: '' });
                ghTokenInput.value = '';
                connectionStatusPill.className = 'connection-status-pill';
                connectionStatusPill.textContent = 'Status: Token Cleared';
                showToast("Token cleared.", "info");
            }
        });

        // Outbox UI & Sync Handling
        function updateOutboxBadge(count) {
            if (count > 0) {
                fabBadge.classList.remove('hidden');
                fabBadge.textContent = count;
                outboxSyncBtn.classList.remove('hidden');
                outboxBadgeCount.textContent = count;
            } else {
                fabBadge.classList.add('hidden');
                outboxSyncBtn.classList.add('hidden');
            }
            if (settingsOutboxCount) settingsOutboxCount.textContent = count;
        }

        function updateOutboxSettingsUI() {
            const queue = outbox.getQueue();
            updateOutboxBadge(queue.length);
            if (!settingsOutboxList) return;

            if (queue.length === 0) {
                settingsOutboxList.innerHTML = '<p class="empty-outbox-msg">No pending notes in offline queue.</p>';
                return;
            }

            settingsOutboxList.innerHTML = queue.map(item => `
                <div class="outbox-item">
                    <div>
                        <b>${item.targetFile}</b> ${item.heading ? `(${item.heading})` : ''}
                        <br><span style="color: var(--text-muted); font-size: 0.75rem;">${new Date(item.createdAt).toLocaleString()}</span>
                    </div>
                    <button class="btn btn-sm btn-danger remove-outbox-item-btn" data-id="${item.id}">Remove</button>
                </div>
            `).join('');

            settingsOutboxList.querySelectorAll('.remove-outbox-item-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    outbox.remove(btn.dataset.id);
                    updateOutboxSettingsUI();
                    showToast("Item removed from Outbox.", "info");
                });
            });
        }

        window.addEventListener('inkwazi-outbox-changed', (e) => {
            updateOutboxBadge(e.detail.count);
        });

        async function triggerOutboxSync() {
            if (!ghClient.hasToken()) {
                openSettingsModal();
                showToast("Please enter your GitHub Token to sync Outbox notes.", "warning");
                return;
            }
            showToast("Syncing offline notes to GitHub...", "warning", 2500);
            const res = await outbox.syncAll();
            if (res.successCount > 0) {
                showToast(`Synced ${res.successCount} note(s) to GitHub!`, "success", 4000);
                const currentItem = itemById.get(window.location.hash.replace(/^#/, ''));
                if (currentItem) loadPage(currentItem.id);
            }
            if (res.failedCount > 0) {
                showToast(`${res.failedCount} note(s) failed to sync. Check network/token.`, "error", 5000);
            }
            updateOutboxSettingsUI();
        }

        outboxSyncBtn.addEventListener('click', triggerOutboxSync);
        settingsSyncOutboxBtn.addEventListener('click', triggerOutboxSync);

        window.addEventListener('online', () => {
            if (outbox.getPendingCount() > 0 && ghClient.hasToken()) {
                triggerOutboxSync();
            }
        });

        updateOutboxBadge(outbox.getPendingCount());
    }

    // =========================================================================
    // Hash Routing Lifecycle
    // =========================================================================
    function handleRoute() {
        const hash = window.location.hash.replace(/^#/, '');
        loadPage(hash || 'dashboard');
    }

    window.addEventListener('hashchange', handleRoute);

    // Initial boot
    renderNavigation();
    setupFieldCapture();
    handleRoute();

})();

