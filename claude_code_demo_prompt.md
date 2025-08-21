# Live Claude Code Demo Prompt
## For USC Economics PhD Lecture

### The Prompt I'll Give Claude Code Live:

```
I'm teaching a computational methods for economists class with second-year PhD students. 
Help me demonstrate modern research methods by building a structural estimation of labor 
supply elasticity using the EITC as a natural experiment.

Requirements:
1. Start with TDD - write tests first for each component
2. Build a structural labor supply model with utility maximization
3. Use the actual 2024 EITC schedule parameters
4. Generate synthetic data that mimics PolicyEngine's enhanced CPS
5. Use machine learning (gradient boosting) to estimate structural parameters
6. Analyze heterogeneous effects by family structure
7. Conduct welfare analysis of a 50% EITC expansion
8. Create publication-quality visualizations
9. Document everything as we go

The students know structural econometrics and ML, so use advanced techniques but explain 
the economic intuition. Show them how fast we can go from idea to implementation.

Let's start by writing tests for the structural model.
```

### What Students Will See:

**Claude Code will:**
1. Write test cases first (showing TDD in action)
2. Implement the structural model step by step
3. Debug and fix issues in real-time
4. Generate visualizations automatically
5. Create documentation as it codes

### Follow-up Prompts During Demo:

**After initial implementation:**
```
Great! Now add a robustness check where we vary the Frisch elasticity 
from 0.1 to 0.5 and show how it affects our welfare conclusions.
```

**Student question example:**
```
A student asks: "Can we add general equilibrium effects where wages 
adjust to labor supply changes?" Show how to implement this.
```

**Extending the analysis:**
```
Now convert this into a Jupyter notebook that we can publish as a 
working paper. Add sections for abstract, introduction, and literature 
review. Make it ready for NBER submission.
```

**Adding interactivity:**
```
Create an interactive dashboard where we can adjust the EITC parameters 
and see the effects on labor supply and welfare in real-time.
```

### Key Teaching Moments:

1. **When Claude Code writes tests first:**
   "Notice how it starts with tests - this ensures our results are reliable"

2. **When it implements the structural model:**
   "See how it's using the exact FOC conditions from your problem sets"

3. **When it debugs:**
   "This is normal - watch how it identifies and fixes the issue"

4. **When it creates visualizations:**
   "Publication-ready figures in seconds, not hours"

### The Power Statement:

"I'm not writing any code myself. I'm just describing what I want as an economist. 
Claude Code handles all the implementation details. This is the future of economic 
research - we focus on the economics, AI handles the coding."

### Interactive Element:

"Who wants to suggest a modification? Just tell me in plain English what you want 
to analyze, and I'll ask Claude Code to implement it."

### Common Student Suggestions to Prepare For:

1. "Add income heterogeneity"
2. "Include childcare costs"  
3. "Add state-level EITC variation"
4. "Use difference-in-differences"
5. "Add dynamic lifecycle effects"
6. "Include marriage penalties"

### Timing:

- **Initial prompt and setup**: 30 seconds
- **Claude Code implementation**: 2-3 minutes
- **First results appear**: 3-4 minutes
- **Student modification**: 1-2 minutes each
- **Total demo time**: 10-15 minutes

### The Reveal:

"This entire analysis - which would be a good second-year paper - was created in 
10 minutes. Not 10 weeks. 10 minutes. And it's tested, documented, and reproducible.
This is why you need to learn to work with AI tools."