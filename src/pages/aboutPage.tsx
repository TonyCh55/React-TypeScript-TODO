import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information page</h1>
      <p>
        Lorem ipsum sit ament some text somet text some text somet text some
        text somet textsome text somet text some text somet text some text somet
        textsomesome text somet text some text somet text
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to task list
      </button>
    </>
  );
};
