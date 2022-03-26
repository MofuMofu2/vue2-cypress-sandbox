import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("TodoList.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(TodoList, {});
    expect(wrapper.text()).toMatch("todo");
  });
});
