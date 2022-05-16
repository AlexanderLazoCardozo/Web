import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';
import { Loader } from 'semantic-ui-react'

const Venta = () => {
    
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [referencia, cambiarReferencia] = useState({campo: '', valido: null});
	
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
				<b style={{color:"black",fontSize:"35px"}}>Solicitudes en Línea - Venta</b> <br/><br/>
                </div>
                <br />
                <div style={{borderRadius:"20px",display:"flex", alignItems:"center",backgroundColor:"#3f2c74", height:"100px"}}>
                <b style={{color:"white",fontSize:"18px", margin:"20px"}}>
                Si tienes un requerimiento , por favor déjanos los siguientes datos, te contactaremos a la brevedad. Recuerda colocar los datos del titular del servicio.
                </b>
                </div>

				<br /><br />

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

                <Input
					estado={referencia}
					cambiarEstado={cambiarReferencia}
					type="text"
					label="Referencia"
					name="Referencia"
					leyendaError="Referencia solo admite letras, numeros y espacios."
					expresionRegular={expresiones.usuario}
				/>
            

            <select required style={{height:"45px", marginTop:"20px"}} name='Distrito'>
					<option disabled selected>Tipo De Solicitud</option>
					<option>Compra Mesh</option>
					<option>Plan Fibra Óptica 30mb(S/75)</option>
					<option>Plan Fibra Óptica 50mb(S/85)</option>
					<option>Plan Fibra Óptica 80mb(S/99)</option>
					<option>Plan Fibra Óptica 100mb(S/119)</option>
					<option>Plan Fibra Óptica 150mb(S/159)</option>
					<option>Otro </option>

				</select>

				<select required style={{height:"45px", marginTop:"20px"}} name='Distrito'>
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
				
				
				<ContenedorBotonCentrado>
					{formularioValido === true && <MensajeExito><Loader active inline='centered' /></MensajeExito>}

					<Boton type="submit">Enviar</Boton>
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
  )
}

export default Venta;