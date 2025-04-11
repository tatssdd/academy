import { Dialog } from 'radix-ui';
import './my-modal.css';
import React, { useRef, useState } from 'react';

const MyModal = () => {
  const [open, setOpen] = useState(false);
  const [isVisibleBtn, setVisibleBtn] = useState(false);
  const fileInputRef = useRef(null);

  const getDocs = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      setVisibleBtn(true);
    }
  };
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/35 inset-0 fixed" />
        <Dialog.Content className="max-w-xs max-h-s bg-indigo-500/50 p-6 rounded-md border-black absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <form className="flex flex-col gap-4 items-center">
            <p className="mb-1">here u can add yours files</p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden dialog__input"
            />
            <button
              type="button"
              className="border-black mt-1 hover: bg-white"
              onClick={getDocs}
            >
              Submit
            </button>
            {isVisibleBtn && <button type="submit">Ok</button>}
          </form>
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MyModal;
