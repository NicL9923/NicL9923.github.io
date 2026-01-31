import { FaMicrosoft } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronHeader } from './ui/chevron-header';
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
      description: 'Cloud hosting networking features',
      accentColor: ArcColors.yellow,
      accomplishments: [
        { title: 'Virtual Network Integration UX', completed: true },
        { title: 'Private Endpoint Configuration', completed: true },
        { title: 'Access Restrictions Redesign', completed: true },
        { title: 'Hybrid Connections Management', completed: true },
      ],
    },
    {
      name: 'Azure App Service UX',
      description: 'Cloud hosting networking features',
      accentColor: ArcColors.cyan,
      accomplishments: [
        { title: 'Virtual Network Integration UX', completed: true },
        { title: 'Private Endpoint Configuration', completed: true },
        { title: 'Access Restrictions Redesign', completed: true },
        { title: 'Hybrid Connections Management', completed: true },
      ],
    },
    {
      name: 'Azure Container Apps',
      description: 'Serverless container platform',
      accentColor: ArcColors.green,
      accomplishments: [
        { title: 'Container App Environment Setup', completed: true },
        { title: 'Revision Management UI', completed: true },
        { title: 'Scaling Rules Configuration', completed: true },
        { title: 'Dapr Integration Panel', completed: true },
      ],
    },
    {
      name: 'Azure SRE Agent',
      description: 'AI-powered site reliability engineering',
      accentColor: ArcColors.red,
      accomplishments: [
        { title: 'Agent Chat Interface', completed: true },
        { title: 'Diagnostic Insights Panel', completed: true },
        { title: 'Automated Remediation Actions', completed: true },
        { title: 'Incident Timeline View', completed: true },
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
            <ChevronHeader
              segments={[
                { text: 'CURRENT', color: ArcColors.orange },
                { text: 'ROLE', color: ArcColors.yellow },
              ]}
            />
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
            <h4 className="text-lg font-semibold mb-3 text-center dark:glow-text-cyan">
              Major projects
            </h4>

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
