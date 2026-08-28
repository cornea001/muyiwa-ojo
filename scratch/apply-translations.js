const fs = require('fs');

const updateTranslations = (lang) => {
  const filePath = `./messages/${lang}.json`;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // 1. Hero
  data.Hero.eyebrow = "Muyiwa Ojo for Ward 22 — Riverside South & Findlay Creek";
  
  // 5. Priorities
  data.Priorities.p1_desc = "Make Ward 22 safer for families, pedestrians, cyclists, and drivers by addressing speeding, improving road safety, enhancing street lighting, and investing in safer parks, pathways, and public spaces.";
  data.Priorities.p2_title = "Youth Empowerment & Future Opportunities";
  data.Priorities.p2_desc = "Give young people practical opportunities to build the future — through STEM and AI, arts and creativity, entrepreneurship, leadership, mentorship, skilled trades, and summer opportunities, in partnership with schools, businesses and community organizations.";
  data.Priorities.p2_quote = "Youth should not just be prepared for the future — they should be given opportunities to build it.";
  
  data.Priorities.p3_desc = "Advocate for reliable transit service and practical traffic solutions that reduce congestion, improve connectivity, and address the everyday transportation challenges residents face.";
  
  data.Priorities.p4_title = "Infrastructure That Keeps Pace With Growth";
  data.Priorities.p4_desc = "Ward 22 is growing quickly. City services and infrastructure need to grow with it — from parks and recreation to walking and cycling connections, everyday services, and stronger advocacy at City Hall.";

  // What this means (adding keys)
  data.Priorities.p1_action = "What This Means: I will work with City staff and Ottawa Police to implement traffic calming in high-risk areas, advocate for better lighting in our parks, and ensure crosswalks are safer for our children and seniors.";
  data.Priorities.p2_action = "What This Means: I will champion a Ward 22 Youth Advisory Council, establish partnerships with local businesses for mentorship and summer jobs, and advocate for community spaces that support STEM, arts, and leadership programs.";
  data.Priorities.p3_action = "What This Means: I will advocate for better OC Transpo reliability, push for solutions to traffic bottlenecks in our neighbourhoods, and ensure residents have practical commuting options.";
  data.Priorities.p4_action = "What This Means: I will demand that our ward gets its fair share of infrastructure funding, prioritize new parks and recreational facilities, and ensure essential services are in place before new developments are built.";

  // 8. 5,000 door-hanger statement
  if(data.CommunityConnection) {
    data.CommunityConnection.d4 = "Distributed 5,000 door hangers with a community survey to gather resident feedback that helped inform campaign priorities.";
    data.CommunityConnection.d1 = "5,000+ doors reached since June 2026 across Riverside South and Findlay Creek — listening before forming any platform commitments.";
    data.CommunityConnection.d5 = "Welcoming Ward 22 residents who want to help build a stronger community.";
  }

  // 10, 11. Donation and rebate
  data.DonationAppeal.rebate_title = "OTTAWA CONTRIBUTION REBATE — ELIGIBLE DONORS MAY RECEIVE A REBATE";
  data.DonationAppeal.rebate_desc = "Eligible donors may receive a City of Ottawa contribution rebate. Rebate eligibility and amounts are subject to the City of Ottawa's Contribution Rebate Program. Only individuals who normally reside in Ontario may contribute. Maximum individual contribution: $1,200. All contributions officially receipted under the Municipal Elections Act (Ontario).";
  data.DonationAppeal.r1_n = "Eligible $50 contribution: $25 rebate";

  // 13. Why I'm Running for homepage
  data.WhyRunning.quote = "Ward 22 is growing rapidly, and residents deserve a councillor who is present, practical and accountable. I have knocked on thousands of doors, listened to residents, served on the Findlay Creek Community Association Board and worked with community organizations. I will focus on: Safer streets. Better transit. Stronger opportunities for young people. Infrastructure that keeps pace with growth.";

  // Replace absolute every resident
  data.Hero.desc1 = "Your neighbour in Ward 22 — at your doors, on your streets, and listening first. Running for Ottawa City Council to make sure residents have a strong voice at City Hall.";

  // Remove 44K+
  data.Running.stat2_val = "A rapidly growing";
  data.Running.stat2_lbl = "Ward 22";

  // 19. What We're Hearing
  data.WhatWeHearing = {
    "title": "What We're Hearing at the Doors",
    "traffic_title": "Traffic & Roads",
    "traffic_desc": "Residents are raising concerns about congestion, speeding and road safety.",
    "transit_title": "Transit",
    "transit_desc": "Residents want reliable service and better connections.",
    "growth_title": "Growth & Infrastructure",
    "growth_desc": "Residents want city services and infrastructure to keep pace with development.",
    "youth_title": "Youth & Families",
    "youth_desc": "Residents want more opportunities for young people.",
    "safety_title": "Community Safety",
    "safety_desc": "Residents want safer streets, parks and pathways."
  };

  // 20. Core positioning
  data.Hero.positioning = "Not politics first. People first. I don't have all the answers. I listen first. I identify the problem. I work with residents. I find practical solutions. And I hold City Hall accountable for delivering them.";

  // Replace timeline
  data.Mission.t_aug = "Thousands of resident conversations";
  data.Mission.t_aug_title = "Engaging with our community";
  data.Mission.t_jul = "4 campaign priorities";
  data.Mission.t_jul_title = "Built from listening";
  data.Mission.t_jun = "5,000 door hangers distributed";
  data.Mission.t_jun_title = "With community surveys";
  data.Mission.t_may = "5,000+ doors reached";
  data.Mission.t_may_title = "Since June 2026";

  // Timeline events for NewsEvents
  data.NewsEvents.e1_date = "Oct 26, 2026";
  data.NewsEvents.e1_title = "Voting Day";
  data.NewsEvents.e1_desc = "Voting places will be open from 10 am to 8 pm.";
  data.NewsEvents.e2_date = "Oct 16, 2026";
  data.NewsEvents.e2_title = "Advance Voting Day";
  data.NewsEvents.e2_desc = "Voting places are open from 10 am to 8 pm.";
  data.NewsEvents.e3_date = "Oct 1 - 4, 2026";
  data.NewsEvents.e3_title = "Special Advance Voting Days";
  data.NewsEvents.e3_desc = "Voting places are open from 10 am to 8 pm.";

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${lang}.json`);
};

updateTranslations('en');
try { updateTranslations('fr'); } catch(e) { console.log('Error updating fr', e.message); }
