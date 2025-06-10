// src/contexts/WSContext.tsx
import React, {
  createContext,
  useEffect,
  useRef,
  ReactNode,
  FC,
  useContext,
} from "react";
import { io, Socket } from "socket.io-client";
import { SOCKET_URL } from "../config";

export interface SocketService {
  initializeSocket: () => void;
  emit: (event: string, data?: any) => void;
  on: (event: string, cb: (...args: any[]) => void) => void;
  off: (event: string) => void;
  removeListener: (event: string, cb?: (...args: any[]) => void) => void;
  disconnect: () => void;
}

// 1) Create context with correct generic type
export const WSContext = createContext<SocketService | undefined>(undefined);

interface WSProviderProps {
  children: ReactNode;
}

// 2) Define provider component with proper typing
export const WSProvider: FC<WSProviderProps> = ({ children }) => {
  // 3) Ref holds the Socket instance (or null)
  const socketRef = useRef<Socket | null>(null);

  // 4) Lazy initializer—connect only once
  const initializeSocket = () => {
    if (!socketRef.current) {
      socketRef.current = io(SOCKET_URL, { transports: ["websocket"] });
    }
  };

  useEffect(() => {
    initializeSocket();

    // 5) Cleanup on unmount
    return () => {
      socketRef.current?.disconnect();
      socketRef.current = null;
    };
  }, []);

  // 6) Wrapper methods using optional chaining
  const emit = (event: string, data?: any) => {
    socketRef.current?.emit(event, data);
  };

  const on = (event: string, cb: (...args: any[]) => void) => {
    socketRef.current?.on(event, cb);
  };

  const off = (event: string) => {
    socketRef.current?.off(event);
  };

  const removeListener = (event: string, cb?: (...args: any[]) => void) => {
    socketRef.current?.removeListener(event, cb);
  };

  const disconnect = () => {
    socketRef.current?.disconnect();
    socketRef.current = null;
  };

  // 7) Package everything into a single object
  const socketService: SocketService = {
    initializeSocket,
    emit,
    on,
    off,
    removeListener,
    disconnect,
  };

  // 8) Provide the service object via context
  return (
    <WSContext.Provider value={socketService}>
      {children}
    </WSContext.Provider>
  );
};

export const useWSocket = ()=>{
   const  socketService = useContext(WSContext)
   if(!socketService){
      throw new Error('useWSocket use in WSProvider')
   }
   return socketService
}