---
title: Contributing
order: 15
---

# Contributing Guidelines

## Code Style

ESLint is configured with strict TypeScript rules:

```json
// .eslintrc.cjs
{
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

**Lint before committing:**

```bash
npm run lint
```

## Git Workflow

### Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/description` | `feature/product-search` |
| Bug fix | `fix/description` | `fix/dark-mode-flash` |
| Refactor | `refactor/description` | `refactor/extract-modal` |
| Chore | `chore/description` | `chore/update-deps` |

### Commit Format

```
<type>: brief description (max 72 chars)

Examples:
feat: add product search functionality
fix: resolve dark mode toggle flash
refactor: extract modal as shared component
docs: update API integration guide
```

## Component Creation Checklist

1. Create `.tsx` file in appropriate directory under `src/Components/`
2. Define TypeScript interface for props (no `any`)
3. Use `useTranslation()` for all user-facing text
4. Add `dark:` variants for all color/background classes
5. Test with RTL layout (check `left`/`right` positioning)
6. Add responsive classes (xs, sm, md, ipad, lg breakpoints)
7. Export as default
8. Run `npm run lint` — no errors allowed

## Pull Request Template

```markdown
## Description
Brief description of changes

## Type
- [ ] Feature
- [ ] Bug fix
- [ ] Refactor
- [ ] Documentation

## Testing
- [ ] Tested locally
- [ ] No new lint errors
- [ ] Verified in both light and dark mode
- [ ] Verified in English and Japanese

## Screenshots
(if applicable)
```

## Issue Templates

### Bug Report

```markdown
**Describe the bug**
A clear description of the issue.

**To Reproduce**
Steps to reproduce the behavior.

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable.

**Environment**
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Screen size: [e.g., 1920x1080]
```

### Feature Request

```markdown
**Problem statement**
What problem does this feature solve?

**Proposed solution**
How should it work?

**Alternatives considered**
What other approaches were considered?
```

## Development Setup

```bash
git clone <repository-url>
cd golden_coffee
npm install
npm run dev
```

> **Note:** No `.env` file is required. The app runs fully with mock data.

## Project Conventions

| Concern | Convention |
|---------|------------|
| Component exports | Default export |
| Component files | PascalCase filenames |
| Page files | PascalCase in `Pages/` |
| Feature utilities | PascalCase in `Features/` |
| Hooks | `use*` naming, camelCase files |
| Translation keys | Dot notation by feature |
| Styles | Tailwind utility classes (no CSS modules) |
| Imports | `@/` alias for src root |
| TypeScript | Strict mode, no `any` |
