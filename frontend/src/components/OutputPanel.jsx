function OutputPanel({ output, expectedOutput }) {
  // A tiny helper to strip spaces/brackets for strict comparison in the UI
  const normalize = (str) => {
    return (str || "")
      .trim()
      .replace(/\[\s+/g, "[")
      .replace(/\s+\]/g, "]")
      .replace(/\s*,\s*/g, ",");
  };

  const renderOutput = () => {
    // 1. No output yet
    if (output === null) {
      return <p className="text-base-content/50 text-sm">Click "Run Code" to see the output here...</p>;
    }

    // 2. Compilation or runtime error
    if (!output.success) {
      return (
        <div>
          {output.output && (
            <pre className="text-sm font-mono text-base-content whitespace-pre-wrap mb-2">
              {output.output}
            </pre>
          )}
          <pre className="text-sm font-mono text-error whitespace-pre-wrap">{output.error}</pre>
        </div>
      );
    }

    // 3. Structured Test Case Output (The LeetCode Magic!)
    if (output.output.includes("---")) {
      // Split actual and expected strings into arrays of individual test case strings
      const actualCases = output.output.split("---").map((s) => s.trim()).filter((s) => s.length > 0);
      const expectedCases = expectedOutput
        ? expectedOutput.split("\n").map((s) => s.trim()).filter((s) => s.length > 0)
        : [];

      return (
        <div className="flex flex-col gap-4">
          {actualCases.map((actual, index) => {
            const expected = expectedCases[index] || "";
            const isPassed = normalize(actual) === normalize(expected);

            return (
              <div key={index} className="border border-base-300 rounded-md p-4 bg-base-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-bold text-sm">Testcase {index + 1}</span>
                  {isPassed ? (
                    <span className="px-2 py-1 bg-success/20 text-success rounded text-xs font-bold">
                      Accepted
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-error/20 text-error rounded text-xs font-bold">
                      Wrong Answer
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-base-content/70 mb-1 font-semibold">Your Output:</div>
                    <div className="bg-base-300 px-3 py-2 rounded-md font-mono text-sm shadow-inner overflow-x-auto">
                      {actual}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-base-content/70 mb-1 font-semibold">Expected Output:</div>
                    <div className="bg-base-300 px-3 py-2 rounded-md font-mono text-sm shadow-inner overflow-x-auto">
                      {expected}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // 4. Fallback (If user hasn't added `cout << "---" << endl;` in their C++ code yet)
    return <pre className="text-sm font-mono text-success whitespace-pre-wrap">{output.output}</pre>;
  };

  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm">
        Output
      </div>
      <div className="flex-1 overflow-auto p-4">
        {renderOutput()}
      </div>
    </div>
  );
}

export default OutputPanel;