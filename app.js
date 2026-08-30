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
                { id: "guided-walks", file: "Guided Walks.md", title: "Guided Walks Protocol", icon: "🧭", summary: "Briefing standards, walk grades, tracking & neutrality" },
                { id: "rifle-handling", file: "Rifle Handling.md", title: "Rifle Handling", icon: "🎯", summary: ".375 H&H manual of arms, ammo checks, rapid fire" },
                { id: "dangerous-animals", file: "Dangerous Animal Behavior.md", title: "Dangerous Animal Behavior", icon: "⚠️", summary: "Awareness, confrontation & charge engagement matrix" }
            ]
        },
        {
            group: "Assessments",
            items: [
                { id: "eval-shooting", file: "Assessments/Shooting Range.md", title: "Shooting Range Qualification", icon: "📋", summary: "Prone, kneeling, standing scores & target evidence" },
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
                { id: "ws-off-road-driving", file: "Worksheets/Off-road Driving.md", title: "Off-road Driving", icon: "🚙", summary: "4x4 vehicle operations, recovery & terrain driving" }
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
                { id: "mammal-zebra", file: "Mammals/Plains Zebra.md", title: "Plains Zebra", icon: "🦓", summary: "Harem abduction, bachelor groups & foal bonding" },
                { id: "mammal-hyaena", file: "Mammals/Spotted Hyaena.md", title: "Spotted Hyaena", icon: "🐾", summary: "Clan biology, twin rivalry & lactation" },
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
            group: "Botany & Ecology",
            items: [
                { id: "flora-trees", file: "Trees.md", title: "Trees", icon: "🌳", summary: "Key species, ant-thorn symbiosis & leaf anatomy" },
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
                folderWrap.className = 'nav-folder open';
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
        return `<div class="pdf-viewer-container"><div class="pdf-toolbar"><span class="pdf-toolbar-title">📄 ${title}</span><div class="pdf-toolbar-actions"><a href="${src}" target="_blank" rel="noopener noreferrer" class="action-btn pdf-action-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Open in New Tab</span></a><a href="${src}" download class="action-btn pdf-action-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span>Download PDF</span></a></div></div><iframe src="${src}#view=FitH" class="pdf-embed-frame" title="${title}" loading="lazy"></iframe></div>`;
    }

    function preprocessMarkdown(raw) {
        let text = raw;

        // 1. Convert Obsidian embeds: ![[Image.png|width]] or ![[Document.pdf]]
        text = text.replace(/!\[\[([^\]|]+)(?:\|(\d+))?\]\]/g, (match, filename, width) => {
            const cleanFilename = filename.trim();
            const safeSrc = encodeURI(cleanFilename);
            const isPdf = /\.pdf$/i.test(cleanFilename);

            if (isPdf) {
                return renderPdfViewer(safeSrc, cleanFilename);
            }

            const styleAttr = width ? `style="max-width: min(${width}px, 100%);"` : '';
            return `<div class="image-container"><img src="${safeSrc}" alt="${cleanFilename}" ${styleAttr} loading="lazy" class="zoomable-image"><div class="image-caption">${cleanFilename.replace(/\.png$/i, '')}</div></div>`;
        });

        // 2. Convert standard markdown images or pdf embeds
        text = text.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
            const cleanSrc = src.trim();
            const safeSrc = encodeURI(cleanSrc);
            const isPdf = /\.pdf$/i.test(cleanSrc);

            if (isPdf) {
                const title = alt || cleanSrc;
                return renderPdfViewer(safeSrc, title);
            }

            return `<div class="image-container"><img src="${safeSrc}" alt="${alt}" loading="lazy" class="zoomable-image"><div class="image-caption">${alt}</div></div>`;
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

    function postProcessHtml(container) {
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
            const response = await fetch(encodeURI(currentItem.file) + '?t=' + Date.now());
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

            postProcessHtml(contentEl);

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
    // Hash Routing Lifecycle
    // =========================================================================
    function handleRoute() {
        const hash = window.location.hash.replace(/^#/, '');
        loadPage(hash || 'dashboard');
    }

    window.addEventListener('hashchange', handleRoute);

    // Initial boot
    renderNavigation();
    handleRoute();

})();
