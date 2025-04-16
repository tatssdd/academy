import * as Dialog from '@radix-ui/react-dialog';
import './modal.css';

const MyModal = ({ data, modalType, isOpen, onClose, onRefresh }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/35 inset-0 fixed' />

        <Dialog.Content className='fixed top-1/2 left-1/2 bg-white p-6 rounded shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-[1000] min-w-lg'>
          <form>
            <Dialog.Title className='mb-4 font-bold text-lg'>
              {modalType === 'comments' ? 'Post Comments' : 'Post Info'}
            </Dialog.Title>
            {modalType === 'info' && data && (
              <>
                <h2 className='text-lg font-semibold'>
                  <strong>Title:</strong> {data.title}
                </h2>
                <p>
                  <strong>User ID:</strong> {data.userId}
                </p>
                <p>
                  <strong>Body:</strong> {data.body}
                </p>
              </>
            )}
            {modalType === 'comments' && data && (
              <>
                {data.map((comment) => (
                  <div key={comment.id} className='mb-2'>
                    <p>
                      <strong>{comment.name}</strong>: {comment.body}
                    </p>
                  </div>
                ))}
              </>
            )}
            {modalType === 'comments' && (
              <button
                type='button'
                className='border border-black mt-1 px-4 py-2'
                onClick={onRefresh}
              >
                Refresh
              </button>
            )}
          </form>
          <Dialog.Description />
          <Dialog.Close asChild>
            <button className='mt-4 px-4 py-2 border border-black rounded hover:bg-gray-200'>
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MyModal;
