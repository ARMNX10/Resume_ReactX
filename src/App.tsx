import "./App.css";
import Section from "./Componenets/Section";

import { source } from "./Resume";

function toComponent(line: string, key: number) {
  if (!line) return <></>;
  const start = line.match(/^([#\-$]*)\s(.*)/);
  if (!start) {
    var display = line;
    while (display.match(/\*\*([\S]*)\*\*/)) {
      display = display.replace(/\*\*([\S]*)\*\*/, " <strong>$1</strong> ");
    }
    while (display.match(/\[([^\]]*)\]\(([^\)]*)\)/)) {
      display = display.replace(
        /\[([^\]]*)\]\(([^\)]*)\)/,
        "<a href='$2'>$1</a>"
      );
    }
    return (
      <p
        key={key}
        dangerouslySetInnerHTML={{
          __html: display,
        }}
      ></p>
    );
  }
  switch (start[1]) {
    case "$":
      var display = start[2].replace(
        /\*\*([\S].*[\S])\*\*/,
        "<strong>$1</strong>"
      );
      while (display.match(/\[([^\]]*)\]\(([^\)]*)\)/)) {
        display = display.replace(
          /\[([^\]]*)\]\(([^\)]*)\)/,
          "<a href='$2'>$1</a>"
        );
      }
      return (
        <p
          key={key}
          style={{
            width: "100%",
            textAlign: "center",
          }}
          dangerouslySetInnerHTML={{
            __html: display,
          }}
        ></p>
      );
    case "#":
      return <Section>{start[2]}</Section>;
    case "##":
      const right = line.match(/^## (.*)<right>(.*)/);
      if (right)
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0.25rem 0 0.25rem 0",
            }}
          >
            <h3>{right[1]}</h3>
            <p
              style={{
                fontStyle: "italic",
              }}
            >
              {right[2]}
            </p>
          </div>
        );
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0.25rem 0 0.25rem 0",
          }}
        >
          <h3>{start[2]}</h3>
        </div>
      );
    case "$#":
      return (
        <h1
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {start[2]}
        </h1>
      );
    case "-":
      var display = start[2];
      while (display.match(/\*\*([\S]*)\*\*/)) {
        display = display.replace(/\*\*([\S]*)\*\*/, " <strong>$1</strong> ");
      }
      return (
        <li
          key={key}
          dangerouslySetInnerHTML={{
            __html: display,
          }}
        ></li>
      );
  }
  return <p key={key}>{line}</p>;
}

function parse(source: string) {
  return source.split("\n").map(toComponent);
}

function App() {
  return <div>{parse(source)}</div>;
}

export default App;
