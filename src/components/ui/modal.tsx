"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
  const onChange = ( open: boolean) => {
    if (!open) {
        onClose();
    }
  }
  return(
    <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogDescription>
                <DialogHeader>
                        {description}
                </DialogHeader>
            </DialogDescription>
            <div>
                {children}
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default Modal