import { FaEnvelope } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="scroll-mt-24 sm:scroll-mt-6"
  >
    <Card className="contact-card gap-0 overflow-hidden py-0">
      <div className="h-0.5 rainbow-border" />
      <CardContent className="flex flex-col items-start justify-between gap-6 p-6 sm:p-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="section-kicker">Let&apos;s build something useful</p>
          <h2 id="contact-heading" className="mt-2 text-3xl font-bold">
            Have a hard problem? Let&apos;s talk.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Especially if it lives where front-end systems, cloud products, and
            AI orchestration meet.
          </p>
        </div>
        <Button asChild size="lg" className="shrink-0">
          <a href="mailto:nicl9923@gmail.com">
            <FaEnvelope aria-hidden="true" />
            Email Nicolas
          </a>
        </Button>
      </CardContent>
    </Card>
  </section>
);

export default Contact;
