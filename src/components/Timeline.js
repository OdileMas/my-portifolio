import './Timeline.css';

// Experience list: period · role & organisation · what I did
function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item, i) => (
        <li key={`${item.org}-${item.period}`} className="timeline__item reveal" style={{ '--d': `${Math.min(i, 4) * 0.05}s` }}>
          <p className="timeline__period">
            {item.period}
            {item.current && <span className="timeline__now">Now</span>}
          </p>
          <div>
            <h3 className="timeline__role">{item.role}</h3>
            <p className="timeline__org">
              {item.org}
              {item.place && <span> · {item.place}</span>}
            </p>
          </div>
          <ul className="timeline__points">
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
