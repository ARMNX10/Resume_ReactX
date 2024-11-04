import { user } from "../information.ts";

export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0.5rem 0rem 0.5rem 0rem",
      }}
    >
      <h1
        style={{
          margin: "0px",
        }}
      >
        {user.name}
      </h1>
      <p
        style={{
          margin: "0px",
        }}
      >
        <a href={user.contact.github}>
          {user.contact.github.replace("https://", "").replace("www.", "")}
        </a>{" "}
        | {user.contact.phoneNumber} |{" "}
        <a href={"mailto: " + user.contact.email}>{user.contact.email}</a> |{" "}
        <a href={user.contact.linkedin}>
          {user.contact.linkedin.replace("https://", "").replace("www.", "")}
        </a>
      </p>
    </div>
  );
}
