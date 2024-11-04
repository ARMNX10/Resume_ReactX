export interface IPropSection {
  children: string;
}

export default function Section({ children }: IPropSection) {
  return (
    <div
      style={{
        margin: "0.5rem 0rem 0.5rem 0rem",
      }}
    >
      <h2
        style={{
          padding: "0.25rem 0 0.25rem 0",
          borderBottom: "1px black solid",
          margin: "0.5rem 0rem 0.5rem 0",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
