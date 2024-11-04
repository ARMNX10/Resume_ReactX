import Section from "../Componenets/Section";
import { user, IExtra } from "../information.ts";

function Extra({ data }: { data: IExtra }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0.25rem 0 0.25rem 0",
        }}
      >
        <p>
          <strong>{data.title}: </strong>
          {data.elements.join(", ")}
        </p>
      </div>
    </>
  );
}

export default function ExtraSection() {
  return (
    <Section title="Skills & Hobbies">
      {user.extras.map((extra) => (
        <Extra data={extra} />
      ))}
    </Section>
  );
}
