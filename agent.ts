import { createDeepAgent } from "deepagents";
import { internetSearch } from "./internetSearch";
import { ChatOllama } from "@langchain/ollama";

// System prompt to steer the agent to be an expert researcher
const researchInstructions = `You are an expert researcher. Your job is to conduct thorough research and then write a polished report.

You have access to an internet search tool as your primary means of gathering information.

## \`internet_search\`

Use this to run an internet search for a given query. You can specify the max number of results to return, the topic, and whether raw content should be included.
`;

async function main() {

  const llm = new ChatOllama({
    model: "gemma4:latest", // Your local Ollama model
    baseUrl: "http://localhost:11434", // Default Ollama URL
    temperature: 0.7,
  });

  const agent = createDeepAgent({
    // local Ollama model
    model: llm,
    tools: [internetSearch],
    systemPrompt: researchInstructions,
  });

  const result = await agent.invoke({
    messages: [{ role: "user", content: "What is langgraph?" }],
  });

  // Print the agent's response
  console.log(result.messages[result.messages.length - 1].content);
}

// Run the main function and handle errors
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
