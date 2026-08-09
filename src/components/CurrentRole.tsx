import {
  FaArrowRight,
  FaCloud,
  FaCode,
  FaEnvelope,
  FaRobot,
  FaUsers,
} from 'react-icons/fa';
import { Card, CardContent } from './ui/card';
import { ArcColors } from '../lib/colors';
import { Button } from './ui/button';

interface Capability {
  title: string;
  description: string;
  icon: typeof FaCode;
}

interface CaseStudy {
  id: string;
  name: string;
  recency?: 'Current' | 'Recent';
  context: string;
  built: string;
  impact: string;
  accentColor: string;
}

const capabilities: Capability[] = [
  {
    title: 'Front-end engineering depth',
    description:
      'Complex React systems, product architecture, interaction design, state management, accessibility, and the details that make ambitious UX dependable.',
    icon: FaCode,
  },
  {
    title: 'End-to-end cloud execution',
    description:
      'A front-end specialist who can move through authentication, APIs, platform functionality, terminal experiences, and Azure delivery when the product needs it.',
    icon: FaCloud,
  },
  {
    title: 'AI agent orchestration',
    description:
      'Agent products and engineering systems that connect models to tools, context, tests, review loops, and the humans who need to trust the result.',
    icon: FaRobot,
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: 'app-service-revamp',
    name: 'App Service UX revamp',
    recency: 'Current',
    context:
      'A product-wide UX revamp for Azure App Service. My scope is the front-end product experience—not the product backend.',
    built:
      'As a core contributor, I help design, build, and refine the UX alongside agent-driven engineering workflows. The team harness covers automated PR review, issue handling, Playwright testing and screenshot capture, nightly refactors, and test-case improvement.',
    impact:
      'Brings deep front-end product work and agent orchestration into the same engineering system, tightening how the team builds and improves the experience.',
    accentColor: ArcColors.cyan,
  },
  {
    id: 'startup-cloud-platform',
    name: 'Startup cloud platform',
    recency: 'Recent',
    context:
      'A confidential startup product with the shape of a modern cloud deployment platform.',
    built:
      'I built most of the UX, an interactive terminal UI, and meaningful backend pieces including authentication and environment-variable functionality.',
    impact:
      'Delivered a cohesive product across browser, terminal, and backend foundations—my strongest example of broad end-to-end execution.',
    accentColor: ArcColors.green,
  },
  {
    id: 'sre-agent',
    name: 'Azure SRE Agent product UX',
    recency: 'Recent',
    context:
      'An AI product for site reliability engineering, developed from before private preview.',
    built:
      'My work was primarily UX: the chat interface, connectors, incident metrics, Agent Spaces, subagent skills, and a custom portal with multi-tenant Entra/MSAL authentication. I also made a small number of backend fixes.',
    impact:
      'Turned sophisticated agent capabilities into product surfaces that operators can navigate, configure, and use.',
    accentColor: ArcColors.red,
  },
  {
    id: 'logic-apps-data-mapper',
    name: 'Azure Logic Apps Data Mapper',
    context:
      'A visual, web-based schema transformation tool with intricate mapping interactions.',
    built:
      'I worked on complex mapping and state management, custom React Flow layouting, reusable nested-tree components, standalone app maintenance, and bootstrapping the VS Code extension wrapper.',
    impact:
      'Created reusable front-end foundations for a dense visual workflow across standalone and editor-hosted experiences.',
    accentColor: ArcColors.yellow,
  },
];

