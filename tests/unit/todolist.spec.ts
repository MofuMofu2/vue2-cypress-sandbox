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
    expect(wrapper.vm.$data.tasks[0].completed).toBe(false);
  });
  it("中央は空のフォーム", () => {
    const central = wrapper.findAll("td").at(1);
    const content = central.find("input[type='text']");
    expect(content.exists()).toBe(true);
    expect(wrapper.vm.$data.tasks[0].task).toBe("");
  });
  it("右端は削除ボタン", () => {
    const right = wrapper.findAll("td").at(2);
    expect(right.find("div").exists()).toBe(true);
  });
});

describe("新しいタスクを追加する", () => {
  const wrapper = shallowMount(TodoList);
  const firstRow = wrapper.findAll("tr").at(0);
  const form = firstRow.findAll("td").at(1).find("input[type='text']");
  beforeEach(async () => {
    await form.setValue("new task");
  });
  it("フォームに値が入力できる", () => {
    expect(wrapper.vm.$data.tasks[0].task).toBe("new task");
  });
  it("Enterキー押下で空行追加される", async () => {
    await form.trigger("keyup.enter");
    expect(wrapper.findAll("tr").length).toBe(2);
    expect(wrapper.vm.$data.tasks[1].completed).toBe(false);
    expect(wrapper.vm.$data.tasks[1].task).toBe("");
  });
});
