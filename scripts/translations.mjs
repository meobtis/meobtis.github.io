#!/usr/bin/env node
// Syncs English and interlinear translations from ../meobtis-en into a flat
// src/content/translations/ folder as <slug>.md and <slug>.interlinear.md.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parse as parseYaml } from 'yaml';

const sourceDir = resolve(process.env.MEOBTIS_EN_DIR || '../meobtis-en');
const targetDir = resolve('src/content/translations');

const slugify = (s) =>
	s
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');

function walkMarkdown(dir) {
	const out = [];
	if (!existsSync(dir)) return out;
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, entry.name);
		if (entry.isDirectory()) out.push(...walkMarkdown(p));
		else if (entry.name.endsWith('.md')) out.push(p);
	}
	return out.sort();
}

mkdirSync(targetDir, { recursive: true });

const enRoot = join(sourceDir, 'en');
const ilRoot = join(sourceDir, 'interlinear');
const enFiles = walkMarkdown(enRoot);

for (const enPath of enFiles) {
	const rel = enPath.slice(enRoot.length + 1);
	const raw = readFileSync(enPath, 'utf8');
	const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	const title = fm ? String(parseYaml(fm[1])?.title ?? rel) : rel;
	const slug = slugify(title);

	writeFileSync(join(targetDir, `${slug}.md`), raw, 'utf8');

	const ilPath = join(ilRoot, rel);
	if (existsSync(ilPath)) {
		writeFileSync(join(targetDir, `${slug}.interlinear.md`), readFileSync(ilPath, 'utf8'), 'utf8');
	}
}

console.log(`Synced ${enFiles.length} translations into ${targetDir}`);
