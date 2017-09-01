import * as utils from '../lib/utils'

export default function inputReducer(

  state={
    output: '',
    previous: '',
    currentOp: ''
  }, action )
{
  console.log(action.type)
  switch(action.type) {

    case 'UPDATE_OUTPUT':
      console.log("Update output:", state.output)
      return Object.assign({}, state, {
        output: utils.toExp(state.output += action.payload)
      })

    case 'USE_OPERATION':
      console.log("Operation:", action.payload)
      return Object.assign({}, state, {
        output: '',
        previous: state.output,
        currentOp: action.payload
      })

    case 'EQUALS':
      let answer = eval(state.previous + state.currentOp + state.output)
      return Object.assign({}, state, {
        output: utils.toExp(answer),
        previous: '',
        currentOp: ''
      })

    default:
      return state
  }
}
