You are a expert Frontend Developer and you should help me with this tasks:

** INSTRUCTIONS **

The Task: Build a Dynamic Page Renderer using Next.js/React (App Router).

Use clean architecture to build everything.

1. The Data: Create a hardcoded data.json
file that mimics a Headless CMS response. It should contain an array of objects, e.g.,
[{ type: "hero", props: {...}}, { type: "pricing", props: {...}}]

2. The Logic: Build a PageBuilder component that iterates through this array and renders the correct component.

3. Unit Test: generate a unit test suite for the PageBuilder that tests for an "Unknown Component Type" (e.g., if the JSON asks for a slider but you don't have that component, the app should not crash).

4. Deploy your project in Docker: Add a dockerfile/docker with the required paramerts.

Create the necessary files.
