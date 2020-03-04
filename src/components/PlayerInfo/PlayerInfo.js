import React from "react";
import "./PlayerInfo.css";

export default function PlayerInfo({
  picture,
  lastname,
  firstname,
  country,
  shortname,
  data: { rank, points, age, weight, height, last }
}) {
  const wins = last.filter(r => r === 1).length;
  const losses = last.filter(r => r !== 1).length;
  return (
    <div className="PlayerInfo">
      <div className="picture-container">
        <img className="country" src={country.picture} alt={country.code} />
        <span className="shortname">{shortname}</span>
        <span className="rank">#{rank}</span>
        <img className="picture" src={picture} alt="" />
      </div>
      <div className="info">
        <div className="lastname">{lastname}</div>
        <div className="firstname">{firstname}</div>
        <div className="points">{points} points</div>
        <div className="wins-losses">
          {wins}W/{losses}L
        </div>
        <div className="other age">Age: {age}</div>
        <div className="other weight">Weight: {weight / 1000} kg</div>
        <div className="other height">
          Height: {Math.floor(height / 100)}m{height % 100}
        </div>
        <table className="last">
          <tbody>
            <tr>
              {last.map((result, i) => (
                <td key={i}>{result === 1 ? "W" : "L"}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
