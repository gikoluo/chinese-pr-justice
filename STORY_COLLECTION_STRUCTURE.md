# Story Collection Structure

Use this structure when collecting stories from affected applicants. Each story can be added to the website using these fields.

---

## Required fields

| Field | Description | Example |
|-------|-------------|--------|
| **Delayed months** | Number of months waiting for IRCC (security screening / PR). *Main campaigning point.* | `40`, `28`, `36` |
| **Name / display** | How to show the person: full name, initials only, or "Anonymous". *Not shown on card; used only if you need to contact.* | `Chunhui Luo`, `C.L.`, `Anonymous` |
| **Residency city** | City and province where the applicant lives. *Shown on the story card.* | `Vancouver, BC`, `Waterloo, ON` |
| **Immigration Program** | Program or stream they applied under. | `BC PNP`, `CEC`, `FSW`, `Provincial Nominee`, `AINP`, `OINP`, etc. |
| **Teaser** | Short summary (1–3 sentences) shown on the card before "Read full story". | *"I applied for PR through BC PNP over 3 years ago. Everything passed—only security screening remains..."* |
| **Full story** | Full narrative: situation, impact on family/career/finances, and what they want the government to know. Can include a short quote. | Paragraphs + optional quote |

---

## Optional but useful

| Field | Description | Example |
|-------|-------------|--------|
| **Timeline** | Key dates: applied, still waiting, next expected update. | `Applied 2022 → Still waiting 2026 → Next MP update July 2026` |
| **Quote** | One memorable sentence in quotation marks for emphasis. | *"We followed every rule. Yet we're treated like we don't deserve basic fairness."* |
| **Occupation** | Job or stream (e.g. PNP, CEC). | `Software Developer`, `BC PNP Applicant` |
| **Contact** | Email or WeChat if they’re okay being contacted (keep private, do not publish without consent). | For follow-up only |

---

## Suggested form (for your use when collecting)

You can send this to people by email or WeChat and ask them to fill it out:

```
--- STORY SUBMISSION ---

1. How many MONTHS have you been waiting (for security screening / PR)?
   [  ] months

2. How should we identify you on the website?
   [ ] Full name: _______________
   [ ] Initials only: _______________
   [ ] Anonymous

3. Residency city (e.g. Vancouver, BC):
   _______________________________________________

4. Immigration Program (e.g. BC PNP, CEC, FSW, Provincial Nominee, AINP, OINP):
   _______________________________________________

5. Occupation or stream (optional, e.g. "Software Developer", "BC PNP"):
   _______________________________________________

6. SHORT summary (2–4 sentences). This will appear on the story card before "Read full story":
   _______________________________________________
   _______________________________________________
   _______________________________________________

7. FULL story (as much detail as you’re comfortable sharing: your situation, impact on family/career/finances, what you want the government to know):
   _______________________________________________
   _______________________________________________
   _______________________________________________
   (continue as needed)

8. Optional: One short quote (a sentence you’d like highlighted in your story):
   "_______________________________________________"

9. Optional: Timeline (e.g. Applied 20XX → Still waiting 20XX → Next update):
   _______________________________________________

10. May we contact you for follow-up? (email or WeChat – we will NOT publish this)
   [ ] Yes: _______________
   [ ] No
```

---

## Data shape (for future website implementation)

When you implement a form or backend, each story can be stored like this:

```json
{
  "delayMonths": 40,
  "initials": "C.L.",
  "residencyCity": "Vancouver, BC",
  "immigrationProgram": "BC PNP",
  "occupation": "BC PNP Applicant",
  "teaser": "I applied for PR through BC PNP over 3 years ago...",
  "fullStory": "<p>...</p> or plain text",
  "quote": "We followed every rule...",
  "timeline": "Applied 2022 → Still waiting 2026",
  "contactOptional": "private, not for display"
}
```

Note: The card shows **Immigration Program** (as title), **Residency city**, and **initials** only—no personal name.

---

## Filled example (one story in the structure)

| Field | Value |
|-------|--------|
| **Delayed months** | 40 |
| **Initials** | C.L. |
| **Residency city** | Vancouver, BC |
| **Immigration Program** | BC PNP |
| **Occupation** | BC PNP Applicant |
| **Teaser** | I applied for PR through BC PNP over 3 years ago. Everything passed—eligibility, criminality, medical. Only security screening remains. My file has a pattern of missed deadlines documented in my CBSA notes. |
| **Full story** | I applied for PR through BC PNP over 3 years ago. Everything passed - eligibility, criminality, medical. Only security screening remains. My file has a pattern of missed deadlines documented in my CBSA notes. Every "due date" IRCC sets gets ignored. The impact on my family: My son is in Grade 11, applying to universities next year. Without PR, he'll pay international tuition - $40,000-60,000 per year instead of $8,000-15,000. That's a $130,000-180,000 difference for his degree. UBC just repealed domestic tuition for work permit holders in May 2025. Our work permits don't help anymore. PR is the ONLY solution. My work permit expires October 2026. If PR isn't approved, my entire family may be forced to leave Canada - the place my son calls home, where he's built his life. |
| **Quote** | "We followed every rule. We did everything right. Yet we're treated like we don't deserve basic fairness. My son's future is being destroyed by bureaucratic delays." |
| **Timeline** | Applied 2022 → Still waiting 2026 → Next MP update expected July 2026 |

---

## Checklist before publishing a story

- [ ] Delayed months confirmed
- [ ] Immigration Program and residency city recorded
- [ ] Consent to publish (name/initials/anonymous and location)
- [ ] Teaser and full story reviewed
- [ ] No sensitive personal details (e.g. application number, UCI) in the text
