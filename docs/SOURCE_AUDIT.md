# PA 111 Source Audit & Content Coverage Matrix

**Course:** Public Administration 111: Management of Organizations  
**Instructor:** Prof. Dan Saguil (NCPAG, UP Diliman)  
**Project:** PA 111 Interactive Exam Reviewer & Academic Study Website  
**Audit Date:** October 2026 (revised 29 October 2026)  
**Status:** Best available reconstruction from the local materials. Not every reviewer section is backed by lecture evidence; gaps are listed in Section 4.

---

## 1. Source Inventory and Hierarchy of Authority

The reviewer was checked against four local source documents in `source-materials/` (text extracts in `docs/`):

| Source ID | Filename | What it actually contains |
| :--- | :--- | :--- |
| **RS1** | `PA 111-Reading Set 1 (1).docx` | The prescribed reading list for the Classical, Neo-Classical (Human Relations), and Modern Management schools. Titles only; no content. Drucker, *The Practice of Management* (1954), is its last Modern Management entry. |
| **CONS** | `PA111_Consolidated_Notes_Syllabus_Aligned.pdf` (16 pp.) | Syllabus-aligned synthesis "from the notes and lecture slides provided through October 9": the four divisions, the schools, the Systems Approach, Contingency, Chaos, the metaphors, and PIME. No Drucker, Katz & Kahn by name, Schein, Mintzberg, or Meyer & Rowan. |
| **NOTES** | `PA 111 NOTES.pdf` (32 pp.) | Dated lecture notes from Jan 22 to the March 17 introduction to Modern Theories of Management. Nothing after that date. |
| **REV** | `PA 111 EXAM REVIEWER.pdf` (23 pp.; pp. 22–23 blank) | Senior reviewer: largely the same lecture notes, plus April 14 notes on organizations as cultural and political systems, psychic prisons, and domination (p. 17), a list of authors (p. 18), and review questions (pp. 19–21). |

The only embedded images are a Gantt chart template (NOTES p. 7) and three scans of the *Classics in Management* contents page (REV p. 15). No slide deck or slide image covering the Modern School or Drucker was found in the project or elsewhere under `D:\Documents`.

