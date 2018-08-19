import HelloDecorator from '@/components/HelloDecorator.vue';
import { shallowMount } from '@vue/test-utils';

describe('HelloDecorator.vue', () => {
    it('renders props when passed', () => {
        const name = 'new message';
        const initialEnthusiasm = 5;
        const wrapper = shallowMount(HelloDecorator, {
            propsData: { name, initialEnthusiasm },
        });
        expect(wrapper.text()).toMatch(name);
        expect(wrapper.text()).toMatch('!!!!!');
    });
});
