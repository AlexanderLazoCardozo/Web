import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Form, Grid,Input, Header, Icon, Modal } from 'semantic-ui-react';

import "./styles.css"

const FormularioSolicitud = () => {

  const [state, handleSubmit] = useForm("mbjwagor");
  const [open, setOpen] = React.useState(false)

  return (
    <>
    <div style={{marginTop:"20px", textAlign:"center", height:"800px"}}>
     <br /><br/>
     <b style={{color:"#3f2c74",fontSize:"55px"}}>¡PIDELO YA!</b> <br/><br/>
     <b style={{color:"#3f2c74",fontSize:"18px"}}>Completa el siguiente formulario y nos comunicaremos</b> <br/>
     <b style={{color:"#3f2c74",fontSize:"18px"}}>contigo de inmediato</b>
    <br /><br /><br />
    
    <Grid  centered columns={2}>

    <Form id="formPadre"  style={{ width:"50%"}} onSubmit={handleSubmit}>

        <Grid.Row centered columns={4}>
        
        <Grid.Column>
            <Form.Group id="primeraFila"  widths="equal">
            <Form.Field id='namesPadre' >
                <label id='names' style={{color:"#3f2c74"}}>
                    NOMBRES Y APELLIDOS
                </label>
                <Input 
                id="namesx"
                type="text" 
                name="names"  
                />
                <ValidationError 
                prefix="Names" 
                field="names"
                errors={state.errors}
                />
            </Form.Field>
            <Form.Field >
                <label style={{color:"#3f2c74"}}>
                    EMAIL
                </label>
                <Input 
                id="email"
                type="email" 
                name="email"
                />
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                />
            </Form.Field>
            </Form.Group>
        </Grid.Column>

        <Grid.Column>
            <Form.Group widths="equal">
            <Form.Field>
                <label style={{color:"#3f2c74"}}>
                    PLAN
                </label>
                <Input 
                id="plan"
                type="text" 
                name="plan"  
                />
                <ValidationError 
                prefix="Plan" 
                field="plan"
                errors={state.errors}
                />
            </Form.Field>
            <Form.Field>
                <label style={{color:"#3f2c74"}}>
                    VIVIENDA
                </label>
                <Input 
                id="vivienda"
                type="text" 
                name="vivienda"  
                />
                <ValidationError 
                prefix="Vivienda" 
                field="vivienda"
                errors={state.errors}
                />
            </Form.Field>
            </Form.Group>
        </Grid.Column>

        <Grid.Column>
            <Form.Group widths="equal">
            <Form.Field>
                <label  style={{color:"#3f2c74"}}>
                    DISTRITO
                </label>
                <Input 
                id="distrito"
                type="text" 
                name="distrito"  
                />
                <ValidationError 
                prefix="Distrito" 
                field="distrito"
                errors={state.errors}
                />
            </Form.Field>
            <Form.Field>
                <label  style={{color:"#3f2c74"}}>
                    CELULAR
                </label>
                <Input 
                id="celular"
                type="text" 
                name="celular"  
                />
                <ValidationError 
                prefix="Celular" 
                field="celular"
                errors={state.errors}
                />
            </Form.Field>
            </Form.Group>
        </Grid.Column>

        <Grid.Column>

            <Form.Group widths="equal">
            <Form.Field>
                <label  style={{color:"#3f2c74"}}>
                    DIRECCIÓN
                </label>
                <Input 
                id="direccion"
                type="text" 
                name="direccion"  
                />
                <ValidationError 
                prefix="Direccion" 
                field="direccion"
                errors={state.errors}
                />
            </Form.Field>
            </Form.Group>

        </Grid.Column>
        </Grid.Row>

            
            <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Button id="botonForm" style={{
                margin:"auto",
                fontSize:"25px",
                fontWeight:"bold",
                backgroundColor:"#7cbdd2",
                color:"white",
                borderRadius:"20px",
            }}  disabled={state.submitting}>ENVIAR</Button>}
            >
            <Header icon>
                <Icon name='send' />
                <h1>Formulario Enviado</h1>
            </Header>
            <Modal.Content>
                <h3 style={{textAlign:"center"}}>
                Nos pondremos en contacto contigo.
                </h3>
            </Modal.Content>
            <Modal.Actions style={{textAlign:"center"}}>
                <Button  color='green' inverted onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> OK
                </Button>
            </Modal.Actions>
            </Modal>

    </Form> 

  </Grid>

  </div>
  </>
)}

export default FormularioSolicitud;
