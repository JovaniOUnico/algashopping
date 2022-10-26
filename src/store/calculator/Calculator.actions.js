export function sum (a, b) { //action creator
  return {
    type: 'SUM',
    payload: [a, b]
  }
}

export function subtract (a, b) { //action creator
  return {
    type: 'SUBTRACT',
    payload: [a, b]
  }
}