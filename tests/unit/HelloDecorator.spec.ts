import HelloDecorator from '@/components/HelloDecorator.vue';
import { shallowMount } from '@vue/test-utils';

describe('HelloDecorator.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(HelloDecorator, {
            propsData: { msg },
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
