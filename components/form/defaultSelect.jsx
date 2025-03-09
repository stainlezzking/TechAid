const DefaultSelect = ({ options, ...props }) => {
  return (
    <select {...props} className="border border-black p-[5px] rounded-xl">
      {options.map(({ value, title }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
};

export default DefaultSelect;
