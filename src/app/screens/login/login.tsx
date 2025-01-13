/* // import { useState } from 'react'
import './login.css'
import usenergia from '../../assets/usenergia.svg'
import BlueButton from '../../components/BlueButton/BlueButton'
import WhiteButton from '../../components/ButtonTransparent/ButtonTransparent'
import TinyWhiteButton from '../../components/ForgetButton/ForgetButton'
import Input from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate = useNavigate();

  const handlerAvance = () => {
    const passPath = '/pass';

    navigate(passPath);
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
            <Input placeholder='E-mail ou telefone' type='email'/>
            <TinyWhiteButton textContent='Esqueceu seu e-mail?'/>
          </div>
        </div>
        <div id='buttons'>
            <WhiteButton textContent='Criar conta'/>
            <BlueButton textContent='Avançar' onClick={handlerAvance}/>
        </div>
      </div>
    </>
  )
}

export default Login
*/