---
publishDate: 2026-06-17T00:00:00Z
title: "No AI project. Just a new hire."
excerpt: I'm speaking at WeAreDevelopers World Congress in Berlin on July 8th — 15,000 attendees, 500+ speakers. The topic is hiring virtual employees. Not AI strategy, not agentic frameworks. Hiring. Here's what twenty teams taught me.
image: ~/assets/images/posts/2026-06-17-ai-employee-at-scale.png
category: AI
tags:
  - AI
  - Leadership
  - Virtual Employee
  - Business Strategy
  - Developer Experience
---

On July 8th I'm taking the stage at [WeAreDevelopers World Congress](https://www.wearedevelopers.com/world-congress) in Berlin — Europe's largest developer conference. 15,000 attendees from over 100 countries, 500+ speakers, engineering and business leaders from NVIDIA, Amazon, Atlassian, and more. I'm there to talk about hiring virtual employees.

Not an AI strategy. Not an agentic framework. Hiring.

Every other company I talk to is planning an AI strategy. Running pilots. Forming working groups. Allocating Q3 budget for an "AI transformation initiative" that will kick off properly in Q1 next year.

I skipped all of that and started hiring.

Twenty teams later, the results are absurd, the cost would make most vendors laugh, and here's what I've learned — and why I think it's worth saying out loud at one of Europe's biggest stages.

## The trap everyone is falling into

When leadership hears "AI", they immediately think project. Discovery phase. Proof of concept. A taskforce. An integration plan. A change management workstream. Consultants who've read the Gartner report.

This is the wrong frame. And it's expensive — not just in budget, but in time and organisational energy spent on something that produces a slide deck instead of output.

The question I asked was different: what if you didn't need a project at all? What if you just... hired someone?

## Anthropic just shipped what I built six months ago

