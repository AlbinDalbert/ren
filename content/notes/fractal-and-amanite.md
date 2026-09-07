---
title: "Fractal below, Amanite above"
description: "Why the knowledge engine and its editor are two projects instead of one inseparable application."
published: 2026-04-02
tags: [fractal, amanite, architecture]
---

Fractal and Amanite are easiest to understand as two layers of the same idea.

**Fractal is the engine.** It knows about folders, HTML pages, metadata, links, validation, search, and graph indexes. Its job is to make the project structure explicit and dependable.

**Amanite is the surface.** It opens those projects and provides the environment for writing, navigating, and inspecting them.

## Why separate them?

Keeping the engine apart from the editor creates a useful pressure. Fractal has to describe meaningful operations without relying on a particular interface, while Amanite has to remain a client of an understandable system rather than quietly becoming the system itself.

That boundary should make room for other possibilities: scripts, alternate editors, static output, diagnostics, and uses I have not designed yet.

It also gives each project a clearer standard. Fractal should be boring, trustworthy infrastructure. Amanite should be a thoughtful place to work. Neither one needs to impersonate the other.
