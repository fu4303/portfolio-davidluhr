---
layout: default
title: Westminster College
description:
order: 1
image-top: westminster-mockup-1.png
image-bottom: westminster-mockup-2.png
highlight: thistle
---

# Westminster College Website

## A redesign of the highest degree

## Skills Used
- User Experience
- Front-End Development
- Branding
- Content Strategy
- Content Management
- Web Governance
- Style Guide
- Information Architecture
- Analytics
- SEO
- CRO

## Problem
Westminster College was suffering from declining enrollment and a confused branding identity. Symptomatic of this was the college’s website, which had grown over a decade of neglect to almost 9,000 pages of largely abandoned and broken content. Behind the content was an aging, in-house content management system with permissions for over 200 individuals. The result of this was an unpredictable information architecture based on internal organizational structure and absent oversight.

In addition to the coat bloat and lacking web governance was an insurmountable backlog of technical debt. The CSS for the site alone had over 14,000 lines of code, with an untraceable web of overwrites, <code>!important</code> flags, and extremely abusive use of specificity in its selectors.

Needless to say, the website had a compromised user experience, riddled with accessibility issues. When I inherited the Senior Web Designer position in mid-2015, the college was definitely feeling the pains of the resulting loss in reputation and usability.

## Audience
The first priority for reimagining the Westminster College website was to simply ask the organization who the website is truly for. Throughout the institution, individuals made it clear that our work is solely for the students, both prospective and current. However, when reviewing the information architecture and the messaging within, it was obvious that the college had used the website as an internal tool out of convenience to faculty and staff instead of considering our end users.

From these findings, I started the planning for the new website with the following ranking of audiences to drive all information architecture and content strategy decisions going forward:

1. Prospective students
1. Current students
1. Alumni/Donors
1. Community members
1. Faculty and staff

## Constraints
As the sole full-time staff overseeing the website, I was elated to gain the support of three backend developers whose positions were reorganized to support the website just as I was hired. With no dedicated budget for this project, we set out to eliminate existing subscriptions and services to fund any technology needs relating to the new website.

We quickly knew that we would need to depart entirely from the existing CMS and spend the majority of our time addressing the massive content bloat. As we introduced the organization to Agile/Scrum development sprints, we were given a firm deadline a full year in advance to coincide with the project launch of the school’s new brand. It was up to us to adapt Agile methodologies and prove to key stakeholders that even with a waterfall deadline, we could launch on-target.

## Content Strategy Process
The content strategy behind the new website spanned the entire duration of the project, and had the largest share of my time.

I began the discovery process by generating an accurate sitemap of the current site, which revealed only two true layers of content hierarchy: the home page, and then 255 subsites with over 8,900 pages directly below that. I reviewed our existing analytics to identify top tasks and flows to start planning the scope of new, audience-centric hubs. I also manually investigated each subsite within the CMS to find that only 2,000 of the 8,900 pages were actually functional and had content for existing programs and departments.

With 78% of the pages out of the picture, I then went through the very laborious process of auditing each of the remaining 2,000 pages to map out the page structure, pageviews, and date last modified. Armed with a ridiculous spreadsheet arsenal, I then scheduled out dozens of meetings for the coming six months to meet with every content owner across the organization. These meetings were hyper-focused on having each content owner define who their audience was, what their goals were, and then deciding which pages to keep and which were to be left behind.

Parallel to this painstaking process, I developed an entirely new information architecture for the site based off the new audience rank, and set about scoping out new audience hubs that would need to be created from scratch.

After six months of meeting with content owners, determining what to keep, and then cleaning every line of underlying markup to ensure only valid, semantic, and accessible HTML was going to be migrated, I had managed to consolidate 8,900 pages down to 450 purposeful, student-facing pages of surviving content. To top it off, I got sign-off from leadership to limit access only to the web team and introduce an open source ticketing system to field website update requests and ensure only trained professionals implemented necessary changes.

## Design Process
Mirroring the lack of content strategy and audience focus, the website presented users with an inconsistent visual experience and user interface that compromised the college’s reputation. To diagnose this issue directly, I conducted an interface inventory, following the process proposed by Brad Frost.

Faced with 20 different headings, 30 different link styles, 40 different buttons, and dozens of banner images with all ranges of color and typography, it was clear we had a branding dilution emergency, caused by a the lack of a visual style guide or proper web governance.

Determined to develop a pattern lab/living style guide, I began the design process as I always do: many, many pen-and-paper sketches, followed by medium fidelity mockups, and finally code prototypes. At every stage, the design language and UI were influenced by the school’s parallel rebranding efforts and a drive to create an immersive experience for prospective students to genuinely demonstrate the school’s values and offerings.

The overarching design process took on several full iterations as the content strategy and site development took shape. Throughout this progression, I conducted usability tests with current students to ensure any design and UI decisions were intuitive and represented the college experience they loved.

## Development Process
We quickly decided to move to an entirely new CMS and do away with the outdated, in-house solution that presented an insurmountable backlog of technical debt. We chose Progress Sitefinity as our CMS of choice to coincide with the three backend developers’ preference for MVC.NET.

As we familiarized ourselves with the new system, I set up a separate Git repository to handle all of the visual design and interaction of the website. This allowed me to take full advantage of modern front-end tools, including Pug.JS, SASS, and Gulp.JS. Abstracting these aspects of the site development would prove invaluable in the future when we brought several development environments under the same CSS and JS dependencies to unite the UX/UI for all of our web applications.

The entire website was developed with a mobile-first approach to align with our audiences’ heavy uses of phones as their preferred device. I developed the site with a SMACSS mindset, modularizing all components of the UI and design language to support the future creation of a true pattern library. I also refactored both Bootstrap and Sitefinity CSS source files to only import necessary modules and improve load times.

## Results
After of year of intensive work, weekly sprints, and hundreds of Scrum cards moved to the “Done” pile, we launched the new Westminster College on September 30, 2016, exactly on-target.

Just two days after launch, when such a dramatic shift to a new website should have been extremely disruptive, we received record conversions in our admission CRM. This early win was great validation for the project, but the true work of the site was only just beginning. We continue to introduce improvements and new features at the end of every weekly sprint, directly prioritized by our users’ needs and conversion metrics.

> Testimonial quote from Lance

Westminster College has enjoyed a 15% increase in applications across all segments for the upcoming academic year, and the website’s new user experience has driven the global average bounce rate down an average of 22% across all pages.

## Retrospective
This project was wildly successful and the overarching planning and strategy served us well without any serious hiccups. The grueling content audit and migration process was a necessary pain to address the largest issues of the old website, and introducing the organization to Agile/Scrum methodologies is starting to inspire larger teams to do the same.

Now that we only provide access to a small team of trusted content managers who all have development experience, I’m not sure we would have gone with a CMS at all if we knew we could take the web governance in this direction. As a result, we are currently investigating various combinations of static site generators (Jekyll), templating engines (Pug.JS, Handlebars.JS), and front-end frameworks (React, Angular) as possible approaches for a future, CMS-less version of the website.
