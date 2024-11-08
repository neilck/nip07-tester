"use client";

import React, { useState } from "react";

type FunctionCheckerProps = {
  fn: ((...args: any[]) => any) | undefined;
  functionName: string;
  parameterCount: number;
};

const FunctionChecker: React.FC<FunctionCheckerProps> = ({
  fn,
  functionName,
  parameterCount,
}) => {
  const [parameters, setParameters] = useState<string[]>(
    Array(parameterCount).fill("")
  );
  const [result, setResult] = useState<any>(null);

  const handleRunFunction = async () => {
    if (fn) {
      try {
        if (!window.nostr) {
          setResult("Error: window.nostr not found.");
          return;
        }

        const boundFn = fn.bind(window.nostr);
        const res = await boundFn(...parameters);
        setResult(res);
      } catch (error) {
        setResult(`Error: ${error}`);
      }
    }
  };

  const handleParameterChange = (index: number, value: string) => {
    const newParameters = [...parameters];
    newParameters[index] = value;
    setParameters(newParameters);
  };

  const clearClickHandler = () => {
    setResult(null);
  };

  return (
    <div className="p-4 flex flex-col">
      <div className="flex flex-row justify-between items-center w-full gap-3">
        <h3 className="flex-none w-[180px]">{functionName}</h3>

        <div className="flex gap-2 w-full">
          {Array.from({ length: parameterCount }).map((_, index) => (
            <input
              key={index}
              type="text"
              className="px-2 py-1 border border-gray-300 rounded flex-grow w-full"
              disabled={!fn}
              placeholder={`Param ${index + 1}`}
              value={parameters[index]}
              onChange={(e) => handleParameterChange(index, e.target.value)}
            />
          ))}
        </div>

        <button
          className={`px-4 py-1 w-[60px] rounded  ${
            fn
              ? "bg-blue-500 text-white"
              : "bg-red-500 text-white cursor-not-allowed"
          }`}
          onClick={handleRunFunction}
          disabled={!fn}
        >
          {fn ? "Run" : "N/A"}
        </button>
      </div>
      {result && (
        <div className="bg-gray-100 border rounded p-2 mt-2">
          <div className="w-full flex items-start">
            <div className="flex-grow flex items-center min-h-[40px]">
              <pre className="break-words whitespace-pre-wrap">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
            <div className="w-[40px] h-[40px] bg-background p-1 border-2 flex items-center justify-center">
              <button
                className="text-lg font-bold text-center w-full"
                onClick={clearClickHandler}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionChecker;