const CurrentRole = () => {
  return (
    <>
      <section
        id="capabilities"
        aria-labelledby="capabilities-heading"
        className="scroll-mt-24 sm:scroll-mt-6"
      >
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">How I work</p>
          <h2 id="capabilities-heading" className="section-heading">
            Depth where it matters. Range where it helps.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="gap-4 border-arc-cyan/15 bg-card/80 p-6 backdrop-blur-sm"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-arc-cyan/10 text-arc-cyan">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="work"
        aria-labelledby="work-heading"
        className="scroll-mt-24 sm:scroll-mt-6"
      >
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Selected work</p>
          <h2 id="work-heading" className="section-heading">
            Product evidence, not a project inventory.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Four examples of front-end depth, cloud range, and AI-product
            execution.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((project) => (
            <article
              key={project.id}
              aria-labelledby={`project-${project.id}`}
              className="case-study"
            >
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1"
                style={{ backgroundColor: project.accentColor }}
              />
              <div className="flex items-start justify-between gap-4">
                <h3
                  id={`project-${project.id}`}
                  className="text-xl font-bold text-balance"
                >
                  {project.name}
                </h3>
                {project.recency ? (
                  <span className="shrink-0 rounded-full border border-arc-cyan/20 bg-arc-cyan/10 px-2.5 py-1 text-xs font-semibold text-arc-cyan">
                    {project.recency}
                  </span>
                ) : null}
              </div>

              <dl className="mt-6 grid gap-5">
                <div>
                  <dt>Context</dt>
                  <dd>{project.context}</dd>
                </div>
                <div>
                  <dt>What I built</dt>
                  <dd>{project.built}</dd>
                </div>
                <div>
                  <dt>Impact</dt>
                  <dd>{project.impact}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <Card className="mt-5 gap-0 border-arc-cyan/15 bg-card/80 py-0 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr_1fr]">
              <div>
                <p className="section-kicker">Additional Azure work</p>
                <h3 className="mt-2 text-xl font-bold">
                  Platform UX across product generations
                </h3>
              </div>
              <div>
                <h4 className="font-bold">Azure Container Apps UX</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Helped build the portal UX through its initial years,
                  including major work on Revision management, Containers, and
                  Log stream. Shared functionality across resource types such as
                  Jobs and Session Pools, with extensive experimentation and
                  flighting.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Earlier App Service UX</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Built networking experiences including the overview and VNet
                  integration, helped develop the team&apos;s Playwright
                  end-to-end testing framework, and treated documentation as
                  part of the product engineering work.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

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
            Product delivery matters. So do the tools, operational loops, and
            shared context that let a team keep delivering.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="multiplier-card">
            <FaRobot aria-hidden="true" />
            <h3>Agent-driven engineering harness</h3>
            <p>
              As a core contributor, I help shape automated PR and issue
              workflows, Playwright tests and screenshots, nightly refactors,
              and test-case improvements into a practical team system.
            </p>
          </article>
          <article className="multiplier-card">
            <FaUsers aria-hidden="true" />
            <h3>AI-enabled on-call operations</h3>
            <p>
              I set up and continue to refine our team&apos;s Azure SRE Agent
              for the on-call loop. It works across telemetry, documentation,
              code, email, and Teams messages, using context and tools to
              materially improve servicing efficiency and on-call quality of
              life.
            </p>
          </article>
          <article className="multiplier-card">
            <FaArrowRight aria-hidden="true" />
            <h3>Docs and DevEx that compound team velocity.</h3>
            <p>
              I treat documentation and developer experience as engineering
              specialties: capture the hard-won context, smooth the repeated
              path, and help the whole team move with more confidence.
            </p>
          </article>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-24 sm:scroll-mt-6"
      >
        <Card className="contact-card gap-0 overflow-hidden py-0">
          <div className="h-0.5 rainbow-border" />
          <CardContent className="flex flex-col items-start justify-between gap-6 p-6 sm:p-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="section-kicker">
                Let&apos;s build something useful
              </p>
              <h2 id="contact-heading" className="mt-2 text-3xl font-bold">
                Have a hard problem? Let&apos;s talk.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Especially if it lives where front-end systems, cloud products,
                and AI orchestration meet.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href="mailto:nicl9923@gmail.com">
                <FaEnvelope aria-hidden="true" />
                Email Nicolas
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="flex flex-col gap-2 border-t border-arc-cyan/15 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Designed and built by Nicolas Layne.</p>
        <p>Curiosity, craft, and just enough cowboy energy. 🤠</p>
      </footer>
    </>
  );
};

export default CurrentRole;
