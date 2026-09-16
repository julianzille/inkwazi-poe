/**
 * Inkwazi Field Guide Portfolio of Evidence - Field Capture Engine
 * Enables structured mobile field note capture directly into GitHub via REST API.
 */

(function (global) {
    'use strict';

    // =========================================================================
    // 1. Canonical Schema & Restricted Headings Definition
    // =========================================================================
    const CAPTURE_SCHEMA = {
        mammals: {
            title: "Mammals",
            icon: "🐘",
            defaultHeadings: [
                "Features",
                "Behaviour",
                "Social Structure",
                "Food & Diet",
                "Reproduction & Offspring",
                "Ecology",
                "Field Sightings"
            ],
            targets: [
                { id: "mammal-elephant", file: "Mammals/Elephant.md", name: "African Elephant", icon: "🐘" },
                { id: "mammal-buffalo", file: "Mammals/Buffalo.md", name: "African Buffalo", icon: "🐃" },
                { id: "mammal-lion", file: "Mammals/Lion.md", name: "Lion", icon: "🦁" },
                { id: "mammal-leopard", file: "Mammals/Leopard.md", name: "Leopard", icon: "🐆" },
                { id: "mammal-cheetah", file: "Mammals/Cheetah.md", name: "Cheetah", icon: "🐆" },
                { id: "mammal-giraffe", file: "Mammals/Giraffe.md", name: "Giraffe", icon: "🦒" },
                { id: "mammal-hippo", file: "Mammals/Hippo.md", name: "Hippopotamus", icon: "🦛" },
                { id: "mammal-zebra", file: "Mammals/Plains Zebra.md", name: "Plains Zebra", icon: "🦓" },
                { id: "mammal-hyaena", file: "Mammals/Spotted Hyaena.md", name: "Spotted Hyaena", icon: "🐾" },
                { id: "mammal-white-rhino", file: "Mammals/White Rhino.md", name: "White Rhino", icon: "🦏" },
                { 
                    id: "mammal-rhino-compare", 
                    file: "Mammals/White vs Black Rhino.md", 
                    name: "White vs Black Rhino", 
                    icon: "🦏",
                    headings: ["Features & Morphology", "Tracks & Identification", "Behaviour & Ecology", "Field Sightings"]
                }
            ]
        },
        trees: {
            title: "Trees & Botany",
            icon: "🌳",
            targets: [
                {
                    id: "trees-species-list",
                    file: "Trees/Trees List.md",
                    name: "Trees List (Add species note)",
                    icon: "📋",
                    type: "species_bullet"
                },
                {
                    id: "trees-general",
                    file: "Trees/Trees.md",
                    name: "Trees General & References",
                    icon: "🌳",
                    headings: [
                        "Species Comparisons",
                        "Leaf & Bark Morphology",
                        "Ethnobotany & Traditional Uses",
                        "Ecological Symbiosis",
                        "Field Sightings"
                    ]
                }
            ]
        },
        birds: {
            title: "Birds",
            icon: "🦜",
            targets: [
                {
                    id: "birds-general",
                    file: "Birds/General.md",
                    name: "Birds General Notes",
                    icon: "🪶",
                    headings: [
                        "Flight Patterns & Identification",
                        "Morphology & Plumage",
                        "Feeding & Foraging Ecology",
                        "Breeding & Nesting Behaviour",
                        "Field Sightings & Encounters"
                    ]
                },
                {
                    id: "birds-checklist",
                    file: "Birds/Bird List.md",
                    name: "Bird Checklist (Add species)",
                    icon: "📋",
                    type: "bird_checklist"
                },
                {
                    id: "birds-donkeybridges",
                    file: "Birds/Donkeybridges.md",
                    name: "Bird Call Donkeybridges",
                    icon: "🎵",
                    type: "donkeybridge"
                }
            ]
        },
        herps_bugs: {
            title: "Herpetology & Invertebrates",
            icon: "🦎",
            targets: [
                {
                    id: "reptiles",
                    file: "Reptiles.md",
                    name: "Reptiles",
                    icon: "🐍",
                    headings: ["Species Notes", "Field Sightings"]
                },
                {
                    id: "amphibians",
                    file: "Amphibians.md",
                    name: "Amphibians",
                    icon: "🐸",
                    headings: ["Species Notes", "Field Sightings"]
                },
                {
                    id: "arthropods",
                    file: "Arthropods.md",
                    name: "Arthropods & Invertebrates",
                    icon: "🦂",
                    headings: ["Key Species Notes", "Field Surveys & Sightings"]
                }
            ]
        },
        guiding: {
            title: "Guiding & Safety",
            icon: "🧭",
            targets: [
                {
                    id: "guided-walks",
                    file: "Guiding.md",
                    name: "Guided Walks Protocol",
                    icon: "🧭",
                    headings: ["Packing List", "Guest Experience", "Primary Concern", "Types of Walks", "Tracking", "Defensive Positions", "Field Notes"]
                },
                {
                    id: "rifle-handling",
                    file: "Rifle Handling.md",
                    name: "Rifle Handling",
                    icon: "🎯",
                    headings: ["Golden Safety Rules", "Rifle", "Ammunition", "Rapid Fire", "Field Practice Notes"]
                },
                {
                    id: "dangerous-animals",
                    file: "Dangerous Animal Behavior.md",
                    name: "Dangerous Animal Behavior",
                    icon: "⚠️",
                    headings: ["Dangerous Animal Behavior", "Animal Speeds", "Encounter Scenarios", "Field Sightings & Distance Notes"]
                }
            ]
        },
        ecology: {
            title: "Botany & Ecology",
            icon: "🌿",
            targets: [
                {
                    id: "anti-predator",
                    file: "Anti-predator defense.md",
                    name: "Anti-Predator Defenses",
                    icon: "🛡️",
                    headings: ["Examples", "Field Observations & Notes"]
                },
                {
                    id: "astronomy",
                    file: "Astronomy.md",
                    name: "Astronomy & Night Sky",
                    icon: "🌙",
                    headings: ["Moon Phases", "Eclipses", "Night Observations & Celestial Notes"]
                },
                {
                    id: "andbeyond",
                    file: "&Beyond.md",
                    name: "&Beyond & Phinda Reserve",
                    icon: "🌍",
                    headings: ["Phinda", "7 Habitat Types", "Conservation Notes"]
                }
            ]
        }
    };

    const ALL_TARGETS = [];
    Object.keys(CAPTURE_SCHEMA).forEach(catKey => {
        const cat = CAPTURE_SCHEMA[catKey];
        cat.targets.forEach(t => {
            ALL_TARGETS.push({
                ...t,
                categoryKey: catKey,
                categoryTitle: cat.title,
                categoryIcon: cat.icon,
                headings: t.headings || cat.defaultHeadings || []
            });
        });
    });

    function getTargetByIdOrFile(idOrFile) {
        if (!idOrFile) return ALL_TARGETS[0];
        const clean = idOrFile.toLowerCase().trim().replace(/^#/, '');
        // 1. Direct match by id
        let found = ALL_TARGETS.find(t => t.id.toLowerCase() === clean);
        if (found) return found;
        // 2. Direct match by file
        found = ALL_TARGETS.find(t => t.file.toLowerCase() === clean || t.file.toLowerCase().replace(/\.md$/i, '') === clean);
        if (found) return found;
        // 3. Match by partial or route ID mapping
        const aliasMap = {
            'flora-trees': 'trees-general',
            'flora-trees-list': 'trees-species-list',
            'bird-general': 'birds-general',
            'bird-list': 'birds-checklist',
            'bird-donkeybridges': 'birds-donkeybridges',
            'eco-reptiles': 'reptiles',
            'eco-amphibians': 'amphibians',
            'eco-arthropods': 'arthropods',
            'eco-anti-predator': 'anti-predator',
            'eco-astronomy': 'astronomy',
            'context-andbeyond': 'andbeyond',
            'mammal-rhino': 'mammal-rhino-compare'
        };
        if (aliasMap[clean]) {
            found = ALL_TARGETS.find(t => t.id === aliasMap[clean]);
            if (found) return found;
        }

        return ALL_TARGETS[0];
    }

    // =========================================================================
    // 2. Base64 UTF-8 Helpers
    // =========================================================================
    function utf8ToBase64(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    function base64ToUtf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }

    // =========================================================================
    // 3. Markdown Section Injector
    // =========================================================================
    const MarkdownInjector = {
        /**
         * Injects a note cleanly under a specific markdown heading.
         * Preserves existing sections, creates heading if missing.
         */
        injectUnderHeading(originalContent, headingTitle, noteText) {
            const lines = originalContent.split('\n');
            const cleanHeading = headingTitle.trim();
            const headingRegex = new RegExp(`^(#{1,6})\\s+${cleanHeading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'i');

            let headingIndex = -1;
            let headingLevel = 1;

            for (let i = 0; i < lines.length; i++) {
                const match = lines[i].match(headingRegex);
                if (match) {
                    headingIndex = i;
                    headingLevel = match[1].length;
                    break;
                }
            }

            const formattedNote = noteText.trim();

            if (headingIndex === -1) {
                // Heading doesn't exist yet -> append at end
                let result = originalContent.trimEnd();
                if (result.length > 0) result += '\n\n';
                result += `# ${cleanHeading}\n${formattedNote}\n`;
                return result;
            }

            // Find boundary of this section (next heading with level <= headingLevel, or EOF)
            let nextSectionIndex = lines.length;
            for (let j = headingIndex + 1; j < lines.length; j++) {
                const nextHeadingMatch = lines[j].match(/^(#{1,6})\s+/);
                if (nextHeadingMatch && nextHeadingMatch[1].length <= headingLevel) {
                    nextSectionIndex = j;
                    break;
                }
            }

            const beforeSection = lines.slice(0, headingIndex + 1);
            const sectionBody = lines.slice(headingIndex + 1, nextSectionIndex);
            const afterSection = lines.slice(nextSectionIndex);

            // Clean up section body
            const bodyLines = [...sectionBody];
            while (bodyLines.length > 0 && bodyLines[bodyLines.length - 1].trim() === '') {
                bodyLines.pop();
            }

            const noteLines = formattedNote.split('\n');
            bodyLines.push(...noteLines);

            const combined = [...beforeSection, ...bodyLines];
            if (afterSection.length > 0) {
                if (combined[combined.length - 1].trim() !== '') {
                    combined.push('');
                }
                combined.push(...afterSection);
            }

            return combined.join('\n').trimEnd() + '\n';
        },

        /**
         * Injects a bullet under a specific species in Trees List.md
         */
        injectTreeSpeciesBullet(originalContent, speciesCommonName, bulletText) {
            const lines = originalContent.split('\n');
            const targetNameClean = speciesCommonName.toLowerCase().trim();
            let speciesLineIndex = -1;

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                const match = line.match(/^([^()]+?)\s*\((.*?)\)/i);
                if (match) {
                    const common = match[1].trim().toLowerCase();
                    if (common === targetNameClean || targetNameClean.includes(common) || common.includes(targetNameClean)) {
                        speciesLineIndex = i;
                        break;
                    }
                }
            }

            const cleanBullet = bulletText.trim().startsWith('-') ? bulletText.trim() : `- ${bulletText.trim()}`;

            if (speciesLineIndex === -1) {
                // Not found -> append new species block at end
                let result = originalContent.trimEnd() + '\n\n';
                result += `${speciesCommonName}\n${cleanBullet}\n`;
                return result;
            }

            // Find where this species' bullet list ends
            let insertIndex = speciesLineIndex + 1;
            while (insertIndex < lines.length) {
                const line = lines[insertIndex].trim();
                if (line === '') {
                    break;
                }
                if (line.startsWith('-') || line.startsWith('*') || line.startsWith('\t')) {
                    insertIndex++;
                } else {
                    break;
                }
            }

            lines.splice(insertIndex, 0, cleanBullet);
            return lines.join('\n');
        },

        /**
         * Adds a new bird species alphabetically to Birds/Bird List.md
         */
        injectBirdChecklistSpecies(originalContent, newBirdSpecies) {
            const cleanSpecies = newBirdSpecies.trim();
            const birdItemRegex = /^\s*-\s+([A-Za-z0-9\s'’()\-–]+)$/;
            const lines = originalContent.split('\n');

            let birdLinesWithIndices = [];
            for (let i = 0; i < lines.length; i++) {
                const match = lines[i].match(birdItemRegex);
                if (match && !lines[i].includes('Bird List')) {
                    birdLinesWithIndices.push({
                        index: i,
                        name: match[1].trim()
                    });
                }
            }

            if (birdLinesWithIndices.length === 0) {
                return originalContent.trimEnd() + `\n- ${cleanSpecies}\n`;
            }

            // Check if already exists
            const alreadyExists = birdLinesWithIndices.some(b => b.name.toLowerCase() === cleanSpecies.toLowerCase());
            if (alreadyExists) {
                return originalContent; // Already recorded
            }

            // Find alphabetical insert index
            let targetInsertIndex = birdLinesWithIndices[birdLinesWithIndices.length - 1].index + 1;
            for (let b of birdLinesWithIndices) {
                if (cleanSpecies.localeCompare(b.name, undefined, { sensitivity: 'accent' }) < 0) {
                    targetInsertIndex = b.index;
                    break;
                }
            }

            lines.splice(targetInsertIndex, 0, `- ${cleanSpecies}`);

            let result = lines.join('\n');
            // Update species counter if present e.g. "(88 Species)"
            result = result.replace(/\((\d+)\s+Species\)/i, (m, count) => `(${parseInt(count, 10) + 1} Species)`);
            return result;
        },

        /**
         * Injects donkeybridge mnemonic to Birds/Donkeybridges.md
         */
        injectDonkeybridge(originalContent, speciesName, mnemonic) {
            const entry = `- ${speciesName.trim()}: *${mnemonic.trim()}*`;
            return originalContent.trimEnd() + '\n' + entry + '\n';
        }
    };

    // =========================================================================
    // 4. GitHub REST API Client
    // =========================================================================
    class GitHubClient {
        constructor() {
            this.storageKey = 'inkwazi_gh_config';
            this.loadConfig();
        }

        loadConfig() {
            try {
                const raw = localStorage.getItem(this.storageKey);
                const loaded = raw ? JSON.parse(raw) : {};
                // Auto-fix if previously corrupted by inkwazi-poe/inkwazi-poe bug
                if (loaded.owner === 'inkwazi-poe' && (loaded.repo === 'inkwazi-poe' || !loaded.repo)) {
                    loaded.owner = 'julianzille';
                }
                this.config = {
                    token: loaded.token || '',
                    owner: loaded.owner || 'julianzille',
                    repo: loaded.repo || 'inkwazi-poe',
                    branch: loaded.branch || 'main',
                    mode: loaded.mode || 'direct' // 'direct' or 'pr'
                };
            } catch (e) {
                this.config = {
                    token: '',
                    owner: 'julianzille',
                    repo: 'inkwazi-poe',
                    branch: 'main',
                    mode: 'direct'
                };
            }
        }

        saveConfig(cfg) {
            this.config = { ...this.config, ...cfg };
            localStorage.setItem(this.storageKey, JSON.stringify(this.config));
        }

        hasToken() {
            return Boolean(this.config.token && this.config.token.trim().length > 0);
        }

        async testConnection() {
            if (!this.hasToken()) {
                throw new Error("No GitHub Personal Access Token configured.");
            }
            const res = await fetch(`https://api.github.com/repos/${this.config.owner}/${this.config.repo}`, {
                headers: {
                    'Authorization': `Bearer ${this.config.token.trim()}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!res.ok) {
                if (res.status === 401) throw new Error("Invalid or expired GitHub Token (401 Unauthorized).");
                if (res.status === 404) throw new Error(`Repository ${this.config.owner}/${this.config.repo} not found (or token lacks repo permission).`);
                throw new Error(`GitHub API error: HTTP ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            return {
                ok: true,
                fullName: data.full_name,
                defaultBranch: data.default_branch,
                permissions: data.permissions,
                canPush: data.permissions ? data.permissions.push : true
            };
        }

        async getFile(path) {
            if (!this.hasToken()) {
                throw new Error("No GitHub Personal Access Token configured.");
            }
            const url = `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/${encodeURIComponent(path)}?ref=${this.config.branch}&t=${Date.now()}`;
            const res = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${this.config.token.trim()}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!res.ok) {
                throw new Error(`Failed to fetch file ${path}: HTTP ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            const utf8Content = base64ToUtf8(data.content.replace(/\n/g, ''));
            return {
                content: utf8Content,
                sha: data.sha
            };
        }

        async directCommit(path, newContent, sha, message) {
            const url = `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/${encodeURIComponent(path)}`;
            const payload = {
                message: message || `field-note: update ${path}`,
                content: utf8ToBase64(newContent),
                sha: sha,
                branch: this.config.branch
            };

            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${this.config.token.trim()}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.message || `Commit failed: HTTP ${res.status} ${res.statusText}`);
            }

            return await res.json();
        }

        async createPullRequest(path, newContent, commitMsg, prTitle) {
            const token = this.config.token.trim();
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            };

            // 1. Get base branch SHA
            const branchRes = await fetch(`https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/ref/heads/${this.config.branch}`, { headers });
            if (!branchRes.ok) throw new Error("Failed to get branch ref for PR creation");
            const branchData = await branchRes.json();
            const baseSha = branchData.object.sha;

            // 2. Create feature branch
            const newBranchName = `field-note-${Date.now()}`;
            const createRefRes = await fetch(`https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/refs`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    ref: `refs/heads/${newBranchName}`,
                    sha: baseSha
                })
            });
            if (!createRefRes.ok) throw new Error("Failed to create temporary branch for PR");

            // 3. Get file SHA on new branch
            const fileRes = await fetch(`https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/${encodeURIComponent(path)}?ref=${newBranchName}`, { headers });
            if (!fileRes.ok) throw new Error("Failed to fetch file from temporary branch");
            const fileData = await fileRes.json();

            // 4. Commit to new branch
            const putRes = await fetch(`https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/${encodeURIComponent(path)}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify({
                    message: commitMsg,
                    content: utf8ToBase64(newContent),
                    sha: fileData.sha,
                    branch: newBranchName
                })
            });
            if (!putRes.ok) throw new Error("Failed to commit changes to temporary branch");

            // 5. Open PR
            const prRes = await fetch(`https://api.github.com/repos/${this.config.owner}/${this.config.repo}/pulls`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    title: prTitle || commitMsg,
                    head: newBranchName,
                    base: this.config.branch,
                    body: `Automated field note submission from Inkwazi Mobile Capture.\n\nTarget File: \`${path}\``
                })
            });

            if (!prRes.ok) {
                const prErr = await prRes.json().catch(() => ({}));
                throw new Error(prErr.message || "Failed to create pull request");
            }

            return await prRes.json();
        }
    }

    // =========================================================================
    // 5. Offline Outbox Manager (Bush Resilience)
    // =========================================================================
    class OutboxManager {
        constructor(githubClient) {
            this.github = githubClient;
            this.storageKey = 'inkwazi_field_outbox';
        }

        getQueue() {
            try {
                const raw = localStorage.getItem(this.storageKey);
                return raw ? JSON.parse(raw) : [];
            } catch (e) {
                return [];
            }
        }

        saveQueue(queue) {
            localStorage.setItem(this.storageKey, JSON.stringify(queue));
            this.notifyQueueChanged();
        }

        enqueue(item) {
            const queue = this.getQueue();
            const newItem = {
                id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                createdAt: new Date().toISOString(),
                ...item
            };
            queue.push(newItem);
            this.saveQueue(queue);
            return newItem;
        }

        remove(id) {
            const queue = this.getQueue().filter(item => item.id !== id);
            this.saveQueue(queue);
        }

        getPendingCount() {
            return this.getQueue().length;
        }

        notifyQueueChanged() {
            const count = this.getPendingCount();
            window.dispatchEvent(new CustomEvent('inkwazi-outbox-changed', { detail: { count } }));
        }

        async syncAll(progressCallback) {
            const queue = this.getQueue();
            if (queue.length === 0) return { successCount: 0, failedCount: 0 };

            let successCount = 0;
            let failedCount = 0;
            const remaining = [];

            for (let i = 0; i < queue.length; i++) {
                const item = queue[i];
                if (progressCallback) progressCallback(i + 1, queue.length, item);

                try {
                    // Fetch latest file & SHA
                    const { content, sha } = await this.github.getFile(item.targetFile);
                    
                    // Inject note
                    let updatedContent = '';
                    if (item.type === 'species_bullet') {
                        updatedContent = MarkdownInjector.injectTreeSpeciesBullet(content, item.speciesName, item.formattedNote);
                    } else if (item.type === 'bird_checklist') {
                        updatedContent = MarkdownInjector.injectBirdChecklistSpecies(content, item.birdSpecies);
                    } else if (item.type === 'donkeybridge') {
                        updatedContent = MarkdownInjector.injectDonkeybridge(content, item.birdSpecies, item.mnemonic);
                    } else {
                        updatedContent = MarkdownInjector.injectUnderHeading(content, item.heading, item.formattedNote);
                    }

                    const commitMsg = item.commitMsg || `field-note: add note to ${item.targetFile}`;
                    
                    if (this.github.config.mode === 'pr') {
                        await this.github.createPullRequest(item.targetFile, updatedContent, commitMsg, commitMsg);
                    } else {
                        await this.github.directCommit(item.targetFile, updatedContent, sha, commitMsg);
                    }

                    successCount++;
                } catch (err) {
                    console.error("Outbox item sync failed:", item, err);
                    failedCount++;
                    item.lastError = err.message;
                    remaining.push(item);
                }
            }

            this.saveQueue(remaining);
            return { successCount, failedCount, remainingCount: remaining.length };
        }
    }

    // Export to global window namespace
    global.FieldCapture = {
        SCHEMA: CAPTURE_SCHEMA,
        ALL_TARGETS,
        getTargetByIdOrFile,
        MarkdownInjector,
        GitHubClient,
        OutboxManager,
        client: new GitHubClient(),
        outbox: null
    };

    global.FieldCapture.outbox = new OutboxManager(global.FieldCapture.client);

})(typeof window !== 'undefined' ? window : this);
