(function() {
    'use strict';

    const STORAGE_KEY = 'readme-badge-studio-config';
    const DARK_MODE_KEY = 'readme-badge-studio-dark-mode';
    const LANGUAGE_KEY = 'readme-badge-studio-language';
    const SNAPSHOTS_KEY = 'readme-badge-studio-snapshots';

    const i18n = {
        zh: {
            generate: '生成徽章',
            share: '分享',
            darkMode: '深色模式',
            reset: '重置',
            clear: '清空',
            githubRepoUrl: 'GitHub 仓库地址',
            projectName: '项目名称',
            githubUsername: 'GitHub 用户名',
            githubRepo: 'GitHub 仓库名',
            version: '版本号',
            projectType: '项目类型',
            selectProjectType: '选择项目类型',
            selectOption: '-- 选择 --',
            smartRecommend: '智能推荐徽章',
            license: 'License 与状态',
            projectStatus: '项目状态',
            techStack: '技术栈 (多选)',
            deployPlatform: '部署平台 (多选)',
            socialLinks: '社交链接 (多选)',
            badgeStyle: '徽章样式',
            logoEnabled: '显示 Logo 图标',
            colorScheme: '颜色方案',
            outputFormat: '输出格式',
            outputMarkdown: 'Markdown 图片',
            outputMarkdownLink: 'Markdown 图片带链接',
            outputHtml: 'HTML img 标签',
            fullReadme: '完整 README 设置',
            projectDescription: '项目简介',
            featuresList: '功能列表 (每行一个)',
            installCommand: '安装命令',
            usageCommand: '使用命令',
            demoUrl: '在线演示地址',
            screenshotUrl: '截图地址',
            showContributing: '显示贡献说明',
            showAcknowledgments: '显示致谢',
            customBadges: '自定义徽章',
            addCustomBadge: '添加自定义徽章',
            snapshots: '配置快照',
            saveSnapshot: '保存快照',
            healthCheck: '配置健康检查',
            publishChecklist: '发布前检查',
            pwaStatus: 'PWA 状态',
            dataManagement: '💾 数据管理',
            exportConfig: '导出配置',
            importConfig: '导入配置',
            generateFullReadme: '生成完整 README',
            exportPackage: '导出项目包',
            localFirst: 'Local First',
            worksOffline: 'Works Offline for UI',
            badgesNeedOnline: 'Badges require shields.io',
            preview: '实时预览',
            badges: '徽章预览',
            readme: 'README 预览',
            code: 'Markdown 代码',
            badgesMd: 'Badges',
            fullHeader: 'Full Header',
            rawUrls: 'Raw URLs',
            html: 'HTML',
            fullReadmeTab: 'Full README',
            copy: '复制',
            download: '下载',
            templates: '📑 内置模板',
            type: {
                frontend: 'Frontend Website',
                ai: 'AI Tool',
                cli: 'CLI Tool',
                server: 'Server Tool',
                extension: 'Browser Extension',
                docs: 'Documentation',
                library: 'Library / Package',
                fun: 'Fun Project'
            },
            minimal: 'Minimal Open Source',
            minimalDesc: '简洁开源项目风格',
            modernWeb: 'Modern Web App',
            modernWebDesc: '适合前端网页项目',
            aiTool: 'AI Tool Project',
            aiToolDesc: '适合 AI 工具项目',
            server: 'Server / DevOps',
            serverDesc: '适合服务器、运维项目',
            fun: 'Fun Side Project',
            funDesc: '适合个人小玩具项目',
            noBadges: '请选择技术栈、部署平台或填写项目信息后生成徽章',
            noReadme: '请先配置并生成徽章',
            noCode: '请先配置并生成徽章',
            features: 'Features',
            quickStart: 'Quick Start',
            license_label: 'License',
            copied: '已复制到剪贴板',
            copyFailed: '复制失败，请手动复制',
            configSaved: '配置已保存',
            configExported: '已导出配置',
            configImported: '已导入配置',
            importFailed: '导入失败：无效的 JSON 格式',
            readmeDownloaded: '已下载 README.md',
            packageExported: '已导出项目包',
            templateApplied: '已应用模板',
            configReset: '已恢复默认配置',
            configCleared: '已清空配置',
            generated: '已重新生成徽章',
            addedCustom: '已添加自定义徽章',
            removedCustom: '已删除自定义徽章',
            badgeMovedUp: '徽章已上移',
            badgeMovedDown: '徽章已下移',
            selectedAll: '已全选',
            cleared: '已清空',
            recommendedApplied: '已应用推荐组合',
            shareLinkCopied: '分享链接已复制',
            shareLinkCleared: '分享参数已清除',
            shareParseFailed: '分享链接解析失败',
            snapshotSaved: '快照已保存',
            snapshotRestored: '快照已恢复',
            snapshotDeleted: '快照已删除',
            snapshotLimit: '快照已达上限 (10个)，请删除旧快照',
            repoParsed: '已解析',
            repoParseFailed: '无法解析仓库地址，请检查格式',
            langSwitched: '已切换语言',
            pwaReady: 'PWA Ready',
            pwaOffline: 'Offline Mode',
            projectDescriptionHint: '一句话介绍你的项目',
            featuresHint: '功能1\n功能2\n功能3',
            installHint: 'npm install xxx',
            usageHint: 'npm run dev',
            demoHint: 'https://example.com',
            screenshotHint: 'https://example.com/screenshot.png'
        },
        en: {
            generate: 'Generate Badges',
            share: 'Share',
            darkMode: 'Dark Mode',
            reset: 'Reset',
            clear: 'Clear',
            githubRepoUrl: 'GitHub Repository URL',
            projectName: 'Project Name',
            githubUsername: 'GitHub Username',
            githubRepo: 'GitHub Repo',
            version: 'Version',
            projectType: 'Project Type',
            selectProjectType: 'Select Project Type',
            selectOption: '-- Select --',
            smartRecommend: 'Smart Recommend',
            license: 'License & Status',
            projectStatus: 'Project Status',
            techStack: 'Tech Stack (Multi)',
            deployPlatform: 'Deploy Platform (Multi)',
            socialLinks: 'Social Links (Multi)',
            badgeStyle: 'Badge Style',
            logoEnabled: 'Show Logo',
            colorScheme: 'Color Scheme',
            outputFormat: 'Output Format',
            outputMarkdown: 'Markdown Image',
            outputMarkdownLink: 'Markdown Image with Link',
            outputHtml: 'HTML img Tag',
            fullReadme: 'Full README Settings',
            projectDescription: 'Project Description',
            featuresList: 'Features List (one per line)',
            installCommand: 'Install Command',
            usageCommand: 'Usage Command',
            demoUrl: 'Demo URL',
            screenshotUrl: 'Screenshot URL',
            showContributing: 'Show Contributing',
            showAcknowledgments: 'Show Acknowledgments',
            customBadges: 'Custom Badges',
            addCustomBadge: 'Add Custom Badge',
            snapshots: 'Config Snapshots',
            saveSnapshot: 'Save Snapshot',
            healthCheck: 'Health Check',
            publishChecklist: 'Publish Checklist',
            pwaStatus: 'PWA Status',
            dataManagement: '💾 Data Management',
            exportConfig: 'Export Config',
            importConfig: 'Import Config',
            generateFullReadme: 'Generate Full README',
            exportPackage: 'Export Package',
            localFirst: 'Local First',
            worksOffline: 'Works Offline for UI',
            badgesNeedOnline: 'Badges require shields.io',
            preview: 'Live Preview',
            badges: 'Badges',
            readme: 'README',
            code: 'Code',
            badgesMd: 'Badges',
            fullHeader: 'Full Header',
            rawUrls: 'Raw URLs',
            html: 'HTML',
            fullReadmeTab: 'Full README',
            copy: 'Copy',
            download: 'Download',
            templates: '📑 Templates',
            type: {
                frontend: 'Frontend Website',
                ai: 'AI Tool',
                cli: 'CLI Tool',
                server: 'Server Tool',
                extension: 'Browser Extension',
                docs: 'Documentation',
                library: 'Library / Package',
                fun: 'Fun Project'
            },
            minimal: 'Minimal Open Source',
            minimalDesc: 'Simple open source style',
            modernWeb: 'Modern Web App',
            modernWebDesc: 'For frontend web projects',
            aiTool: 'AI Tool Project',
            aiToolDesc: 'For AI tool projects',
            server: 'Server / DevOps',
            serverDesc: 'For server/devops projects',
            fun: 'Fun Side Project',
            funDesc: 'For fun side projects',
            noBadges: 'Select tech stack, deploy platform or fill project info to generate badges',
            noReadme: 'Configure and generate badges first',
            noCode: 'Configure and generate badges first',
            features: 'Features',
            quickStart: 'Quick Start',
            license_label: 'License',
            copied: 'Copied to clipboard',
            copyFailed: 'Copy failed, please copy manually',
            configSaved: 'Config saved',
            configExported: 'Config exported',
            configImported: 'Config imported',
            importFailed: 'Import failed: invalid JSON format',
            readmeDownloaded: 'README.md downloaded',
            packageExported: 'Package exported',
            templateApplied: 'Template applied',
            configReset: 'Config reset to default',
            configCleared: 'Config cleared',
            generated: 'Badges regenerated',
            addedCustom: 'Custom badge added',
            removedCustom: 'Custom badge removed',
            badgeMovedUp: 'Badge moved up',
            badgeMovedDown: 'Badge moved down',
            selectedAll: 'Selected all',
            cleared: 'Cleared',
            recommendedApplied: 'Recommended applied',
            shareLinkCopied: 'Share link copied',
            shareLinkCleared: 'Share parameters cleared',
            shareParseFailed: 'Failed to parse share link',
            snapshotSaved: 'Snapshot saved',
            snapshotRestored: 'Snapshot restored',
            snapshotDeleted: 'Snapshot deleted',
            snapshotLimit: 'Snapshot limit reached (10), please delete old ones',
            repoParsed: 'Parsed',
            repoParseFailed: 'Cannot parse repo URL, check format',
            langSwitched: 'Language switched',
            pwaReady: 'PWA Ready',
            pwaOffline: 'Offline Mode',
            projectDescriptionHint: 'One sentence about your project',
            featuresHint: 'Feature 1\nFeature 2\nFeature 3',
            installHint: 'npm install xxx',
            usageHint: 'npm run dev',
            demoHint: 'https://example.com',
            screenshotHint: 'https://example.com/screenshot.png'
        }
    };

    let currentLang = 'en';
    let currentMdTab = 'badges';

    const TECH_STACK_FEATURES = {
        'HTML': ['Semantic HTML5 structure', 'Responsive layout', 'SEO friendly'],
        'CSS': ['Modern CSS3 features', 'Flex/Grid layout', 'CSS animations'],
        'JavaScript': ['Vanilla JavaScript', 'ES6+ features', 'No dependencies'],
        'TypeScript': ['Type safety', 'IDE auto-complete', 'Better maintainability'],
        'React': ['Component-based', 'Virtual DOM', 'Rich ecosystem'],
        'Vue': ['Progressive framework', 'Reactive data binding', 'Easy to learn'],
        'Node.js': ['Server-side JavaScript', 'Async I/O', 'npm ecosystem'],
        'Python': ['Clean syntax', 'Powerful data processing', 'AI/ML首选'],
        'Go': ['High performance', 'Goroutine concurrency', 'Docker friendly'],
        'Rust': ['Memory safety', 'Zero-cost abstractions', 'Performance + safety'],
        'Docker': ['Container deployment', 'Environment consistency', 'Fast startup'],
        'Cloudflare': ['Global CDN', 'DDoS protection', 'Free SSL'],
        'GitHub Pages': ['Free static hosting', 'Custom domain', 'CI/CD deployment']
    };

    function getDefaultConfig() {
        return {
            projectName: 'my-awesome-project',
            githubUsername: 'your-username',
            githubRepo: 'your-repo',
            version: 'v1.0.0',
            license: 'MIT',
            projectStatus: 'active',
            projectType: '',
            techStack: ['JavaScript', 'GitHub Pages'],
            deployPlatform: ['GitHub Pages'],
            socialLinks: ['GitHub Repo', 'GitHub Stars'],
            badgeStyle: 'flat',
            logoEnabled: true,
            colorScheme: 'auto',
            outputFormat: 'markdown',
            customBadges: [],
            badgeOrder: [],
            projectDescription: '',
            featuresList: '',
            installCommand: '',
            usageCommand: '',
            demoUrl: '',
            screenshotUrl: '',
            showContributing: true,
            showAcknowledgments: false
        };
    }

    const TEMPLATES = {
        minimal: { projectStatus: 'active', techStack: ['GitHub Pages'], deployPlatform: ['GitHub Pages'], badgeStyle: 'flat-square', colorScheme: 'minimal', description: 'A simple open source project' },
        'modern-web': { projectStatus: 'active', techStack: ['TypeScript', 'React', 'GitHub Pages'], deployPlatform: ['Vercel', 'GitHub Pages'], badgeStyle: 'flat', colorScheme: 'auto', description: 'Modern web application project' },
        'ai-tool': { projectStatus: 'beta', techStack: ['Python', 'Docker'], deployPlatform: ['Vercel', 'Docker'], badgeStyle: 'for-the-badge', colorScheme: 'cyber', description: 'AI tool project' },
        server: { projectStatus: 'active', techStack: ['Go', 'Docker'], deployPlatform: ['Self Hosted', 'Docker'], badgeStyle: 'plastic', colorScheme: 'github-dark', description: 'Server/devops tool' },
        fun: { projectStatus: 'active', techStack: ['JavaScript'], deployPlatform: ['GitHub Pages'], badgeStyle: 'flat-square', colorScheme: 'warm', description: 'Fun side project' }
    };

    const PROJECT_TYPE_RECOMMENDATIONS = {
        frontend: { projectStatus: 'active', techStack: ['TypeScript', 'React', 'GitHub Pages'], deployPlatform: ['Vercel', 'Netlify', 'GitHub Pages'], socialLinks: ['GitHub Repo', 'GitHub Stars', 'Website', 'Issues'], badgeStyle: 'flat', colorScheme: 'auto', description: 'Modern frontend web application' },
        ai: { projectStatus: 'beta', techStack: ['Python', 'Docker'], deployPlatform: ['Vercel', 'Docker'], socialLinks: ['GitHub Repo', 'GitHub Stars', 'Issues'], badgeStyle: 'for-the-badge', colorScheme: 'cyber', description: 'AI-powered tool' },
        cli: { projectStatus: 'active', techStack: ['Node.js', 'Go'], deployPlatform: ['npm', 'Docker'], socialLinks: ['GitHub Repo', 'GitHub Stars', 'npm'], badgeStyle: 'flat-square', colorScheme: 'minimal', description: 'Command line tool' },
        server: { projectStatus: 'active', techStack: ['Go', 'Docker'], deployPlatform: ['Self Hosted', 'Docker'], socialLinks: ['GitHub Repo', 'GitHub Stars', 'Docker'], badgeStyle: 'plastic', colorScheme: 'github-dark', description: 'Server application' },
        extension: { projectStatus: 'active', techStack: ['JavaScript', 'TypeScript'], deployPlatform: ['GitHub Pages'], socialLinks: ['GitHub Repo', 'GitHub Stars', 'Issues'], badgeStyle: 'flat-square', colorScheme: 'auto', description: 'Browser extension' },
        docs: { projectStatus: 'active', techStack: ['GitHub Pages'], deployPlatform: ['GitHub Pages'], socialLinks: ['GitHub Repo'], badgeStyle: 'flat-square', colorScheme: 'minimal', description: 'Documentation project' },
        library: { projectStatus: 'active', techStack: ['TypeScript', 'Node.js'], deployPlatform: ['npm'], socialLinks: ['GitHub Repo', 'GitHub Stars', 'npm', 'License'], badgeStyle: 'flat', colorScheme: 'auto', description: 'Open source library' },
        fun: { projectStatus: 'active', techStack: ['JavaScript'], deployPlatform: ['GitHub Pages'], socialLinks: ['GitHub Repo', 'GitHub Stars'], badgeStyle: 'flat-square', colorScheme: 'warm', description: 'Fun side project' }
    };

    const TECH_STACK_LOGOS = {
        'HTML': 'html5', 'CSS': 'css3', 'JavaScript': 'javascript',
        'TypeScript': 'typescript', 'React': 'react', 'Vue': 'vuedotjs',
        'Node.js': 'nodedotjs', 'Python': 'python', 'Go': 'go',
        'Rust': 'rust', 'Docker': 'docker', 'Cloudflare': 'cloudflare',
        'GitHub Pages': 'githubpages'
    };

    const DEPLOY_LOGOS = {
        'GitHub Pages': 'github', 'Cloudflare Pages': 'cloudflare',
        'Vercel': 'vercel', 'Netlify': 'netlify',
        'Docker': 'docker', 'Self Hosted': 'server'
    };

    const STATUS_COLORS = { 'active': '4c1', 'beta': '007ec6', 'experimental': '9cf', 'deprecated': 'red', 'archived': 'gray' };

    const COLOR_SCHEMES = {
        'auto': { bg: '4c1', color: '007ec6', accent: '9cf' },
        'github-dark': { bg: '238636', color: 'f0f6fc', accent: '58a6ff' },
        'pastel': { bg: 'a8d8ff', color: '6e7681', accent: 'ffd33d' },
        'cyber': { bg: '00ff9d', color: 'ff00ff', accent: '00d4ff' },
        'minimal': { bg: '6c757d', color: '212529', accent: 'adb5bd' },
        'warm': { bg: 'ff6b35', color: '8b4513', accent: 'ffa500' }
    };

    let config = getDefaultConfig();
    let elements = {};

    function getElements() {
        const required = ['projectName', 'githubUsername', 'githubRepo', 'githubRepoUrl', 'version', 'license', 'projectStatus', 'projectType', 'badgeStyle', 'logoEnabled', 'badgeCount', 'badgesPreview', 'readmePreview', 'markdownOutput', 'resetBtn', 'clearBtn', 'copyMdBtn', 'downloadReadmeBtn', 'exportConfigBtn', 'importConfigBtn', 'importFileInput', 'generateReadmeBtn', 'toast', 'toastMessage', 'generateBadgeBtn', 'darkModeBtn', 'customBadgesList', 'healthCheck', 'publishChecklist', 'snapshotsList', 'langToggleBtn', 'shareBtn', 'smartRecommendBtn', 'saveSnapshotBtn', 'exportPackageBtn', 'projectDescription', 'featuresList', 'installCommand', 'usageCommand', 'demoUrl', 'screenshotUrl', 'showContributing', 'showAcknowledgments'];
        required.forEach(id => { elements[id] = document.getElementById(id); });
    }

    function getInitialLanguage() {
        const saved = localStorage.getItem(LANGUAGE_KEY);
        if (saved) return saved;
        const browserLang = navigator.language || navigator.userLanguage || 'en';
        return browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    }

    function setLanguage(lang) {
        currentLang = lang;
        try { localStorage.setItem(LANGUAGE_KEY, lang); } catch (e) {}
        renderI18nText();
        updateLanguageToggle();
    }

    function t(key) {
        return i18n[currentLang][key] || i18n['en'][key] || key;
    }

    function renderI18nText() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = t(key);
            if (text) el.textContent = text;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const text = t(key + 'Hint') || t(key);
            if (text) el.placeholder = text;
        });

        const langLabel = document.getElementById('langLabel');
        if (langLabel) langLabel.textContent = currentLang.toUpperCase();
    }

    function updateLanguageToggle() {
        const btn = elements.langToggleBtn;
        if (btn) {
            const langText = currentLang === 'zh' ? '中文' : 'English';
            btn.innerHTML = `<span class="btn-icon">🌐</span> <span id="langLabel">${langText}</span>`;
        }
    }

    function encodeShareConfig() {
        const minimal = {
            p: config.projectName,
            u: config.githubUsername,
            r: config.githubRepo,
            v: config.version,
            l: config.license,
            s: config.projectStatus,
            t: config.techStack,
            d: config.deployPlatform,
            so: config.socialLinks,
            bs: config.badgeStyle,
            cs: config.colorScheme,
            le: config.logoEnabled ? 1 : 0,
            cb: config.customBadges
        };
        return btoa(encodeURIComponent(JSON.stringify(minimal)));
    }

    function decodeShareConfig(encoded) {
        try {
            const decoded = decodeURIComponent(atob(encoded));
            return JSON.parse(decoded);
        } catch (e) { return null; }
    }

    function applyConfigFromUrl() {
        const hash = window.location.hash.substring(1);
        if (!hash) return false;
        const parsed = decodeShareConfig(hash);
        if (!parsed) { showToast(t('shareParseFailed'), 'error'); return false; }
        config = { ...getDefaultConfig(), ...config };
        if (parsed.p) config.projectName = parsed.p;
        if (parsed.u) config.githubUsername = parsed.u;
        if (parsed.r) config.githubRepo = parsed.r;
        if (parsed.v) config.version = parsed.v;
        if (parsed.l) config.license = parsed.l;
        if (parsed.s) config.projectStatus = parsed.s;
        if (parsed.t) config.techStack = parsed.t;
        if (parsed.d) config.deployPlatform = parsed.d;
        if (parsed.so) config.socialLinks = parsed.so;
        if (parsed.bs) config.badgeStyle = parsed.bs;
        if (parsed.cs) config.colorScheme = parsed.cs;
        if (parsed.le !== undefined) config.logoEnabled = parsed.le === 1;
        if (parsed.cb) config.customBadges = parsed.cb;
        syncFormFromConfig();
        return true;
    }

    function generateShareLink() {
        const encoded = encodeShareConfig();
        const url = window.location.origin + window.location.pathname + '#' + encoded;
        copyToClipboard(url);
        showToast(t('shareLinkCopied'));
    }

    function clearShareLink() {
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
            showToast(t('shareLinkCleared'));
        }
    }

    function initApp() {
        getElements();
        currentLang = getInitialLanguage();
        loadConfig();
        loadDarkMode();
        applyConfigFromUrl();
        bindEvents();
        registerServiceWorker();
        renderAll();
        renderI18nText();
        renderPwaStatus();
    }

    function loadConfig() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                config = normalizeConfig(parsed);
            }
        } catch (e) { config = getDefaultConfig(); }
        syncFormFromConfig();
    }

    function normalizeConfig(input) {
        const defaults = getDefaultConfig();
        const result = { ...defaults };
        if (input && typeof input === 'object') {
            Object.keys(result).forEach(key => {
                if (key in input) {
                    if (key === 'customBadges') {
                        result[key] = Array.isArray(input[key]) ? input[key].filter(b => b && b.label && b.message && b.color) : [];
                    } else if (Array.isArray(defaults[key])) {
                        result[key] = Array.isArray(input[key]) ? input[key] : defaults[key];
                    } else { result[key] = input[key]; }
                }
            });
        }
        return result;
    }

    function saveConfig() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(config)); } catch (e) { console.warn('Save failed:', e); }
    }

    function loadDarkMode() {
        try {
            if (localStorage.getItem(DARK_MODE_KEY) === 'true') {
                document.body.classList.add('dark-mode');
                updateDarkModeButton();
            }
        } catch (e) {}
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        try { localStorage.setItem(DARK_MODE_KEY, isDark); } catch (e) {}
        updateDarkModeButton();
        showToast(isDark ? '已切换到深色模式' : '已切换到浅色模式');
    }

    function updateDarkModeButton() {
        const btn = elements.darkModeBtn;
        if (btn) {
            const isDark = document.body.classList.contains('dark-mode');
            btn.innerHTML = isDark ? `<span class="btn-icon">☀️</span> <span data-i18n="lightMode">Light Mode</span>` : `<span class="btn-icon">🌙</span> <span data-i18n="darkMode">${t('darkMode')}</span>`;
        }
    }

    function syncFormFromConfig() {
        const fields = ['projectName', 'githubUsername', 'githubRepo', 'githubRepoUrl', 'version', 'license', 'projectStatus', 'projectType', 'badgeStyle', 'projectDescription', 'featuresList', 'installCommand', 'usageCommand', 'demoUrl', 'screenshotUrl'];
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = config[id] || '';
        });

        if (elements.logoEnabled) elements.logoEnabled.checked = config.logoEnabled !== false;
        if (elements.showContributing) elements.showContributing.checked = config.showContributing !== false;
        if (elements.showAcknowledgments) elements.showAcknowledgments.checked = config.showAcknowledgments === true;

        document.querySelectorAll('input[name="colorScheme"]').forEach(radio => { radio.checked = radio.value === (config.colorScheme || 'auto'); });
        document.querySelectorAll('input[name="outputFormat"]').forEach(radio => { radio.checked = radio.value === (config.outputFormat || 'markdown'); });
        ['techStack', 'deployPlatform', 'socialLinks'].forEach(name => {
            document.querySelectorAll(`input[name="${name}"]`).forEach(cb => { cb.checked = (config[name] || []).includes(cb.value); });
        });

        renderCustomBadges();
        renderSnapshots();
    }

    function updateConfigFromForm() {
        const fields = ['projectName', 'githubUsername', 'githubRepo', 'githubRepoUrl', 'version', 'license', 'projectStatus', 'projectType', 'badgeStyle', 'projectDescription', 'featuresList', 'installCommand', 'usageCommand', 'demoUrl', 'screenshotUrl'];
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) config[id] = el.value.trim();
        });

        if (elements.logoEnabled) config.logoEnabled = elements.logoEnabled.checked;
        if (elements.showContributing) config.showContributing = elements.showContributing.checked;
        if (elements.showAcknowledgments) config.showAcknowledgments = elements.showAcknowledgments.checked;

        const colorSchemeEl = document.querySelector('input[name="colorScheme"]:checked');
        config.colorScheme = colorSchemeEl ? colorSchemeEl.value : 'auto';
        const outputFormatEl = document.querySelector('input[name="outputFormat"]:checked');
        config.outputFormat = outputFormatEl ? outputFormatEl.value : 'markdown';

        config.techStack = Array.from(document.querySelectorAll('input[name="techStack"]:checked')).map(cb => cb.value);
        config.deployPlatform = Array.from(document.querySelectorAll('input[name="deployPlatform"]:checked')).map(cb => cb.value);
        config.socialLinks = Array.from(document.querySelectorAll('input[name="socialLinks"]:checked')).map(cb => cb.value);
    }

    function getColors() { return COLOR_SCHEMES[config.colorScheme] || COLOR_SCHEMES['auto']; }

    function validateBadgeUrl(url) {
        if (!url || typeof url !== 'string') return false;
        if (url.includes('undefined') || url.includes('null') || url.includes('%25')) return false;
        return true;
    }

    function generateBadgeUrl(badge) {
        const style = config.badgeStyle || 'flat';
        let logoParam = '';
        if (config.logoEnabled && badge.logo) { logoParam = `&logo=${badge.logo}`; }
        const labelEncoded = encodeURIComponent(badge.label || '');
        const messageEncoded = encodeURIComponent(badge.message || '');
        const colorEncoded = encodeURIComponent(badge.color || '4c1');
        return `https://img.shields.io/badge/${labelEncoded}-${messageEncoded}-${colorEncoded}?style=${style}${logoParam}`;
    }

    function parseGitHubRepoUrl(url) {
        if (!url) return null;
        url = url.trim();
        const patterns = [
            /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/([^\/\s]+)\/?$/,
            /^(?:https?:\/\/)?(?:www\.)?([^\/]+)\/([^\/\s]+)\/?$/
        ];
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1] && match[2] && !match[2].includes('.')) {
                return { username: match[1], repo: match[2] };
            }
        }
        return null;
    }

    function generateAllBadges() {
        const colors = getColors();
        const badges = [];

        if (config.projectStatus) {
            badges.push({ id: 'status', label: 'Status', message: config.projectStatus, color: STATUS_COLORS[config.projectStatus] || '4c1', type: 'status', logo: null, link: null });
        }

        if (config.version) {
            const versionStr = config.version.startsWith('v') ? config.version : 'v' + config.version;
            badges.push({ id: 'version', label: 'Version', message: versionStr, color: colors.bg, type: 'version', logo: null, link: null });
        }

        if (config.license) {
            badges.push({ id: 'license', label: 'License', message: config.license, color: colors.color, type: 'license', logo: null, link: null });
        }

        config.techStack.forEach((tech, idx) => {
            badges.push({ id: `tech-${idx}`, label: tech, message: tech, color: colors.accent, type: 'tech', logo: TECH_STACK_LOGOS[tech] || null, link: null });
        });

        config.deployPlatform.forEach((platform, idx) => {
            badges.push({ id: `deploy-${idx}`, label: platform, message: platform, color: colors.bg, type: 'deploy', logo: DEPLOY_LOGOS[platform] || null, link: null });
        });

        const hasGithubInfo = config.githubUsername && config.githubRepo;
        const githubBase = hasGithubInfo ? `https://github.com/${config.githubUsername}/${config.githubRepo}` : null;

        config.socialLinks.forEach((link, idx) => {
            let badge = null;
            const logoEnabled = config.logoEnabled;
            switch (link) {
                case 'GitHub Repo':
                    if (hasGithubInfo) badge = { id: `social-${idx}`, label: 'GitHub', message: 'Repo', color: colors.color, type: 'social', logo: 'github', link: githubBase };
                    break;
                case 'GitHub Stars':
                    if (hasGithubInfo) badge = { id: `social-${idx}`, label: 'Stars', message: `${config.githubUsername}/${config.githubRepo}`, color: 'ffa500', type: 'social', logo: logoEnabled ? 'github' : null, link: `${githubBase}/stargazers` };
                    break;
                case 'GitHub Forks':
                    if (hasGithubInfo) badge = { id: `social-${idx}`, label: 'Forks', message: `${config.githubUsername}/${config.githubRepo}`, color: '007ec6', type: 'social', logo: logoEnabled ? 'github' : null, link: `${githubBase}/network` };
                    break;
                case 'Website': badge = { id: `social-${idx}`, label: 'Website', message: 'Live', color: colors.bg, type: 'social', logo: null, link: config.demoUrl || '#' }; break;
                case 'Documentation': badge = { id: `social-${idx}`, label: 'Docs', message: 'Ready', color: colors.accent, type: 'social', logo: null, link: '#' }; break;
                case 'Issues': if (hasGithubInfo) badge = { id: `social-${idx}`, label: 'Issues', message: 'Open', color: '007ec6', type: 'social', logo: logoEnabled ? 'github' : null, link: `${githubBase}/issues` }; break;
                case 'Pull Requests': if (hasGithubInfo) badge = { id: `social-${idx}`, label: 'PRs', message: 'Welcome', color: '9cf', type: 'social', logo: logoEnabled ? 'github' : null, link: `${githubBase}/pulls` }; break;
            }
            if (badge) badges.push(badge);
        });

        if (config.customBadges && config.customBadges.length > 0) {
            config.customBadges.forEach((cb, idx) => {
                badges.push({ id: `custom-${idx}`, label: cb.label || 'Custom', message: cb.message || 'custom', color: cb.color || '4c1', type: 'custom', logo: cb.logo || null, link: cb.link || null });
            });
        }

        if (config.badgeOrder && config.badgeOrder.length > 0) {
            const orderMap = {}; config.badgeOrder.forEach((id, idx) => { orderMap[id] = idx; });
            badges.sort((a, b) => {
                const aOrder = orderMap[a.id] !== undefined ? orderMap[a.id] : 999;
                const bOrder = orderMap[b.id] !== undefined ? orderMap[b.id] : 999;
                return aOrder - bOrder;
            });
        }

        return badges;
    }

    function generateBadgeMarkdown(badge) {
        const url = generateBadgeUrl(badge);
        if (!validateBadgeUrl(url)) return '';
        const escapedUrl = url.replace(/&/g, '&amp;');
        switch (config.outputFormat) {
            case 'markdown-link': return `[![${badge.label}](${escapedUrl})](${badge.link || '#'})`;
            case 'html': return badge.link ? `<a href="${badge.link}"><img src="${escapedUrl}" alt="${badge.label}"></a>` : `<img src="${escapedUrl}" alt="${badge.label}">`;
            default: return `![${badge.label}](${escapedUrl})`;
        }
    }

    function generateMarkdownOutput() { return generateAllBadges().map(b => generateBadgeMarkdown(b)).join('\n'); }

    function generateReadmeHeader() {
        const badges = generateAllBadges();
        const projectName = config.projectName || 'Project Name';
        const description = config.projectDescription || getTemplateDescription();
        const features = generateFeatures();
        const badgeMarkdown = badges.map(b => generateBadgeMarkdown(b)).join('\n');
        const username = config.githubUsername || 'username';
        const repo = config.githubRepo || 'repo';

        return `# ${projectName}

${description}

${badgeMarkdown}

---

## ✨ ${t('features')}

${features.map(f => `- ${f}`).join('\n')}

## 🚀 ${t('quickStart')}

\`\`\`bash
git clone https://github.com/${username}/${repo}.git
cd ${config.projectName || 'project'}
npm install
npm run dev
\`\`\`

## 📄 ${t('license_label')}

This project is licensed under the ${config.license || 'MIT'} License.
`;
    }

    function generateFullReadme() {
        const badges = generateAllBadges();
        const projectName = config.projectName || 'Project Name';
        const description = config.projectDescription || getTemplateDescription();
        const badgeMarkdown = badges.map(b => generateBadgeMarkdown(b)).join('\n');
        const features = (config.featuresList || '').split('\n').filter(f => f.trim()) || generateFeatures();
        const username = config.githubUsername || 'username';
        const repo = config.githubRepo || 'repo';

        let content = `# ${projectName}

${description}

${badgeMarkdown}

---

## 📚 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

${features.map(f => `- ${f.trim()}`).join('\n')}`;

        if (config.demoUrl) {
            content += `

## 🚀 Demo

[Live Demo](${config.demoUrl})`;
        }

        const installCmd = config.installCommand || `npm install ${config.projectName || 'package-name'}`;
        content += `

## 📦 Installation

\`\`\`bash
${installCmd}
\`\`\``;

        const usageCmd = config.usageCommand || `npm run dev`;
        content += `

## 🛠 Usage

\`\`\`bash
${usageCmd}
\`\`\``;

        if (config.screenshotUrl) {
            content += `

## 📸 Screenshots

![Screenshot](${config.screenshotUrl})`;
        } else {
            content += `

## 📸 Screenshots

>Screenshots coming soon...`;
        }

        if (config.showContributing) {
            content += `

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork this repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request`;
        }

        content += `

## 📄 License

This project is licensed under the ${config.license || 'MIT'} License.

---

<p align="center">Generated with 💙 by README Badge Studio</p>`;

        return content;
    }

    function generateRawUrls() { return generateAllBadges().map(b => generateBadgeUrl(b)).join('\n'); }

    function generateHtmlOutput() { return generateAllBadges().map(b => { const url = generateBadgeUrl(b); return b.link ? `<a href="${b.link}"><img src="${url}" alt="${b.label}"></a>` : `<img src="${url}" alt="${b.label}">`; }).join('\n'); }

    function generateFeatures() {
        const features = [];
        if (config.techStack && config.techStack.length > 0) {
            config.techStack.forEach(tech => {
                const techFeatures = TECH_STACK_FEATURES[tech];
                if (techFeatures && techFeatures.length > 0) features.push(techFeatures[Math.floor(Math.random() * techFeatures.length)]);
            });
        }
        if (features.length < 3) {
            const extras = ['Easy to maintain', 'Well documented', 'Actively maintained'];
            while (features.length < 3) {
                const extra = extras[Math.floor(Math.random() * extras.length)];
                if (!features.includes(extra)) features.push(extra);
            }
        }
        return features.slice(0, 5);
    }

    function getTemplateDescription() {
        const techSet = new Set(config.techStack || []);
        const deploySet = new Set(config.deployPlatform || []);
        for (const template of Object.values(TEMPLATES)) {
            if ((template.techStack || []).every(t => techSet.has(t)) && (template.deployPlatform || []).every(d => deploySet.has(d))) {
                return template.description || 'A cool project';
            }
        }
        return 'A cool project';
    }

    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function renderAll() {
        updateConfigFromForm();
        saveConfig();
        renderBadgePreview();
        renderReadmePreview();
        renderOutputTabs();
        renderHealthCheck();
        renderPublishChecklist();
    }

    function debounceRenderAll() {
        clearTimeout(window._debounceTimer);
        window._debounceTimer = setTimeout(renderAll, 200);
    }

    function renderBadgePreview() {
        const container = elements.badgesPreview;
        if (!container) return;
        const badges = generateAllBadges();
        if (elements.badgeCount) elements.badgeCount.textContent = badges.length;
        if (badges.length === 0) { container.innerHTML = `<div class="preview-placeholder">${t('noBadges')}</div>`; return; }

        container.innerHTML = badges.map((badge, index) => `
            <div class="badge-card" data-index="${index}">
                <div class="badge-card-header">
                    <span class="badge-card-title">${escapeHtml(badge.label)}</span>
                    <div class="badge-card-actions">
                        <button class="badge-action-btn" data-action="up" data-index="${index}" ${index === 0 ? 'disabled' : ''} title="Move up">↑</button>
                        <button class="badge-action-btn" data-action="down" data-index="${index}" ${index === badges.length - 1 ? 'disabled' : ''} title="Move down">↓</button>
                    </div>
                </div>
                <div class="badge-card-image">
                    <img src="${generateBadgeUrl(badge)}" alt="${badge.label}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\'badge-error\\'>Load failed</span>'">
                </div>
                <button class="badge-copy-btn" data-index="${index}" title="${t('copy')} Markdown">${t('copy')}</button>
            </div>
        `).join('');

        container.querySelectorAll('.badge-copy-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const index = parseInt(this.dataset.index);
                copyToClipboard(generateBadgeMarkdown(badges[index]));
            });
        });

        container.querySelectorAll('.badge-action-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const index = parseInt(this.dataset.index);
                const action = this.dataset.action;
                if (action === 'up' && index > 0) moveBadgeUp(index);
                else if (action === 'down' && index < badges.length - 1) moveBadgeDown(index);
            });
        });
    }

    function moveBadgeUp(index) {
        const badges = generateAllBadges();
        const order = config.badgeOrder || badges.map(b => b.id);
        const currentId = badges[index].id;
        const prevId = badges[index - 1].id;
        const currentIdx = order.indexOf(currentId);
        const prevIdx = order.indexOf(prevId);
        if (currentIdx !== -1 && prevIdx !== -1) {
            order[currentIdx] = prevId;
            order[prevIdx] = currentId;
            config.badgeOrder = order;
            saveConfig();
            renderAll();
            showToast(t('badgeMovedUp'));
        }
    }

    function moveBadgeDown(index) {
        const badges = generateAllBadges();
        const order = config.badgeOrder || badges.map(b => b.id);
        const currentId = badges[index].id;
        const nextId = badges[index + 1].id;
        const currentIdx = order.indexOf(currentId);
        const nextIdx = order.indexOf(nextId);
        if (currentIdx !== -1 && nextIdx !== -1) {
            order[currentIdx] = nextId;
            order[nextIdx] = currentId;
            config.badgeOrder = order;
            saveConfig();
            renderAll();
            showToast(t('badgeMovedDown'));
        }
    }

    function renderReadmePreview() {
        const container = elements.readmePreview;
        if (!container) return;
        const badges = generateAllBadges();
        if (badges.length === 0) { container.innerHTML = `<div class="preview-placeholder">${t('noReadme')}</div>`; return; }

        const projectName = config.projectName || 'Project Name';
        const description = config.projectDescription || getTemplateDescription();
        const features = (config.featuresList || '').split('\n').filter(f => f.trim()) || generateFeatures();
        const username = config.githubUsername || 'username';
        const repo = config.githubRepo || 'repo';

        const badgesHtml = badges.map(b => {
            const url = generateBadgeUrl(b);
            return `<img src="${url}" alt="${b.label}" class="readme-badge-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"><span class="readme-badge-fallback" style="display:none;padding:2px 6px;background:#eee;border-radius:3px;font-size:11px;color:#666;">${b.label}</span>`;
        }).join(' ');

        container.innerHTML = `
            <div class="readme-header">
                <h1 class="readme-title">${escapeHtml(projectName)}</h1>
                <p class="readme-description">${escapeHtml(description)}</p>
            </div>
            <div class="readme-badges">${badgesHtml}</div>
            <div class="readme-sections">
                <div class="readme-section"><h3>${t('features')}</h3><ul>${features.map(f => `<li>${escapeHtml(f.trim())}</li>`).join('')}</ul></div>
                <div class="readme-section"><h3>${t('quickStart')}</h3><pre><code>git clone https://github.com/${username}/${repo}.git
cd ${config.projectName || 'project'}
npm install
npm run dev</code></pre></div>
                <div class="readme-section"><h3>${t('license_label')}</h3><p>${config.license || 'MIT'} License</p></div>
            </div>`;
    }

    function renderOutputTabs() {
        const container = elements.markdownOutput;
        if (!container) return;
        const badges = generateAllBadges();
        if (badges.length === 0) { container.innerHTML = `<code>${t('noCode')}</code>`; return; }

        let content = '';
        switch (currentMdTab) {
            case 'badges': content = generateMarkdownOutput(); break;
            case 'header': content = generateReadmeHeader(); break;
            case 'urls': content = generateRawUrls(); break;
            case 'html': content = generateHtmlOutput(); break;
            case 'fullreadme': content = generateFullReadme(); break;
        }
        container.innerHTML = `<code>${escapeHtml(content)}</code>`;
    }

    function renderHealthCheck() {
        const container = elements.healthCheck;
        if (!container) return;
        const issues = [];
        if (!config.projectName) issues.push({ type: 'warning', text: currentLang === 'zh' ? '未填写项目名称' : 'Project name not set' });
        if (!config.githubUsername) issues.push({ type: 'warning', text: currentLang === 'zh' ? '未填写 GitHub 用户名' : 'GitHub username not set' });
        if (!config.githubRepo) issues.push({ type: 'warning', text: currentLang === 'zh' ? '未填写 GitHub 仓库名' : 'GitHub repo not set' });
        if (!config.license) issues.push({ type: 'warning', text: currentLang === 'zh' ? '未选择 License' : 'License not selected' });
        if (!config.techStack || config.techStack.length === 0) issues.push({ type: 'error', text: currentLang === 'zh' ? '未选择技术栈' : 'No tech stack selected' });
        if (!config.deployPlatform || config.deployPlatform.length === 0) issues.push({ type: 'error', text: currentLang === 'zh' ? '未选择部署平台' : 'No deploy platform selected' });

        const badges = generateAllBadges();
        if (badges.length > 12) issues.push({ type: 'warning', text: currentLang === 'zh' ? `徽章较多 (${badges.length}个)` : `Many badges (${badges.length})` });

        if (config.customBadges) {
            config.customBadges.forEach((cb, idx) => {
                if (!cb.label) issues.push({ type: 'error', text: currentLang === 'zh' ? `自定义徽章 ${idx + 1} 缺少 Label` : `Custom badge ${idx + 1} missing label` });
                if (!cb.message) issues.push({ type: 'error', text: currentLang === 'zh' ? `自定义徽章 ${idx + 1} 缺少 Message` : `Custom badge ${idx + 1} missing message` });
            });
        }

        if (issues.length === 0) {
            container.innerHTML = `<div class="health-item health-success"><span class="health-icon">✓</span><span>${currentLang === 'zh' ? '配置完整' : 'Config complete'}</span></div>`;
        } else {
            container.innerHTML = issues.map(issue => `<div class="health-item ${issue.type === 'error' ? 'health-error' : 'health-warning'}"><span class="health-icon">${issue.type === 'error' ? '✕' : '!'}</span><span>${escapeHtml(issue.text)}</span></div>`).join('');
        }
    }

    function renderPublishChecklist() {
        const container = elements.publishChecklist;
        if (!container) return;

        const badges = generateAllBadges();
        const hasGithub = !!(config.githubUsername && config.githubRepo);
        const githubDynamicBadges = badges.filter(b => ['Stars', 'Forks', 'Issues', 'PRs'].includes(b.label));
        const hasCustomBadgeIssue = (config.customBadges || []).some(cb => !cb.label || !cb.message || !cb.color);
        const canGenerateFullReadme = badges.length > 0 && !!config.projectName;

        const checks = [
            { label: currentLang === 'zh' ? '项目名称' : 'Project name', pass: !!config.projectName },
            { label: currentLang === 'zh' ? 'GitHub 用户名' : 'GitHub username', pass: !!config.githubUsername },
            { label: currentLang === 'zh' ? 'GitHub 仓库名' : 'GitHub repo', pass: !!config.githubRepo },
            { label: 'License', pass: !!config.license },
            { label: currentLang === 'zh' ? '项目状态' : 'Project status', pass: !!config.projectStatus },
            { label: currentLang === 'zh' ? '技术栈' : 'Tech stack', pass: !!(config.techStack && config.techStack.length > 0) },
            { label: currentLang === 'zh' ? '部署平台' : 'Deploy platform', pass: !!(config.deployPlatform && config.deployPlatform.length > 0) },
            { label: currentLang === 'zh' ? '徽章数量 ≤12' : 'Badge count ≤12', pass: badges.length <= 12 },
            { label: currentLang === 'zh' ? '项目简介' : 'Project description', pass: !!config.projectDescription },
            { label: currentLang === 'zh' ? '演示地址/占位' : 'Demo URL or placeholder', pass: !!config.demoUrl || (currentLang === 'zh' ? true : true) },
            { label: currentLang === 'zh' ? '截图/占位' : 'Screenshot or placeholder', pass: !!config.screenshotUrl || (currentLang === 'zh' ? true : true) },
            { label: currentLang === 'zh' ? 'GitHub 动态徽章' : 'GitHub dynamic badges', pass: !githubDynamicBadges.length || hasGithub },
            { label: currentLang === 'zh' ? '自定义徽章完整' : 'Custom badges valid', pass: !hasCustomBadgeIssue },
            { label: currentLang === 'zh' ? '可生成完整 README' : 'Can generate README', pass: canGenerateFullReadme }
        ];

        const passCount = checks.filter(c => c.pass).length;
        container.innerHTML = `<div class="publish-progress"><span class="publish-progress-text">${passCount}/${checks.length}</span></div>` +
            checks.map(c => `<div class="publish-check-item ${c.pass ? 'pass' : 'fail'}"><span class="check-icon">${c.pass ? '✓' : '✕'}</span><span>${c.label}</span></div>`).join('');
    }

    function renderCustomBadges() {
        const container = elements.customBadgesList;
        if (!container) return;
        const badges = config.customBadges || [];
        if (badges.length === 0) { container.innerHTML = `<div class="custom-badge-empty">${currentLang === 'zh' ? '暂无自定义徽章，点击上方按钮添加' : 'No custom badges, click button above to add'}</div>`; return; }

        container.innerHTML = badges.map((cb, idx) => `
            <div class="custom-badge-item">
                <div class="custom-badge-fields">
                    <input type="text" class="custom-badge-input" data-field="label" data-idx="${idx}" value="${escapeHtml(cb.label || '')}" placeholder="Label">
                    <input type="text" class="custom-badge-input" data-field="message" data-idx="${idx}" value="${escapeHtml(cb.message || '')}" placeholder="Message">
                    <input type="text" class="custom-badge-input small" data-field="color" data-idx="${idx}" value="${escapeHtml(cb.color || '')}" placeholder="Color">
                    <input type="text" class="custom-badge-input small" data-field="logo" data-idx="${idx}" value="${escapeHtml(cb.logo || '')}" placeholder="Logo">
                    <input type="text" class="custom-badge-input small" data-field="link" data-idx="${idx}" value="${escapeHtml(cb.link || '')}" placeholder="Link">
                </div>
                <button class="custom-badge-remove" data-idx="${idx}" title="Delete">🗑</button>
            </div>
        `).join('');

        container.querySelectorAll('.custom-badge-input').forEach(input => {
            input.addEventListener('input', function() {
                const idx = parseInt(this.dataset.idx);
                const field = this.dataset.field;
                if (config.customBadges[idx]) { config.customBadges[idx][field] = this.value; saveConfig(); debounceRenderAll(); }
            });
        });

        container.querySelectorAll('.custom-badge-remove').forEach(btn => {
            btn.addEventListener('click', function() { removeCustomBadge(parseInt(this.dataset.idx)); });
        });
    }

    function addCustomBadge() {
        if (!config.customBadges) config.customBadges = [];
        config.customBadges.push({ label: '', message: '', color: 'brightgreen', logo: '', link: '' });
        saveConfig();
        renderCustomBadges();
        renderAll();
        showToast(t('addedCustom'));
    }

    function removeCustomBadge(idx) {
        if (config.customBadges && config.customBadges[idx]) {
            config.customBadges.splice(idx, 1);
            saveConfig();
            renderCustomBadges();
            renderAll();
            showToast(t('removedCustom'));
        }
    }

    function loadSnapshots() {
        try { return JSON.parse(localStorage.getItem(SNAPSHOTS_KEY)) || []; } catch (e) { return []; }
    }

    function saveSnapshots(snapshots) {
        try { localStorage.setItem(SNAPSHOTS_KEY, JSON.stringify(snapshots)); } catch (e) {}
    }

    function renderSnapshots() {
        const container = elements.snapshotsList;
        if (!container) return;
        const snapshots = loadSnapshots();
        if (snapshots.length === 0) { container.innerHTML = `<div class="snapshot-empty">${currentLang === 'zh' ? '暂无快照' : 'No snapshots'}</div>`; return; }

        container.innerHTML = snapshots.map(s => `
            <div class="snapshot-item">
                <div class="snapshot-info">
                    <span class="snapshot-name">${escapeHtml(s.name)}</span>
                    <span class="snapshot-meta">${s.badgeCount} badges | ${s.date}</span>
                </div>
                <div class="snapshot-actions">
                    <button class="snapshot-restore" data-id="${s.id}" title="Restore">↩</button>
                    <button class="snapshot-delete" data-id="${s.id}" title="Delete">🗑</button>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.snapshot-restore').forEach(btn => {
            btn.addEventListener('click', function() { restoreSnapshot(this.dataset.id); });
        });

        container.querySelectorAll('.snapshot-delete').forEach(btn => {
            btn.addEventListener('click', function() { deleteSnapshot(this.dataset.id); });
        });
    }

    function saveSnapshot() {
        const snapshots = loadSnapshots();
        const name = prompt(currentLang === 'zh' ? '输入快照名称:' : 'Enter snapshot name:', config.projectName || 'Snapshot');
        if (!name) return;

        if (snapshots.length >= 10) { showToast(t('snapshotLimit')); return; }

        const snapshot = {
            id: Date.now().toString(),
            name: name,
            date: new Date().toLocaleDateString(),
            projectName: config.projectName,
            badgeCount: generateAllBadges().length,
            config: JSON.parse(JSON.stringify(config))
        };

        snapshots.unshift(snapshot);
        saveSnapshots(snapshots);
        renderSnapshots();
        showToast(t('snapshotSaved'));
    }

    function restoreSnapshot(id) {
        const snapshots = loadSnapshots();
        const snapshot = snapshots.find(s => s.id === id);
        if (snapshot && snapshot.config) {
            config = normalizeConfig(snapshot.config);
            syncFormFromConfig();
            saveConfig();
            renderAll();
            showToast(t('snapshotRestored'));
        }
    }

    function deleteSnapshot(id) {
        let snapshots = loadSnapshots();
        snapshots = snapshots.filter(s => s.id !== id);
        saveSnapshots(snapshots);
        renderSnapshots();
        showToast(t('snapshotDeleted'));
    }

    function applyTemplate(templateName) {
        const template = TEMPLATES[templateName];
        if (!template) return;
        config.projectStatus = template.projectStatus || '';
        config.techStack = [...(template.techStack || [])];
        config.deployPlatform = [...(template.deployPlatform || [])];
        config.badgeStyle = template.badgeStyle || 'flat';
        config.colorScheme = template.colorScheme || 'auto';
        config.projectDescription = template.description || '';
        syncFormFromConfig();
        renderAll();
        showToast(t('templateApplied'));
    }

    function applySmartRecommend() {
        const type = config.projectType;
        if (!type) { showToast(currentLang === 'zh' ? '请先选择项目类型' : 'Please select project type first'); return; }
        const rec = PROJECT_TYPE_RECOMMENDATIONS[type];
        if (rec) {
            config.projectStatus = rec.projectStatus || '';
            config.techStack = [...(rec.techStack || [])];
            config.deployPlatform = [...(rec.deployPlatform || [])];
            config.socialLinks = [...(rec.socialLinks || [])];
            config.badgeStyle = rec.badgeStyle || 'flat';
            config.colorScheme = rec.colorScheme || 'auto';
            config.projectDescription = rec.description || '';
            syncFormFromConfig();
            renderAll();
            showToast(t('recommendedApplied'));
        }
    }

    function resetConfig() { config = getDefaultConfig(); syncFormFromConfig(); renderAll(); showToast(t('configReset')); }

    function clearConfig() {
        config = getDefaultConfig();
        config.projectName = ''; config.githubUsername = ''; config.githubRepo = ''; config.githubRepoUrl = '';
        config.version = ''; config.license = ''; config.projectStatus = ''; config.projectType = '';
        config.techStack = []; config.deployPlatform = []; config.socialLinks = [];
        config.customBadges = []; config.badgeOrder = [];
        syncFormFromConfig();
        renderAll();
        showToast(t('configCleared'));
    }

    function generateBadgesNow() { updateConfigFromForm(); saveConfig(); renderAll(); showToast(t('generated')); }

    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => showToast(t('copied'))).catch(() => fallbackCopy(text));
        } else { fallbackCopy(text); }
    }

    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try { document.execCommand('copy'); showToast(t('copied')); } catch (err) { showToast(t('copyFailed')); }
        document.body.removeChild(textarea);
    }

    function copyCurrentMd() {
        const badges = generateAllBadges();
        if (badges.length === 0) { showToast(currentLang === 'zh' ? '没有可复制的内容' : 'Nothing to copy'); return; }
        let content = '';
        switch (currentMdTab) {
            case 'badges': content = generateMarkdownOutput(); break;
            case 'header': content = generateReadmeHeader(); break;
            case 'urls': content = generateRawUrls(); break;
            case 'html': content = generateHtmlOutput(); break;
            case 'fullreadme': content = generateFullReadme(); break;
        }
        copyToClipboard(content);
    }

    function downloadReadme() {
        const badges = generateAllBadges();
        if (badges.length === 0) { showToast(currentLang === 'zh' ? '没有可下载的内容' : 'Nothing to download'); return; }
        const content = generateFullReadme();
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'README.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(t('readmeDownloaded'));
    }

    function exportConfig() {
        const data = JSON.stringify(config, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'readme-badge-studio-config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(t('configExported'));
    }

    function importConfig(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const imported = JSON.parse(e.target.result);
                if (!imported || typeof imported !== 'object') throw new Error('Invalid JSON');
                config = normalizeConfig(imported);
                syncFormFromConfig();
                saveConfig();
                renderAll();
                showToast(t('configImported'));
            } catch (err) { showToast(t('importFailed')); }
        };
        reader.readAsText(file);
    }

    function exportPackage() {
        const badges = generateAllBadges();
        if (badges.length === 0) { showToast(currentLang === 'zh' ? '没有可导出的内容' : 'Nothing to export'); return; }

        const output = `# README Badge Studio Export
# Generated at ${new Date().toISOString()}

# === config.json ===
${JSON.stringify(config, null, 2)}

# === BADGES.md ===
${generateMarkdownOutput()}

# === README.generated.md ===
${generateFullReadme()}

# === badge-urls.txt ===
${generateRawUrls()}
`;

        const blob = new Blob([output], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'badge-studio-export.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(t('packageExported'));
    }

    function generateFullReadmeFromBtn() {
        const badges = generateAllBadges();
        if (badges.length === 0) { showToast(currentLang === 'zh' ? '请先配置徽章' : 'Configure badges first'); return; }
        copyToClipboard(generateFullReadme());
    }

    function selectAllTech() { document.querySelectorAll('input[name="techStack"]').forEach(cb => cb.checked = true); renderAll(); showToast(t('selectedAll') + ' ' + (currentLang === 'zh' ? '技术栈' : 'tech stack')); }
    function clearAllTech() { document.querySelectorAll('input[name="techStack"]').forEach(cb => cb.checked = false); renderAll(); showToast(t('cleared') + ' ' + (currentLang === 'zh' ? '技术栈' : 'tech stack')); }
    function selectAllDeploy() { document.querySelectorAll('input[name="deployPlatform"]').forEach(cb => cb.checked = true); renderAll(); showToast(t('selectedAll') + ' ' + (currentLang === 'zh' ? '部署平台' : 'deploy platform')); }
    function clearAllDeploy() { document.querySelectorAll('input[name="deployPlatform"]').forEach(cb => cb.checked = false); renderAll(); showToast(t('cleared') + ' ' + (currentLang === 'zh' ? '部署平台' : 'deploy platform')); }
    function selectAllSocial() { document.querySelectorAll('input[name="socialLinks"]').forEach(cb => cb.checked = true); renderAll(); showToast(t('selectedAll') + ' ' + (currentLang === 'zh' ? '社交链接' : 'social links')); }
    function clearAllSocial() { document.querySelectorAll('input[name="socialLinks"]').forEach(cb => cb.checked = false); renderAll(); showToast(t('cleared') + ' ' + (currentLang === 'zh' ? '社交链接' : 'social links')); }

    function showToast(message, type) {
        const toast = elements.toast;
        const toastMessage = elements.toastMessage;
        if (!toast || !toastMessage) return;
        toastMessage.textContent = message;
        toast.className = 'toast' + (type ? ' ' + type : '') + ' show';
        setTimeout(() => { toast.className = 'toast'; }, 2500);
    }

    function registerServiceWorker() {
        const statusEl = document.getElementById('pwaStatus');
        if (!statusEl) return;

        const isHttps = window.location.protocol === 'https:';
        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

        if (!('serviceWorker' in navigator)) {
            statusEl.innerHTML = '<span class="pwa-unsupported">✕ ' + (currentLang === 'zh' ? '浏览器不支持 Service Worker' : 'Service Worker not supported') + '</span>';
            return;
        }

        if (!isHttps && !isLocalhost) {
            const msg = currentLang === 'zh'
                ? '⚠ HTTP 环境 - PWA 需要 HTTPS (如 GitHub Pages)'
                : '⚠ HTTP env - PWA requires HTTPS (GitHub Pages)';
            statusEl.innerHTML = `<span class="pwa-offline">${msg}</span>`;
            return;
        }

        statusEl.innerHTML = '<span class="pwa-checking">' + (currentLang === 'zh' ? '⏳ 初始化 PWA...' : '⏳ Initializing PWA...') + '</span>';

        navigator.serviceWorker.register('sw.js').then(() => {
            statusEl.innerHTML = '<span class="pwa-ready">✓ ' + (currentLang === 'zh' ? 'PWA 已就绪' : 'PWA Ready') + '</span>';
        }).catch(err => {
            const msg = currentLang === 'zh'
                ? `⚠ PWA 注册失败: ${err.message || '未知错误'}`
                : `⚠ PWA registration failed: ${err.message || 'Unknown error'}`;
            statusEl.innerHTML = `<span class="pwa-offline">${msg}</span>`;
            console.warn('PWA registration error:', err);
        });
    }

    function renderPwaStatus() {}

    function bindEvents() {
        const formInputs = document.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => { input.addEventListener('change', renderAll); input.addEventListener('input', debounceRenderAll); });

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                document.getElementById(this.dataset.tab + '-tab').classList.add('active');
            });
        });

        document.querySelectorAll('.md-tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.md-tab-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentMdTab = this.dataset.mdTab;
                renderOutputTabs();
            });
        });

        document.querySelectorAll('.template-card').forEach(card => {
            card.addEventListener('click', function() { applyTemplate(this.dataset.template); });
        });

        const bind = (el, event, fn) => { if (el) el.addEventListener(event, fn); };
        bind(elements.generateBadgeBtn, 'click', generateBadgesNow);
        bind(elements.darkModeBtn, 'click', toggleDarkMode);
        bind(elements.resetBtn, 'click', resetConfig);
        bind(elements.clearBtn, 'click', clearConfig);
        bind(elements.copyMdBtn, 'click', copyCurrentMd);
        bind(elements.downloadReadmeBtn, 'click', downloadReadme);
        bind(elements.exportConfigBtn, 'click', exportConfig);
        bind(elements.importConfigBtn, 'click', () => elements.importFileInput && elements.importFileInput.click());
        bind(elements.importFileInput, 'change', function() { if (this.files.length > 0) { importConfig(this.files[0]); this.value = ''; } });
        bind(elements.generateReadmeBtn, 'click', generateFullReadmeFromBtn);
        bind(elements.exportPackageBtn, 'click', exportPackage);
        bind(elements.addCustomBadgeBtn, 'click', addCustomBadge);
        bind(elements.saveSnapshotBtn, 'click', saveSnapshot);
        bind(elements.langToggleBtn, 'click', () => setLanguage(currentLang === 'zh' ? 'en' : 'zh'));
        bind(elements.shareBtn, 'click', generateShareLink);
        bind(elements.smartRecommendBtn, 'click', applySmartRecommend);

        const ids = ['selectAllTech', 'clearAllTech', 'selectAllDeploy', 'clearAllDeploy', 'selectAllSocial', 'clearAllSocial', 'selectAllTech', 'clearAllTech'];
        const funcs = [selectAllTech, clearAllTech, selectAllDeploy, clearAllDeploy, selectAllSocial, clearAllSocial];
        ids.forEach((id, idx) => { const el = document.getElementById(id); if (el) el.addEventListener('click', funcs[idx % 6]); });

        const repoUrlInput = document.getElementById('githubRepoUrl');
        if (repoUrlInput) {
            repoUrlInput.addEventListener('change', function() {
                const parsed = parseGitHubRepoUrl(this.value);
                if (parsed) { config.githubUsername = parsed.username; config.githubRepo = parsed.repo; syncFormFromConfig(); renderAll(); showToast(`${t('repoParsed')}: ${parsed.username}/${parsed.repo}`); }
                else if (this.value.trim()) { showToast(t('repoParseFailed')); }
            });
        }
    }

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initApp); } else { initApp(); }

    window.ReadmeBadgeStudioTestAPI = {
        getDefaultConfig,
        normalizeConfig,
        parseGitHubRepoUrl,
        generateAllBadges,
        generateBadgeUrl,
        validateBadgeUrl,
        generateBadgeMarkdown,
        generateMarkdownOutput,
        generateMarkdownOutput: generateMarkdownOutput,
        generateReadmeHeader,
        generateFullReadme,
        encodeShareConfig,
        decodeShareConfig,
        getColors: () => COLOR_SCHEMES,
        getStatusColors: () => STATUS_COLORS,
        getTechStackLogos: () => TECH_STACK_LOGOS,
        getDeployLogos: () => DEPLOY_LOGOS,
        getTemplates: () => TEMPLATES,
        escapeHtml,
        t,
        currentLang: () => currentLang,
        setLanguage,
        config: () => config,
        setConfig: (c) => { config = c; },
        i18n: () => i18n
    };
})();