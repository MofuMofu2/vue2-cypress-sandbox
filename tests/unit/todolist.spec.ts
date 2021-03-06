import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("初期状態", () => {
  const wrapper = shallowMount(TodoList, { propsData: { type: "all" } });
  const body = wrapper.find("tbody");

  it("一括切り替え用ボタン：チェックOFF", () => {
    expect(wrapper.vm.$data.tasks[0].completed).toBe(false);
  });
  it("一行表示される", () => {
    expect(body.findAll("tr").length).toBe(1);
  });
  it("左端はチェックボックス表示 チェック：OFF", () => {
    const left = body.findAll("td").at(0);
    const content = left.find("input[type='checkbox']");
    expect(content.exists()).toBe(true);
    expect(wrapper.vm.$data.tasks[0].completed).toBe(false);
  });
  it("中央は空のフォーム", () => {
    const central = body.findAll("td").at(1);
    const content = central.find("input[type='text']");
    expect(content.exists()).toBe(true);
    expect(wrapper.vm.$data.tasks[0].task).toBe("");
  });
  it("右端は削除ボタン", () => {
    const right = body.findAll("td").at(2);
    expect(right.find("div").exists()).toBe(true);
  });
});

describe("新しいタスクを追加する", () => {
  const wrapper = shallowMount(TodoList, { propsData: { type: "all" } });
  const firstRow = wrapper.find("tbody").findAll("tr").at(0);
  const form = firstRow.findAll("td").at(1).find("input[type='text']");
  beforeEach(async () => {
    await form.setValue("new task");
  });
  it("フォームに値が入力できる", () => {
    expect(wrapper.vm.$data.tasks[0].task).toBe("new task");
  });
  it("Enterキー押下で空行追加される", async () => {
    await form.trigger("keyup.enter");
    expect(wrapper.find("tbody").findAll("tr").length).toBe(2);
    expect(wrapper.vm.$data.tasks[1].completed).toBe(false);
    expect(wrapper.vm.$data.tasks[1].task).toBe("");
  });
});

describe("タスクを削除する", () => {
  const wrapper = shallowMount(TodoList, { propsData: { type: "all" } });
  const deleteTarget = wrapper.find("tbody").findAll("tr").at(0);
  const form = deleteTarget.findAll("td").at(1).find("input[type='text']");

  it("削除要素をクリックすると一行消える", async () => {
    // テストのためdataを2行にする
    await form.setValue("doing task");
    await form.trigger("keyup.enter");

    // 行削除
    const deleteButton = deleteTarget.findAll("td").at(2).find("div");
    await deleteButton.trigger("click");

    // 削除後の検証
    expect(wrapper.vm.$data.tasks.length).toBe(1);
    expect(wrapper.vm.$data.tasks[0].task).toBe("");
  });
});

describe("一括ON/OFF切り替えチェックボックス", () => {
  const wrapper = shallowMount(TodoList, { propsData: { type: "all" } });
  const toggleAll = wrapper.find("thead").find("input[type='checkbox']");
  const body = wrapper.find("tbody").findAll("td");

  it("タスクが一つ以上あるとき、クリックでチェックONに切り替えられる", async () => {
    // テストのためdataを2行にする
    await body.at(1).find("input[type='text']").setValue("doing task");
    await body.at(1).find("input[type='text']").trigger("keyup.enter");
    // クリック
    await toggleAll.trigger("click");
    expect(wrapper.vm.$data.tasks[0].completed).toBe(true);
    expect(wrapper.vm.$data.tasks[1].completed).toBe(true);

    // クリック
    await toggleAll.trigger("click");
    expect(wrapper.vm.$data.tasks[0].completed).toBe(false);
    expect(wrapper.vm.$data.tasks[1].completed).toBe(false);
  });
});
