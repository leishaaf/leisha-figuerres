// 80 stars at random spots. Created once, outside the component,
// so they don't jump around every time React redraws.
const stars = Array.from({ length: 80 }, () => ({
  left: Math.random() * 100, // % from the left
  top: Math.random() * 75, // % from the top (keep them out of the very bottom)
  size: Math.random() * 2 + 1, // 1–3px
  delay: Math.random() * 4, // so they don't all twinkle together
}));

function NightSky() {
  return (
    <div className="sky" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      <span className="shooting-star shooting-star--1" />
      <span className="shooting-star shooting-star--2" />
      <span className="shooting-star shooting-star--3" />
    </div>
  );
}

export default NightSky;
