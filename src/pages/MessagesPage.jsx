import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  MessageSquare, 
  Send, 
  Search, 
  User, 
  ExternalLink, 
  Handshake, 
  Sparkles, 
  CheckCheck, 
  ArrowLeft,
  Layers,
  ShieldCheck,
  Paperclip,
  Smile
} from 'lucide-react';

export const MessagesPage = () => {
  const { 
    conversations, 
    currentUser, 
    sendMessage, 
    users, 
    projects 
  } = useApp();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const targetUserId = searchParams.get('user');

  // Find active conversation based on URL param or default to first
  const [activeConvId, setActiveConvId] = useState(() => {
    if (targetUserId) {
      const match = conversations.find((c) => c.participantId === targetUserId);
      if (match) return match.id;
    }
    return conversations[0]?.id || null;
  });

  const [messageText, setMessageText] = useState('');
  const [filterSearch, setFilterSearch] = useState('');
  const messagesEndRef = useRef(null);

  // If URL changes with `?user=...`, switch conversation or create
  useEffect(() => {
    if (targetUserId) {
      const match = conversations.find((c) => c.participantId === targetUserId);
      if (match) {
        setActiveConvId(match.id);
      }
    }
  }, [targetUserId, conversations]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversations, activeConvId]);

  const activeConversation = conversations.find((c) => c.id === activeConvId) || conversations[0];
  const participantUser = users.find((u) => u.id === activeConversation?.participantId);

  // Filter conversation list
  const filteredConversations = conversations.filter((c) =>
    c.participantName.toLowerCase().includes(filterSearch.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(filterSearch.toLowerCase()) ||
    c.projectRef?.toLowerCase().includes(filterSearch.toLowerCase())
  );

  const handleSend = (e) => {
    e.preventDefault();
    if (!messageText.trim() || !activeConvId) return;

    sendMessage(activeConvId, messageText);
    setMessageText('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Messenger Box */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col md:flex-row h-[780px]">
          
          {/* LEFT PANE: Conversation List */}
          <div className="w-full md:w-80 lg:w-96 border-r border-slate-200 flex flex-col bg-slate-50/50 shrink-0">
            
            {/* Header & Search */}
            <div className="p-4 border-b border-slate-200 space-y-3 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h1 className="text-base font-bold text-slate-900">
                    Collaborations & Messages
                  </h1>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-teal-100 text-teal-800">
                  {conversations.length} Active
                </span>
              </div>

              {/* Search box */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter conversations or projects..."
                  value={filterSearch}
                  onChange={(e) => setFilterSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* List of Contacts */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {filteredConversations.map((conv) => {
                const isActive = conv.id === activeConvId;
                return (
                  <div
                    key={conv.id}
                    onClick={() => setActiveConvId(conv.id)}
                    className={`p-4 flex items-start gap-3 cursor-pointer transition-colors ${
                      isActive ? 'bg-blue-50/80 border-l-4 border-blue-600' : 'hover:bg-white'
                    }`}
                  >
                    <div className="relative shrink-0">
                      <img
                        src={conv.participantAvatar}
                        alt={conv.participantName}
                        className="w-11 h-11 rounded-full object-cover border border-slate-200"
                      />
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-900 truncate">
                          {conv.participantName}
                        </h4>
                        <span className="text-[10px] text-slate-400 shrink-0">
                          {conv.lastTimestamp}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-500 truncate font-medium">
                        {conv.participantRole}
                      </p>

                      {conv.projectRef && (
                        <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-orange-50 text-[10px] font-semibold text-[#ea580c] truncate max-w-full">
                          <Layers className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate">{conv.projectRef}</span>
                        </div>
                      )}

                      <p className="text-xs text-slate-600 line-clamp-1">
                        {conv.lastMessage}
                      </p>
                    </div>

                    {conv.unreadCount > 0 && (
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                        {conv.unreadCount}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom info */}
            <div className="p-3 bg-white border-t border-slate-200 text-center">
              <span className="text-[11px] text-slate-400 font-medium">
                Protected demo collaboration thread
              </span>
            </div>
          </div>

          {/* RIGHT PANE: Active Chat Window */}
          {activeConversation ? (
            <div className="flex-1 flex flex-col bg-white">
              
              {/* Chat Header */}
              <div className="p-4 border-b border-slate-200 flex items-center justify-between gap-3 bg-white/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={activeConversation.participantAvatar}
                      alt={activeConversation.participantName}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    {activeConversation.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-slate-900">
                        {activeConversation.participantName}
                      </h3>
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-[11px] text-slate-500">
                      {activeConversation.participantRole} • {activeConversation.online ? 'Active now' : 'Offline'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/profile/${activeConversation.participantId}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span className="hidden sm:inline">View Profile</span>
                  </Link>

                  <Link
                    to="/explore"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-xs font-semibold text-teal-800 transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Innovations</span>
                  </Link>
                </div>
              </div>

              {/* Collaboration Reference Callout */}
              {activeConversation.projectRef && (
                <div className="px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100 flex items-center justify-between text-xs text-slate-700">
                  <div className="flex items-center gap-2 truncate">
                    <Handshake className="w-4 h-4 text-[#ea580c] shrink-0" />
                    <span className="truncate">
                      <strong>Collaboration context:</strong> {activeConversation.projectRef}
                    </span>
                  </div>
                  <Link
                    to="/explore"
                    className="text-[#ea580c] font-bold hover:underline shrink-0 text-[11px] ml-2"
                  >
                    View Project Details
                  </Link>
                </div>
              )}

              {/* Messages Flow Area */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/40">
                <div className="text-center my-2">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-[11px] font-medium text-slate-500">
                    InnovateHub End-to-End Collaboration Channel
                  </span>
                </div>

                {activeConversation.messages.map((msg) => {
                  const isMine = msg.senderId === currentUser.id;

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isMine ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-md sm:max-w-lg p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                          isMine
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                      
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 px-1">
                        <span>{msg.timestamp}</span>
                        {isMine && <CheckCheck className="w-3 h-3 text-blue-500" />}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input Bar */}
              <form onSubmit={handleSend} className="p-3 sm:p-4 border-t border-slate-200 bg-white">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative flex items-center">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder={`Message ${activeConversation.participantName}...`}
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!messageText.trim()}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all shrink-0"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400">
              <MessageSquare className="w-12 h-12 mb-3 text-slate-300" />
              <p className="text-sm font-semibold text-slate-700">No conversation selected</p>
              <p className="text-xs text-slate-400 mt-1">Select an innovator from the list to start collaborating.</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
