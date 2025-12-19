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

# Agentic AI for Policy Research

## Multi-Agent Workflows & Microsimulation

<div class="pt-12">
  <img src="/images/policyengine-new-logo.png" class="h-12 mb-4" />
  <p class="text-xl font-semibold">Max Ghenis · PolicyEngine</p>
  <p class="text-lg opacity-70">Urban Institute · December 2025</p>
</div>


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

**Open-source tax-benefit microsimulation**
- US, UK, Canada
- Similar space to TRIM, TPC models

**Today's Agenda:**
1. Claude 4.5 Opus & Claude Code
2. TDD as AI harness
3. Automating rules-as-code
4. Live demo (your choice!)
5. **Q&A throughout**

---

# The Revolution: Claude 4.5 Opus in Claude Code

## What Changed Everything (December 2025)
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

## Example: [policyengine.github.io/crfb-tob-impacts](https://policyengine.github.io/crfb-tob-impacts)

Claude Code built the entire JupyterBook: analysis, visualizations, tables, deployment.

```bash
# User prompt:
"Analyze CRFB's proposals with PolicyEngine. Create a JupyterBook."

# Claude Code does:
✓ Creates repo  ✓ Writes analysis  ✓ Generates figures
✓ Writes narrative  ✓ Sets up CI/CD  ✓ Deploys to GitHub Pages
```

**Result**: Publication-ready analysis in **hours, not weeks**

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

## Stop Writing Code - Just Ask Questions

With a PolicyEngine plugin, I don't write code anymore. I just ask:

> "What's the total cost of EITC in 2025?"

Claude Code runs the microsim and tells me: **$49.6 billion**

> "How would doubling the maximum credit affect that?"

It writes the reform, runs it, and reports the results.

## Plugin Components (skills, agents, commands)
Teach Claude Code your domain: coding conventions, API patterns, workflows

## The Shift
**Before:** Write code → debug → iterate → get answer
**After:** Ask question → get answer

---

# Live Demo: Let's Build Something Together!

## PolicyEngine Microsim at Your Fingertips

```python
from policyengine_us import Microsimulation
sim = Microsimulation()
eitc = sim.calculate("eitc", period=2025).sum() / 1e9  # $49.6B
ctc = sim.calculate("ctc", period=2025).sum() / 1e9   # $140.7B
snap = sim.calculate("snap", period=2025).sum() / 1e9  # $91.9B
```

## What Should We Build? (you pick!)
- Policy reform analysis (expand EITC, CTC, SNAP)
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
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4FD1C5, transparent);
  box-shadow: 0 0 20px rgba(79, 209, 197, 0.5);
}

.closing-accent-top { top: 3rem; }
.closing-accent-bottom { bottom: 3rem; }

.closing-title {
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: #f8fafc;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
}

.closing-title::before { display: none; }

.closing-subtitle {
  font-size: 1.25rem;
  color: #4FD1C5;
  font-weight: 400;
  margin-bottom: 3rem;
}

.closing-contact {
  margin-top: 1rem;
}

.closing-card {
  background: #111827;
  padding: 2.5rem 4rem;
  border-radius: 16px;
  border: 1px solid #1e293b;
  text-align: center;
  box-shadow: 0 0 60px rgba(49, 151, 149, 0.15);
}

.closing-logo {
  height: 48px;
  margin-bottom: 1.5rem;
  filter: brightness(1.2);
}

.closing-name {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #f8fafc;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
}

.closing-email {
  color: #4FD1C5;
  font-size: 1.1rem;
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
}
</style>