---
publishDate: 2025-01-16T00:00:00Z
title: Unsupervised CI/CD
excerpt: Autonomous integration and deployment to production
image: ~/assets/images/posts/2025-02-16_CICD-pipelines.png
category: sasa
tags:
  - CI/CD
  - GitHub Actions
  - integration and delivery
---

## Current CI/CD state in the industry

Often times, you will hear teams or companies speaking about how they have their CI/CD pipeline setup, just to quickly discover they don't even have the delivery phase in place to begin with. At least not on an automated, continuous basis. A "modern" or "state of the art" CI/CD pipeline is nowadays still somehow considered the one where engineers can actually continuously deploy their artifacts.

This is not state of the art. It's a concept that has been around for decades. It's just that we're slowly adapting to a 20+ year old concept and are now declaring it as modern. It's like saying "our light-bulbs are modern and state of the art because they require only electricity and not lantern fuel"

## Why is it important

Is the whole buzz around CI/CD just that? A buzz? I certainly don't believe so, and having the pleasure of seeing this process evolve from manually copy-pasting a `.jar` artifact from a locally shared folder to an IBM mainframe, to having delivery to production with a single click (merge the PR), the benefits of modern pipelines are amazing. It's about getting fast feedback on your latest delivery. Every time you merge to main, you deliver some new artifact to your end customer, while at the same time eliminating the hassle for engineers to have a release cycle and hoping that weekly/monthly delivery is going to go smooth.

**Summarized:**
- Extremely fast feedback on your delivery
- Reduced engineering time spent on non-product delivery

---

## Dependency upgrades - big pain point

I'm yet to encounter an engineer that loves maintaining and upgrading their project dependencies. Yet, engineers are always complaining about legacy and unmaintained projects. 

There is no excuse to have projects with out-of-date dependencies today with great products on the market like [Renovate](https://docs.renovatebot.com/) or [Dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide).

### Automating dependency upgrades
Use the tools available today to proactively create PRs to upgrade dependencies by creating a pull request, running through your CI pipeline and validating if it's safe to upgrade (quality of your tests heavily impacts the meaning of "safe to upgrade"). Both Renovate and Dependabot offer grouping so my advice is to have a vast variety of groups.

This will result in a lot of pull requests being created, but you shouldn't care. 90% of the time, you should not interact with such pull requests at all, so why would you care how many are created?

Some upgrades will require additional help, but this should be a small percentage of pull requests if done properly. Most of them will be:
- Created without you doing anything
- Tested without you doing anything
- Merged without you doing anything
- Deployed without you doing anything

You can spot the "without you doing anything" pattern hopefully by now.

## Unsupervised CI/CD

So imagine you have some dependency upgrades bot running 24/7/365. It will create new pull requests and rebase old ones. Then you allow the bot to merge if all required checks have passed (linting, building the project, running tests, licenses scanning, etc.).

Since the bot can create and update pull requests any time of any day, you embrace the concept of "letting it go wild" and that you will have new commits to main branch done **without any human intervention or control**. 

This sounds scary but give it a try. Once you experience the "aha moment" realizing your project is always up-to-date with little to no effort, it becomes kinda amazing. 

Since the bot does everything on its own, it will also merge the PR on its own, and that's when your CD pipeline kicks in to deliver a new artifact to production environment.

**Lifecycle looks like this:**

New dependency -> PR opened -> CI pipeline passes -> PR merged -> CD pipeline -> Deploy to production

### Congrats

You have just witnessed the first example of an unsupervised CI/CD with a new version of your application running on production with absolutely zero human intervention.

All of a sudden your application sees a major increase in number of deployments to production. Eventually, you start to trust your tests and realize how cool it is that you have no control over when a new version is deployed. Might be on a Sunday at 3:00 in the morning.

Embrace delegating this to a bot, rather than having a human do it. In the end, there is no difference between a human doing these changes or a bot. Both will bump the version and run the tests (hence the CI pipeline) and if the tests are passing, PR will be merged. So why even include a human factor here when we can delegate this boring work to a machine?

### Is it perfect

Nothing is perfect. Incidents can still happen, and probably will happen. But would the outcome be any different if a human spent time on upgrading that one library that caused the incident? If you have bad tests, how do you plan to catch the breaking change exactly?

So if the outcome would be the same, why even spend time on something as boring as dependency upgrades? Don't we all have more interesting problems to solve? :) 

Nothing is perfect. Every solution has its pros and cons. Be pragmatic and realize you should optimize for the most common use-cases, NOT for all use cases as these include edge cases also. If something is an edge-case, rethink if optimizing for it is the pragmatic thing to do.
