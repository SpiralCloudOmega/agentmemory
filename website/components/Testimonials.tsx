import styles from "./Testimonials.module.css";

interface Testimonial {
  name: string;
  quote: string;
  href: string;
}

// Quotes are verbatim from the Product Hunt discussion thread.
// Source: https://www.producthunt.com/p/agent-memory-dev/how-do-you-found-agentmemory-so-far-happy-to-help
// Each quote links back to the comment so a reader can verify.
const ITEMS: Testimonial[] = [
  {
    name: "Peter Neyra",
    quote:
      "I started using it to help with the memories of how my product has pivoted over time. It was surprisingly accurate. Picked up on things that I moved away from, decided we'd badly done, etc. So far, so good.",
    href: "https://www.producthunt.com/p/agent-memory-dev/how-do-you-found-agentmemory-so-far-happy-to-help",
  },
  {
    name: "Alper Tayfur",
    quote:
      "Tackles one of the biggest pain points with coding agents: losing useful project context across sessions without bloating the context window. The searchable memory + visibility into what the agent remembers feels especially valuable.",
    href: "https://www.producthunt.com/p/agent-memory-dev/how-do-you-found-agentmemory-so-far-happy-to-help",
  },
  {
    name: "Pranav Prakash",
    quote:
      "Been using it for 2 weeks, and I definitely see improvements.",
    href: "https://www.producthunt.com/p/agent-memory-dev/how-do-you-found-agentmemory-so-far-happy-to-help",
  },
  {
    name: "Mia Taylor",
    quote:
      "Really like the direction so far, especially the focus on making memory actually useful for agents instead of just storing context endlessly.",
    href: "https://www.producthunt.com/p/agent-memory-dev/how-do-you-found-agentmemory-so-far-happy-to-help",
  },
  {
    name: "Thomas Hall",
    quote:
      "One thing I noticed while trying different agent frameworks is that memory often becomes just more noise over time. Agentmemory feels more intentional compared to a lot of tools in this space.",
    href: "https://www.producthunt.com/p/agent-memory-dev/how-do-you-found-agentmemory-so-far-happy-to-help",
  },
  {
    name: "Zoe Alexandra",
    quote:
      "Tried it briefly — feels clean and easy to get started with.",
    href: "https://www.producthunt.com/p/agent-memory-dev/how-do-you-found-agentmemory-so-far-happy-to-help",
  },
];

export function Testimonials() {
  return (
    <section
      className={styles.wrap}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.inner}>
        <div id="testimonials-title" className={styles.eyebrow}>
          BUILDERS USING AGENTMEMORY
        </div>
        <h2 className={styles.title}>
          IN THE <span className={styles.accent}>WILD.</span>
        </h2>
        <p className={styles.lede}>
          Quotes from the Product Hunt launch thread. Verbatim, linked back to source.
        </p>
        <div className={styles.grid}>
          {ITEMS.map((t) => (
            <a
              key={t.name}
              className={styles.card}
              href={t.href}
              target="_blank"
              rel="noopener"
              aria-label={`${t.name}'s comment on Product Hunt`}
            >
              <span className={styles.quoteMark} aria-hidden>
                &ldquo;
              </span>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.source}>Product Hunt ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
