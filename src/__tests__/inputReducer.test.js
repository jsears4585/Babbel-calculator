import reducer from '../reducers/inputReducer'

describe('Input Reducer', () => {
  it('should handle UPDATE_OUTPUT', () => {
    expect(
      reducer({ output: '1' }, {
        type: 'UPDATE_OUTPUT',
        payload: '2'
      })
    ).toEqual({ output: '12' })
  })

  describe('Basic operations', () => {
    it('should handle USE_OPERATION with plus input', () => {
      expect(
        reducer({ output: '1' }, {
          type: 'USE_OPERATION',
          payload: '+'
        })
      ).toEqual({
        output: '',
        previous: '1',
        currentOp: '+'
      })
    })

    it('should handle USE_OPERATION with minus input', () => {
      expect(
        reducer({ output: '1' }, {
          type: 'USE_OPERATION',
          payload: '-'
        })
      ).toEqual({
        output: '',
        previous: '1',
        currentOp: '-'
      })
    })

    it('should handle USE_OPERATION with minus multiply', () => {
      expect(
        reducer({ output: '1' }, {
          type: 'USE_OPERATION',
          payload: '*'
        })
      ).toEqual({
        output: '',
        previous: '1',
        currentOp: '*'
      })
    })

    it('should handle USE_OPERATION with minus divide', () => {
      expect(
        reducer({ output: '1' }, {
          type: 'USE_OPERATION',
          payload: '/'
        })
      ).toEqual({
        output: '',
        previous: '1',
        currentOp: '/'
      })
    })
  })

  it('should handle EQUALS', () => {
    expect(
      reducer({
        output: '2',
        previous: '1',
        currentOp: '+' },
        {
          type: 'EQUALS'
        })
    ).toEqual({
      output: 3,
      previous: '',
      currentOp: ''
    })
  })

  it('should handle CLEAR', () => {
    expect(
      reducer({ output: '99000000' }, {
        type: 'CLEAR'
      }
    )
    ).toEqual({
      output: '',
      previous: '',
      currentOp: ''
    })
  })

  it('should handle MEM_STORE', () => {
    expect(
      reducer({ output: '123' }, {
        type: 'MEM_STORE'
      }
    )
    ).toEqual({
      output: '',
      memory: '123'
    })
  })

  it('should handle MEM_RET', () => {
    expect(
      reducer({ output: '', memory: '42' }, {
        type: 'MEM_RET'
      }
    )
    ).toEqual({
      output: '42',
      memory: '42'
    })
  })
})
