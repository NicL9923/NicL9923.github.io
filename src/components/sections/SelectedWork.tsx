import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { cn } from '../../lib/utils';
import { Card, CardContent } from '../ui/card';

// Full class names so Tailwind generates them; each maps to a theme token.
const accentBar = {
  cyan: 'bg-arc-cyan',
  green: 'bg-arc-green',
  red: 'bg-arc-red',
  yellow: 'bg-arc-yellow',
} as const;

interface CaseStudy {
  id: string;
  name: string;
  recency?: 'Current' | 'Recent';
  context: string;
  built: string;
  impact: string;
  accent: keyof typeof accentBar;
  link?: { href: string; label: string };
}

const caseStudies: CaseStudy[] = [
  {
    id: 'app-service-revamp',
    name: 'App Service UX revamp',
    recency: 'Current',
    context:
      'A product-wide UX revamp for Azure App Service. My scope is the front-end product experience, not the product backend.',
    built:
      'As a core contributor, I help design, build, and refine the UX alongside agent-driven engineering workflows. The team harness covers automated PR review, issue handling, Playwright testing and screenshot capture, nightly refactors, and test-case improvement.',
    impact:
      'Brings deep front-end product work and agent orchestration into the same engineering system, tightening how the team builds and improves the experience.',
    accent: 'cyan',
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
      'Delivered a cohesive product across browser, terminal, and backend foundations. It is my strongest example of broad end-to-end execution.',
    accent: 'green',
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
    accent: 'red',
    link: {
      href: 'https://learn.microsoft.com/en-us/azure/sre-agent/overview',
      label: 'Read the Azure SRE Agent overview',
    },
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
    accent: 'yellow',
    link: {
      href: 'https://github.com/Azure/LogicAppsUX/commits?author=NicL9923',
      label: 'Browse my open-source Logic Apps UX commits',
    },
  },
];

const SelectedWork = () => (
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
        Four examples of front-end depth, cloud range, and AI-product execution.
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
            className={cn(
              'absolute inset-y-0 left-0 w-1',
              accentBar[project.accent]
            )}
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

          {project.link ? (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-arc-cyan underline-offset-4 hover:underline"
            >
              {project.link.label}
              <FaArrowUpRightFromSquare aria-hidden="true" className="size-3" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : null}
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
              Helped build the portal UX through its initial years, including
              major work on Revision management, Containers, and Log stream.
              Shared functionality across resource types such as Jobs and
              Session Pools, with extensive experimentation and flighting.
            </p>
          </div>
          <div>
            <h4 className="font-bold">Earlier App Service UX</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Built networking experiences including the overview and VNet
              integration, helped develop the team&apos;s Playwright end-to-end
              testing framework, and treated documentation as part of the
              product engineering work.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
);

export default SelectedWork;
