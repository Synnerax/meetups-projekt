import { shallowMount } from '@vue/test-utils'
import { enableFetchMocks } from 'jest-fetch-mock'
import EventCard from '@/components/EventCard.vue'

describe("EventCard.vue", () => {
    it("should display card ", () => {
    //mounting seach field comopnent
    const wrapper = shallowMount(EventCard)

    //Finds the input box to search for events 
    const eventCard = wrapper.find(".event-card").exists()

    //finds the input box for location filtering
    expect(eventCard).toBeTruthy()
    })
})
//it should display a card when mounted
//it should be as many cards as items returned from fetch 
//it should display data in card
