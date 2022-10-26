export default function (state = {}, action) {
  let newState;
  
  switch(action.type) {
    case 'SUM':
      return action.payload[0] + action.payload[1]
    
    break;
    case 'SUBTRACT':
      return action.payload[0] + action.payload[1]
    break;
    default:
      return state
  }

  return newState;
}