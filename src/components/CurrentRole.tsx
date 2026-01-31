import { FaMicrosoft } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CurrentRole = () => {
  const currentProjects = [
    {
      name: 'Azure SRE Agent',
      description: 'AI-powered site reliability engineering',
    },
    {
      name: 'Azure Container Apps',
      description: 'Serverless container platform',
    },
    {
      name: 'Azure App Service (Networking)',
      description: 'Cloud hosting networking features',
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <h3 className="text-xl font-semibold">Current role</h3>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <FaMicrosoft size={24} color="#00BCF2" />
              <h4 className="text-lg font-semibold">Microsoft</h4>
            </div>
            <div className="flex items-center gap-1">
              <VscAzure color="#0078D4" />
              <span className="font-semibold">Azure App Service UX</span>
            </div>
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1">
              Software Engineer II
            </Badge>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-3 text-center">
              Major projects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentProjects.map((project, index) => (
                <Card key={index} className="border">
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
