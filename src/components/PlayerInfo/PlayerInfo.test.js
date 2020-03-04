import React from "react";
import { mount } from "enzyme";
import PlayerInfo from "./PlayerInfo";
import data from "../../data.json";

describe("PlayerInfo component", () => {
  const player = data.players[0];

  it("should display player's picture", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const picture = wrapper.find("img.picture");
    expect(picture).toHaveLength(1);
    expect(picture.prop("src")).toBe(player.picture);
  });

  it("should display player's last name", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const lastname = wrapper.find(".lastname");
    expect(lastname).toHaveLength(1);
    expect(lastname.text()).toBe(player.lastname);
  });

  it("should display player's first name", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const firstname = wrapper.find(".firstname");
    expect(firstname).toHaveLength(1);
    expect(firstname.text()).toBe(player.firstname);
  });

  it("should display player's country in an image", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const country = wrapper.find(".country");
    expect(country).toHaveLength(1);
    expect(country.prop("src")).toBe(player.country.picture);
  });

  it("should display player's shortname", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const shortname = wrapper.find(".shortname");
    expect(shortname).toHaveLength(1);
    expect(shortname.text()).toBe(player.shortname);
  });

  it("should display player's rank", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const rank = wrapper.find(".rank");
    expect(rank).toHaveLength(1);
    expect(rank.text()).toBe(`#${player.data.rank}`);
  });

  it("should display player's points", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const points = wrapper.find(".points");
    expect(points).toHaveLength(1);
    expect(points.text()).toBe(`${player.data.points} points`);
  });

  it("should display player's weight", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const weight = wrapper.find(".weight");
    expect(weight).toHaveLength(1);
    expect(weight.text()).toBe(`Weight: ${player.data.weight / 1000} kg`);
  });

  it("should display player's height", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const height = wrapper.find(".height");
    expect(height).toHaveLength(1);
    expect(height.text()).toBe(
      `Height: ${Math.floor(player.data.height / 100)}m${player.data.height %
        100}`
    );
  });

  it("should display player's age", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const age = wrapper.find(".age");
    expect(age).toHaveLength(1);
    expect(age.text()).toBe(`Age: ${player.data.age}`);
  });

  it("should display player's last results", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const last = wrapper.find("table.last");
    expect(last).toHaveLength(1);
    const cells = last.find("td");
    expect(cells).toHaveLength(player.data.last.length);
    cells.forEach((node, i) => {
      expect(node.text()).toBe(player.data.last[i] === 1 ? "W" : "L");
    });
  });

  it("should display player's wins/losses", () => {
    const wrapper = mount(<PlayerInfo {...player} />);
    const wl = wrapper.find(".wins-losses");
    const wins = player.data.last.filter(r => r === 1).length;
    const losses = player.data.last.filter(r => r !== 1).length;
    expect(wl).toHaveLength(1);
    expect(wl.text()).toBe(`${wins}W/${losses}L`);
  });
});
