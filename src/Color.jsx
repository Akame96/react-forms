export const Color = ({ color }) => {
  return (
    <ul>
      {color.map(color => (
        <li key={color.id}>
          <h4>{color.name}</h4>
        </li>
      ))}
    </ul>
  );
};
