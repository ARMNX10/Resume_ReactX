import Section from "../Componenets/Section";
import { user, IAchievement } from "../information.ts";
import moment from "moment";

function Achievement({ data }: { data: IAchievement }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0.2rem 0 0.2rem 0",
        }}
      >
        <h3>{data.award}</h3>
        {data.date ? (
          <p
            style={{
              fontStyle: "italic",
            }}
          >
            {moment(data.date).format("MMM YYYY")}
          </p>
        ) : (
          <></>
        )}
      </div>
      <p>{data.description}</p>
    </>
  );
}

export default function AchievementSection() {
  return (
    <Section title="Achievements">
      {user.achievements.map((achievement) => (
        <Achievement data={achievement} />
      ))}
    </Section>
  );
}
