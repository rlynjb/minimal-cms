/*
  https://medium.com/@soffritti.pierfrancesco/create-a-simple-event-bus-in-javascript-8aa0370b3969
*/

function EventCallbacksPair(eventType, callback) {
  this.eventType = eventType;
  this.callbacks = [callback];
}

class EventBus {
  constructor() {
    this.eventCallbacksPairs = []
  }

  subscribe = (eventType, callback) => {
    const eventCallbacksPair = this.findEventCallbacksPair(eventType);

    if(eventCallbacksPair) {
      eventCallbacksPair.callbacks.push(callback);
    } else {
      this.eventCallbacksPairs.push(new EventCallbacksPair(eventType, callback));
    }
  }

  publish = (eventType, args) => {
    const eventCallbacksPair = this.findEventCallbacksPair(eventType);
    
    if(!eventCallbacksPair) {
      console.error("no subscribers for event " + eventType);
      return;
    }
    
    eventCallbacksPair.callbacks.forEach( callback => callback(args) );
  }

  findEventCallbacksPair = (eventType) => {
    return this.eventCallbacksPairs.find(eventObject => {
      return eventObject.eventType === eventType
    });
  }
}

const Event = new EventBus();

export default Event;
