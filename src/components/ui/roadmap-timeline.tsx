interface TimelineItem {
  title: string;
  description?: string;
  completed?: boolean;
}

interface RoadmapTimelineProps {
  items: TimelineItem[];
  accentColor: string;
}

const RoadmapTimeline = ({ items, accentColor }: RoadmapTimelineProps) => {
  return (
    <ul className="relative ml-1 pl-6">
      <span
        aria-hidden="true"
        className="absolute left-[5px] top-2 bottom-2 w-0.5 rounded-full"
        style={{
          backgroundColor: accentColor,
        }}
      />

      {items.map((item) => (
        <li key={item.title} className="relative pb-4 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-6 top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300"
            style={{
              backgroundColor: item.completed ? accentColor : 'transparent',
              borderColor: accentColor,
            }}
          />

          <div className="ml-2">
            <p className="font-medium text-sm">{item.title}</p>
            {item.description && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export { RoadmapTimeline };
export type { TimelineItem };
