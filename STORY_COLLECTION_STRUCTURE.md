# Story Collection Structure

Use this structure when collecting stories from affected applicants. Each story can be added to the website using these fields.

---

## Required fields

| Field | Description | Example |
|-------|-------------|--------|
| **Delayed months** | Number of months waiting for IRCC (security screening / PR). *Main campaigning point.* | `40`, `28`, `36` |
| **Name / display** | How to show the person: full name, initials only, or "Anonymous". | `Chunhui Luo`, `C.L.`, `Anonymous` |
| **Location** | City, province, or region (and optionally occupation for context). | `BC PNP Applicant, BC`, `Software Developer, Waterloo` |
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

3. Location (e.g. city, province, or "Province PNP, Province"):
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
  "displayName": "Chunhui Luo",
  "initials": "C.L.",
  "location": "BC PNP Applicant, BC",
  "immigrationProgram": "BC PNP",
  "occupation": "BC PNP Applicant",
  "teaser": "I applied for PR through BC PNP over 3 years ago...",
  "fullStory": "<p>...</p> or plain text",
  "quote": "We followed every rule...",
  "timeline": "Applied 2022 → Still waiting 2026",
  "contactOptional": "private, not for display"
}
```

---

## Checklist before publishing a story

- [ ] Delayed months confirmed
- [ ] Immigration Program and location recorded
- [ ] Consent to publish (name/initials/anonymous and location)
- [ ] Teaser and full story reviewed
- [ ] No sensitive personal details (e.g. application number, UCI) in the text
