export default function inputReducer(

  state={
    output: '',
    previous: '',
    currentOp: ''
  }, action )
{
  switch(action.type) {

    case 'UPDATE_OUTPUT':
      console.log("Update output:", state.output)
      return Object.assign({}, state, {
        output: state.output += action.payload
      })

    case 'USE_OPERATION':
      console.log("Operation:", action.payload)
      switch(action.payload) {
        case '/':
          console.log('divide')
          break;
        case 'x':
          console.log('multiply')
          break;
        case '-':
          console.log('subtract')
          break;
        case '+':
          console.log('plus')
          break;
        default:
          console.log('error')
      }
      break;

    case 'EQUALS':
      console.log("Equals:", state.output)
      break;

    default:
      return state
  }
}
