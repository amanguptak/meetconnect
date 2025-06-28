// src/contexts/WSContext.tsx
import React, {
  createContext,
  useEffect,
  useRef,
  ReactNode,
  FC,
  useContext,
} from 'react';
import { io, Socket } from 'socket.io-client';
import { SOCKET_URL } from "../config";

export interface SocketService {
  initializeSocket: () => void;
  emit: (event: string, data?: any) => void;
  on: (event: string, cb: (...args: any[]) => void) => void;
  off: (event: string, cb?: (...args: any[]) => void) => void;
  removeListener: (event: string, cb?: (...args: any[]) => void) => void;
  disconnect: () => void;
}

export const WSContext = createContext<SocketService | undefined>(undefined);

interface WSProviderProps {
  children: ReactNode;
}

export const WSProvider: FC<WSProviderProps> = ({ children }) => {
  const socketRef = useRef<Socket | null>(null);

  const initializeSocket = () => {
    if (!socketRef.current) {
      socketRef.current = io(SOCKET_URL, { transports: ["websocket"] });
    }
  };

  useEffect(() => {
    initializeSocket();

    return () => {
      socketRef.current?.disconnect();
      socketRef.current = null;
    };
  }, []);

  const emit = (event: string, data?: any) => {
    socketRef.current?.emit(event, data);
  };

  const on = (event: string, cb: (...args: any[]) => void) => {
    socketRef.current?.on(event, cb);
  };

  const off = (event: string, cb?: (...args: any[]) => void) => {
    if (cb) {
      socketRef.current?.off(event, cb);
    } else {
      socketRef.current?.off(event);
    }
  };

  const removeListener = (event: string, cb?: (...args: any[]) => void) => {
    socketRef.current?.removeListener(event, cb);
  };

  const disconnect = () => {
    socketRef.current?.disconnect();
    socketRef.current = null;
  };

  const socketService: SocketService = {
    initializeSocket,
    emit,
    on,
    off,
    removeListener,
    disconnect,
  };

  return (
    <WSContext.Provider value={socketService}>
      {children}
    </WSContext.Provider>
  );
};

export const useWSocket = () => {
  const socketService = useContext(WSContext);
  if (!socketService) {
    throw new Error("useWSocket must be used within a WSProvider");
  }
  return socketService;
};
