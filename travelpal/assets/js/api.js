// Adapted from Nat's lecture notes
import store from './store';

class TheServer {
  request_users() {
    $.ajax("/api/v1/users", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'USERS_LIST',
          users: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not load users.");
      }
    });
  }

  request_friends() {
    $.ajax("/api/v1/friends", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'FRIENDS_LIST',
          friends: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not load friends.");
      }
    });
  }

  request_travel_dates() {
    $.ajax("/api/v1/traveldates", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'TRAVEL_DATES_LIST',
          travelDates: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not load travel dates.");
      }
    });
  }

  request_booked_trips() {
    $.ajax("/api/v1/bookedtrips", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'BOOKED_TRIPS_LIST',
          bookedTrips: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not load booked trips.");
      }
    });
  }

  request_flights() {
    $.ajax("/api/v1/flights", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'FLIGHTS_LIST',
          flights: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not load flights.");
      }
    });
  }

  request_hotels() {
    $.ajax("/api/v1/hotels", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'HOTELS_LIST',
          hotels: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not load hotels.");
      }
    });
  }

  submit_login(data) {
    console.log(data);
    $.ajax("/api/v1/token", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: (resp) => {
        store.dispatch({
          type: 'SET_TOKEN',
          token: resp,
        });
      },
      error: (resp) => {
        alert("Could not log in. Please try again.");
      }
    });
  }

  create_user(data) {
    $.ajax("/api/v1/users", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({user: data}),
      success: (resp) => {
        alert("Successfully registered! You can now log in.");
        store.dispatch({
          type: 'ADD_USER',
          user: resp.data,
        });
      },
      error: (resp) => {
        alert("Failed to register. Please try again.");
      },
    });
  }

  edit_user(data) {
    $.ajax("/api/v1/users/" + data.id, {
      method: "patch",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({user: data}),
      success: (resp) => {
        alert("Your changes have been saved.");
        store.dispatch({
          type: 'USERS_LIST',
          users: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not save the edit. Please try again.");
      }
    });
  }

  delete_friend(data) {
    $.ajax("/api/v1/friends/" + data, {
      method: "delete",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: (resp) => {
        store.dispatch({
          type: 'FRIENDS_LIST',
          friends: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not unfriend. Please try again.");
      }
    });
  }

  accept_friend(data) {
    $.ajax("/api/v1/friends/" + data.id, {
      method: "patch",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({friend: data}),
      success: (resp) => {
        store.dispatch({
          type: 'FRIENDS_LIST',
          friends: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not accept the request. Please try again.");
      }
    });
  }

  delete_travel_date(data) {
    $.ajax("/api/v1/traveldates/" + data, {
      method: "delete",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: (resp) => {
        store.dispatch({
          type: 'TRAVEL_DATES_LIST',
          travelDates: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not delete the travel date. Please try again.");
      }
    });
  }

  delete_booked_trip(data) {
    $.ajax("/api/v1/bookedtrips/" + data, {
      method: "delete",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: (resp) => {
        store.dispatch({
          type: 'BOOKED_TRIPS_LIST',
          bookedTrips: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not delete the trip. Please try again.");
      }
    });
  }

  edit_booked_trip(data) {
    console.log("EDIT");
    console.log(data.id);
    $.ajax("/api/v1/bookedtrips/" + data.id, {
      method: "patch",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({booked_trip: data}),
      success: (resp) => {
        store.dispatch({
          type: 'BOOKED_TRIPS_LIST',
          bookedTrips: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not save the edit. Please try again.");
      }
    });
  }
}

export default new TheServer();
