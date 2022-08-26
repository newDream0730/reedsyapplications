import { shallowMount } from '@vue/test-utils';
import BookViewVue from '@/components/BookView.vue';

describe("Solicitacao Form component", () => {

  let wrapper = shallowMount(BookViewVue)
  const data = wrapper.vm.boardStyle
  test('Component created', () => {
    expect(data).toBeDefined();
  })
  const url = wrapper.vm.logoUrl
  test('changed logo url', () => {
    expect(url).toBeDefined();
  })
  const synopsis = wrapper.vm.reduced
  test('reduced synopsis', () => {
    expect(synopsis).toBeDefined();
  })
})