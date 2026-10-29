import { useEffect, useMemo, useState } from 'react';
import { marked } from 'marked';
import reviewerRaw from '../../source-materials/PA111_CONSOLIDATED_REVIEWER.md?raw';
import './Reviewer.css';

interface TocItem {
  id: string;
  text: string;
  level: number;
  outOfScope: boolean;
}

// Headings after the Drucker (MBO) cutoff carry this marker in the Markdown source.
const SCOPE_MARKER = '[Possible not included in the exam]';
const SCOPE_BADGE = '<span class="scope-badge">Possible not included in the exam</span>';

// GitHub-style slug: each whitespace character becomes a hyphen, so "I — History" -> "i--history",
// matching the anchors used by the Markdown table of contents and the quick-jump buttons.
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s/g, '-');
}

export default function Reviewer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeId, setActiveId] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Parse Table of Contents and render HTML with heading IDs
  const { html, toc } = useMemo(() => {
    const tocList: TocItem[] = [];
    const renderer = new marked.Renderer();

    renderer.heading = function ({ tokens, depth }) {
      const inlineHtml = this.parser.parseInline(tokens);
      const outOfScope = inlineHtml.includes(SCOPE_MARKER);
      const headingHtml = inlineHtml.replace(SCOPE_MARKER, '').trim();
      const cleanText = headingHtml.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
      const id = slugify(cleanText);
      if (depth <= 3) {
        tocList.push({ id, text: cleanText, level: depth, outOfScope });
      }
      return `<h${depth} id="${id}" class="heading-anchor-target">${headingHtml}${outOfScope ? ` ${SCOPE_BADGE}` : ''} <a href="#${id}" class="anchor-link" aria-label="Link to this section">#</a></h${depth}>`;
    };

    const parsedHtml = marked.parse(reviewerRaw, { renderer, async: false }) as string;
    return { html: parsedHtml, toc: tocList };
  }, []);

  // Handle hash changes and initial scroll
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveId(hash);
        }
      }, 100);
    }
  }, []);

  // Scroll spy to highlight current reading section
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('.heading-anchor-target');
      let current = '';
      headings.forEach((heading) => {
        const top = heading.getBoundingClientRect().top;
        if (top <= 140) {
          current = heading.id;
        }
      });
      if (current) {
        setActiveId(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter TOC based on search
  const filteredToc = useMemo(() => {
    if (!searchQuery.trim()) return toc;
    const q = searchQuery.toLowerCase();
    return toc.filter((item) => item.text.toLowerCase().includes(q));
  }, [toc, searchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      window.history.pushState(null, '', `#${id}`);
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="reviewer-page">
      {/* Top Banner & Quick Controls */}
      <section className="reviewer-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Canonical Reviewer (Version 2.0)</span>
            <h1>PA 111 Master Academic Reviewer</h1>
            <p className="subtitle">
              Comprehensive, syllabus-aligned study text covering the History of Administration, 
              Evolution of Management Thought, Metaphors of Organization, and Functions of Administration.
            </p>
            <p className="scope-cutoff-note">
              <strong>Exam scope:</strong> the confirmed cutoff is Peter F. Drucker&apos;s Management by Objectives (II-C.7).
              Sections after it are kept for later exams and marked{' '}
              <span className="scope-badge">Possible not included in the exam</span>
            </p>
            <div className="quick-jump-bar">
              <span className="quick-label">Jump to:</span>
              <button onClick={() => scrollToSection('division-i--history-of-administration')} className="chip-btn">
                Div I: History
              </button>
              <button onClick={() => scrollToSection('division-ii--evolution-of-management-thought')} className="chip-btn">
                Div II: Evolution
              </button>
              <button onClick={() => scrollToSection('division-iii--metaphors-of-organization')} className="chip-btn">
                Div III: Metaphors
              </button>
              <button onClick={() => scrollToSection('division-iv--functions-of-administration')} className="chip-btn">
                Div IV: Functions
              </button>
              <button onClick={() => scrollToSection('division-v--masterclass-in-situational-essay-writing')} className="chip-btn highlight">
                Div V: Essay Masterclass
              </button>
              <a href="/PA111_CONSOLIDATED_REVIEWER.md" download="PA111_CONSOLIDATED_REVIEWER.md" className="chip-btn download">
                📥 Download .md
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reviewer Layout with Sidebar & Reading Surface */}
      <div className="container reviewer-container">
        <button 
          className="mobile-toc-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-expanded={isSidebarOpen}
        >
          {isSidebarOpen ? '✕ Close Outline' : '📑 Table of Contents'}
        </button>

        {/* Sticky Table of Contents Sidebar */}
        <aside className={`reviewer-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <div className="sidebar-header">
              <h3>Course Outline</h3>
              <input
                type="text"
                placeholder="Filter sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="toc-filter-input"
              />
            </div>
            <nav className="toc-nav" aria-label="Reviewer table of contents">
              <ul className="toc-list">
                {filteredToc.map((item) => (
                  <li
                    key={item.id}
                    className={`toc-item level-${item.level} ${activeId === item.id ? 'active' : ''}`}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="toc-link"
                    >
                      {item.text}
                      {item.outOfScope && (
                        <span className="scope-badge">Possible not included in the exam</span>
                      )}
                    </button>
                  </li>
                ))}
                {filteredToc.length === 0 && (
                  <li className="no-toc-matches">No matching sections found.</li>
                )}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Editorial Reading Surface */}
        <main className="reviewer-content-surface">
          <div 
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </main>
      </div>
    </div>
  );
}
