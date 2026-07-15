import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiDotnet, SiReact, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import CurrentRole from './CurrentRole';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { GlowHeader } from './ui/glow-header';

const AboutMe = () => {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-6 animate-in fade-in zoom-in-50 duration-500">
        <Card className="gap-0 overflow-hidden border-arc-cyan/15 bg-card/90 py-0 shadow-lg shadow-black/5 backdrop-blur-sm dark:border-arc-cyan/20 dark:bg-card/85">
          <div className="h-0.5 rainbow-border" />

          <CardContent className="p-6 sm:p-8">
            <section
              aria-labelledby="about-heading"
              className="grid items-center gap-8 md:grid-cols-[230px_1fr] lg:gap-12"
            >
              <div className="relative mx-auto">
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-arc-cyan via-arc-green to-arc-blue opacity-35 blur-sm dark:opacity-50"
                />
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/nicolas-layne-230.webp 230w, /nicolas-layne-460.webp 460w"
                    sizes="230px"
                  />
                  <img
                    className="relative h-[230px] w-[230px] rounded-full object-cover ring-2 ring-arc-cyan/30"
                    src="/nicolas-layne-460.jpg"
                    width="230"
                    height="230"
                    decoding="async"
                    fetchPriority="high"
                    alt="Nic & Kim"
                  />
                </picture>
              </div>

              <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
                <div>
                  <GlowHeader
                    as="h1"
                    id="about-heading"
                    text="NICOLAS LAYNE"
                    className="mb-2"
                  />
                  <p className="text-xl text-muted-foreground">
                    Software Engineer
                  </p>
                </div>

                <p>
                  Howdy, nice to meet ya - I&apos;m your friendly neighborhood
                  front-end-specializing software engineer 🤠! I love building
                  and learning about things with a team of equally curious and
                  passionate folks - it&apos;s really that simple!
                </p>

                <div
                  className="flex flex-wrap justify-center gap-2 md:justify-start"
                  aria-label="Technical skills"
                >
                  <Badge
                    variant="secondary"
                    className="gap-1 border border-arc-cyan/30 bg-arc-cyan/10 text-sm text-arc-cyan"
                  >
                    <SiReact className="h-4 w-4" />
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="gap-1 border border-arc-blue/30 bg-arc-blue/10 text-sm text-arc-blue dark:text-[#60A5FA]"
                  >
                    <SiTypescript className="h-4 w-4" />
                    TypeScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="gap-1 border border-arc-green/30 bg-arc-green/10 text-sm text-arc-green"
                  >
                    <TbBrandCSharp className="h-4 w-4" />
                    C#
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="gap-1 border border-[#512BD4]/30 bg-[#512BD4]/10 text-sm text-[#512BD4] dark:text-[#a78bfa]"
                  >
                    <SiDotnet className="h-4 w-4" />
                    .NET
                  </Badge>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  <Button asChild variant="outline">
                    <a
                      href="https://github.com/NicL9923"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Nicolas Layne on GitHub"
                    >
                      <FaGithub className="h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a
                      href="https://linkedin.com/in/nicolas-layne/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Nicolas Layne on LinkedIn"
                    >
                      <FaLinkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        <CurrentRole />
      </div>
    </main>
  );
};

export default AboutMe;
