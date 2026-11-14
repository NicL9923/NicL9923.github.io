import { FaCloud, FaCode, FaRobot } from 'react-icons/fa';
import { Card } from '../ui/card';

const capabilities = [
  {
    title: 'Front-end engineering depth',
    description:
      'Complex React systems, product architecture, interaction design, state management, accessibility, and the details that make ambitious UX dependable.',
    icon: FaCode,
  },
  {
    title: 'End-to-end cloud execution',
    description:
      'A front-end specialist who can move through authentication, APIs, platform functionality, terminal experiences, and Azure delivery when the product needs it.',
    icon: FaCloud,
  },
  {
    title: 'AI agent orchestration',
    description:
      'Agent products and engineering systems that connect models to tools, context, tests, review loops, and the humans who need to trust the result.',
    icon: FaRobot,
  },
];

const Capabilities = () => (
  <section
    id="capabilities"
    aria-labelledby="capabilities-heading"
    className="scroll-mt-24 sm:scroll-mt-6"
  >
    <div className="mb-8 max-w-2xl">
      <p className="section-kicker">How I work</p>
      <h2 id="capabilities-heading" className="section-heading">
        Depth where it matters. Range where it helps.
      </h2>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {capabilities.map(({ title, description, icon: Icon }) => (
        <Card
          key={title}
          className="gap-4 border-arc-cyan/15 bg-card/80 p-6 backdrop-blur-sm"
        >
          <div className="flex size-10 items-center justify-center rounded-lg bg-arc-cyan/10 text-arc-cyan">
            <Icon aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Card>
      ))}
    </div>
  </section>
);

export default Capabilities;
