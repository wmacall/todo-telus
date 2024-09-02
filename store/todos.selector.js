import { createSelector } from '@reduxjs/toolkit';

export const todoState = createSelector((state) => state.todos);
