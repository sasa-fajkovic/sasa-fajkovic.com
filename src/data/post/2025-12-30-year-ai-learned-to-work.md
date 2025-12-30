---
publishDate: 2025-12-30T00:00:00Z
title: "2025: The year AI learned to work (and I still didn't write enough blog posts)"
excerpt: A reflection on how AI agents transformed software development in 2025, my goals for building AMOS in 2026, and why powerful tools still require human discipline.
image: ~/assets/images/posts/2025-12-30-year-ai-learned-to-work.png
category: AI
tags:
  - AI
  - Year in Review
  - Agents
  - MCP
  - Software Engineering
  - Personal Growth
---

Here's a confession to start the new year: I had one simple goal for 2025 — publish one blog post per month. Twelve posts. That's it. I had Copilot, Claude, Perplexity, JetBrains Junie, Cursor, and Gemini at my disposal. And yet, somehow, with all these AI superpowers at my fingertips, I still couldn't hit a basic content schedule.

Let's be honest — if there's one thing 2025 confirmed, it's that having powerful tools doesn't automatically make you productive. It makes you *capable* of being more productive. The discipline still has to come from you.

But enough beating myself up. Let me tell you about what actually happened in AI this year, because safe to say, it was nothing short of transformational.

## The Year of Agents

2025 was officially the year AI stopped being a fancy autocomplete and started doing actual work. Sam Altman predicted at the start of the year that AI agents would "join the workforce" — and they did, in ways that exceeded even the most optimistic projections.

The shift from "AI that responds" to **"AI that acts"** happened faster than anyone anticipated. We went from chatbots that answer questions to agents that can perceive triggers, plan action sequences, and execute tasks autonomously across multiple systems. Local agents running on personal hardware, background agents handling long-running tasks spanning hours, and remote agents executing in cloud sandboxes — all of these became not just possible but *normal*.

The numbers tell the story better than I can:

