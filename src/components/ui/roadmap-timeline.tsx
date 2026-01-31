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
    <div className="relative pl-6 ml-3">
      {/* Vertical line - centered on dots */}
      <div
        className="absolute left-[5px] top-2 bottom-2 w-0.5 rounded-full"
        style={{
          backgroundColor: `${accentColor}`,
          boxShadow: `0 0 8px ${accentColor}60`,
        }}
      />

      {items.map((item, index) => (
        <div key={index} className="relative pb-4 last:pb-0">
          {/* Dot - filled when completed */}
          <div
            className="absolute -left-6 top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300"
            style={{
              backgroundColor: item.completed ? accentColor : 'transparent',
              borderColor: accentColor,
              boxShadow: item.completed ? `0 0 10px ${accentColor}80` : 'none',
            }}
          />

          {/* Content */}
          <div className="ml-2">
            <p className="font-medium text-sm">{item.title}</p>
            {item.description && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { RoadmapTimeline };
export type { TimelineItem };
