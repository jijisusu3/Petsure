import { useState } from 'react'
import Modal from '../common/Modal'
import PrivacyPolicyContents from './PrivacyPolicyContents'

export default function MeetingEntrySection() {
  const [modalState, setModalState] = useState(false)
  const handleModal = () => setModalState(!modalState)

  const contents = {
    content: (
      <PrivacyPolicyContents handleModal={handleModal}></PrivacyPolicyContents>
    ),
  }

  return (
    <>
      <Modal
        opened={modalState}
        handleModal={handleModal}
        contents={contents}
        locked
      />
    </>
  )
}