Last week Anthropic released [Claude Tag](https://support.claude.com/en/articles/15594475-what-is-claude-tag) — their answer to AI in the workplace. You tag @Claude into a Slack channel, it takes on real work, builds context across days, follows up on its own, acts under its own identity. It launches fully on August 3rd.

The direction is right. It validates everything this post is about. If one of the most well-funded AI companies in the world is shipping this, the concept of an AI that participates in your team rather than waiting to be invoked is no longer a fringe idea.

I built something like this six months ago, alone, as a side project. Here's where the approaches diverge.

**Identity.** Claude Tag is a shared @mention — one tag that any channel can use, provisioned by an admin. My virtual employees have their own Slack account, their own email address, their own GitHub account, their own Jira identity.

**Surface area.** Claude Tag works in Slack. My system works across Slack, GitHub, Jira, Google Docs, Google Sheets, meeting transcripts, the data warehouse, and customer support. It attends meetings. It opens PRs. It queries production data. The employee metaphor only holds if the system can go wherever the work is.

**LLM independence.** My system is model-agnostic. Teams can run it on the Claude Code harness, open-source models, AWS Bedrock, or self-hosted infrastructure. No vendor lock-in, no per-seat consumption billing that scales against you as adoption grows. The business chooses the cost and capability trade-off that fits them.

**Learning.** Claude Tag has channel memory — it retains context across sessions. My system goes further: it has an active feedback loop where teams continuously shape its behaviour, a self-monitoring layer that spots its own blind spots, and a knowledge base that improves automatically and asks for human approval before applying changes.

None of this is a criticism of what Anthropic shipped. Claude Tag is a well-designed product from a company with enormous resources, and it will reach teams that would never build their own system. That's a good thing.

What it tells me is that the idea I've been running in production — with real teams, across twenty domains, for six months — is the direction the industry is heading. I just got there earlier, and with a different set of constraints that pushed me toward different, and in some ways more complete, answers.

## "It can do anything." So nobody uses it.

This is the other trap. Most AI tools are sold on breadth. Infinite capability. Endless flexibility. The pitch sounds powerful until you sit down with your team and try to answer a simple question: okay, but what specifically should we use it for, and how do we connect it to what we already do?

Nobody can answer that question from a product demo. And when nobody can answer it, the tool sits unused, the ROI never materialises, and leadership concludes that AI isn't ready yet. The problem wasn't AI. The problem was buying a capability without a context.

My system works differently. Every new feature it gains is driven by the people who actually use it — across the whole organisation. Lawyers who need contract language checked against prior decisions. Marketing who want to pull together campaign data without waiting for an analyst. Platform engineers who want alert investigations that understand the specific topology of their infrastructure. Business leads who want meeting action points that reflect how their particular team makes decisions.

The roadmap isn't built by product managers guessing what enterprises want. It's built by the organisation telling the system what it needs — and the system learning to do exactly that, in the specific context it operates in.

This is how you get ROI from AI. Not by deploying something general and hoping teams figure it out. By letting the work itself define what the system becomes.

## The onboarding process is identical

When a new employee joins any of the twenty teams running my system, here's what happens: they get a Slack account, an email address, access to the tools the team uses, an invite to the standup, and a brief from their manager about what they're responsible for.

When a virtual employee joins, the process is exactly the same.

Same Slack account. Same email. Same system access. Same standup invite. Same brief.

There is no special preparation. No AI integration project. No prompt engineering workshop. No weeks of data pipeline work before it can be useful. The team adds a new colleague to their existing channels, explains what the role is, and gets back to work.

This is not a simplification. It is literally what happens.

## What it does from day one

From the moment it's onboarded, the virtual employee operates in the same spaces as the rest of the team.

It attends meetings. After the call, it reads the transcript, pulls out action points, assigns them to the right people, and posts a summary before anyone has closed their laptop. The meeting administration that quietly consumes hours of senior time every week — gone.

It works in Google Docs and Sheets alongside the team. Commenting, flagging inconsistencies, filling in data. Not as a standalone tool you export results from, but as a collaborator in the document itself.

It handles customer support. When a complaint comes in, it investigates — traces the issue, checks the relevant systems, diagnoses the root cause, and produces a brief with a recommended resolution. The support team receives context, not a raw ticket to figure out from scratch.

It queries the data warehouse. When someone needs numbers to make a decision, it pulls them, checks them, and surfaces what matters. Without a data request, without a three-day wait, without a business analyst being pulled off something else.

And it answers questions. Cross-team, cross-domain, at any hour. On a Saturday when the team that owns that system is offline. At 2 AM when something is behaving unexpectedly. Whenever someone is blocked and needs to keep moving.

## Why twenty teams onboarded, and none of them were asked to

I didn't run a rollout program. I didn't produce an internal case study and present it to department heads. I didn't have a roadmap for scaling from one team to twenty.

Every single team onboarded because someone who worked alongside the virtual employee told a colleague about it. That colleague asked to try it. It worked. They told someone else.

For anyone running a business, organic adoption inside an organisation is the signal that matters most. It means the tool is solving a real problem, not a problem someone invented to justify the tool. It means people are choosing to use it, not being asked to.

When your teams start competing to get access to something, you don't need a business case. The business case is already made.

## It gets better the same way people do — through feedback

The most consistent thing I've observed about how people grow in organisations is that they get better when they receive clear, timely feedback. Not annual reviews. Not vague comments months after the fact. Specific feedback, close to the moment, that they can actually act on.

The virtual employee improves the same way.

The mechanic is simple by design. Someone reads a response they think was wrong, or off-tone, or missed something important. They react with a 👎 and leave a note explaining what was wrong. Someone reads a response that was exactly right and reacts with a 👍. That's it. The whole interaction takes ten seconds.

Everything after that is automated. The system processes the feedback, identifies what needs to change in its knowledge base, drafts the update, and sends a notification to the relevant person: "Based on your feedback, here's what I've learned. Does this look right?" One approval. Done.

The result is a continuous improvement loop that doesn't require anyone to run it. Teams report seeing multiple visible changes in behaviour every day — not because anyone is managing the process, but because the feedback is flowing constantly and the system is acting on it immediately.

And it doesn't wait to be told what's wrong. The system monitors its own performance, identifies where it underperformed or left a gap, and surfaces those blind spots proactively. Every Monday it publishes a brief for the team — more on that below — that includes what it spotted about itself the previous week.

This is not a feature I've seen any AI vendor talk about seriously. Continuous learning is usually framed as retraining cycles and model updates. What I built is closer to how a good employee actually develops: through the daily accumulation of feedback from the people they work with, applied in near real-time, compounding over weeks into something that's noticeably better than when it started.

## The results, in terms leadership actually cares about

More than 90% of interactions are resolved without a human having to step in. That number sounds abstract until you map it onto the organisational cost of the alternative.

Every time an engineer is pulled out of deep work to answer a cross-team question, you lose that engineer for longer than the question takes to answer. Every time an on-call team member wakes up to an alert at 3 AM, you pay in recovery time, morale, and retention risk. Every time a meeting produces action points that don't get written down or followed up on, you pay in dropped commitments and repeated conversations.

The virtual employee handles the bulk of all of this. Quietly. In the background. In the same channels where the work was already happening.

The engineers on these teams are reporting something consistent: they spend more time on the work they were hired to do. That's the outcome every leader wants from a headcount investment, and most of the time it's the hardest thing to actually achieve.

## What it costs, and what that means

The entire infrastructure across twenty business domains costs around €100 a month. I mention this not to make a point about AI being cheap — infrastructure costs are not the point — but to illustrate what happens when you build a system that doesn't default to maximum compute for every interaction.

The real cost comparison is simpler: one senior engineer's time spent on interruptions, context switching, and cross-team support is worth more per month than the entire system. The return on that comparison is not close.

## It comes with governance built in

The question every C-level asks eventually is: what are the controls?

The system has hundreds of built-in security hooks that govern data access, prevent information leakage, and enforce boundaries across every interaction. Before the virtual employee can access something, read something, or act on something, it checks what it's authorised to do in that context.

This is not something that gets added later. It's the reason twenty enterprise teams feel comfortable running this across production systems, customer data, and internal tooling. The controls were designed first. The capabilities came second.

If you're evaluating any AI system for enterprise deployment, this is the question to lead with: show me the governance layer, not the demo.

## The Monday blog

This is the detail that surprises people most.

Every Monday, the virtual employee publishes a short post for the team — written as if it spent the weekend at a concert, or exploring a city. The tone is light. It's entertaining. People actually read it.

Inside the post is a real operational brief: blind spots identified from the previous week, gaps in process or documentation, patterns that suggest something worth paying attention to.

The fiction is the wrapper. The content is a standing report that would otherwise require someone's time to produce and would probably be ignored anyway because it arrived as a dry document in a shared folder nobody checks.

Engagement with the Monday brief is higher than any operational report I've seen produced by a human. That's not a coincidence. It's what happens when you design a system that treats communication as something that has to earn attention, not something that can demand it.

## What this means for leadership

The framing most companies are using — AI strategy, AI transformation, AI investment — puts the work in the wrong place. It turns an operational decision into a change programme. It adds cost, time, and risk before you've produced a single unit of value.

The frame that works is simpler: you have roles that need to be filled and work that needs to get done. Some of that work can be handled by a virtual employee who onboards the same way any other new hire does, operates in your existing tools, and costs a fraction of what you'd spend on the alternative.

You don't need a strategy to hire someone. You need a role, a manager, and an onboarding checklist.

The checklist is the same.

## Why I'm bringing this to WeAreDevelopers

[WeAreDevelopers World Congress](https://www.wearedevelopers.com/world-congress) runs July 8–10 at CityCube Berlin. It's the kind of event where the conversations happening in the hallways are as important as the ones on stage. 15,000 people who build and lead technology organisations, from 100+ countries, all in one place for three days.

The reason I wanted to speak there is simple: the people in that room are the ones being sold AI strategies right now. They're being told to form taskforces, run discovery phases, and invest in transformation programmes. Most of those programmes will underdeliver, because they're solving the wrong problem.

I want to tell a different story — one with actual numbers, actual teams, and a methodology simple enough to explain in a single sentence: hire the AI the same way you'd hire anyone else.

I'm not the loudest voice at that conference. The CTO of Amazon will be there. Speakers from NVIDIA and Atlassian and GitHub. I'm not competing with them on reach or credibility. What I have is something those voices usually don't: a system I built myself, running across twenty real teams, with results I can stand behind without a marketing team involved.

If you're at WeAreDevelopers and want to talk — find me after the session. And if you're not there but this resonates, the conversation doesn't need to wait until July.
