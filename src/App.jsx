import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <First />
      <Second />
    </>
  );
}
function First() {
  return (
    <>
    <h1>Souptik bej</h1>
      <h1>
        INDIAN INSTITUTE of CHEMICAL ENGINEERS ,ANNAMALAI REGIONAL CENTRE <br />
        at
      </h1>
      <h3>DST-FIST Sponsored</h3>
      <h3>Deparment of chemical Engineering</h3>
      <h3>
        Faculty of Engineering & Technology,Annamalai University,
        Annamalainagar-608002
        <br /> Tamilnadu,India
      </h3>
    </>
  );
}
function Second() {
  return (
    <>
      <div>
        <h1>What is MERN ?</h1>
        <h2>
          MERN is a full-stack JavaScript framework used to develop modern web
          applications. The term stands for MongoDB, Express.js, React.js, and
          Node.js:
        </h2>
        <li>
          MongoDB – a NoSQL database for flexible, document-based data storage.
        </li>
        <li>
          Express.js – a minimal and flexible Node.js web application framework.
        </li>
        <li>React.js – a JavaScript library for building user interfaces.</li>
        <li>
          Node.js – a runtime environment for JavaScript that allows you to run
          JavaScript on the server-side.
        </li>
        <h1>Features of MERN </h1>
        <h2>
          The MERN stack is a powerful full-stack JavaScript framework that
          combines MongoDB, Express.js, React.js, and Node.js to build dynamic
          web applications. It allows developers to use JavaScript for both the
          frontend and backend, ensuring faster development and seamless data
          flow through JSON.
        </h2>

        <h1>Why use MERN ?</h1>
        <h2>
          The MERN stack is widely used because it allows developers to build
          full-stack web applications using a single language — JavaScript —
          which simplifies development and reduces context switching. Its
          combination of MongoDB, Express.js, React.js, and Node.js provides a
          complete ecosystem: React creates dynamic and responsive user
          interfaces, Node and Express handle fast and scalable server-side
          logic, and MongoDB offers flexible, schema-less data storage.
        </h2>
      </div>
    </>
  );
}

export default App;
