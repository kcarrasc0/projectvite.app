/*import './pass.css'
import usenergia from '../../assets/usenergia.svg'
import BlueButton from '../../components/BlueButton/BlueButton'
import WhiteButton from '../../components/ButtonTransparent/ButtonTransparent'
import Input from '../../components/Input/Input'
import Checkbox from '../../components/Checkbox/Checkbox'
import { useState } from 'react'


function Pass() {
  const [showPassword, setShowPassword] = useState(false);

  const handlerPassword = (checked: any) => {
    setShowPassword(checked);
  }

  return (
    <>
      <div id='centralDiv'>
        <img src={usenergia} width='400px'></img>
        <div id='contents'>
          <div id ='centralElements'>
            <h1 id='LoginText'>Fazer login</h1>
          </div>
          <div id='loginItems'>
            <Input placeholder='Insira sua senha' type={showPassword ? 'text' : 'password'}/>
            <Checkbox checked={showPassword} onChange={handlerPassword}/>
            <text>Mostrar senha</text>
          </div>
        </div>
        <div id='buttons'>
            <WhiteButton textContent='Cancelar'/>
            <BlueButton textContent='Avançar' onClick={() => {}}/>
        </div>
      </div>
    </>
  )
}

export default Pass
*/