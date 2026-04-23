import React, { useContext } from "react";
import { FiMessageSquare, FiUsers, FiStar } from "react-icons/fi";
import { ChatContext } from "../context/ChatContext";
const PersonalDashBoard = () => {
  const { messages, scheduled } = useContext(ChatContext);
    const totalMessages = messages.length;

  const activeChats = new Set(messages.map(m => m.contactId)).size;

  const freq = {};
  messages.forEach(m => {
    freq[m.contactId] = (freq[m.contactId] || 0) + 1;
  });

  const topContact =
    Object.keys(freq).length === 0
      ? "None"
      : Object.keys(freq).reduce((a, b) =>
          freq[a] > freq[b] ? a : b
        );
    const getInsight = () => {
    if (!messages.length) return "No activity";

    const hours = messages.map(m =>
      new Date(`1970-01-01T${m.time}`).getHours()
    );

    const count = {};
    hours.forEach(h => count[h] = (count[h] || 0) + 1);

    const peak = Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );

    return `Most active at ${peak}:00`;
  };
}