import { mount, shallowMount } from "@vue/test-utils";
import { enableFetchMocks } from "jest-fetch-mock"
import EventCard from "@/components/EventCard.vue";
import App from "@/App.vue"

const fakeData =  {
  "id": "ZIkZVDxxKBV1iTSyBR389",
  "organizer": "trump stump",
  "title": "Name of event",
  "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo beatae a laboriosam velit obcaecati! Error ipsa aspernatur odio eos qui et beatae quas molestias, excepturi adipisci ad doloremque aliquam.",
  "location": "",
  "date": "2020/09/30",
  "time": "1337",
  "tags": [
    "music",
    "some other thing"
  ],
  "price": 0
}
describe("EventCard.vue", () => {
    
    it("should display a Card when mounted", () => {
    //mounts the darkMode-vue component    
    const wrapper = shallowMount(EventCard, {
      propsData: {
        eventInfo: fakeData
      }
    });
    
    const acutal = wrapper.find(".event-card")
    //checks if button is there when mounted
    expect(acutal).toBeTruthy(); 
  });



it("should describe the correct information in a card", async () => {
    
    const wrapper = shallowMount(EventCard, {
        propsData: {
          eventInfo: fakeData
        }
      })
      
      const eventTitle = wrapper.find('.card-title').exists()
      const eventImg = wrapper.find('.card-img').exists()
      const eventDate = wrapper.find('.card-date').exists()
      const eventTime = wrapper.find('.card-time').exists()
      const eventOrganizer = wrapper.find('.card-organizer').exists()

      expect(eventTitle).toBeTruthy()
      expect(eventImg).toBeTruthy()
      expect(eventDate).toBeTruthy()
      expect(eventTime).toBeTruthy()
      expect(eventOrganizer).toBeTruthy()
})


it("should call one fetch on mount", async () => {
  enableFetchMocks()
  const result = "result"
  fetch.mockResponseOnce(JSON.stringify(result))

  const wrapper = shallowMount(App)
  console.log(wrapper.vm)
  let numCalls = fetch.mock.calls.length;

  wrapper.vm.$nextTick(() => {
    console.log("this is one tick after")
    wrapper.vm.$nextTick(() => {
      console.log("this is 2 ticks later:", numCalls)
    })
  })
  
  
  expect(numCalls).toBe(1)
})

})

//it should display data in card
