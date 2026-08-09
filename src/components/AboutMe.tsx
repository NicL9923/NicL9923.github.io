import { FaEnvelope, FaGithub, FaLinkedin, FaMicrosoft } from 'react-icons/fa';
import { SiDotnet, SiReact, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';
import CurrentRole from './CurrentRole';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const toolkit = [
  { label: 'React', icon: SiReact },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'C#', icon: TbBrandCSharp },
  { label: '.NET', icon: SiDotnet },
  { label: 'Azure', icon: VscAzure },
  { label: 'AI Agents', icon: null },
];

const AboutMe = () => {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-16 animate-in fade-in duration-500 sm:gap-20">
        <Card className="gap-0 overflow-hidden border-arc-cyan/15 bg-card/90 py-0 shadow-lg shadow-black/5 backdrop-blur-sm dark:border-arc-cyan/20 dark:bg-card/85">
          <div className="h-0.5 rainbow-border" />

          <CardContent className="p-6 sm:p-8 lg:p-10">
            <section
              aria-labelledby="hero-heading"
              className="grid items-center gap-8 md:grid-cols-[1fr_230px] lg:gap-12"
            >
              <div className="flex min-w-0 flex-col items-start gap-6">
                <div>
                  <p className="mb-3 font-mono text-sm font-semibold tracking-wide text-arc-cyan">
                    Howdy—I&apos;m Nicolas.
                  </p>
                  <h1
                    id="hero-heading"
                    className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
                  >
                    Front-end depth.{' '}
                    <span className="hero-accent">End-to-end execution.</span>
                  </h1>
                </div>

                <div className="max-w-2xl space-y-3 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Software engineer with deep front-end expertise, broad
                    execution range, and specialties in cloud and AI
                    orchestration.
                  </p>
                  <p className="text-base">
                    I like hard product problems, curious teammates, and
                    engineering systems that make the next problem easier.
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2" aria-label="Core toolkit">
                  {toolkit.map(({ label, icon: Icon }) => (
                    <li key={label}>
                      <Badge
                        variant="secondary"
                        className="gap-1.5 border border-arc-cyan/20 bg-background/70 px-2.5 py-1 text-xs text-foreground"
                      >
                        {Icon ? (
                          <Icon aria-hidden="true" className="size-3.5" />
                        ) : null}
                        {label}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <div className="flex w-full min-w-0 flex-wrap gap-3 sm:w-auto">
                  <Button
                    asChild
                    size="lg"
                    className="h-auto min-h-10 w-full whitespace-normal px-4 text-center sm:w-auto sm:px-6"
                  >
                    <a href="mailto:nicl9923@gmail.com">
                      <FaEnvelope aria-hidden="true" />
                      Have a hard problem? Let&apos;s talk.
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="min-w-0 flex-1 px-4 sm:flex-none sm:px-6"
                  >
                    <a
                      href="https://github.com/NicL9923"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Nicolas Layne on GitHub"
                    >
                      <FaGithub aria-hidden="true" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="min-w-0 flex-1 px-4 sm:flex-none sm:px-6"
                  >
                    <a
                      href="https://linkedin.com/in/nicolas-layne/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Nicolas Layne on LinkedIn"
                    >
                      <FaLinkedin aria-hidden="true" />
                      LinkedIn
                    </a>
                  </Button>
                </div>

                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FaMicrosoft
                    aria-hidden="true"
                    className="text-[#0078A3] dark:text-[#00BCF2]"
                  />
                  Software Engineer II at Microsoft
                </p>
              </div>

              <div className="relative order-first mx-auto md:order-last">
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
                    className="relative h-[180px] w-[180px] rounded-full object-cover ring-2 ring-arc-cyan/30 sm:h-[230px] sm:w-[230px]"
                    src="/nicolas-layne-460.jpg"
                    width="230"
                    height="230"
                    decoding="async"
                    fetchPriority="high"
                    alt="Nicolas Layne"
                  />
                </picture>
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
