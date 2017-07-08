import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const D3Modal = (props) => (
    <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>{props.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.photo} />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default D3Modal;
