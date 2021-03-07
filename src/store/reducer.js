import {
  FETCH_COMPLETED_FAILURE,
  FETCH_COMPLETED_REQUEST,
  FETCH_COMPLETED_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  TASK_COMPLETED_FAILURE,
  TASK_COMPLETED_REQUEST,
} from "./types"

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
    case FETCH_COMPLETED_REQUEST:
    case ADD_TASK_REQUEST:
    case TASK_COMPLETED_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_TASKS_FAILURE:
    case FETCH_COMPLETED_FAILURE:
    case TASK_COMPLETED_FAILURE:
    case ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      }
    case FETCH_COMPLETED_SUCCESS:
      return {
        ...state,
        loading: false,
        completeds: action.payload,
      }
    default:
      return state
  }
}

const initialState = {
  loading: false,
  error: false,
  tasks: [
    {
      body: "Wireframe for contact page",
      date: "",
      id: 1,
    },
    {
      body: "Book Return Ticket",
      date: "Today",
      id: 2,
    },
    {
      body: "Buy Anniversary Gift",
      date: "3 days ago",
      id: 3,
    },
    {
      body: "Pay Electricity Bill",
      date: "",
      id: 4,
    },
    {
      body: "Meet Chris In the Conference",
      date: "Tomorrow",
      id: 5,
    },
  ],
  completeds: [
    {
      body: "Meet Chris In the Conference",
      date: "Tomorrow",
      id: 6,
    },
    {
      body: "Meet Chris In the Conference",
      date: "Tomorrow",
      id: 7,
    },
    {
      body: "Meet Chris In the Conference",
      date: "Tomorrow",
      id: 70,
    },
    {
      body: "Meet Chris In the Conference",
      date: "Tomorrow",
      id: 8,
    },
    {
      body: "Meet Chris In the Conference",
      date: "Tomorrow",
      id: 9,
    },
    {
      body: "Meet Chris In the Conference",
      date: "Tomorrow",
      id: 10,
    },
  ],
}

export default reducer
