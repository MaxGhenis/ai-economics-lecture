---
theme: default
title: 'Agentic AI for Policy Research & Microsimulation'
info: |
  ## Agentic AI for Policy Research
  Using Claude Code and Multi-Agent Workflows to Transform Policy Analysis

  Urban Institute · December 2025
  By Max Ghenis, PolicyEngine
layout: cover
fonts:
  sans: 'Inter'
  mono: 'Fira Code'
---

<div class="cover-container">
  <div class="cover-accent"></div>
  <h1 class="cover-title">Agentic AI for Policy Research</h1>
  <p class="cover-subtitle">Multi-Agent Workflows & Microsimulation</p>
  <div class="cover-footer">
    <img src="/images/policyengine-new-logo.png" class="cover-logo" />
    <div class="cover-meta">
      <p class="cover-author">Max Ghenis · PolicyEngine</p>
      <p class="cover-venue">Urban Institute · December 2025</p>
    </div>
  </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --slidev-theme-primary: #319795;
  --pe-teal-500: #319795;
  --pe-teal-300: #4FD1C5;
  --pe-teal-700: #285E61;
  --pe-gray-700: #344054;
  --pe-gray-500: #667085;
  --pe-gray-100: #F2F4F7;
  --pe-success: #22C55E;
  --pe-error: #EF4444;
  --pe-gradient: linear-gradient(135deg, #319795 0%, #285E61 50%, #1D4044 100%);
  --pe-gradient-subtle: linear-gradient(180deg, rgba(49,151,149,0.03) 0%, rgba(49,151,149,0.08) 100%);
}

.slidev-layout {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(180deg, #ffffff 0%, var(--pe-gray-100) 100%);
  position: relative;
}

.slidev-layout::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: var(--pe-gradient-subtle);
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
  pointer-events: none;
}

h1 {
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--pe-gray-700);
  position: relative;
}

h1::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--pe-gradient);
  border-radius: 2px;
}

h2 {
  font-weight: 600;
  color: var(--pe-teal-500);
  letter-spacing: -0.01em;
}

h3 {
  font-weight: 600;
  color: var(--pe-gray-700);
}

p, li {
  color: var(--pe-gray-500);
  line-height: 1.7;
}

strong {
  color: var(--pe-gray-700);
  font-weight: 600;
}

code {
  background: rgba(49, 151, 149, 0.1);
  color: var(--pe-teal-700);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}

pre {
  background: var(--pe-gray-700) !important;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(52, 64, 84, 0.15);
  border: 1px solid rgba(49, 151, 149, 0.2);
}

a {
  color: var(--pe-teal-500);
  text-decoration: none;
  border-bottom: 2px solid var(--pe-teal-300);
  transition: all 0.2s ease;
}

a:hover {
  color: var(--pe-teal-700);
  border-bottom-color: var(--pe-teal-500);
}

table {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(52, 64, 84, 0.08);
}

th {
  background: var(--pe-gradient);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75em;
  letter-spacing: 0.05em;
}

td {
  background: white;
  border-bottom: 1px solid var(--pe-gray-100);
}

.grid > div {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(52, 64, 84, 0.06);
  border: 1px solid var(--pe-gray-100);
  transition: all 0.3s ease;
}

.grid > div:hover {
  box-shadow: 0 8px 24px rgba(49, 151, 149, 0.12);
  border-color: var(--pe-teal-300);
  transform: translateY(-2px);
}

.border-2 {
  border: 2px solid var(--pe-teal-300) !important;
  border-radius: 12px;
}

/* Cover slide styles */
.cover-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 2rem;
}

.cover-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 100%;
  background: var(--pe-gradient);
}

.cover-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--pe-gray-700);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.cover-title::after {
  display: none;
}

.cover-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--pe-teal-500);
  letter-spacing: -0.01em;
  margin-top: 1rem;
}

