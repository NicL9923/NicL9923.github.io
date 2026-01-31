import { FaMicrosoft } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GlowHeader } from './ui/glow-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { RoadmapTimeline, TimelineItem } from './ui/roadmap-timeline';
import { ArcColors } from '../lib/colors';

interface Project {
  name: string;
  description: string;
  accentColor: string;
  accomplishments: TimelineItem[];
}

const CurrentRole = () => {
  const currentProjects: Project[] = [
    {
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

  return (
    <Card className="dark:border-glow dark:bg-card/80 backdrop-blur-sm overflow-hidden">
      {/* Top accent line */}
      <div className="h-0.5 rainbow-border" />

      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <GlowHeader text="CURRENT ROLE" size="lg" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <FaMicrosoft
                size={24}
                className="text-[#00BCF2] drop-shadow-[0_0_8px_rgba(0,188,242,0.5)]"
              />
              <h4 className="text-lg font-semibold">Microsoft</h4>
            </div>
            <div className="flex items-center gap-1">
              <VscAzure className="text-[#0078D4] drop-shadow-[0_0_8px_rgba(0,120,212,0.5)]" />
              <span className="font-semibold">Azure App Service UX</span>
            </div>
            <Badge className="bg-gradient-to-r from-arc-blue to-arc-cyan text-white px-3 py-1 shadow-[0_0_15px_rgba(0,180,216,0.3)]">
              Software Engineer II
            </Badge>
          </div>

          <div className="mt-4">
            <GlowHeader
              className="text-center mb-3"
              text="Major projects"
              size="sm"
            />

            <Accordion type="single" collapsible className="w-full space-y-2">
              {currentProjects.map((project, index) => (
                <AccordionItem
                  key={index}
                  value={`project-${index}`}
                  className="border dark:border-arc-cyan/20 rounded-lg overflow-hidden dark:hover:border-arc-cyan/40 transition-all duration-300"
                >
                  {/* Colored left accent */}
                  <div className="flex">
                    <div
                      className="w-1 shrink-0"
                      style={{
                        backgroundColor: project.accentColor,
                        boxShadow: `0 0 8px ${project.accentColor}50`,
                      }}
                    />
                    <div className="flex-1 px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-col items-start text-left">
                          <span className="font-bold">{project.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {project.description}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <RoadmapTimeline
                          items={project.accomplishments}
                          accentColor={project.accentColor}
                        />
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentRole;
