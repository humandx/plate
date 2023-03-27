import { PlateEditor, usePlateEditorRef, Value } from '@humandx/plate-common';
import { SuggestionEditorProps } from '../types';
import { useSuggestionActions } from './SuggestionProvider';

export const useSetActiveSuggestionId = () => {
  const editor = usePlateEditorRef<
    Value,
    PlateEditor & SuggestionEditorProps
  >();
  const setActiveSuggestionId = useSuggestionActions().activeSuggestionId();

  return (value: string | null) => {
    setActiveSuggestionId(value);
    editor.activeSuggestionId = value;
  };
};
