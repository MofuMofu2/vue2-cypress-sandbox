import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("初期状態", () => {
  const wrapper = shallowMount(TodoList);
  it("一行表示される", () => {
    expect(wrapper.findAll("tr").length).toBe(1);
  });
  it("左端はチェックボックス表示 チェック：OFF", () => {
    const left = wrapper.findAll("td").at(0);
    expect(left.attributes().type).toBe("checkbox");
    expect(left.attributes().checked).toBe(false);
  });
  it("中央は空のフォーム", () => {
    const central = wrapper.findAll("td").at(1);
    expect(central.attributes().type).toBe("text");
    expect(central.attributes().value).toBe("");
  });
  it("右端は削除ボタン", () => {
    const right = wrapper.findAll("td").at(2);
    expect(right.attributes().id).toBe("delete-icon");
  });
});
