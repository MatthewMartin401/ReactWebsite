const ModalContext = createContext()
const [isModelOpen, setIsModalOpen] = useState(false)
const openModal = () => {
    setIsModalOpen(true)
}
const closeModal = () => {
    setIsModalOpen(false)
}
const contextValue = {
    isModelOpen,
    openModal,
    closeModal
}

const useModal = () => {
    const context = useContext(ModalContext)
    if(!context){
        throw new Error("use modal within a ModalProvider");
    }
    return context
}

return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>




const Modal = () => {
    const {isModal, closeModal} = useModal()  //Name sensitive
    return(
        <div className={`modal${isModal ? "open" : "close"}`}>  // Changes classes that have different style settings in css
        
        </div>
    )
}