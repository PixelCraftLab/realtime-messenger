import React, { useContext } from "react";
import { FiMessageSquare, FiUsers, FiStar } from "react-icons/fi";
import { ChatContext } from "../context/ChatContext";
const PersonalDashBoard = () => {
  const { messages, scheduled } = useContext(ChatContext);
}