### Hierarchy of Evidence Rules
1. **Scope authority:** a theorist or reading listed in **RS1** is treated as core curriculum.
2. **Structural authority:** the four-division syllabus in **CONS** governs the macro-organization of the reviewer.
3. **Classroom context:** formulations from **NOTES** and **REV** (e.g., Taylor "to drive" vs. Gantt "to teach and to lead"; Frankford Arsenal card system; Weber's 5 beliefs, 8 propositions, and 5 limits) take precedence where they exist.
4. **Scholarly integrity:** where a reviewer section goes beyond these sources (standard textbook material), it is marked as such below and is not presented as lecture evidence.

---

## 2. Coverage Matrix

Legend:
- **Authority:** `[P]` = in Reading Set 1; `[L]` = in the lecture notes or consolidated notes but not on RS1; `[E]` = editorial synthesis.
- **Evidence:** `Lecture` = substantive content in NOTES/REV/CONS; `RS1 only` = reading title only, reviewer content follows the reading or standard accounts; `Partial` = named or summarized briefly.
- **Essay ID:** questions in `src/data/questions.ts` that substantially use the topic.

### Division I — History of Administration

| Subject / Author | Source & Page | Reviewer Heading | Evidence | Essay ID |
| :--- | :--- | :--- | :--- | :--- |
| **Administration as long-standing practice** `[L]` | `CONS` p.3; `NOTES` p.1–2 | 1.1 | Lecture | `q17` |
| **Sumerians, Hammurabi, Nebuchadnezzar** `[L]` | `CONS` p.3; `NOTES` p.1 | 1.2 | Lecture | — |
| **Ancient Egypt** `[L]` | `CONS` p.3; `NOTES` p.1–2; `REV` p.1 | 1.2 | Lecture | — |
| **Sun Tzu** `[L]` | `CONS` p.3; `NOTES` p.1 | 1.2 | Lecture | — |
| **Han dynasty bureaucracy** `[L]` | `CONS` p.3; `NOTES` p.2; `REV` p.1, 19 | 1.2 | Lecture | — |
| **Greeks and Romans** `[L]` | `CONS` p.3; `NOTES` p.2–3; `REV` p.1, 19 | 1.2 | Lecture | — |
| **Micius (system vs. dexterity)** `[L]` | `CONS` p.3; `NOTES` p.2–3 | 1.2 | Lecture | `q17` |
| **Italian Renaissance** `[L]` | `CONS` p.3–4; `NOTES` p.2–3 | 1.2 | Partial (Venetian Arsenal and Pacioli details are not in the sources) | — |
| **Adam Smith** `[L]` | `CONS` p.4; `NOTES` p.3; `REV` p.19 | 1.3 | Lecture | `q17` |
| **Charles Babbage** `[P]` | `RS1`; `CONS` p.4; `NOTES` p.12–13; `REV` p.5, 19 | 1.3, A.1 | Lecture | `q17` |
| **Woodrow Wilson** `[L]` | `CONS` p.4; `NOTES` p.3 | 1.4 | Lecture | — |
| **Organization vs. management; sectors** `[L]` | `CONS` p.4 | 1.5 | Lecture | — |

### Division II — Evolution of Management Thought

#### II-A. The Classical School

| Subject / Author | Source & Page | Reviewer Heading | Evidence | Essay ID |
| :--- | :--- | :--- | :--- | :--- |
| **Captain Henry Metcalfe** `[P]` | `RS1`; `CONS` p.5; `NOTES` p.13–14; `REV` p.5–6, 18–20 | A.2 | Lecture | `q17`, `q18` |
| **Frederick W. Taylor** `[P]` | `RS1`; `CONS` p.5–6; `NOTES` p.4–5, 7–10, 16–18; `REV` p.1–4, 7, 16, 19 | A.3 | Lecture (shovel load about 21 lb; cost 7–8¢ to 3–4¢ per ton; differential rate 120%/80%) | `q2`, `q7`, `q11`, `q17`, `q19`, `q20` |
| **Henry L. Gantt** `[P]` | `RS1`; `CONS` p.6; `NOTES` p.5–6, 10–12; `REV` p.2–5, 19 | A.4 | Lecture | `q2`, `q11`, `q17`, `q20` |
| **Frank and Lillian Gilbreth** `[L]` | `NOTES` p.14–16; `REV` p.6–7, 20 | A.5 | Lecture (18 Therbligs per the lecture) | — |
| **Church & Alford** `[P]` | `RS1`; `CONS` p.6; `NOTES` p.16–17; `REV` p.7, 20 | A.6 | Lecture | `q19` |
| **Henri Fayol** `[P]` | `RS1`; `CONS` p.6–7; `NOTES` p.18–21; `REV` p.7–9, 20 | A.7 | Lecture (gangplank term not in the sources) | `q6`, `q21` |
| **Gulick & Urwick** `[P]` | `RS1`; `NOTES` p.21–22 (Urwick); `REV` p.9, 20 (Urwick) | A.8 | Urwick: Lecture. Gulick/POSDCORB: RS1 only | `q21` |
| **Mooney & Reiley** `[P]` | `RS1` | A.9 | RS1 only | — |
| **Weber and Albrow** `[P]` | `RS1`; `CONS` p.7; `NOTES` p.22–24; `REV` p.9–10, 21 | A.10 | Lecture (Mosca; 5 beliefs; 8 propositions; staff characteristics; 5 limits) | `q1`, `q3`, `q6`, `q22` |
| **Critiques of bureaucracy** (Merton, Selznick, Simon, Parsons, Bendix, Corpuz & Friedrich, Blau; Stinchcombe) `[L]` | `CONS` p.7; `NOTES` p.24 (Stinchcombe) | A.11 | Partial (named and summarized) | `q1`, `q3`, `q21`, `q22` |

#### II-B. The Neo-Classical / Human Relations School

| Subject / Author | Source & Page | Reviewer Heading | Evidence | Essay ID |
| :--- | :--- | :--- | :--- | :--- |
| **Mayo and the Hawthorne Studies** `[P]` | `RS1`; `CONS` p.8; `NOTES` p.24–25; `REV` p.10–11, 18 | B.2 | Lecture (4 phases, 7 contributions) | `q1`, `q8`, `q11` |
| **Maslow** `[P]` | `RS1`; `CONS` p.8; `NOTES` p.25; `REV` p.11, 18 | B.3 | Lecture | `q4`, `q23` |
| **Herzberg** `[P]` | `RS1`; `CONS` p.8; `NOTES` p.26–27; `REV` p.11–12 | B.4 | Lecture (KITA from the reading, not the slides) | `q4`, `q9` |
| **McGregor** `[P]` | `RS1`; `CONS` p.8; `NOTES` p.27–28; `REV` p.12 | B.5 | Partial (notes cover implications only) | `q16` |
| **Argyris** `[P]` | `RS1`; `CONS` p.8–9; `NOTES` p.28–29; `REV` p.12–13 | B.6 | Lecture | `q1` |
| **Adams** `[P]` | `RS1`; `CONS` p.9; `NOTES` p.29–31; `REV` p.13 | B.7 | Lecture | `q4`, `q12` |
| **McClelland** `[P]` | `RS1`; `NOTES` p.31; `REV` p.13 | B.8 | Lecture | `q23` |
| **Locke & Latham** `[P]` | `RS1`; `CONS` p.9; `NOTES` p.31; `REV` p.13 | B.9 | Lecture | `q16`, `q24` |
| **Alderfer** `[P]` | `RS1`; `CONS` p.9–10; `REV` p.18 (name) | B.10 | Lecture (CONS) | `q23` |
| **Skinner** `[P]` | `RS1`; `NOTES` p.31–32; `REV` p.14 | B.11 | Lecture | `q24` |
| **Vroom** `[P]` | `RS1`; `REV` p.18 (name only) | B.12 | RS1 only | `q24` |

#### II-C. Modern Management Theory (ends at the exam cutoff)

| Subject / Author | Source & Page | Reviewer Heading | Evidence | Essay ID |
| :--- | :--- | :--- | :--- | :--- |
| **Modern management; Systems Approach** `[L]` | `CONS` p.10–11; `NOTES` p.32 (introduction only) | II-C intro, C.1 | Lecture (CONS) | `q13` |
| **Katz & Kahn** `[P]` | `RS1` | C.1 | RS1 only (CONS covers systems without naming them) | `q13` |
| **Blau & Scott** `[P]` | `RS1`; `CONS` p.7 (Blau as a critic only) | C.2 | RS1 only | `q25` |
| **Schein** `[P]` | `RS1` | C.3 | RS1 only | — |
| **Mintzberg** `[P]` | `RS1` | C.4 | RS1 only | — |
| **Meyer & Rowan** `[P]` | `RS1` | C.5 | RS1 only | — |
| **Selznick** `[P]` | `RS1`; `CONS` p.7 (as a critic) | C.6 | RS1 only | `q25` |
| **Drucker: MBO and self-control** `[P]` | `RS1` | C.7 | RS1 only (see Section 3.4) | `q16` |

#### II-D. Emerging Management Perspectives — *Possible not included in the exam*

| Subject / Author | Source & Page | Reviewer Heading | Evidence | Essay ID |
| :--- | :--- | :--- | :--- | :--- |
| **Contingency Perspective** `[L]` | `CONS` p.11 (associated with Fiedler) | D.1 | Lecture (CONS) | `q14`, `q15` |
| **Chaos and Complexity Theory** `[L]` | `CONS` p.11–12 | D.2 | Lecture (CONS) | — |

### Division III — Metaphors of Organization — *Possible not included in the exam*

| Lens | Source & Page | Reviewer Heading | Evidence | Essay ID |
| :--- | :--- | :--- | :--- | :--- |
| **Metaphor as a lens; machine; organism; brain; political system** `[L]` | `CONS` p.13; `REV` p.17 (political) | 3.1–3.5 | Lecture (CONS) | `q5` |
| **Culture, psychic prisons, domination** `[L]` | `REV` p.17 (April 14 notes) | 3.6 | Partial (flux is not in the sources) | — |
| **Multi-lens diagnosis** `[E]` | `CONS` p.13 | 3.7 | Lecture (CONS) | `q5` |

Gareth Morgan is not on Reading Set 1; the metaphors come from the consolidated notes and the April 14 notes.

### Division IV — Functions of Administration — *Possible not included in the exam*

| Function | Source & Page | Reviewer Heading | Evidence | Essay ID |
| :--- | :--- | :--- | :--- | :--- |
| **Planning, implementation, monitoring, evaluation, revision** `[L]` | `CONS` p.14–15 | 4.1–4.6 | Lecture (CONS) | `q10` |
| **PIME vs. Fayol's functions** `[E]` | `CONS` p.14 | 4.7 | Editorial | — |

---

## 3. Exam Scope

### 3.1 Confirmed Exam Cutoff

The confirmed exam scope **ends at Peter F. Drucker's Management by Objectives (MBO)**, section **C.7** of the reviewer and the last Modern Management entry in Reading Set 1. This cutoff was confirmed by the user. The source order agrees with it: the lecture notes reach the Modern School on March 17, the April 14 notes move to the metaphors, and the consolidated notes place Contingency and Chaos after the Modern School.

### 3.2 Scope Status by Topic

| Topic | Section | In Exam Scope? | Badge Applied |
| :--- | :--- | :--- | :--- |
| Division I — History of Administration | 1.1–1.6 | **Yes** | No |
| II-A. The Classical School | A.1–A.12 | **Yes** | No |
| II-B. The Human Relations School | B.1–B.13 | **Yes** | No |
| II-C. Modern Management (incl. Drucker MBO) | C.1–C.8 | **Yes** (C.7 is the cutoff) | No |
| **II-D. Emerging Perspectives (Contingency and Chaos)** | D.1–D.3 | **No** | `Possible not included in the exam` |
| **Division III — Metaphors of Organization** | 3.1–3.8 | **No** | `Possible not included in the exam` |
| **Division IV — Functions of Administration (PIME)** | 4.1–4.8 | **No** | `Possible not included in the exam` |
| Division V — Essay Masterclass | 5.1–5.3 | n/a (method only) | No |

The badge appears on the Reviewer (headings and outline), the Syllabus page, the topic pages for Divisions III and IV, the essay bank, and the practice workspace.

### 3.3 Essay Bank (25 questions)

**Within the confirmed scope (21):** `q1`–`q4`, `q6`–`q9`, `q11`–`q13`, `q16`–`q25`.

**Marked `Possible not included in the exam` (4):**

| Question | Beyond-Cutoff Dependency |
| :--- | :--- |
| `q5` Multi-Metaphorical Diagnosis | Built entirely on the metaphors (Division III). |
| `q10` PIME Administrative Lifecycle | Built entirely on PIME (Division IV). |
| `q14` Contingency Perspective | Built entirely on II-D. (Phase 2 recorded this flag, but it was missing from the data; it is now set.) |
| `q15` Grand Theoretical Synthesis | Depends on Contingency Theory (II-D); reclassified from `D2A` to `D2D`. |

`q3` remains free of Contingency Theory and rests on Weber and Merton only.

**Added in this revision (`q16`–`q25`):**

| ID | Topic | Division |
| :--- | :--- | :--- |
| `q16` | Drucker's MBO and self-control (dedicated cutoff question) | II-C |
| `q17` | Division of labor → records → measurement → teaching | I |
| `q18` | Metcalfe and the science of administration | II-A |
| `q19` | Soldiering and the case against Taylor; Church & Alford | II-A |
| `q20` | Exact Taylor–Gantt distinctions with a wage comparison | II-A |
| `q21` | Fayol compared with Urwick and Gulick | II-A |
| `q22` | Albrow on Weber: Mosca, beliefs, propositions, limits | II-A |
| `q23` | Maslow, Alderfer, McClelland | II-B |
| `q24` | Goal-setting, reinforcement, expectancy | II-B |
| `q25` | Blau & Scott's *cui bono* and Selznick's co-optation | II-C |

**Corrections to existing questions:** source references were checked against the extracts and corrected (several cited pages that do not exist, such as NOTES p.34–36, or readings not on RS1, such as Morgan); `q7`'s shovel load is now about 21 lb (per the lecture), and its output and wage figures are attributed to Taylor's text; `q8` uses the lecture's seven contributions and drops unsupported figures; `q9` adds the lecture's version of Herzberg and its listed limitations; `q4` and `q12` no longer contain LaTeX that rendered as raw text.

### 3.4 Drucker/MBO Evidence and Limitations

- **Searched:** the text of all four sources and their `docs/` extracts for *Drucker*, *MBO*, *management by objectives*, *self-control*, *effectiveness*, *practice of management*, and *knowledge work*; every embedded image; and `D:\Documents` for slide decks. Two blank pages (REV p.22–23) have no content stream.
- **Found:** one mention, the Reading Set 1 entry *Drucker, P., The Practice of Management, Harper, New York, 1954*, placed last under Modern Management.
- **Not found:** any lecture note, slide, or consolidated-notes passage on Drucker or MBO. The lecture notes end at the March 17 introduction to Modern Theories; the consolidated notes (compiled through October 9) do not mention Drucker.
- **Consequence:** C.7 and `q16` follow Drucker's book and standard accounts of MBO. They are treated as in scope because the user confirmed MBO as the cutoff, but no lecture-specific emphasis, example, or wording can be confirmed. The efficiency/effectiveness distinction and the knowledge worker come from Drucker's later writing, not the 1954 reading, and C.7 says so.
- **Earlier error corrected:** the previous audit mapped Drucker to `q10`, which is the PIME question. Drucker now maps to `q16`.

---

## 4. Known Gaps

- Modern School readings other than the Systems Approach (Katz & Kahn by name, Blau & Scott, Schein, Mintzberg, Meyer & Rowan, Selznick, Drucker) have no lecture evidence in the local materials; their reviewer sections are reading-based.
- Some reviewer sections include standard textbook detail that the sources do not contain (for example, Venetian Arsenal and Pacioli, Fayol's "gangplank", Hawthorne illumination figures, Gilbreth bricklaying figures). These are not presented as lecture evidence.
- Mooney & Reiley, Schein, Mintzberg, Meyer & Rowan, the Gilbreths, and Chaos Theory have no dedicated essay question.
- No claim is made that the reviewer covers everything said in class, or that the scope boundary reflects a verbatim lecture-date cutoff.
