import { FaMicrosoft } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GlowHeader } from './ui/glow-header';
import { RoadmapTimeline, TimelineItem } from './ui/roadmap-timeline';
import { ArcColors } from '../lib/colors';

interface Project {
  id: string;
  name: string;
  description: string;
  accentColor: string;
  accomplishments: TimelineItem[];
}

const currentProjects: Project[] = [
  {
    id: 'logic-apps-data-mapper',
    name: 'Azure Logic Apps - Data Mapper',
    description: 'A modern web-based schema transformation tool',
    accentColor: ArcColors.yellow,
    accomplishments: [
      {
        title: 'Complex custom mapping logic and state management',
        completed: true,
      },
      {
        title: '"Simple" custom layouting algorithm with reactflow',
        completed: true,
      },
      {
        title: 'Complex reusable components such as nested trees',
        completed: true,
      },
      {
        title:
          'Maintenance of standalone web app for dev + bootstrapping of VS Code extension wrapper',
        completed: true,
      },
    ],
  },
  {
    id: 'app-service-ux',
    name: 'Azure App Service UX',
    description: 'Azure Portal extension for App Service functionality',
    accentColor: ArcColors.cyan,
    accomplishments: [
      {
        title: 'Networking (Hub/Overview, VNet integration, etc.)',
        completed: true,
      },
      {
        title:
          'E2E testing team - helped build up framework for testing Azure Portal extension using Playwright',
        completed: true,
      },
      { title: 'Documentation - religiously maintain docs', completed: true },
      {
        title: 'Knowledge sharer, motivator, humor embracer',
        completed: true,
      },
    ],
  },
  {
    id: 'container-apps-ux',
    name: 'Azure Container Apps UX',
    description:
      'Helped build out the initial years and core functionality for the Azure Portal UX',
    accentColor: ArcColors.green,
    accomplishments: [
      {
        title:
          'Rewrite and addition of major experiences such as "Revision management", "Containers", and "Log stream"',
        completed: true,
      },
      {
        title:
          'Included multiple resource types such as "Jobs" and "Session Pools" (smart sharing of functionality)',
        completed: true,
      },
      { title: 'Heavy use of experimentation/flighting', completed: true },
    ],
  },
  {
    id: 'sre-agent',
    name: 'Azure SRE Agent',
    description:
      "Azure's Site Reliability Engineering Agent - helped build this from before private preview",
    accentColor: ArcColors.red,
    accomplishments: [
      {
        title:
          'All the initial dev goodies - unit tests and results publishing, linting, etc',
        completed: true,
      },
      {
        title: 'Helped build/maintain multiple parts of chat interface',
        completed: true,
      },
      {
        title:
          'UX for connectors, incident metrics, Agent Spaces, subagent skills, etc.',
        completed: true,
      },
      {
        title:
          'Built and launched custom portal for Azure SRE Agents and related - hooked up multi-tenant Entra/MSAL auth, ',
        completed: true,
      },
      {
        title:
          'Taking learnings to/from project to elevate team and keep up with industry knowledge/tooling/etc',
        completed: true,
      },
    ],
  },
];

const CurrentRole = () => {
  return (
    <Card className="gap-0 overflow-hidden border-arc-cyan/15 bg-card/90 py-0 shadow-lg shadow-black/5 backdrop-blur-sm dark:border-arc-cyan/20 dark:bg-card/85">
      <div className="h-0.5 rainbow-border" />

      <CardContent className="p-6 sm:p-8">
        <section aria-labelledby="current-role-heading">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center">
              <GlowHeader
                as="h2"
                id="current-role-heading"
                text="CURRENT ROLE"
                size="lg"
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <FaMicrosoft
                  size={24}
                  className="text-[#0078A3] dark:text-[#00BCF2]"
                />
                <p className="text-lg font-semibold">Microsoft</p>
              </div>
              <div className="flex items-center gap-1">
                <VscAzure className="text-[#0078D4] drop-shadow-[0_0_8px_rgba(0,120,212,0.5)]" />
                <span className="font-semibold">Azure App Service UX</span>
              </div>
              <Badge className="bg-gradient-to-r from-arc-blue to-arc-cyan px-3 py-1 text-white">
                Software Engineer II
              </Badge>
            </div>

            <div className="mt-2">
              <GlowHeader
                as="h3"
                id="major-projects-heading"
                className="text-center mb-3"
                text="Major projects"
                size="sm"
              />

              <div className="grid gap-4 lg:grid-cols-2">
                {currentProjects.map((project) => (
                  <article
                    key={project.id}
                    aria-labelledby={`project-${project.id}`}
                    className="relative overflow-hidden rounded-lg border bg-background/55 p-5 pl-6 transition-colors hover:border-arc-cyan/35 dark:bg-background/25"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-1"
                      style={{
                        backgroundColor: project.accentColor,
                      }}
                    />

                    <div className="flex h-full flex-col gap-4">
                      <div>
                        <h4 id={`project-${project.id}`} className="font-bold">
                          {project.name}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>

                      <RoadmapTimeline
                        items={project.accomplishments}
                        accentColor={project.accentColor}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default CurrentRole;
