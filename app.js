const files = [
    "Inkwazi.md",
    "README.md",
    "&Beyond.md",
    "Birds.md",
    "Dangerous Animal Behavior.md",
    "Guided Walks.md",
    "Mammals.md",
    "Rifle Handling.md",
    "Test Review.md",
    "Trees.md"
];

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
    const initialFile = getFileFromHash() || "Inkwazi.md";
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
    return hash ? decodeURIComponent(hash) + '.md' : null;
}

function renderSidebar() {
    navLinksContainer.innerHTML = '';
    files.forEach(file => {
        const name = file.replace('.md', '');
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = `#${encodeURIComponent(name)}`;
        a.className = 'nav-link';
        a.textContent = name;
        a.dataset.file = file;
        
        a.addEventListener('click', (e) => {
            // Mobile sidebar auto-close
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('open');
            }
        });
        
        li.appendChild(a);
        navLinksContainer.appendChild(li);
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
    // Convert Obsidian image embeds ![[image.png]] to standard markdown ![image.png](image.png)
    let processed = markdown.replace(/!\[\[(.*?)\]\]/g, '![$1]($1)');
    
    // Convert Obsidian links [[Link]] to standard markdown [Link](#Link)
    processed = processed.replace(/\[\[(.*?)\]\]/g, '[$1](#$1)');
    
    return processed;
}

async function loadFile(filename) {
    if (!files.includes(filename)) return;
    
    // Update UI state
    updateActiveLink(filename);
    contentArea.classList.add('hidden');
    loader.classList.add('active');
    
    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error('File not found');
        
        const rawMarkdown = await response.text();
        const processedMarkdown = preprocessMarkdown(rawMarkdown);
        
        // Parse markdown and sanitize
        const html = DOMPurify.sanitize(marked.parse(processedMarkdown));
        
        // Brief timeout for transition effect
        setTimeout(() => {
            contentArea.innerHTML = html;
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

// Configure marked options
marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true
});

// Run init
init();
