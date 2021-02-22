import { shallowMount } from '@vue/test-utils'
import SearchField from '@/components/SearchField.vue'

describe('SearchField.vue', () => {
  it('should display a input field for events and location when mounted', () => {

    //mounting seach field comopnent
    const wrapper = shallowMount(SearchField)

    //Finds the input box to search for events 
    const eventInput = wrapper.find(".event-input-field").exists()

    //finds the input box for location filtering
    const locationFilter = wrapper.find(".location-filter").exists()
    expect(eventInput).toBeTruthy()
    expect(locationFilter).toBeTruthy()
  })

  it("should bind the data from event input field to vue data",async () => {

    const wrapper = shallowMount(SearchField)
    await wrapper.setData({ userEventInput: 'Event data' })
    const eventInput = wrapper.find(".event-input-field")

    expect(wrapper.vm.userEventInput).toBe('Event data')
    expect(eventInput).toBe("Event data")
  })
  //should bind the data from event input field to vue data


})
