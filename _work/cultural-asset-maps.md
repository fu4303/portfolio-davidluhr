---
layout: default
title: Cultural Asset Maps
description:
order: 3
type: professional
image-top: cams-mockup-1.png
image-bottom: cams-mockup-2.png
highlight: cyan
skills:
 - UX Design
 - Front-End Development
 - Branding
---

# Cultural Asset Maps

## Demonstrating economic impact in the creative community.

## Skills used
{% for skill in page.skills %}
  - {{ skill }}
{% endfor %}

## Problem
Westminster College’s Arts Administration program was seeking to better connect its students with the local arts organization community and generate meaningful work for the industry. The program director had a vision to demonstrate the collective economic impact of local organizations to help secure future development funding for non-profits continuously under threat from federal budget cuts. To help gain support from the community, the program needed a prototype cultural asset mapping website to sell the vision of collecting impact data and visually showing the strong presence of the arts in the Salt Lake valley.

## Audience
The prototype website’s primary audiences was local arts administrators who would be attending an annual conference centered on strengthening the community and developing funding for future programming.

## Constraints
As an academic program for a non-profit college, which needed a prototype website to pitch an idea to fellow non-profits, it goes without saying that this project was supported purely my donated time. Following the non-existent budget, the project required free technologies and services to develop the MVP.

## Design Process
I began the project by first developing the project’s branding. To truly sell the vision of this effort, the prototype needed a full, professional branding identity to increase the likelihood of creating a formal organization to support the project in the future.

The logo design for Cultural Asset Maps plays on the map motif and also contains the letterforms of C-A-M. The visual language of the site is minimalist and the color palette limited to allow the multi-color dots of the interactive map to have the most affordance.

The web design followed my usual process of hand sketching and medium/high fidelity mockups. A central focus of the UI is the cultural asset map itself, so any navigation needed to be easily collapsible by user, particularly on mobile, to make room for the map information.

Although beyond the scope of the live code prototype, I also developed visual mocks of economic impact data collection by the program’s students to further sell the project vision when the idea was pitched by the students at local conferences.

## Development Process
The code prototype leveraged free and adaptable technologies to deliver an MVP that only required my volunteered time. I selected CartoDB as the mapping service of choice, thanks to its customizable theming, ease of data entry, and simple API options.

The prototype was developed using Pug.JS, SASS, and Gulp.JS to support the front-end development, and it’s code is managed in a dedicated Cultural Asset Maps GitHub repo and account. Furthermore, the prototype itself is hosted on GitHub pages.

## Results
The Arts Administration program students pitched the project’s vision with the prototype site and data reporting screens to local arts organization conferences in the spring of 2016. Their presentations garnered much excitement from the local community, particularly from existing economic development organizations. The project is currently being assessed for future support from community members and opportunities for funding, with an ultimate vision to gradually expand scope to a state and then national level.

## Retrospective
Non-profits and community projects face many challenges with getting support. Often, the stakeholders have little-to-no resources, and rely on support from passionate contributors. These constraints really pushed me to hone in on the true MVP goal of this project, which struck a great balance between just enough functionality to sell the project vision without dedicating too much development to a project with an unknown future.
