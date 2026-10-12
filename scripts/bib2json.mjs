// Convert bib/*.bib to data/bib/*.json for Hugo. Run with `npm run bib`.
// Formatting happens in Hugo (layouts/partials/cite.html); this only normalizes fields.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs'
import { basename, join } from 'node:path'
import { parse } from '@retorquere/bibtex-parser'

const SRC = 'bib'
const OUT = 'data/bib'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December']

const text = v => (Array.isArray(v) ? v.join(', ') : v ?? '').toString().replace(/\s+/g, ' ').trim()

// "Joshua Levi" -> "J. L.", "D.S." -> "D. S."
const initials = first => (first || '').split(/[\s.]+/).filter(Boolean)
  .map(p => p.split('-').map(s => s[0].toUpperCase() + '.').join('-')).join(' ')

// biblatex annotation "1=highlight;3=highlight" -> Set of 0-based indices
const highlighted = an => new Set((an || '').split(';')
  .map(s => s.trim().match(/^(\d+)\s*=\s*.*highlight/)).filter(Boolean).map(m => Number(m[1]) - 1))

// Site-only fields are dropped from the BibTeX shown on subpages
const PRIVATE = /^\s*(author\+an|cvsection|acceptance|acceptanceurl|award)\s*=.*\n/gm

const people = (list, an) => {
  const hl = highlighted(an)
  return (list || []).map((p, i) => ({
    first: text(p.firstName),
    last: text(p.lastName || p.name),
    initials: initials(p.firstName),
    highlight: hl.has(i),
  }))
}

function convert(entry, index) {
  const f = entry.fields
  const month = Number(f.month) || 0
  const out = {
    key: entry.key,
    type: entry.type,
    cvsection: text(f.cvsection) || 'peer',
    authors: people(f.author, f['author+an']),
    editors: people(f.editor),
    title: text(f.title),
    venue: text(f.booktitle || f.journal || f.school),
    series: text(f.series),
    place: text(f.location || f.address),
    publisher: text(f.publisher),
    year: Number(f.year),
    month,
    monthname: month ? MONTHS[month - 1] : '',
    pages: text(f.pages),
    doi: text(f.doi),
    url: text(f.url),
    note: text(f.note),
    acceptance: text(f.acceptance),
    acceptanceurl: text(f.acceptanceurl),
    award: text(f.award),
    bibtex: entry.input.replace(PRIVATE, '').trim(),
    order: index,
  }
  for (const [k, v] of Object.entries(out)) {
    if (v === '' || (Array.isArray(v) && v.length === 0)) delete out[k]
  }
  return out
}

mkdirSync(OUT, { recursive: true })
let failed = false
for (const file of readdirSync(SRC).filter(f => f.endsWith('.bib'))) {
  const bib = parse(readFileSync(join(SRC, file), 'utf8'), {
    english: false,
    sentenceCase: false,
    caseProtection: false,
  })
  if (bib.errors.length) {
    failed = true
    for (const e of bib.errors) console.error(`${file}: ${e.error ?? JSON.stringify(e)}`)
    continue
  }
  const entries = bib.entries.map(convert)
    // newest first; same date keeps file order
    .sort((a, b) => b.year - a.year || b.month - a.month || a.order - b.order)
  entries.forEach(e => delete e.order)
  const name = basename(file, '.bib')
  writeFileSync(join(OUT, `${name}.json`), JSON.stringify(entries, null, 2) + '\n')
  console.log(`${file}: ${entries.length} entries -> ${OUT}/${name}.json`)
}
process.exit(failed ? 1 : 0)
