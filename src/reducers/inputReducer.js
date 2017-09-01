import * as utils from '../lib/utils'

export default function inputReducer(

  state={
    output: '',
    previous: '',
    currentOp: '',
    memory: ''
  }, action )
{

  switch(action.type) {

    case 'UPDATE_OUTPUT':
      return Object.assign({}, state, {
        output: utils.toExp(state.output += action.payload)
      })

    case 'USE_OPERATION':
      return Object.assign({}, state, {
        output: '',
        previous: state.output,
        currentOp: action.payload
      })

    case 'EQUALS':
      // eslint-disable-next-line
      let answer = eval(state.previous + state.currentOp + state.output) || 0
      return Object.assign({}, state, {
        output: utils.toExp(answer),
        previous: '',
        currentOp: ''
      })

    case 'CLEAR':
      return Object.assign({}, state, {
        output: '',
        previous: '',
        currentOp: ''
      })

    case 'MEM_STORE':
      return Object.assign({}, state, {
        memory: state.output,
        output: ''
      })

    case 'MEM_RET':
      return Object.assign({}, state, {
        output: state.memory
      })

    default:
      return state
  }
}
