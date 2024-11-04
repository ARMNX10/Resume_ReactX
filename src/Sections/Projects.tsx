import Section from "../Componenets/Section";
import { user, IProject } from "../information.ts";
import moment from "moment";

function Project({ data }: { data: IProject }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0.25rem 0 0.25rem 0",
        }}
      >
        <h3>{data.title}</h3>
        {data.startDate ? (
          <p
            style={{
              fontStyle: "italic",
            }}
          >
            {moment(data.startDate).format("MMM YYYY")} -{" "}
            {moment(data.endDate).format("MMM YYYY")}{" "}
          </p>
        ) : (
          <></>
        )}
      </div>
      <p>{data.description}</p>
      <ul>
        {data.bulletPoints.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </>
  );
}

export default function ProjectSection() {
  return (
    <Section title="Projects">
      {user.projects.map((project) => (
        <Project data={project} />
      ))}
    </Section>
  );
}
