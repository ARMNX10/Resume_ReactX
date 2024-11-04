import Section from "../Componenets/Section";
import { user, IEducation } from "../information.ts";
import moment from "moment";

function Education({ data }: { data: IEducation }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0.5rem 0 0.5rem 0",
        }}
      >
        <h3>{data.college}</h3>
        <p
          style={{
            fontStyle: "italic",
          }}
        >
          {moment(data.startDate).format("MMM YYYY")} -{" "}
          {(data.expected ? "Expected " : "") +
            moment(data.endDate).format("MMM YYYY")}{" "}
        </p>
      </div>
      <p>{data.degree}</p>
    </>
  );
}

export default function EducationSection() {
  return (
    <Section title="Education">
      {user.education.map((education) => (
        <Education data={education} />
      ))}
    </Section>
  );
}
