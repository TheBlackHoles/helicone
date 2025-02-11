import React from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export const PROMPT_MODES = ["Pretty", "JSON", "Markdown"] as const;

function cycleMode(
  mode: (typeof PROMPT_MODES)[number]
): (typeof PROMPT_MODES)[number] {
  const index = PROMPT_MODES.indexOf(mode);
  return PROMPT_MODES[(index + 1) % PROMPT_MODES.length];
}

interface PlaygroundChatTopBarProps {
  mode: (typeof PROMPT_MODES)[number];
  setMode: (mode: (typeof PROMPT_MODES)[number]) => void;
  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;
  isPromptCreatedFromUi?: boolean;
}

export const PlaygroundChatTopBar: React.FC<PlaygroundChatTopBarProps> = ({
  mode,
  setMode,
  isEditMode,
  setIsEditMode,
  isPromptCreatedFromUi,
}) => {
  return (
    <div className="h-12 px-2 rounded-t-md flex flex-row items-center justify-between w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100  border-slate-200 dark:border-slate-900">
      <div className="flex flex-row items-center space-x-2 py-2">
        <div className="flex rounded-md overflow-hidden ">
          {isPromptCreatedFromUi && isPromptCreatedFromUi === true && (
            <button
              onClick={() => setIsEditMode(true)}
              className={`py-1 px-3 text-xs font-semibold ${
                !isEditMode
                  ? " text-slate-700 dark:text-slate-300"
                  : "bg-[#F1F5F9] border border-[#CBD5E1] dark:border-slate-700 dark:bg-black text-slate-700 dark:text-slate-300 py-2 ml-2 rounded-md"
              }`}
            >
              Edit
            </button>
          )}
          <button
            onClick={() => setIsEditMode(false)}
            className={`py-1 px-3 text-xs font-semibold ${
              isEditMode
                ? " text-slate-700 dark:text-slate-300"
                : "bg-[#F1F5F9] border border-[#CBD5E1] dark:border-slate-700 dark:bg-black text-slate-700 dark:text-slate-300 py-2 mr-2 rounded-md"
            }`}
          >
            Preview
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <button
          onClick={() => {
            setMode(cycleMode(mode));
          }}
          className="flex flex-row space-x-1 items-center hover:bg-slate-200 dark:hover:bg-slate-800 py-1 px-2 rounded-lg"
        >
          <ChevronUpDownIcon className="h-4 w-4" />
          <p className="text-xs font-semibold">{mode}</p>
        </button>
      </div>
    </div>
  );
};
