const navigation = [
    {
        label: "Portfolio",
        pages: [
            { file: "README.md", label: "Overview" },
            { file: "Assessments.md", label: "Assessments & reflections" }
        ]
    },
    {
        label: "Practical skills",
        pages: [
            { file: "Guided Walks.md", label: "Guided Walks" },
            { file: "Rifle Handling.md", label: "Rifle Handling" },
            { file: "Dangerous Animal Behavior.md", label: "Dangerous Animal Behaviour" }
        ]
    },
    {
        label: "Field knowledge",
        pages: [
            { file: "Mammals.md", label: "Mammals" },
            { file: "Birds.md", label: "Birds" },
            { file: "Trees.md", label: "Trees" },
            { file: "Reptiles.md", label: "Reptiles" },
            { file: "Arthropods.md", label: "Arthropods" }
        ]
    },
    {
        label: "Course context",
        pages: [
            { file: "&Beyond.md", label: "&Beyond" },
            { file: "Inkwazi.md", label: "Inkwazi" }
        ]
    },
    {
        label: "Working area",
        pages: [
            { file: "Tasks.md", label: "Tasks" },
            { file: "Random.md", label: "Scratch notes" }
        ]
    }
];

const files = navigation.flatMap(section => section.pages.map(page => page.file));

// Elements
const navLinksContainer = document.getElementById('nav-links');
const contentArea = document.getElementById('content');
const loader = document.getElementById('loader');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');

// Initialize
function init() {
    renderSidebar();
    
    // Load initial file or hash
    const initialFile = getFileFromHash() || "README.md";
    loadFile(initialFile);
    
    // Setup mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Setup hash change listener
    window.addEventListener('hashchange', () => {
        const file = getFileFromHash();
        if (file) {
            loadFile(file);
        }
    });
}

function getFileFromHash() {
    const hash = window.location.hash.slice(1);
    const decoded = hash ? decodeURIComponent(hash) : null;
    if (decoded === 'About' || decoded === 'Overview') return 'README.md';
    if (!decoded) return null;

    const page = navigation
        .flatMap(section => section.pages)
        .find(({ file, label }) => file.replace('.md', '') === decoded || label === decoded);

    return page ? page.file : null;
}

function renderSidebar() {
    navLinksContainer.innerHTML = '';
    navigation.forEach(section => {
        const sectionTitle = document.createElement('li');
        sectionTitle.className = 'nav-section-title';
        sectionTitle.textContent = section.label;
        navLinksContainer.appendChild(sectionTitle);

        section.pages.forEach(({ file, label }) => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = `#${encodeURIComponent(label)}`;
            a.className = 'nav-link';
            a.textContent = label;
            a.dataset.file = file;

            a.addEventListener('click', () => {
                // Mobile sidebar auto-close
                if (window.innerWidth <= 900) {
                    sidebar.classList.remove('open');
                }
            });

            li.appendChild(a);
            navLinksContainer.appendChild(li);
        });
    });
}

function updateActiveLink(filename) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.file === filename) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Pre-process Obsidian specific markdown
function preprocessMarkdown(markdown) {
    // Convert Obsidian image embeds directly to HTML so filenames with spaces
    // are rendered reliably by the browser after sanitization.
    let processed = markdown.replace(/!\[\[(.*?)\]\]/g, (_, imagePath) => {
        const safeSrc = encodeURI(imagePath.trim());
        const safeAlt = imagePath.trim()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');

        return `<img src="${safeSrc}" alt="${safeAlt}">`;
    });
    
    // Convert Obsidian links [[Link]] to standard markdown with a URL-safe hash.
    processed = processed.replace(/\[\[(.*?)\]\]/g, (_, linkText) => (
        `[${linkText}](#${encodeURIComponent(linkText)})`
    ));
    
    return processed;
}

async function loadFile(filename) {
    if (!files.includes(filename)) return;
    
    // Update UI state
    updateActiveLink(filename);
    contentArea.classList.add('hidden');
    loader.classList.add('active');
    
    try {
        const response = await fetch(`${filename}?v=${Date.now()}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('File not found: ', response);
        }
        const rawMarkdown = await response.text();
        const processedMarkdown = preprocessMarkdown(rawMarkdown);
        
        // Parse markdown and sanitize
        const html = DOMPurify.sanitize(marked.parse(processedMarkdown));
        
        // Brief timeout for transition effect
        setTimeout(() => {
            contentArea.innerHTML = html;
            
            // Make headings and lists collapsible
            makeCollapsible();
            
            loader.classList.remove('active');
            contentArea.classList.remove('hidden');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
        
    } catch (error) {
        console.error('Error loading file:', error);
        loader.classList.remove('active');
        contentArea.innerHTML = `
            <h1>Error</h1>
            <p>Could not load the content for <strong>${filename.replace('.md', '')}</strong>.</p>
            <p>Please check if the file exists and try again.</p>
        `;
        contentArea.classList.remove('hidden');
    }
}

function makeCollapsible() {
    // 1. Collapsible Headings
    const headings = contentArea.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        heading.classList.add('collapsible-heading');
        
        const toggle = document.createElement('span');
        toggle.className = 'heading-toggle';
        toggle.innerHTML = '▼';
        heading.prepend(toggle);
        
        heading.addEventListener('click', () => {
            heading.classList.toggle('collapsed');
            
            let currentLevel = parseInt(heading.tagName.substring(1));
            let sibling = heading.nextElementSibling;
            
            while (sibling) {
                if (/^H[1-6]$/.test(sibling.tagName)) {
                    let siblingLevel = parseInt(sibling.tagName.substring(1));
                    if (siblingLevel <= currentLevel) break;
                }
                
                if (heading.classList.contains('collapsed')) {
                    sibling.classList.add('hidden-by-heading');
                } else {
                    sibling.classList.remove('hidden-by-heading');
                }
                sibling = sibling.nextElementSibling;
            }
        });
    });

    // 2. Collapsible Nested Lists
    const listItems = contentArea.querySelectorAll('li');
    listItems.forEach(li => {
        const nestedList = li.querySelector('ul, ol');
        if (nestedList) {
            li.classList.add('has-nested-list');
            
            const toggle = document.createElement('span');
            toggle.className = 'list-toggle';
            toggle.innerHTML = '▼';
            
            // Insert toggle before the text node of the li
            li.insertBefore(toggle, li.firstChild);
            
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                li.classList.toggle('collapsed');
            });
        }
    });
}

// Configure marked options
marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true
});

// Run init
init();
