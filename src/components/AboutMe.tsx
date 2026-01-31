import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSharp, SiReact, SiTypescript } from 'react-icons/si';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import CurrentRole from './CurrentRole';

const AboutMe = () => {
  return (
    <div className="w-full max-w-2xl px-4">
      <div className="flex flex-col gap-6 animate-in fade-in zoom-in-50 duration-500">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-evenly gap-4">
                <img
                  className="rounded-full w-[230px] h-[230px] object-cover"
                  src="./Nic&Kim.jpg"
                  alt="Nic & Kim"
                />

                <div className="flex flex-col items-center">
                  <h1 className="text-3xl font-bold">Nicolas Layne</h1>
                  <h2 className="text-xl text-muted-foreground">
                    Software Engineer
                  </h2>

                  <div className="flex gap-2 mt-2">
                    <a
                      href="https://github.com/NicL9923"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Nicolas' Github"
                      >
                        <FaGithub className="h-5 w-5" />
                      </Button>
                    </a>
                    <a
                      href="https://linkedin.com/in/nicolas-layne/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Nicolas' LinkedIn"
                        className="text-[#0A66C2] hover:text-[#0A66C2]"
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-center">
                Hey there, nice to meet ya - I&apos;m your friendly neighborhood
                front-end-specializing software engineer 🤠! I love building and
                learning about things with a team of equally curious and
                passionate folks - it&apos;s really that simple!
              </p>

              <div className="flex justify-center gap-2 flex-wrap">
                <Badge
                  variant="secondary"
                  className="text-sm gap-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100"
                >
                  <SiReact className="h-4 w-4" />
                  React
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm gap-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                >
                  <SiTypescript className="h-4 w-4" />
                  TypeScript
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm gap-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                >
                  <SiSharp className="h-4 w-4" />
                  C#
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <CurrentRole />
      </div>
    </div>
  );
};

export default AboutMe;
