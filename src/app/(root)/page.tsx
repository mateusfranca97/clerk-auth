"use client"
import Modal from '@/components/ui/modal'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const SetupPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
          <Modal title='Teste' description='Teste' isOpen onClose={() => {}}>
            
          </Modal>
        </div>
      )
}

export default SetupPage