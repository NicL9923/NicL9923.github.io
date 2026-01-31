import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiDotnet, SiReact, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import CurrentRole from './CurrentRole';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ChevronHeader } from './ui/chevron-header';
import { RainbowStripe } from './ui/rainbow-stripe';

const AboutMe = () => {
  return (
    <div className="w-full max-w-2xl px-4">
      <div className="flex flex-col gap-6 animate-in fade-in zoom-in-50 duration-500">
        {/* Rainbow stripe accent at top */}
        <RainbowStripe className="h-1.5 w-full rounded-full overflow-hidden" />

        <Card className="dark:border-glow dark:bg-card/80 backdrop-blur-sm overflow-hidden">
          {/* Subtle top accent line */}
          <div className="h-0.5 rainbow-border" />

          <CardContent className="pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-evenly gap-4">
                {/* Profile image with glow effect */}
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-arc-cyan via-arc-green to-arc-blue opacity-50 blur-sm dark:opacity-75" />
                  <img
                    className="relative rounded-full w-[230px] h-[230px] object-cover ring-2 ring-arc-cyan/30"
                    src="./Nic&Kim.jpg"
                    alt="Nic & Kim"
                  />
                </div>

                <div className="flex flex-col items-center">
                  {/* Chevron-style name header */}
                  <ChevronHeader
                    segments={[
                      { text: 'NICOLAS', color: '#023E8A' },
                      { text: 'LAYNE', color: '#00B4D8' },
                    ]}
                    className="mb-2"
                  />
                  <h2 className="text-xl text-muted-foreground dark:glow-text-cyan">
                    Software Engineer
                  </h2>

                  <div className="flex gap-2 mt-3">
                    <a
                      href="https://github.com/NicL9923"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Nicolas' Github"
                        className="dark:border-arc-cyan/30 dark:hover:border-arc-cyan dark:hover:bg-arc-cyan/10 transition-all duration-300"
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
                        className="text-[#0A66C2] hover:text-[#0A66C2] dark:border-arc-cyan/30 dark:hover:border-arc-cyan dark:hover:bg-arc-cyan/10 transition-all duration-300"
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-center">
                Howdy, nice to meet ya - I&apos;m your friendly neighborhood
                front-end-specializing software engineer 🤠! I love building and
                learning about things with a team of equally curious and
                passionate folks - it&apos;s really that simple!
              </p>

              {/* Skills with ARC-inspired colors */}
              <div className="flex justify-center gap-2 flex-wrap">
                <Badge
                  variant="secondary"
                  className="text-sm gap-1 bg-arc-cyan/20 text-arc-cyan border border-arc-cyan/30 dark:shadow-[0_0_10px_rgba(0,180,216,0.2)]"
                >
                  <SiReact className="h-4 w-4" />
                  React
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm gap-1 bg-arc-blue/20 text-arc-blue border border-arc-blue/30 dark:text-[#60A5FA] dark:shadow-[0_0_10px_rgba(0,119,182,0.2)]"
                >
                  <SiTypescript className="h-4 w-4" />
                  TypeScript
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm gap-1 bg-arc-green/20 text-arc-green border border-arc-green/30 dark:shadow-[0_0_10px_rgba(42,157,143,0.2)]"
                >
                  <TbBrandCSharp className="h-4 w-4" />
                  C#
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm gap-1 bg-[#512BD4]/20 text-[#512BD4] border border-[#512BD4]/30 dark:text-[#a78bfa] dark:shadow-[0_0_10px_rgba(81,43,212,0.2)]"
                >
                  <SiDotnet className="h-4 w-4" />
                  .NET
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <CurrentRole />

        {/* Bottom rainbow accent */}
        <RainbowStripe className="h-1.5 w-full rounded-full overflow-hidden" />
      </div>
    </div>
  );
};

export default AboutMe;
