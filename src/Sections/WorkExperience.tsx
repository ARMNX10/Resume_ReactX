import Section from "../Componenets/Section";
import { user, IExperience } from "../information.ts";
import moment from "moment";

function Experience({ data }: { data: IExperience }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0.25rem 0 0.25rem 0",
        }}
      >
        <h3>{data.company}</h3>
        {data.startDate ? (
          <p
            style={{
              fontStyle: "italic",
            }}
          >
            {moment(data.startDate).format("MM/YYYY")} -{" "}
            {data.present ? "Present" : moment(data.endDate).format("MM/YYYY")}{" "}
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

export default function ExperienceSection() {
  return (
    <Section title="Work Experiences">
      {user.workExperience.map((experience) => (
        <Experience data={experience} />
      ))}
    </Section>
  );
}