.cover-footer {
  position: absolute;
  bottom: 3rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.cover-logo {
  height: 48px;
  width: auto;
}

.cover-meta {
  border-left: 2px solid var(--pe-gray-100);
  padding-left: 1.5rem;
}

.cover-author {
  font-weight: 600;
  color: var(--pe-gray-700);
  font-size: 1.1rem;
  margin: 0;
}

.cover-venue {
  color: var(--pe-gray-500);
  font-size: 0.95rem;
  margin: 0;
}
</style>

---
layout: two-cols
---

# About Me

<img src="/images/policyengine-new-logo.png" class="w-48 mb-4" />

## Max Ghenis
- **CEO & Founder**, PolicyEngine
- **Mission**: Make public policy analysis accessible to everyone
- **Background**: Economics, Data Science, Policy Research
- **Today's Focus**: Our multi-agent workflows for policy research

::right::

# PolicyEngine

**What we do:**
- Free, open-source tax-benefit microsimulation
- Model reforms instantly
- Household & societal impacts
- US, UK, and Canada

**Today's Agenda:**
1. Claude 4.5 Opus & Claude Code revolution
2. TDD harness for AI development
3. Live microsim demo
4. Automating rules-as-code (TANF example)
5. **Plenty of Q&A time!**

---

# The Revolution: Claude 4.5 Opus in Claude Code

## What Changed Everything (October 2025)
- **Claude 4.5 Opus**: Most capable model, now in Claude Code
- **Extended thinking**: Deeper reasoning for complex policy analysis
- **Agentic capabilities**: Runs tools, writes code, manages git, deploys

## Why This Matters for Policy Research
- Building new software tools is now **effortless**
- Complex microsimulation queries answered conversationally
- Multi-file codebases handled seamlessly
- API integrations (GCloud, Vercel, Gmail) work out of the box

## Recent PolicyEngine Examples
- **[aca-calc.vercel.app](https://aca-calc.vercel.app)**: ACA calculator built in hours
- **TANF automation**: 2 weeks per state → 0.5 days
- **Research tools**: Complete React apps with backends, deployed

---

# TDD: The Harness for AI-Driven Development

## The New Paradigm: From Notebooks to Production Repos

We're **replacing Jupyter notebooks** with dedicated repos:
- Lightweight Python packages with **test suites**
- CI/CD pipelines (GitHub Actions)
- Data generation scripts
- **React frontends** with optional backends
- Deployed to Vercel automatically

## Why TDD Gives Claude Code a Harness

```python
def test_snap_benefits():
    """Test SNAP benefit calculation matches expected"""
    household = create_household(income=25000, size=3)
    snap = calculate_snap(household)
    assert 2000 <= snap <= 7000  # Expected annual range
```

**TDD constrains Claude Code** - it can iterate freely knowing tests catch errors.
**CI validates everything** - no manual review of every line needed.

---

# Claude Code Can Write Papers Too

## Example: CRFB TOB Budget Analysis
**[policyengine.github.io/crfb-tob-impacts](https://policyengine.github.io/crfb-tob-impacts)**

Claude Code built the entire JupyterBook:
- Policy analysis and narrative
- Data visualizations
- Interactive tables
- Deployed automatically

## The Workflow

```bash
# User prompt:
"Analyze the budget impact of CRFB's proposals
using PolicyEngine microsim. Create a JupyterBook
with executive summary, methodology, and results."

# Claude Code does:
✓ Creates repo structure
✓ Writes analysis code with TDD
✓ Generates figures and tables
✓ Writes narrative sections
✓ Sets up CI/CD
✓ Deploys to GitHub Pages
```

**Result**: Publication-ready analysis in hours, not weeks

---

# Automating Rules-as-Code: TANF Example

## The Problem
Encoding state TANF rules into PolicyEngine: **~2 weeks per state**

## The Claude Code Plugin Solution

1. **Golden PR**: One manually-reviewed state encoding as template
2. **Claude Code Plugin**: Custom agents with domain knowledge
3. **TDD harness**: Tests verify benefit calculations match expected
4. **Iteration**: Claude Code runs tests, fixes until green

## The Result

| Before | After |
|--------|-------|
| ~2 weeks per state | ~0.5 days per state |
| Manual code review | Automated testing |
| One developer | AI + human oversight |

**40x faster** - opens path to full 50-state coverage

---

# What Are Claude Code Plugins?

## Customizing AI for Your Domain

Plugins let you teach Claude Code about your specific domain:

```yaml
# .claude/agents/policyengine-dev.md
name: PolicyEngine Developer
description: Encodes tax-benefit rules into PolicyEngine
tools: [Bash, Read, Write, Edit, Grep]

You are an expert in the PolicyEngine microsimulation
framework. When encoding benefit rules:
1. Create parameters in YAML
2. Write vectorized formulas
3. Generate test cases from policy documents
4. Validate against official examples
```

## Why This Matters
- **Domain expertise baked in** - Claude knows PE conventions
- **Consistent output** - follows our coding patterns
- **Scalable** - junior team members get senior-level guidance

---

# Live Demo: Let's Build Something Together!

## PolicyEngine Microsim at Your Fingertips

```python
from policyengine_us import Microsimulation
sim = Microsimulation()

# Answer policy questions instantly:
eitc_total = sim.calculate("eitc", period=2025).sum() / 1e9
ctc_total = sim.calculate("ctc", period=2025).sum() / 1e9
snap_total = sim.calculate("snap", period=2025).sum() / 1e9

# Results:
# Total federal EITC:      $49.6 billion
# Total Child Tax Credit:  $140.7 billion
# Total SNAP benefits:     $91.9 billion
```

## What Should We Build?

**Ideas (you pick!):**
- Policy reform analysis (e.g., expand EITC)
- State-level benefit comparison
- Interactive calculator (deployed live!)
- Something from your research agenda?

---

# The Full Stack: Claude Code's Capabilities

## We've Given Claude Code Access To:

<div class="grid grid-cols-2 gap-6">

<div>

### Development & Deploy
- **Git/GitHub**: Commits, PRs, issues
- **Vercel**: Deploy frontends instantly
- **GCloud**: Backend services
- **npm/pip**: Package management

</div>

<div>

### Communication & Data
- **Gmail**: Draft and send emails
- **Google Drive**: Read/write docs
- **APIs**: FRED, Census, etc.
- **Databases**: Read/write data

</div>

</div>

## Result: End-to-End Automation

```bash
"Build an EITC calculator, deploy to Vercel,
email the stakeholders with the link"
```

**Claude Code handles the entire workflow** - no context switching

---

# Multi-Agent Workflows for Policy Research

## Reference: [policyengine.org/uk/research/multi-agent-workflows-policy-research](https://www.policyengine.org/uk/research/multi-agent-workflows-policy-research)

### Key Concepts

1. **Orchestrator Agent**: Manages overall task, delegates to specialists
2. **Research Agent**: Gathers context, reads legislation
3. **Coding Agent**: Implements with TDD
4. **Review Agent**: Validates output quality

### Why Multiple Agents?

- **Specialization**: Each agent optimized for its task
- **Parallel work**: Research while coding
- **Quality control**: Separate review from implementation
- **Scalability**: Add agents for new domains

*Recommended pre-reading for this session!*

---

# Example: ACA Health Calculator

## [aca-calc.vercel.app](https://aca-calc.vercel.app)

Built entirely with Claude Code in one session:

- **React frontend** with form inputs
- **PolicyEngine-US integration** for calculations
- **Instant deployment** to Vercel
- **Total time**: ~3 hours from concept to live

### The Workflow

```
User: "Build a calculator that shows ACA subsidy
eligibility based on income and household size"

Claude Code:
→ Creates React project structure
→ Implements PolicyEngine API calls
→ Designs responsive UI
→ Writes tests
→ Deploys to Vercel
→ Returns live URL
```

---

# Collaborative Building Time!

## What Should We Build Together?

### Option 1: Policy Reform Calculator
- Pick a reform (expand EITC, CTC, SNAP, etc.)
- Calculate budget and distributional impact
- Deploy as interactive tool

### Option 2: State Comparison Tool
- Compare benefit levels across states
- Interactive map or table
- Answer: "What if I moved from X to Y?"

### Option 3: Your Research Question
- Something from Urban's current projects?
- A microsimulation question you've been curious about?

**Let's decide together and build it live!**

---

# Lessons Learned

## What Works Best with Claude Code

<div class="grid grid-cols-2 gap-6">

<div>

### Do This
- Start with TDD - tests constrain the AI
- Use dedicated repos, not notebooks
- Give access to deploy (Vercel, GCloud)
- Let it handle entire workflows
- Review outputs, not line-by-line

</div>

<div>

### Avoid This
- Manual code review of every line
- Context switching between tools
- Notebooks for production code
- Writing code yourself
- Under-specifying requirements

</div>

</div>

## The Mindset Shift
**From**: "Help me write this function"
**To**: "Build me this entire tool with tests, CI, and deployment"

---

# Resources & Next Steps

## Get Started Today

### Tools & Examples:
- **Claude Code**: [claude.ai/code](https://claude.ai/code)
- **PolicyEngine**: [policyengine.org](https://policyengine.org)
- **ACA Calculator**: [aca-calc.vercel.app](https://aca-calc.vercel.app)
- **CRFB Analysis**: [policyengine.github.io/crfb-tob-impacts](https://policyengine.github.io/crfb-tob-impacts)

### Reading:
- **Multi-Agent Blog Post**: [policyengine.org/uk/research/multi-agent-workflows-policy-research](https://www.policyengine.org/uk/research/multi-agent-workflows-policy-research)

### Connect:
- **Max Ghenis**: max@policyengine.org · [@MaxGhenis](https://twitter.com/MaxGhenis)
- **PolicyEngine**: [@PolicyEngine](https://twitter.com/PolicyEngine)

---
layout: center
class: text-center
---

<div class="closing-container">
  <div class="closing-accent-top"></div>
  <h1 class="closing-title">Questions & Discussion</h1>
  <p class="closing-subtitle">Let's explore what's possible for policy research!</p>
  <div class="closing-contact">
    <div class="closing-card">
      <img src="/images/policyengine-new-logo.png" class="closing-logo" />
      <p class="closing-name">Max Ghenis</p>
      <p class="closing-email">max@policyengine.org</p>
    </div>
  </div>
  <div class="closing-accent-bottom"></div>
</div>

<style>
.closing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}

.closing-accent-top, .closing-accent-bottom {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #319795 0%, #4FD1C5 50%, #319795 100%);
  border-radius: 2px;
}

.closing-accent-top { top: 2rem; }
.closing-accent-bottom { bottom: 2rem; }

.closing-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #344054;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.closing-title::after { display: none; }

.closing-subtitle {
  font-size: 1.25rem;
  color: #319795;
  font-weight: 400;
  margin-bottom: 2.5rem;
}

.closing-contact {
  margin-top: 1rem;
}

.closing-card {
  background: white;
  padding: 2rem 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(52, 64, 84, 0.1);
  border: 1px solid #F2F4F7;
  text-align: center;
}

.closing-logo {
  height: 40px;
  margin-bottom: 1rem;
}

.closing-name {
  font-weight: 600;
  color: #344054;
  font-size: 1.25rem;
  margin: 0 0 0.25rem 0;
}

.closing-email {
  color: #319795;
  font-size: 1rem;
  margin: 0;
}
</style>