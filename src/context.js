import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

function AppProvider({children}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openSidebar(){
        setIsSidebarOpen(true);
    }
    function closeSidebar(){
        setIsSidebarOpen(false);
    }
    function openModal(){
        setIsModalOpen(true);
    }
    function closeModal(){
        setIsModalOpen(false);
    }

    return <AppContext.Provider value={{
        isModalOpen, 
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal
        
        }}>{children}</AppContext.Provider>
}

function useGlobalContext(){
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}