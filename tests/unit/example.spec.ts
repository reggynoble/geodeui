import { shallowMount } from '@vue/test-utils'
import FromSubmission from '@/components/FromSubmission.vue'

describe('FromSubmission.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(FromSubmission {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
