import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';
import { Loader, Form, Select } from 'semantic-ui-react'
import FondoInferior from "./FondoInferior.png"

const Reclamaciones = () => {
    
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
      <>
    <main>

			<div style={{textAlign:"center", marginTop:"100px"}}>
				
				<div >
				<b style={{color:"black",fontSize:"35px"}}>Libro de Reclamaciones - Wasi</b> <br/><br/>
                </div>
                <br />
                <div style={{borderRadius:"20px",display:"flex", alignItems:"center",backgroundColor:"#3f2c74", height:"100px"}}>
                <b style={{color:"white",fontSize:"18px"}}>
                Para realizar un correcto seguimiento del reclamo, es obligatorio ingresar los datos completos del titular de la cuenta. Asegúrate de haber elegido correctamente la opción correcta. Nos pondremos en contacto contigo.
                </b>
                </div>

				<br /><br />

			</div>
			<Formulario action="https://formsubmit.co/reclamos@wasiperu.pe" method="POST" onSubmit={onSubmit}>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					type="text"
					label="Nombre del Titular"
					name="Nombre del Titular"
					leyendaError="Nombres solo pueden contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
                <Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					type="text"
					label="Apellido del Titular"
					name="Apellido del Titular"
					leyendaError="Apellidos solo pueden contener letras y espacios."
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

				<select required style={{height:"45px", marginTop:"40px"}} name='Distrito'>
					<option disabled selected>Selecciona tu Distrito</option>
					<option>Ancón</option>
					<option>Barranco</option>
					<option>Breña</option>
					<option>Carabayllo</option>
					<option>Chaclacayo</option>
					<option>Chorrillos</option>
					<option>Cieneguilla</option>
					<option>Comas</option>
					<option>El Agustino</option>
					<option>Independencia</option>
					<option>Jesus María</option>
					<option>La Molina</option>
					<option>La Vcitoria</option>
					<option>Lima</option>
					<option>Lince</option>
					<option>Los Olivos</option>
					<option>Chosica</option>
					<option>Lurín</option>
					<option>Magdalena del mar</option>
					<option>Miraflores</option>
					<option>Pachácamac</option>
					<option>Pucusana</option>
					<option>Pueblo Libre</option>
					<option>Puente Piedra</option>
					<option>Punta Hermosa</option>
					<option>Punta Negra</option>
					<option>Rímac</option>
					<option>San Bartolo</option>
					<option>San Borja</option>
					<option>San Isidro</option>
					<option>San Juan de Miraflores</option>
					<option>San Juan de Lurigancho</option>
					<option>San Luis</option>
					<option>San Martin de Porres</option>
					<option>San Miguel</option>
					<option>Santa Anita</option>
					<option>Santa María del Mar</option>
					<option>Santa Rosa</option>
					<option>Santiago de Surco</option>
					<option>Surquillo</option>
					<option>Villa el Salvador </option>
					<option>Villa María del Triunfo</option>

				</select>

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

                <div style={{marginTop:"50px"}}>
                    <div style={{display:"inline", margin:"0px 15px"}}>
                        <input  type="radio" id="huey" name="Razon" value="Reclamo" />
                        <label >Reclamo</label>
                    </div>

                    <div style={{display:"inline", marginRight:"15px"}}>
                        <input width={100}  type="radio" id="huey" name="Razon" value="Queja" />
                        <label >Queja</label>
                    </div>
                    
                    <div style={{display:"inline"}}>
                        <input  type="radio" id="huey" name="Razon" value="Apelación de Reclamo" />
                        <label >Apelación de Reclamo</label>
                    </div>

                </div>

                
			

                

                <textarea 
				name='Detalles de reclamo/queja/apelación'
				placeholder='Escriba aquí el detalle de su reclamo/queja/apelación de reclamo (opcional)' 
				style={{maxWidth:"350px", minHeight:"100px"}}/>
            

				
				
				<ContenedorBotonCentrado>
					{formularioValido === true && <MensajeExito><Loader active inline='centered' /></MensajeExito>}

					<Boton type="submit">Enviar</Boton>
				</ContenedorBotonCentrado>
			</Formulario>

		</main>

		</>
  )
}

export default Reclamaciones