// Connecting Client Side Socket to the Server

import React from "react";
import socketio from "socket.io-client";

const uri = process.env.REACT_APP_API_URL;

export const socket = socketio.connect(uri);
export const SocketContext = React.createContext();
