import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

function Cv() {
  return (
    <div className="body1">
      <div className="heading">
        <h2>Curriculum vitae</h2>
      </div>
      <div className="data">
        <div className="detail_container">
          <strong> Name:</strong>Muhammad Bilal Hamid
          <br />
          <strong>Fathername:</strong>Hamid Sharif
          <br />
          <strong>Email:</strong>
          <a href="mailto:bilalhamid20@hotmail.com">Email Now!</a>
          <br />
          <strong>Mailing Address:</strong>E-96,Block-7,Gulshan-e-Iqbal,Karachi
          <br />
          <strong>University:</strong>Sir Syed University Of Engineering and
          Technology
          <br />
          <strong>Discipline:</strong>Computer Science
          <br />
          <strong>Zoom Id:</strong>
          <a href="https://zoom.us/" target="_blank">
            Bilal Hamid
          </a>
          <br />
        </div>
        <div className="info">
          <h3>Skills:-</h3>
          <ul>
            <strong> Programming Languages: -</strong>
            <li>C, C++, C#</li>
            <li>Object Oriented Programming using C#</li>
            <li>HTML, CSS ,Javascript</li>
            <li>Linux</li>
          </ul>

          <ul>
            <strong>Workdone so Far: -</strong>
            <li>Matrix Calculator</li>
            <li>Seat Resevation System</li>
            <li>Client based projects</li>
            <li>Cinema Application</li>
          </ul>

          <ul>
            <strong>Hobbies: -</strong>
            <li>Gaming</li>
            <li>Aviation Photography</li>
            <li>Cycling</li>
            <li>Table Tennis</li>
            <li>Circket</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
ReactDom.render(<Cv />, document.querySelector("#root"));
