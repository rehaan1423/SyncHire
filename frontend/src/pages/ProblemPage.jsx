import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems.js";
import Navbar from "../components/Navbar.jsx";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription.jsx";
import OutputPanel from "../components/OutputPanel.jsx";
import CodeEditorPanel from "../components/CodeEditorPanel.jsx";
import { executeCode } from "../lib/jdoodle.js";

import toast, { Toaster } from "react-hot-toast";
import confetti from "canvas-confetti";

function ProblemPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const activeProblemId = id && PROBLEMS[id] ? id : "two-sum";
    const currentProblem = PROBLEMS[activeProblemId];

    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [code, setCode] = useState(currentProblem.starterCode.javascript);
    const [output, setOutput] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setCode(currentProblem.starterCode[selectedLanguage]);
        setOutput(null);
    }, [activeProblemId]);

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setSelectedLanguage(newLang);
        setCode(currentProblem.starterCode[newLang]);
        setOutput(null);
    };

    const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`);

    const triggerConfetti = () => {
        confetti({
            particleCount: 80,
            spread: 250,
            origin: { x: 0.2, y: 0.6 },
        });

        confetti({
            particleCount: 80,
            spread: 250,
            origin: { x: 0.8, y: 0.6 },
        });
    };

    const normalizeOutput = (output) => {
        if (!output) return "";
        return output
            .trim()
            .split("\n")
            .map((line) =>
                line
                    .trim()
                    .replace(/\[\s+/g, "[")
                    .replace(/\s+\]/g, "]")
                    .replace(/\s*,\s*/g, ",")
            )
            .filter((line) => line.length > 0 && line !== "---")
            .join("\n");
    };

    const checkIfTestsPassed = (actualOutput, expectedOutput) => {
        const normalizedActual = normalizeOutput(actualOutput);
        const normalizedExpected = normalizeOutput(expectedOutput);

        return normalizedActual == normalizedExpected;
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        setOutput(null);

        let finalCodeToRun = code;
        const hiddenTestCode = currentProblem.hiddenTestCode?.[selectedLanguage];

        if (hiddenTestCode) {
            finalCodeToRun = code + "\n" + hiddenTestCode;
        }

        const result = await executeCode(selectedLanguage, finalCodeToRun);

        setOutput(result);
        setIsRunning(false);

        if (result.success) {
            const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
            const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

            if (testsPassed) {
                triggerConfetti();
                toast.success("All tests passed! Great job!");
            } else {
                toast.error("Tests failed. Check your output!");
            }
        } else {
            toast.error("Code execution failed!");
        }
    };

    return (
        <div className="h-screen bg-base-100 flex flex-col">
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />

            <div className="flex-1">
                <PanelGroup direction="horizontal">
                    {/* left panel- problem desc */}
                    <Panel defaultSize={40} minSize={30}>
                        <ProblemDescription
                            problem={currentProblem}
                            currentProblemId={activeProblemId} // Updated to use the derived ID
                            onProblemChange={handleProblemChange}
                            allProblems={Object.values(PROBLEMS)}
                        />
                    </Panel>

                    <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

                    {/* right panel- code editor & output */}
                    <Panel defaultSize={60} minSize={30}>
                        <PanelGroup direction="vertical">
                            {/* Top panel - Code editor */}
                            <Panel defaultSize={70} minSize={30}>
                                <CodeEditorPanel
                                    selectedLanguage={selectedLanguage}
                                    code={code}
                                    isRunning={isRunning}
                                    onLanguageChange={handleLanguageChange}
                                    onCodeChange={setCode}
                                    onRunCode={handleRunCode}
                                />
                            </Panel>

                            <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                            <Panel defaultSize={30} minSize={30}>
                                {/* Pass expectedOutput down as a prop! */}
                                <OutputPanel
                                    output={output}
                                    expectedOutput={currentProblem.expectedOutput[selectedLanguage]}
                                />
                            </Panel>
                        </PanelGroup>
                    </Panel>
                </PanelGroup>
            </div>
        </div>
    );
}

export default ProblemPage;