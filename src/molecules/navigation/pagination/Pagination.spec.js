import { mount, shallowMount } from '@vue/test-utils'
import { axe, toHaveNoViolations } from 'jest-axe'
import Pagination from './Pagination.vue'
import InputDate from "../../forms/input_date/InputDate";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Pagination, {
    propsData: {
      indexes: [...Array(10).keys()],
      activeIndex: 0,
      paginate: () => {}
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Pagination.vue', () => {

  it('is rendered', () => {
    expect(wrapper.find('.osg-pagination')).toBeTruthy();
  })

  it('has no axe violations', async () => {
    const results = await axe(wrapper.element, {
      rules: {
        'region': { enabled: false }
      }
    })
    expect.extend(toHaveNoViolations)
    expect(results).toHaveNoViolations()
  })

  it('click calls function', () => {
    const spy = jest.fn()
    wrapper = shallowMount(Pagination, {
      propsData: {
        indexes: [...Array(10).keys()],
        activeIndex: 0,
        paginate: spy
      }
    });

    wrapper.find('.osg-pagination__item:not(:disabled)').trigger('click')
    expect(spy).toBeCalled()
    expect(spy).toBeCalledWith(1)
  })

  it('click on active item does not call function', () => {
    const spy = jest.fn()
    wrapper = shallowMount(Pagination, {
      propsData: {
        indexes: [...Array(10).keys()],
        activeIndex: 0,
        paginate: spy
      }
    });

    wrapper.find('.osg-pagination__item').trigger('click')
    expect(spy).not.toBeCalled()
  })

});
