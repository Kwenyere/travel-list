export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your parking list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} item on your list and you have already packed
        ${numPacked} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
