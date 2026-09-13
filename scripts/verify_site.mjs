// Content gate for pro.wadekerzie.com — runs after `vite build`.
// No dependencies: Node built-ins only.
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const DIST = join(process.cwd(), 'dist')

const REQUIRED = [
    'GotaGuy',
    'Back Cover',
    'Unison',
    'TrueSeat',
    '$420M+',
]

const REQUIRED_ANY_OF = [
    ["Nation's Restaurant News", 'Nation’s Restaurant News'],
]

const BANNED = [
    '$380M',
    'NemoClaw',
    'Ad2Action',
    'STQ',
    'Zorli launching',
    'Kerzie Consulting',
    'calendly.com',
    'Auto Assure',
    'Life.OS',
]

const REQUIRED_FILES = [
    'og.png',
    'robots.txt',
    'sitemap.xml',
    'resume.pdf',
]

let failed = false
const results = []

function check(label, ok, detail = '') {
    results.push({ label, ok, detail })
    if (!ok) failed = true
    console.log(`${ok ? 'PASS' : 'FAIL'}: ${label}${detail ? ' — ' + detail : ''}`)
}

if (!existsSync(DIST)) {
    console.log('FAILED: dist/ does not exist. Run `vite build` first.')
    process.exit(1)
}

// Gather text from dist/index.html + dist/assets/*.js
let combined = ''

const indexPath = join(DIST, 'index.html')
if (existsSync(indexPath)) {
    combined += readFileSync(indexPath, 'utf8')
} else {
    check('dist/index.html exists', false)
}

const assetsDir = join(DIST, 'assets')
if (existsSync(assetsDir)) {
    const jsFiles = readdirSync(assetsDir).filter((f) => f.endsWith('.js'))
    for (const f of jsFiles) {
        combined += readFileSync(join(assetsDir, f), 'utf8')
    }
    check('dist/assets/*.js found', jsFiles.length > 0, `${jsFiles.length} file(s)`)
} else {
    check('dist/assets directory exists', false)
}

// Required substrings
for (const needle of REQUIRED) {
    check(`contains "${needle}"`, combined.includes(needle))
}

// Required: one-of groups
for (const group of REQUIRED_ANY_OF) {
    const found = group.some((needle) => combined.includes(needle))
    check(`contains one of [${group.join(' / ')}]`, found)
}

// Banned substrings (case-sensitive)
for (const needle of BANNED) {
    check(`does not contain "${needle}"`, !combined.includes(needle))
}

// llms.txt checks
const llmsPath = join(DIST, 'llms.txt')
if (existsSync(llmsPath)) {
    const llms = readFileSync(llmsPath, 'utf8')
    check('dist/llms.txt exists', true)
    check('dist/llms.txt starts with "# Wade Kerzie"', llms.startsWith('# Wade Kerzie'))
    for (const product of ['GotaGuy', 'Back Cover', 'Unison', 'TrueSeat']) {
        check(`dist/llms.txt contains "${product}"`, llms.includes(product))
    }
} else {
    check('dist/llms.txt exists', false)
}

// Required files present
for (const file of REQUIRED_FILES) {
    check(`dist/${file} exists`, existsSync(join(DIST, file)))
}

if (failed) {
    const failedChecks = results.filter((r) => !r.ok).map((r) => r.label)
    console.log('\nFAILED: pro.wadekerzie.com content gate')
    console.log('Failing checks:')
    for (const f of failedChecks) console.log(`  - ${f}`)
    process.exit(1)
} else {
    console.log('\nPASS: pro.wadekerzie.com content gate')
}
