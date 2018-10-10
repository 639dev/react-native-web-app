import React from 'react';
import { AlertProvider } from './alert';

export const OneProvider = ({ children }) => <AlertProvider>{children}</AlertProvider>;