- [**41% of all code**](https://aiforcode.io/stats) is now AI-generated industry-wide
- [**GitHub Copilot**](https://techcrunch.com/2025/07/30/github-copilot-crosses-20-million-all-time-users/) hit 20 million users, growing 4x year-over-year
- [**Cursor**](https://www.businesswire.com/news/home/20251113939996/en/Cursor-Secures-2.3-Billion-Series-D-Financing-at-29.3-Billion-Valuation-to-Redefine-How-Software-is-Written) went from startup to $29.3 billion valuation, reaching $1 billion ARR in just 16 months — the fastest SaaS growth in history
- [**Claude Code**](https://www.anthropic.com/news/anthropic-acquires-bun-as-claude-code-reaches-usd1b-milestone) hit $1 billion run-rate revenue in 6 months after general availability
- [**84% of developers**](https://survey.stackoverflow.co/2025/ai) now use or plan to use AI coding tools

[Microsoft CEO Satya Nadella](https://techcrunch.com/2025/04/29/microsoft-ceo-says-up-to-30-of-the-companys-code-was-written-by-ai/) revealed that 20-30% of Microsoft's code is now AI-generated. [Google's Sundar Pichai](https://analyticsindiamag.com/ai-news-updates/sundar-pichai-says-over-30-of-code-at-google-now-ai-generated/) said the same for Google at 30%+. And here's the wild part — [Anthropic's Dario Amodei](https://fortune.com/2025/12/02/how-anthropics-safety-first-approach-won-over-big-business-and-how-its-own-engineers-are-using-its-claude-ai/) claimed at Dreamforce that "70, 80, 90%" of code at Anthropic is now written by Claude — though he acknowledged it varies by team.

We've crossed a threshold where AI isn't just helping us code — it's building the AI that helps us code.

## MCP: The USB-C Moment for AI

If there was one infrastructure development that defined 2025, it was the Model Context Protocol. Anthropic's MCP became what everyone started calling "the USB-C for AI" — a universal interface for connecting AI systems with external data sources and tools.

Before MCP, every AI-tool integration was a custom job. Now we have a standard. [MCP server downloads](https://www.mcpevals.io/blog/mcp-statistics) grew from around 100,000 in November 2024 to over 8 million by April 2025. OpenAI adopted it. Microsoft embraced it. Google, AWS, Cursor, GitHub — everyone got on board.

By December, the Agentic AI Foundation launched under the Linux Foundation, co-founded by Anthropic, Block, and OpenAI, unifying MCP and related standards. Jensen Huang declared: "The work on MCP has completely revolutionized the AI landscape."

Google's A2A Protocol (Agent2Agent) emerged alongside MCP, addressing how agents communicate with each other rather than just with tools. Together, these protocols are laying the foundation for a world where AI agents can seamlessly collaborate — across vendors, across platforms, across organizations.

## What This Means for 2026: Enter AMOS

This brings me to one of my major goals for 2026: building **AMOS** — an Agent Management and Orchestration System.

The real opportunity I see isn't just deploying agents — it's orchestrating them at organization level:

- **Vulnerability management** — agents that automatically triage CVEs, assess exploitability, and generate remediation PRs
- **Dependency management** — automated updates, security patches, license compliance across hundreds of repositories
- **Security review** — code review agents that catch issues before they reach production
- **Incident response** — automated triage, correlation, and runbook execution that reduces MTTR by 40%+
- **Anomaly detection** — system monitoring that doesn't just alert but investigates and proposes fixes
- **Compliance automation** — evidence collection and control mapping that turns months into days

NVIDIA demonstrated a 9.3x speedup in CVE processing with their Agent Morpheus. Swimlane customers reduced patching time by 30%. The State of North Dakota IT automated 60% of incidents using agent orchestration.

This is where I want to take Developer Experience at work. Not just building tools — building the orchestration layer that makes hundreds of repositories manageable by design.

## My First Subscription in Three Years

Now for the personal bet I'm most excited about.

In 2026, I'm subscribing to an AI assistant service. This might sound trivial, but let me put it in context: this is **my first paid subscription** for anything in three years. I've restructured my entire personal infrastructure around this — my notes, my homelab, my task management — all designed for 24/7 AI agent support.

This isn't just about productivity. It's about having a thinking partner available anytime, from anywhere, for everything from side projects to family finance budgeting, personal growth to family medicine questions, activity planning and more. A virtual assistant that knows my context, remembers our conversations, and can actually *do things* on my behalf.

The technology finally caught up to the promise. Background agents can run tasks for hours. MCP enables connections to my actual tools and data. The models are good enough that I trust them with real decisions.

I'm betting big on this. Let's see if it pays off.

## Looking Forward: 2026 Goals

Beyond AMOS and my AI assistant experiment, I'm committing to three things:

**Family quality time.** All the productivity gains in the world mean nothing if I'm not present for the people who matter most. More dedicated time, fewer distractions, better presence.

**Engineering efficiency through custom AI tooling.** My goal is to make 2026 the year our developer experience becomes genuinely exceptional — not through more process, but through smarter automation. If I can give our engineers back even one hour per day, that's a win worth fighting for.

**Reading.** Minimum 12 books, targeting 20. Topics: finance, personal growth, parenting. I've let this habit slip, and it's time to rebuild it. Books remain the highest-bandwidth way to absorb deep expertise — no AI has replaced that yet.

## Happy 2026

We're entering a year where the question isn't whether to use AI agents — it's how to orchestrate them effectively. The tools are ready. The protocols are standardizing. The only remaining variable is us.

[GitHub CEO Thomas Dohmke](https://yourstory.com/ai-story/github-ceo-embrace-ai-future-coding-2025) put it bluntly: "The developer of the future is not a code-typist. They are the creative director of code."

I'd add: the engineer of the future isn't just building systems. They're orchestrating agents that build systems. And the parent, partner, and human of the future? Still needs to show up, be present, and do the work that no AI can do for them.

Here's to a 2026 of meaningful work, intentional presence, and maybe — just maybe — actually hitting that one-post-per-month goal.

Happy New Year :)
