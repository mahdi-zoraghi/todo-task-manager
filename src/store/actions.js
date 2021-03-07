import { db } from "../firebase"

import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
  FETCH_COMPLETED_REQUEST,
  FETCH_COMPLETED_FAILURE,
  FETCH_COMPLETED_SUCCESS,
  ADD_TASK_REQUEST,
  ADD_TASK_FAILURE,
  TASK_COMPLETED_FAILURE,
  TASK_COMPLETED_REQUEST,
} from "./types"

export const fetchTasks = () => {
  return dispatch => {
    dispatch({
      type: FETCH_TASKS_REQUEST,
    })
    try {
      db.collection("tasks").onSnapshot(snapshot => {
        const dbTasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        const tasks = dbTasks.filter(task => !task.completed)
        dispatch({
          type: FETCH_TASKS_SUCCESS,
          payload: tasks,
        })
      })
    } catch {
      dispatch({
        type: FETCH_TASKS_FAILURE,
      })
    }
  }
}

export const fetchCompleteds = () => {
  return dispatch => {
    dispatch({
      type: FETCH_COMPLETED_REQUEST,
    })
    try {
      db.collection("tasks").onSnapshot(snapshot => {
        const dbTasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        const tasks = dbTasks.filter(task => task.completed)
        dispatch({
          type: FETCH_COMPLETED_SUCCESS,
          payload: tasks,
        })
      })
    } catch {
      dispatch({
        type: FETCH_COMPLETED_FAILURE,
      })
    }
  }
}

export const addTask = ({ body, date }) => {
  return dispatch => {
    dispatch({
      type: ADD_TASK_REQUEST,
    })
    try {
      db.collection("tasks").add({
        body,
        date: new Date(date).toDateString(),
        completed: false,
      })
    } catch {
      dispatch({
        type: ADD_TASK_FAILURE,
      })
    }
  }
}

export const completedTask = id => {
  return dispatch => {
    dispatch({
      type: TASK_COMPLETED_REQUEST,
    })
    try {
      db.collection("tasks").doc(id).set(
        {
          completed: true,
        },
        { merge: true }
      )
    } catch {
      dispatch({
        type: TASK_COMPLETED_FAILURE,
      })
    }
  }
}
