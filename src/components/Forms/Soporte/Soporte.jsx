import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';
import { Loader } from 'semantic-ui-react'

const Soporte = () => {
    
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [celular, cambiarCelular] = useState({campo: '', valido: null});
	const [distrito, cambiarDistrito] = useState({campo: '', valido: null});
	const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
	const [dni, cambiarDni] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		usuario: /^[a-zA-Z0-9\s_-]+$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		dni: /^.{7,9}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{9}$/ // 7 a 14 numeros.
	}

	

	const onSubmit = (e) => {
		
		if(
			nombre.valido === 'true' &&
			correo.valido === 'true' &&
			celular.valido === 'true' &&
			distrito.valido === 'true' &&
			direccion.valido === 'true' &&
			dni.valido === 'true' 
		){
			cambiarFormularioValido(true);
			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}


  return (
      
    <main>

			<div style={{textAlign:"center", marginTop:"100px"}}>
				
				<div >
				<b style={{color:"black",fontSize:"35px"}}>Solicitudes en Línea - Soporte</b> <br/><br/>
                </div>
                <br />
                <div style={{borderRadius:"20px",display:"flex", alignItems:"center",backgroundColor:"#3f2c74", height:"100px"}}>
                <b style={{color:"white",fontSize:"18px", margin:"20px"}}>
                Si tienes un requerimiento , por favor déjanos los siguientes datos, te contactaremos a la brevedad. Recuerda colocar los datos del titular del servicio.
                </b>
                </div>

				<br /><br />

			</div>
			<Formulario action="https://formsubmit.co/soporte@wasiperu.pe" method="POST" onSubmit={onSubmit}>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					type="text"
					label="Nombres y Apellidos"
					name="Nombres y Apellidos"
					leyendaError="Nombres y Apellidos solo pueden contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
              
                
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					type="email"
					label="Correo Electrónico"
					placeholder="john@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				
				
					<Input
					estado={dni}
					cambiarEstado={cambiarDni}
					type="text"
					label="DNI o CE"
					name="DNI o CE"
					leyendaError="DNI O CE Admite solo 7 o 9 digitos respectivamente."
					expresionRegular={expresiones.dni}
				/>
				<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					type="text"
					label="Dirección"
					name="Direccion"
					leyendaError="Dirección solo admite letras, numeros y espacios."
					expresionRegular={expresiones.usuario}
				/>
                <Input
					estado={celular}
					cambiarEstado={cambiarCelular}
					type="text"
					label="Celular"
					placeholder="987654321"
					name="Celular"
					leyendaError="El celular solo admite 9 digitos."
					expresionRegular={expresiones.telefono}
				/>

				<select required style={{height:"45px", marginTop:"40px"}} name='Distrito'>
					<option disabled selected>Tipo De Solicitud</option>
					<option>Sin Servicio</option>
					<option>Lentitud</option>
					<option>Problema Wifi</option>
					<option>Otros</option>

				</select>

				

                <textarea 
				name='Detalles de reclamo/queja/apelación'
				placeholder='Observaciones (Detalle de Incidente)' 
				style={{maxWidth:"350px", minHeight:"100px"}}/>
            

			
				<ContenedorBotonCentrado>
					{formularioValido === true && <MensajeExito><Loader active inline='centered' /></MensajeExito>}

					<Boton type="submit">Enviar</Boton>
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
  )
}

export default Soporte;