import { shallowMount } from '@vue/test-utils'
import CreateEvent from '@/views/CreateEvent.vue'


describe("CreateEvent.vue", () => {
    it("should display a input field for the event name", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualInputField = wrapper.find(".event-input-title").exists()

        expect(actualInputField).toBeTruthy()
    })
    it("should display a input field for the event location", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualInputLocation = wrapper.find(".event-input-location").exists()

        expect(actualInputLocation).toBeTruthy()
    })
    it("should display a input field for how many people that can join the event", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualInputSeats = wrapper.find(".event-input-seats").exists()

        expect(actualInputSeats).toBeTruthy()
    })
    it("should display a input field for the date and time for the event", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualInputDate = wrapper.find(".event-input-date").exists()
        const actualInputTime = wrapper.find(".event-input-time").exists()


        expect(actualInputDate).toBeTruthy()
        expect(actualInputTime).toBeTruthy()

    })

    it("should display a input field to add one tag", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualInputTag = wrapper.find(".event-input-tag").exists()

        expect(actualInputTag).toBeTruthy()
    })
    it("should display a input field to add a description", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualDescription = wrapper.find(".event-input-description").exists()

        expect(actualDescription).toBeTruthy()
    })
})