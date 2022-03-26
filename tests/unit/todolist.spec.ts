import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("初期状態", () => {
  const wrapper = shallowMount(TodoList);
  it("一行表示される", () => {
    expect(wrapper.findAll("tr").length).toBe(1);
  });
  it("左端はチェックボックス表示 チェック：OFF", () => {
    const left = wrapper.findAll("td").at(0);
    const content = left.find("input[type='checkbox']");
    expect(content.exists()).toBe(true);
    expect(wrapper.vm.$data.completed).toBe(false);
  });
  it("中央は空のフォーム", () => {
    const central = wrapper.findAll("td").at(1);
    const content = central.find("input[type='text']");
    expect(content.exists()).toBe(true);
    expect(wrapper.vm.$data.task).toBe("");
  });
  it("右端は削除ボタン", () => {
    const right = wrapper.findAll("td").at(2);
    expect(right.find("div")).toBe(true);
  });
});
