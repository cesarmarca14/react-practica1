import {useState} from 'react'

const Texto = () => {

    const[texto,setTexto] = useState('')
    
    const handleInputTexto = (e)=>{
        setTexto(e.target.value)
    }
  return (
    <div>
        
        <div className='main'>
            <img className='cardCesar' src="https://i.postimg.cc/QCHnjWLh/perfil.jpg" alt="" />
      <h1>Cesar Marca Nuñez</h1>
            <h4>💻Desarrollador💻 || 💻Desarrollador💻</h4>
            <h4>💻Desarrollador💻 || 💻Desarrollador💻</h4>
            <h4>😎Developer Front End - Designer😎</h4>
        </div>
    </div>
  )
}

export default Texto


