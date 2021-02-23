import { shallowMount, mount } from '@vue/test-utils'
import { enableFetchMocks } from 'jest-fetch-mock'
import EventCard from '@/components/EventCard.vue'

const fakeData = {
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
    "img": "imageurl.png",
    "price": 0
  } 


describe("EventCard.vue", () => {
    
    
it("should display card ", () => {
    //mounting seach field comopnent
    const wrapper = shallowMount(EventCard, {
        propsData: {
            eventInfo: fakeData
        }
    })

    //Finds the input box to search for events 
    const actualCard = wrapper.find(".event-card").exists()
    console.log(actualCard)
    //finds the input box for location filtering
    expect(actualCard).toBeTruthy()
    })

it("should describe the correct information in a card", async () => {
    
    const wrapper = mount(EventCard, {
        propsData: {
          eventInfo: fakeData
        }
      })
      
      const eventTitle = wrapper.find('.card-title').exists()
      const eventImg = wrapper.find('.card-img').exists()
      const eventDate = wrapper.find('.card-date').exists()
      const eventTime = wrapper.find('.card-time').exists()
      const eventOrganizer = wrapper.find('.card-organizer').exists()
      console.log(eventTitle, eventImg, eventDate, eventTime, eventOrganizer)

      expect(eventTitle).toBeTruthy()
      expect(eventImg).toBeTruthy()
      expect(eventDate).toBeTruthy()
      expect(eventTime).toBeTruthy()
      expect(eventOrganizer).toBeTruthy()
})

})
//it should display data in card
