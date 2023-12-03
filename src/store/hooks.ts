// Import necessary hooks from the "react-redux" library
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

// Import types from the local "store.ts" file
import { AppDispatch, RootState } from "./store.ts";

// Define a type for the DispatchFunction, representing a function that returns the AppDispatch type
type DispatchFunction = () => AppDispatch;

// Export the useAppDispatch constant, which is assigned the useDispatch hook
export const useAppDispatch: DispatchFunction = useDispatch;

// Export the useAppSelector constant, which is assigned the useSelector hook with the RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
