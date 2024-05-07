import { useEffect, useMemo, useState } from 'react'
import {
  Button,
  ButtonGroup,
  Card,
  Form,
  InputGroup,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-bootstrap'

function App() {
  const [type, setType] = useState('CNY')
  const [amount, setAmount] = useState(0)
  const [isShowConfig, setIsShowConfig] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [CNY_BYN, set_CNY_BYN] = useState(0)
  const [RUB_BYN, set_RUB_BYN] = useState(0)

  const typeChange = (v) => setType(v)
  const amountChange = (v) => {
    if (!v.target.value) {
      setAmount(0)
    } else {
      setAmount(parseFloat(v.target.value))
      console.log(parseFloat(v.target.value))
    }
  }
  const decreaseAmount = (num) => setAmount(amount - num < 0 ? 0 : amount - num)
  const increaseAmount = (num) => setAmount(amount + num)

  const set_CNY_BYN_wrapper = (value) => {
    localStorage.setItem('CNY_BYN', value)
    set_CNY_BYN(value)
  }
  const set_RUB_BYN_wrapper = (value) => {
    localStorage.setItem('RUB_BYN', value)
    set_RUB_BYN(value)
  }

  useEffect(() => {
    const cny = localStorage.getItem('CNY_BYN')

    if (cny) {
      set_CNY_BYN_wrapper(cny || 0)
    }

    const rub = localStorage.getItem('RUB_BYN')

    if (rub) {
      set_RUB_BYN_wrapper(rub || 0)
    }
  }, [])

  useEffect(() => {
    const color = isLightTheme ? 'white' : 'black'

    document.getElementById('meta-theme-color')?.setAttribute('content', color)
    document.body.style.backgroundColor = color
  }, [isLightTheme])

  const cny_byn_converted = useMemo(
    () => (amount * CNY_BYN).toFixed(2),
    [amount, CNY_BYN],
  )
  const rub_byn_converted = useMemo(
    () => (amount * RUB_BYN).toFixed(2),
    [amount, RUB_BYN],
  )

  return (
    <div className='px-2' style={{ width: '100vw' }}>
      <Card
        bg={isLightTheme ? 'primary' : 'secondary'}
        text={isLightTheme ? 'white' : 'white'}
      >
        <Card.Header>
          <div style={{ fontSize: '2.5rem' }}>
            BYN: {type === 'CNY' ? cny_byn_converted : rub_byn_converted}
          </div>
        </Card.Header>
        <Card.Body>
          <ToggleButtonGroup
            type='radio'
            name='options'
            size='lg'
            value={type}
            onChange={typeChange}
            className='mb-2 w-75'
          >
            <ToggleButton
              id='var-cny'
              value='CNY'
              variant={type === 'CNY' ? 'success' : 'dark'}
            >
              CNY
            </ToggleButton>
            <ToggleButton
              id='var-rub'
              value='RUB'
              variant={type === 'RUB' ? 'success' : 'dark'}
            >
              RUB
            </ToggleButton>
          </ToggleButtonGroup>

          <Form.Control
            type='number'
            size='lg'
            min={0}
            value={amount}
            onChange={amountChange}
            className='mb-2 w-100'
          />
          <ButtonGroup size='lg' className='w-100'>
            <Button variant='danger' onClick={() => decreaseAmount(100)}>
              -100
            </Button>
            <Button variant='danger' onClick={() => decreaseAmount(10)}>
              -10
            </Button>
            <Button variant='light' onClick={() => setAmount(0)}>
              0
            </Button>
            <Button variant='success' onClick={() => increaseAmount(10)}>
              +10
            </Button>
            <Button variant='success' onClick={() => increaseAmount(100)}>
              +100
            </Button>
          </ButtonGroup>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup size='lg'>
            <ToggleButton
              id='theme'
              type='checkbox'
              variant='dark'
              checked={isLightTheme}
              onChange={() => setIsLightTheme(!isLightTheme)}
              className='px-4'
            >
              <i className='bi bi-brightness-high-fill'></i>
            </ToggleButton>
            <ToggleButton
              id='options'
              type='checkbox'
              variant='info'
              checked={isShowConfig}
              onChange={() => setIsShowConfig(!isShowConfig)}
              className='px-4'
            >
              <i className='bi bi-gear'></i>
            </ToggleButton>
          </ButtonGroup>

          <div className={['mt-3', isShowConfig ? '' : 'd-none'].join(' ')}>
            <InputGroup>
              <InputGroup.Text>1 CNY - BYN</InputGroup.Text>
              <Form.Control
                type='number'
                min={0}
                value={CNY_BYN}
                onChange={(e) =>
                  set_CNY_BYN_wrapper(parseFloat(e.target.value))
                }
              />
            </InputGroup>
            <InputGroup className='mt-1'>
              <InputGroup.Text>1 RUB - BYN</InputGroup.Text>
              <Form.Control
                type='number'
                min={0}
                value={RUB_BYN}
                onChange={(e) =>
                  set_RUB_BYN_wrapper(parseFloat(e.target.value))
                }
              />
            </InputGroup>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default App
