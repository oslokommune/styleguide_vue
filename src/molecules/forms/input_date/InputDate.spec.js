import { mount, shallowMount } from '@vue/test-utils'
import { axe, toHaveNoViolations } from 'jest-axe'
import InputDate from './InputDate.vue'

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(InputDate, {
    propsData: {
      label: 'Foo',
      value: '2020-08-10',
      placeholder: 'Bar',
      minDate: new Date('2020-08-09'),
      maxDate: new Date('2020-08-11')
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('InputDate.vue', () => {

  it('is rendered', () => {
    expect(wrapper.find('input')).toBeTruthy();
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

  it('has label', () => {
    expect(wrapper.find('label').text()).toEqual('Foo');
  })

  it("has value", () => {
    const expectedValue = '2020-08-10';
    const parent = mount({
      data: function () {
        return {
          inputValue: expectedValue
        }
      },
      template: '<div><osg-input-date v-model="inputValue" label="Foo"></osg-input-date></div>',
      components: {
        'osg-input-date': InputDate
      }
    })

    expect(parent.find('input').element.value).toEqual(expectedValue);
  });

  it('input emits value', async () => {
    const expectedValue = '2020-08-10'
    wrapper.vm.$emit('input', expectedValue)
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input').length).toBe(1)
    expect(wrapper.emitted('input')[0]).toEqual([expectedValue])
  })

  it('focus calls function', () => {
    const spy = jest.fn()
    wrapper = shallowMount(InputDate, {
      propsData: {
        label: 'Foo',
        onFocus: spy
      }
    });

    wrapper.find('input').trigger('focus')
    expect(spy).toBeCalled()
  })

  it('has placeholder', () => {
    expect(wrapper.find('input').attributes()['placeholder']).toEqual('Bar');
  })

  it('has min date', () => {
    expect(wrapper.find('input').attributes()['min']).toEqual('2020-08-09');
  })

  it('has max date', () => {
    expect(wrapper.find('input').attributes()['max']).toEqual('2020-08-11');
  })

  it('has no validation error', () => {
    expect(wrapper.find('.osg-input-validation--danger').exists()).toBe(false);
  })

  it('has validation error', () => {
    wrapper = shallowMount(InputDate, {
      propsData: {
        label: 'Foo',
        validation: {
          isInvalid: true,
          message: 'Baz'
        }
      }
    });

    expect(wrapper.find('.osg-input-validation--danger').exists()).toBe(true);
    expect(wrapper.find('.osg-input-validation--danger').text()).toEqual('Baz');
  })

})
