Refernce: https://docs.langchain.com/oss/javascript/deepagents/quickstart

Used Local LLM - Gemma with Ollama.

Used Tavily - real‑time search engine for AI agents
            - create a tavily account and use the api key

Run npm install and then run npx ts-node agent.ts in terminal

If you want to change the content for the agent, add to below code in agent.ts

```
const result = await agent.invoke({
    messages: [{ role: "user", content: "What is langgraph?" }],
  });
```
