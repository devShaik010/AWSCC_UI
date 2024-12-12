import React, { useState, useEffect, useRef } from "react";
import { pdfContent } from "./pdfContent.js";
import './Bot.css';

const GROQ_API_URL = process.env.REACT_APP_GROQ_API_URL;
const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;


function Bot() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to control chat window visibility

  const messagesEndRef = useRef(null); // Reference for scrolling
  const inputRef = useRef(null); // Reference for focusing input

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom whenever messages change
  }, [messages]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const findRelevantContent = (query) => {
    const keywords = query.toLowerCase().split(" ");
    let relevantContent = "";

    Object.entries(pdfContent).forEach(([filename, content]) => {
      const lowerContent = content.toLowerCase();
      if (keywords.some((keyword) => lowerContent.includes(keyword))) {
        relevantContent += `${content}\n\n`;
      }
    });

    return relevantContent.trim();
  };

  const generateAnswer = async (query, context) => {
    try {
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `
              -You are a helpful assistant for AWS Cloud Club MJCET but don't mention about it in every response, simply answer what the user asks.
              -Answer the following question based on the given context. If the answer is not in the context, say 'I don't have enough information to answer that question.'
              -Do not start your answer with "Based on the given context", do not mention unnecessary information. Just answer what the user asks for.
              -If you do not have any idea about the answer, say "I'm not sure about that" and don't try to make up an answer. DO NOT TELL THAT YOUR CONTEXT DOES NOT HAVE AN ANSWER.
              -DONT MENTION ABOUT THE CONTEXT GIVEN TO YOU. 
              -KEEP YOUR ANSWERS VERY SHORT AND PRECISE.
              -MAKE YOUR ANSWER VERY CONCISE.
              -Do not answer irrelevant, uncensored questions."

Context: ${context}

Question: ${query}

Answer:`,
            },
          ],
          model: "mixtral-8x7b-32768",
        }),
      });

      const result = await response.json();
      return result.choices[0].message.content;
    } catch (error) {
      console.error("Error in API request:", error);
      throw new Error("Failed to generate answer.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query) return;

    setLoading(true);

    const relevantContent = findRelevantContent(query);
    const newMessages = [...messages, { type: "user", content: query }];

    if (relevantContent) {
      try {
        const generatedAnswer = await generateAnswer(query, relevantContent);
        newMessages.push({ type: "bot", content: generatedAnswer });
      } catch (error) {
        newMessages.push({ type: "bot", content: "Sorry, there was an error generating the answer. Please try again." });
      }
    } else {
      newMessages.push({ type: "bot", content: "I don't have enough information to answer that question." });
    }

    setMessages(newMessages);
    setQuery("");
    setLoading(false);

    // Focus on input after message is sent
    inputRef.current?.focus();
  };

  return (
    <div className="chat-container">
      {!isChatOpen ? (
        // Initial Chat Button
        <button className="chat-button" onClick={() => setIsChatOpen(true)}>
          💬 Chat
        </button>
      ) : (
        // Chat Window
        <div className="chat-window">
          <div className="chat-header">
            <h2>MJCET AI Bot</h2>
            <button className="close-button" onClick={() => setIsChatOpen(false)}>✖</button>
          </div>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.type === "user" ? "message user" : "message bot"}>
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Element for scrolling to bottom */}
          </div>
          <form onSubmit={handleSubmit} className="chat-input">
            <input
              ref={inputRef} // Set ref to input for auto-focus
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="Ask a question..."
              disabled={loading}
            />
            <button type="submit" disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Bot;
