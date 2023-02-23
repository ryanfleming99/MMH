import { useState, Fragment } from 'react'
import { useRecoilState } from "recoil"
import { modalStatus } from "../../atoms/isModalOpen"
import { Dialog, Transition } from '@headlessui/react'
import { doc, deleteDoc } from "firebase/firestore";
import { firestore, auth } from "../../lib/firebase/firebase"
import { useRouter } from "next/router";


const DeletePostModal = ({ postId }) => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const handlePostDelete = async () => {

        try {
            await deleteDoc(doc(firestore, "posts", postId));
            setIsOpen(false)
            router.reload(window.location.pathname)

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <div className="">
                <button
                    type="button"
                    onClick={openModal}
                    className="mx-auto w-full h-12 bg-btngray text-black font-bold text-lg py-2 px-4 rounded hover:bg-mainbg hover:border-2 hover:border-white transition ease-in-out delay-50 hover:text-white"
                >
                    Delete
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all text-center">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Are you sure?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Deleting a document is irreversible
                                        </p>
                                    </div>

                                    <div className=" grid grid-cols-2 gap-4 mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-4 py-2 text-md font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => handlePostDelete()}
                                        >
                                            Yes, delete
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default DeletePostModal