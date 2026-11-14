import { FaArrowRight, FaRobot, FaUsers } from 'react-icons/fa';

const TeamImpact = () => (
  <section
    id="multiplier"
    aria-labelledby="multiplier-heading"
    className="scroll-mt-24 sm:scroll-mt-6"
  >
    <div className="mb-8 max-w-3xl">
      <p className="section-kicker">Team multiplier</p>
      <h2 id="multiplier-heading" className="section-heading">
        The best systems raise the team&apos;s ceiling.
      </h2>
      <p className="mt-3 text-muted-foreground">
        Product delivery matters. So do the tools, operational loops, and shared
        context that let a team keep delivering.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      <article className="multiplier-card">
        <FaRobot aria-hidden="true" />
        <h3>Agent-driven engineering harness</h3>
        <p>
          As a core contributor, I help shape automated PR and issue workflows,
          Playwright tests and screenshots, nightly refactors, and test-case
          improvements into a practical team system.
        </p>
      </article>
      <article className="multiplier-card">
        <FaUsers aria-hidden="true" />
        <h3>AI-enabled on-call operations</h3>
        <p>
          I set up and continue to refine our team&apos;s Azure SRE Agent for
          the on-call loop. It works across telemetry, documentation, code,
          email, and Teams messages, using context and tools to materially
          improve servicing efficiency and on-call quality of life.
        </p>
      </article>
      <article className="multiplier-card">
        <FaArrowRight aria-hidden="true" />
        <h3>Docs and DevEx that compound team velocity.</h3>
        <p>
          I treat documentation and developer experience as engineering
          specialties: capture the hard-won context, smooth the repeated path,
          and help the whole team move with more confidence.
        </p>
      </article>
    </div>
  </section>
);

export default TeamImpact;
