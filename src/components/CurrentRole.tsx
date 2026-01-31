import { FaMicrosoft } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronHeader } from './ui/chevron-header';

const CurrentRole = () => {
  const currentProjects = [
    {
      name: 'Azure SRE Agent',
      description: 'AI-powered site reliability engineering',
      accentColor: '#E63946', // red
    },
    {
      name: 'Azure Container Apps',
      description: 'Serverless container platform',
      accentColor: '#2A9D8F', // green
    },
    {
      name: 'Azure App Service (Networking)',
      description: 'Cloud hosting networking features',
      accentColor: '#00B4D8', // cyan
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
                { text: 'CURRENT', color: '#F4A261' },
                { text: 'ROLE', color: '#E9C46A' },
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentProjects.map((project, index) => (
                <Card
                  key={index}
                  className="border dark:border-arc-cyan/20 dark:hover:border-arc-cyan/50 transition-all duration-300 overflow-hidden group"
                >
                  {/* Colored top accent for each project */}
                  <div
                    className="h-1 transition-all duration-300 group-hover:h-1.5"
                    style={{
                      backgroundColor: project.accentColor,
                      boxShadow: `0 0 10px ${project.accentColor}50`,
                    }}
                  />
                  <CardContent className="pt-4 text-center">
                    <p className="font-bold mb-2">{project.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentRole;
