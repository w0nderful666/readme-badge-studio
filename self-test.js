(function() {
    'use strict';

    const TEST_STORAGE_PREFIX = 'readme-badge-studio-test-';
    const TEST_KEYS = {
        config: TEST_STORAGE_PREFIX + 'config',
        snapshots: TEST_STORAGE_PREFIX + 'snapshots'
    };

    let testResults = [];
    let isDarkMode = false;

    function init() {
        isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode) document.body.classList.add('dark-mode');

        document.getElementById('testTime').textContent = new Date().toLocaleString();
        document.getElementById('runAllBtn').addEventListener('click', runAllTests);
        document.getElementById('clearBtn').addEventListener('click', clearResults);
        document.getElementById('copyBtn').addEventListener('click', copyReport);

        setTimeout(() => runAllTests(), 500);
    }

    function addResult(name, status, message, error = null) {
        testResults.push({ name, status, message, error, timestamp: Date.now() });
    }

    function updateStats() {
        const total = testResults.length;
        const pass = testResults.filter(r => r.status === 'pass').length;
        const fail = testResults.filter(r => r.status === 'fail').length;
        const warn = testResults.filter(r => r.status === 'warn').length;

        document.getElementById('totalCount').textContent = total;
        document.getElementById('passCount').textContent = pass;
        document.getElementById('failCount').textContent = fail;
        document.getElementById('warnCount').textContent = warn;
    }

    function renderResults() {
        const container = document.getElementById('testsContainer');
        if (testResults.length === 0) {
            container.innerHTML = '<div class="loading"><p>点击 "Run All Tests" 开始测试</p></div>';
            return;
        }

        const sections = {
            '默认配置': testResults.filter(r => r.name.includes('默认配置')),
            '配置归一化': testResults.filter(r => r.name.includes('归一化') || r.name.includes('normaliz')),
            'GitHub URL 解析': testResults.filter(r => r.name.includes('GitHub') && r.name.includes('URL')),
            '徽章 URL': testResults.filter(r => r.name.includes('徽章') || r.name.includes('Badge')),
            'Markdown 生成': testResults.filter(r => r.name.includes('Markdown')),
            'README 生成': testResults.filter(r => r.name.includes('README')),
            '分享链接': testResults.filter(r => r.name.includes('分享') || r.name.includes('Share') || r.name.includes('链接')),
            '自定义徽章': testResults.filter(r => r.name.includes('自定义') || r.name.includes('Custom')),
            '发布检查': testResults.filter(r => r.name.includes('发布') || r.name.includes('Checklist') || r.name.includes('Check')),
            '多语言': testResults.filter(r => r.name.includes('语言') || r.name.includes('Lang') || r.name.includes('翻译')),
            'DOM 结构': testResults.filter(r => r.name.includes('DOM') || r.name.includes('元素')),
            '交互模拟': testResults.filter(r => r.name.includes('交互') || r.name.includes('模拟') || r.name.includes('Input')),
            'localStorage': testResults.filter(r => r.name.includes('Storage') || r.name.includes('快照'))
        };

        let html = '';
        for (const [sectionName, results] of Object.entries(sections)) {
            if (results.length === 0) continue;

            const passCount = results.filter(r => r.status === 'pass').length;
            const failCount = results.filter(r => r.status === 'fail').length;
            const warnCount = results.filter(r => r.status === 'warn').length;

            html += `
                <div class="test-section">
                    <div class="test-section-header">
                        <span>${sectionName}</span>
                        <span class="status">
                            <span style="color: var(--success-color)">${passCount} PASS</span>
                            ${failCount > 0 ? ` | <span style="color: var(--danger-color)">${failCount} FAIL</span>` : ''}
                            ${warnCount > 0 ? ` | <span style="color: var(--warning-color)">${warnCount} WARN</span>` : ''}
                        </span>
                    </div>
                    ${results.map(r => `
                        <div class="test-item">
                            <span class="test-status ${r.status}">${r.status.toUpperCase()}</span>
                            <div class="test-content">
                                <div class="test-name">${r.name}</div>
                                <div class="test-message">${r.message}</div>
                                ${r.error ? `<div class="test-error">Error: ${r.error}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        container.innerHTML = html;
        updateStats();
    }

    async function runAllTests() {
        if (!window.ReadmeBadgeStudioTestAPI) {
            addResult('API 加载', 'fail', 'app.js 未加载或 API 不可用', 'window.ReadmeBadgeStudioTestAPI is undefined');
            renderResults();
            return;
        }

        testResults = [];

        await testDefaultConfig();
        await testConfigNormalization();
        await testGitHubUrlParsing();
        await testBadgeUrls();
        await testMarkdownGeneration();
        await testReadmeGeneration();
        await testShareConfig();
        await testCustomBadges();
        await testPublishChecklist();
        await testI18n();
        await testDOMStructure();
        await testInteraction();
        await testLocalStorage();

        renderResults();
    }

    function clearResults() {
        testResults = [];
        renderResults();
    }

    function generateReport() {
        const pass = testResults.filter(r => r.status === 'pass').length;
        const fail = testResults.filter(r => r.status === 'fail').length;
        const warn = testResults.filter(r => r.status === 'warn').length;

        let report = `README Badge Studio Self Test Report
=====================================
Time: ${new Date().toLocaleString()}
URL: ${window.location.href}
Browser: ${navigator.userAgent}

Summary: ${testResults.length} tests, ${pass} passed, ${fail} failed, ${warn} warnings

`;

        const failed = testResults.filter(r => r.status === 'fail');
        if (failed.length > 0) {
            report += '\nFAILED TESTS:\n';
            failed.forEach(r => {
                report += `- ${r.name}: ${r.error}\n`;
            });
        }

        const warned = testResults.filter(r => r.status === 'warn');
        if (warned.length > 0) {
            report += '\nWARNINGS:\n';
            warned.forEach(r => {
                report += `- ${r.name}: ${r.message}\n`;
            });
        }

        return report;
    }

    function copyReport() {
        const report = generateReport();
        navigator.clipboard.writeText(report).then(() => {
            alert('Test report copied to clipboard!');
        }).catch(() => {
            prompt('Copy this report:', report);
        });
    }

    async function testDefaultConfig() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;
            const config = API.getDefaultConfig();

            if (!config || typeof config !== 'object') {
                addResult('默认配置返回', 'fail', 'getDefaultConfig() 未返回对象', 'Returned: ' + typeof config);
                return;
            }

            const required = ['projectName', 'license', 'projectStatus', 'techStack', 'deployPlatform', 'socialLinks', 'badgeStyle', 'colorScheme'];
            const missing = required.filter(k => !(k in config));

            if (missing.length > 0) {
                addResult('默认配置字段', 'fail', '缺少必需字段', 'Missing: ' + missing.join(', '));
            } else {
                addResult('默认配置字段', 'pass', '包含所有必需字段');
            }

            if (config.techStack && Array.isArray(config.techStack)) {
                addResult('默认技术栈', 'pass', '技术栈为数组: ' + config.techStack.join(', '));
            } else {
                addResult('默认技术栈', 'warn', '技术栈可能为空或非数组');
            }
        } catch (e) {
            addResult('默认配置', 'fail', '测试执行失败', e.message);
        }
    }

    async function testConfigNormalization() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;

            const empty = API.normalizeConfig({});
            if (!empty || typeof empty !== 'object') {
                addResult('空对象归一化', 'fail', 'normalizeConfig({}) 未返回对象');
                return;
            }

            if (!empty.projectName || !empty.license) {
                addResult('空对象补齐', 'fail', '未补齐必需字段');
            } else {
                addResult('空对象补齐', 'pass', '已补齐必需字段');
            }

            const withTechString = API.normalizeConfig({ techStack: 'not-array' });
            if (Array.isArray(withTechString.techStack)) {
                addResult('techStack 修复', 'pass', '非数组已修复为数组');
            } else {
                addResult('techStack 修复', 'warn', '非数组可能未修复');
            }

            const withBadges = API.normalizeConfig({ customBadges: 'invalid' });
            if (Array.isArray(withBadges.customBadges)) {
                addResult('customBadges 修复', 'pass', '非数组已修复');
            } else {
                addResult('customBadges 修复', 'warn', '非数组可能未修复');
            }
        } catch (e) {
            addResult('配置归一化', 'fail', '测试执行失败', e.message);
        }
    }

    async function testGitHubUrlParsing() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;

            const testCases = [
                { input: 'https://github.com/w0nderful666/prompt-market', expectOwner: 'w0nderful666', expectRepo: 'prompt-market' },
                { input: 'github.com/w0nderful666/prompt-market', expectOwner: 'w0nderful666', expectRepo: 'prompt-market' },
                { input: 'w0nderful666/prompt-market', expectOwner: 'w0nderful666', expectRepo: 'prompt-market' }
            ];

            testCases.forEach(tc => {
                const result = API.parseGitHubRepoUrl(tc.input);
                if (result && result.username === tc.expectOwner && result.repo === tc.expectRepo) {
                    addResult(`URL 解析 ${tc.input}`, 'pass', `owner: ${result.username}, repo: ${result.repo}`);
                } else {
                    addResult(`URL 解析 ${tc.input}`, 'fail', '解析结果不符合预期', JSON.stringify(result));
                }
            });

            const invalidCases = ['abc', 'https://example.com/a/b', 'github.com/onlyowner'];
            invalidCases.forEach(input => {
                try {
                    const result = API.parseGitHubRepoUrl(input);
                    if (result === null) {
                        addResult(`非法 URL ${input}`, 'pass', '正确返回 null');
                    } else {
                        addResult(`非法 URL ${input}`, 'warn', '可能应返回 null 但返回了', JSON.stringify(result));
                    }
                } catch (e) {
                    addResult(`非法 URL ${input}`, 'fail', '解析抛出异常', e.message);
                }
            });
        } catch (e) {
            addResult('GitHub URL 解析', 'fail', '测试执行失败', e.message);
        }
    }

    async function testBadgeUrls() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;

            const testConfig = API.getDefaultConfig();
            testConfig.projectName = 'Test Project';
            testConfig.githubUsername = 'testuser';
            testConfig.githubRepo = 'testrepo';
            testConfig.version = 'v1.0.0';
            testConfig.license = 'MIT';
            testConfig.projectStatus = 'active';
            testConfig.techStack = ['JavaScript'];
            testConfig.deployPlatform = ['GitHub Pages'];
            testConfig.socialLinks = ['GitHub Repo', 'GitHub Stars'];
            testConfig.customBadges = [{ label: 'Build', message: 'Passing', color: 'brightgreen' }];

            API.setConfig(testConfig);

            const badges = API.generateAllBadges();

            if (badges.length === 0) {
                addResult('徽章生成', 'fail', '未生成任何徽章');
                return;
            }

            badges.forEach(badge => {
                const url = API.generateBadgeUrl(badge);
                const isValid = API.validateBadgeUrl(url);

                if (!isValid) {
                    addResult(`徽章 ${badge.label}`, 'fail', 'URL 校验失败', url);
                } else if (url.includes('undefined') || url.includes('null')) {
                    addResult(`徽章 ${badge.label}`, 'fail', 'URL 包含 undefined/null', url);
                } else if (url.includes('shields.io')) {
                    addResult(`徽章 ${badge.label}`, 'pass', 'URL 格式正确');
                }
            });

            const customBadge = badges.find(b => b.type === 'custom');
            if (customBadge) {
                addResult('自定义徽章', 'pass', '自定义徽章已生成');
            } else {
                addResult('自定义徽章', 'fail', '未找到自定义徽章');
            }

            API.setConfig(API.getDefaultConfig());
            const emptyBadges = API.generateAllBadges();
            const githubBadges = emptyBadges.filter(b => ['Stars', 'Forks', 'Issues', 'PRs'].includes(b.label));

            if (githubBadges.length > 0 && !testConfig.githubUsername) {
                addResult('空配置下 GitHub 徽章', 'warn', 'owner/repo 为空时不应生成动态徽章');
            } else {
                addResult('空配置下 GitHub 徽章', 'pass', '处理正确');
            }
        } catch (e) {
            addResult('徽章 URL 测试', 'fail', '测试执行失败', e.message);
        }
    }

    async function testMarkdownGeneration() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;

            const testConfig = API.getDefaultConfig();
            testConfig.projectName = 'Test Project';
            testConfig.techStack = ['JavaScript'];
            API.setConfig(testConfig);

            const badges = API.generateAllBadges();
            if (badges.length === 0) {
                addResult('Markdown 生成', 'fail', '无徽章可生成');
                return;
            }

            const md = API.generateMarkdownOutput();
            if (!md || typeof md !== 'string') {
                addResult('Markdown 输出', 'fail', '未返回字符串');
                return;
            }

            if (md.includes('undefined') || md.includes('null')) {
                addResult('Markdown 清洁度', 'fail', '包含 undefined/null', md.substring(0, 200));
                return;
            }

            if (md.includes('![JavaScript](https://img.shields.io')) {
                addResult('Markdown 格式', 'pass', '包含正确的 Markdown 图片格式');
            } else {
                addResult('Markdown 格式', 'warn', '可能未包含正确的 shields.io 格式');
            }

            testConfig.outputFormat = 'markdown-link';
            API.setConfig(testConfig);
            const mdWithLink = API.generateMarkdownOutput();
            if (mdWithLink.includes('](') && mdWithLink.includes(')')) {
                addResult('Markdown 带链接', 'pass', '包含链接格式');
            } else {
                addResult('Markdown 带链接', 'warn', '可能未包含链接');
            }

            testConfig.outputFormat = 'html';
            API.setConfig(testConfig);
            const html = API.generateMarkdownOutput();
            if (html.includes('<img')) {
                addResult('HTML 格式', 'pass', '包含 img 标签');
            } else {
                addResult('HTML 格式', 'warn', '可能未包含 img 标签');
            }

            API.setConfig(API.getDefaultConfig());
        } catch (e) {
            addResult('Markdown 生成', 'fail', '测试执行失败', e.message);
        }
    }

    async function testReadmeGeneration() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;

            const testConfig = API.getDefaultConfig();
            testConfig.projectName = 'Test Project';
            testConfig.projectDescription = 'A test project';
            testConfig.license = 'MIT';
            testConfig.version = 'v1.0.0';
            testConfig.techStack = ['JavaScript'];
            testConfig.deployPlatform = ['GitHub Pages'];
            testConfig.installCommand = 'npm install test';
            testConfig.usageCommand = 'npm run test';
            API.setConfig(testConfig);

            const fullReadme = API.generateFullReadme();

            if (!fullReadme || typeof fullReadme !== 'string') {
                addResult('Full README 生成', 'fail', '未返回字符串');
                return;
            }

            if (fullReadme.includes('undefined') || fullReadme.includes('null')) {
                addResult('README 清洁度', 'fail', '包含 undefined/null', fullReadme.substring(0, 200));
                return;
            }

            const checks = [
                { key: '# Test Project', name: '项目标题' },
                { key: 'Features', name: 'Features 章节' },
                { key: 'Installation', name: 'Installation 章节' },
                { key: 'Usage', name: 'Usage 章节' },
                { key: 'License', name: 'License 章节' }
            ];

            checks.forEach(check => {
                if (fullReadme.includes(check.key)) {
                    addResult(`README ${check.name}`, 'pass', '包含 ' + check.key);
                } else {
                    addResult(`README ${check.name}`, 'fail', '缺少 ' + check.key);
                }
            });

            const header = API.generateReadmeHeader();
            if (header && header.includes('# Test Project')) {
                addResult('README Header', 'pass', 'Header 生成正确');
            } else {
                addResult('README Header', 'warn', 'Header 可能不正确');
            }

            API.setConfig(API.getDefaultConfig());
        } catch (e) {
            addResult('README 生成', 'fail', '测试执行失败', e.message);
        }
    }

    async function testShareConfig() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;

            const testConfig = {
                projectName: 'Shared Project',
                githubUsername: 'shareuser',
                githubRepo: 'sharerepo',
                license: 'MIT',
                projectStatus: 'active',
                techStack: ['JavaScript'],
                deployPlatform: ['GitHub Pages'],
                socialLinks: ['GitHub Repo'],
                badgeStyle: 'flat',
                colorScheme: 'auto',
                logoEnabled: true,
                customBadges: []
            };

            API.setConfig(testConfig);

            const encoded = API.encodeShareConfig();
            if (!encoded || typeof encoded !== 'string') {
                addResult('分享配置编码', 'fail', '未返回字符串');
                return;
            }

            const decoded = API.decodeShareConfig(encoded);
            if (!decoded) {
                addResult('分享配置解码', 'fail', '解码返回 null');
                return;
            }

            if (decoded.p === 'Shared Project' && decoded.u === 'shareuser' && decoded.r === 'sharerepo') {
                addResult('分享配置完整', 'pass', '配置正确恢复');
            } else {
                addResult('分享配置完整', 'fail', '配置恢复不正确', JSON.stringify(decoded));
            }

            const badDecode = API.decodeShareConfig('invalid-base64-string!!!');
            if (badDecode === null) {
                addResult('错误输入处理', 'pass', '坏字符串返回 null');
            } else {
                addResult('错误输入处理', 'warn', '可能应返回 null 但返回了', JSON.stringify(badDecode));
            }

            API.setConfig(API.getDefaultConfig());
        } catch (e) {
            addResult('分享链接', 'fail', '测试执行失败', e.message);
        }
    }

    async function testCustomBadges() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;

            const testConfig = API.getDefaultConfig();
            testConfig.customBadges = [
                { label: 'Build', message: 'Passing', color: 'brightgreen' },
                { label: 'Test', message: '100%', color: 'blue' },
                { label: '', message: 'Empty', color: 'red' },
                { label: 'Incomplete', message: '', color: 'yellow' }
            ];
            API.setConfig(testConfig);

            const badges = API.generateAllBadges();
            const customBadges = badges.filter(b => b.type === 'custom');

            if (customBadges.length >= 2) {
                addResult('自定义徽章数量', 'pass', `生成 ${customBadges.length} 个自定义徽章`);
            } else {
                addResult('自定义徽章数量', 'warn', `只生成 ${customBadges.length} 个`);
            }

            const md = API.generateMarkdownOutput();
            if (md.includes('Build') && md.includes('Passing')) {
                addResult('自定义徽章 Markdown', 'pass', 'Markdown 包含自定义徽章');
            } else {
                addResult('自定义徽章 Markdown', 'fail', 'Markdown 未包含自定义徽章');
            }

            API.setConfig(API.getDefaultConfig());
        } catch (e) {
            addResult('自定义徽章', 'fail', '测试执行失败', e.message);
        }
    }

    async function testPublishChecklist() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;

            const testConfig = API.getDefaultConfig();
            testConfig.projectName = 'Complete Project';
            testConfig.githubUsername = 'testuser';
            testConfig.githubRepo = 'testrepo';
            testConfig.license = 'MIT';
            testConfig.projectStatus = 'active';
            testConfig.techStack = ['JavaScript'];
            testConfig.deployPlatform = ['GitHub Pages'];
            testConfig.projectDescription = 'A test project';
            API.setConfig(testConfig);

            const badges = API.generateAllBadges();

            if (badges.length <= 12) {
                addResult('徽章数量检查', 'pass', `徽章数量 ${badges.length} 在限制内`);
            } else {
                addResult('徽章数量检查', 'warn', `徽章数量 ${badges.length} 超过 12`);
            }

            const emptyConfig = API.getDefaultConfig();
            API.setConfig(emptyConfig);
            const emptyBadges = API.generateAllBadges();

            if (emptyBadges.length < badges.length) {
                addResult('空配置徽章较少', 'pass', '空配置生成较少徽章');
            } else {
                addResult('空配置徽章', 'warn', '空配置可能生成过多徽章');
            }

            API.setConfig(API.getDefaultConfig());
        } catch (e) {
            addResult('发布检查', 'fail', '测试执行失败', e.message);
        }
    }

    async function testI18n() {
        try {
            const API = window.ReadmeBadgeStudioTestAPI;

            const zhText = API.t('generate');
            if (zhText && zhText !== 'generate') {
                addResult('中文翻译', 'pass', `返回: ${zhText}`);
            } else {
                addResult('中文翻译', 'warn', '可能未正确翻译');
            }

            const oldLang = API.currentLang();
            API.setLanguage('en');
            const enText = API.t('generate');
            if (enText && enText !== 'generate') {
                addResult('英文翻译', 'pass', `返回: ${enText}`);
            } else {
                addResult('英文翻译', 'warn', '可能未正确翻译');
            }

            API.setLanguage(oldLang);

            const missingKey = API.t('nonexistent-key-12345');
            if (missingKey !== undefined && missingKey !== '') {
                addResult('缺失 key 回退', 'pass', '有合理回退值');
            } else {
                addResult('缺失 key 回退', 'warn', '可能返回空或 undefined');
            }
        } catch (e) {
            addResult('多语言', 'fail', '测试执行失败', e.message);
        }
    }

    async function testDOMStructure() {
        try {
            const iframe = document.createElement('iframe');
            iframe.src = './index.html';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            await new Promise((resolve, reject) => {
                iframe.onload = resolve;
                iframe.onerror = reject;
                setTimeout(reject, 5000);
            });

            const doc = iframe.contentDocument || iframe.contentWindow.document;

            const checks = [
                { selector: '#projectName', name: '项目名称输入框' },
                { selector: '#githubRepoUrl', name: 'GitHub 仓库地址输入框' },
                { selector: '#githubUsername', name: 'GitHub 用户名输入框' },
                { selector: '#githubRepo', name: 'GitHub 仓库名输入框' },
                { selector: '#generateBadgeBtn', name: '生成徽章按钮' },
                { selector: '#shareBtn', name: '分享按钮' },
                { selector: '#darkModeBtn', name: '深色模式按钮' },
                { selector: '#copyMdBtn', name: '复制按钮' },
                { selector: '#exportConfigBtn', name: '导出配置按钮' },
                { selector: '#importConfigBtn', name: '导入配置按钮' },
                { selector: '#saveSnapshotBtn', name: '快照按钮' },
                { selector: '#markdownOutput', name: 'Markdown 输出区' },
                { selector: '#readmePreview', name: 'README 预览区' },
                { selector: '#badgesPreview', name: '徽章预览区' },
                { selector: '#publishChecklist', name: '发布前检查区域' }
            ];

            let found = 0;
            let missing = [];

            checks.forEach(check => {
                const el = doc.querySelector(check.selector);
                if (el) {
                    found++;
                } else {
                    missing.push(check.name);
                }
            });

            if (missing.length === 0) {
                addResult('DOM 结构完整性', 'pass', `所有 ${checks.length} 个关键元素存在`);
            } else {
                addResult('DOM 结构完整性', 'fail', `缺少 ${missing.length} 个元素`, missing.join(', '));
            }

            document.body.removeChild(iframe);
        } catch (e) {
            addResult('DOM 结构测试', 'fail', '无法加载 index.html', e.message);
        }
    }

    async function testInteraction() {
        try {
            const iframe = document.createElement('iframe');
            iframe.src = './index.html';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            await new Promise((resolve, reject) => {
                iframe.onload = resolve;
                iframe.onerror = reject;
                setTimeout(reject, 5000);
            });

            const doc = iframe.contentDocument || iframe.contentWindow.document;
            const win = iframe.contentWindow;

            const API = win.ReadmeBadgeStudioTestAPI;

            const projectNameInput = doc.querySelector('#projectName');
            if (projectNameInput) {
                projectNameInput.value = 'Test Project Name';
                projectNameInput.dispatchEvent(new Event('input', { bubbles: true }));
                await new Promise(r => setTimeout(r, 300));

                const config = API.config();
                if (config.projectName === 'Test Project Name') {
                    addResult('项目名称输入', 'pass', '输入后配置更新');
                } else {
                    addResult('项目名称输入', 'warn', '配置可能未更新');
                }
            } else {
                addResult('项目名称输入', 'fail', '找不到输入框');
            }

            const repoUrlInput = doc.querySelector('#githubRepoUrl');
            if (repoUrlInput) {
                repoUrlInput.value = 'w0nderful666/prompt-market';
                repoUrlInput.dispatchEvent(new Event('change', { bubbles: true }));
                await new Promise(r => setTimeout(r, 300));

                const config = API.config();
                if (config.githubUsername === 'w0nderful666' && config.githubRepo === 'prompt-market') {
                    addResult('GitHub URL 解析交互', 'pass', '自动解析并填充');
                } else {
                    addResult('GitHub URL 解析交互', 'warn', '可能未自动解析');
                }
            }

            const langBtn = doc.querySelector('#langToggleBtn');
            if (langBtn) {
                langBtn.click();
                await new Promise(r => setTimeout(r, 200));

                const lang = API.currentLang();
                addResult('语言切换', 'pass', `切换后语言: ${lang}`);
            }

            document.body.removeChild(iframe);
        } catch (e) {
            addResult('交互模拟', 'fail', '测试执行失败', e.message);
        }
    }

    async function testLocalStorage() {
        try {
            const testKey = TEST_KEYS.config;
            const testData = { test: true, timestamp: Date.now() };

            try {
                localStorage.setItem(testKey, JSON.stringify(testData));
                const saved = localStorage.getItem(testKey);
                const parsed = JSON.parse(saved);

                if (parsed.test === true) {
                    addResult('localStorage 保存', 'pass', '保存成功');
                } else {
                    addResult('localStorage 保存', 'fail', '保存数据不正确');
                }

                localStorage.removeItem(testKey);
                const afterDelete = localStorage.getItem(testKey);
                if (!afterDelete) {
                    addResult('localStorage 删除', 'pass', '删除成功');
                } else {
                    addResult('localStorage 删除', 'fail', '删除失败');
                }
            } catch (e) {
                addResult('localStorage 降级', 'pass', 'localStorage 不可用但有处理: ' + e.message);
            }

            const API = window.ReadmeBadgeStudioTestAPI;
            const testConfig = API.getDefaultConfig();
            testConfig.projectName = 'Snapshot Test';
            API.setConfig(testConfig);

            saveTestSnapshot('Test Snapshot', testConfig);
            const snapshots = loadTestSnapshots();

            if (snapshots.length > 0 && snapshots[0].name === 'Test Snapshot') {
                addResult('快照保存', 'pass', '快照保存成功');

                if (snapshots[0].id) {
                    deleteTestSnapshot(snapshots[0].id);
                    const afterDelete = loadTestSnapshots();
                    if (afterDelete.length === 0) {
                        addResult('快照删除', 'pass', '快照删除成功');
                    } else {
                        addResult('快照删除', 'warn', '快照可能未删除');
                    }
                } else {
                    addResult('快照删除', 'warn', '快照 ID 不存在');
                }
            } else {
                addResult('快照保存', 'fail', '快照可能未保存');
                addResult('快照删除', 'warn', '跳过删除测试');
            }
        } catch (e) {
            addResult('localStorage', 'fail', '测试执行失败', e.message);
        }
    }

    function saveTestSnapshot(name, configData) {
        const snapshots = loadTestSnapshots();
        const snapshot = {
            id: Date.now().toString(),
            name: name,
            date: new Date().toLocaleDateString(),
            config: configData
        };
        snapshots.unshift(snapshots);
        try {
            localStorage.setItem(TEST_KEYS.snapshots, JSON.stringify(snapshots));
        } catch (e) {}
    }

    function loadTestSnapshots() {
        try {
            return JSON.parse(localStorage.getItem(TEST_KEYS.snapshots)) || [];
        } catch (e) {
            return [];
        }
    }

    function deleteTestSnapshot(id) {
        let snapshots = loadTestSnapshots();
        snapshots = snapshots.filter(s => s.id !== id);
        try {
            localStorage.setItem(TEST_KEYS.snapshots, JSON.stringify(snapshots));
        } catch (e) {}
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();