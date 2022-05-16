import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';
import { Loader } from 'semantic-ui-react'
import "./estilosPY.css"


const FinishFormuVali = () => {
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
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
			<div style={{textAlign:"center"}}>
				<br /><br/>
				<div >
				<p id='nivel1'>¡PIDELO  YA!</p>
				<b id='nivel2'>Completa el siguiente formulario y nos comunicaremos</b> <br/>
				<b id='nivel2'>contigo de inmediato</b>
				<br /><br /><br />
				</div>
			</div>
			<Formulario action="https://formsubmit.co/ventas@wasiperu.pe" method="POST" onSubmit={onSubmit}>
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

				<select style={{height:"50px", marginTop:"20px"}} name='Vivienda'>
					<option disabled selected>Elige tu vivienda</option>
					<option>Casa</option>
					<option>Edificio</option>
					<option>Condominio</option>
				</select>
				<select style={{height:"50px", marginTop:"20px"}} name='Plan'>
					<option disabled selected>Elige tu Plan</option>
					<option>Plan 30MB a s/75</option>
					<option>Plan 50MB a s/85</option>
					<option>Plan 80MB a s/99</option>
					<option>Plan 100MB a s/119</option>
					<option>Plan 150MB a s/159</option>
				</select>
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
					estado={dni}
					cambiarEstado={cambiarDni}
					type="text"
					label="DNI o CE"
					name="DNI o CE"
					leyendaError="DNI O CE Admite solo 7 o 9 digitos respectivamente."
					expresionRegular={expresiones.dni}
				/>



				
				
				<ContenedorBotonCentrado>
					{formularioValido === true && <MensajeExito><Loader active inline='centered' /></MensajeExito>}

					<Boton type="submit">Enviar</Boton>
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);
}
 
export default FinishFormuVali;