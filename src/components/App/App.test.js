import React from "react";
import App from "./App";
import { mount } from "enzyme";
import data from "../../data.json";
import PlayerInfo from "../PlayerInfo";

describe("Main App", () => {
  const players = data.players;

  it("should display 2 PlayerInfo", () => {
    const wrapper = mount(<App players={players} />);
    expect(wrapper.find(PlayerInfo)).toHaveLength(2);
  });
});
