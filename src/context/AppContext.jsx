import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  INITIAL_USERS, 
  INITIAL_PROJECTS, 
  INITIAL_POSTS, 
  INITIAL_CONVERSATIONS, 
  SDG9_STATS 
} from '../data/initialData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Load from LocalStorage or fallback to initial data
  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('innovatehub_users');
      return saved ? JSON.parse(saved) : INITIAL_USERS;
    } catch {
      return INITIAL_USERS;
    }
  });

  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('innovatehub_projects');
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem('innovatehub_posts');
      return saved ? JSON.parse(saved) : INITIAL_POSTS;
    } catch {
      return INITIAL_POSTS;
    }
  });

  const [conversations, setConversations] = useState(() => {
    try {
      const saved = localStorage.getItem('innovatehub_conversations');
      return saved ? JSON.parse(saved) : INITIAL_CONVERSATIONS;
    } catch {
      return INITIAL_CONVERSATIONS;
    }
  });

  // UI state
  const [toasts, setToasts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSDGModalOpen, setIsSDGModalOpen] = useState(false);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] = useState(false);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem('innovatehub_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('innovatehub_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('innovatehub_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('innovatehub_conversations', JSON.stringify(conversations));
  }, [conversations]);

  // Toast notifier
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const currentUser = users.find((u) => u.id === 'user-current') || users[0];

  // User helper
  const getUser = (idOrUsername) => {
    if (!idOrUsername || idOrUsername === 'current') return currentUser;
    return users.find(
      (u) => u.id === idOrUsername || u.username.toLowerCase() === idOrUsername.toLowerCase()
    ) || null;
  };

  // Follow / Unfollow user
  const toggleFollowUser = (userId) => {
    if (userId === 'user-current') return;

    setUsers((prevUsers) =>
      prevUsers.map((u) => {
        if (u.id === userId) {
          const willFollow = !u.isFollowing;
          showToast(willFollow ? `Now following ${u.name}` : `Unfollowed ${u.name}`, 'info');
          return {
            ...u,
            isFollowing: willFollow,
            followersCount: willFollow ? u.followersCount + 1 : Math.max(0, u.followersCount - 1),
          };
        }
        if (u.id === 'user-current') {
          return {
            ...u,
            followingCount: u.followingCount + 1,
          };
        }
        return u;
      })
    );
  };

  // Post Interactions: Like
  const toggleLikePost = (postId) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const isLiked = !post.isLiked;
          const likesCount = isLiked ? post.likesCount + 1 : Math.max(0, post.likesCount - 1);
          return { ...post, isLiked, likesCount };
        }
        return post;
      })
    );
  };

  // Post Interactions: Bookmark
  const toggleBookmarkPost = (postId) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const isBookmarked = !post.isBookmarked;
          const bookmarksCount = isBookmarked ? post.bookmarksCount + 1 : Math.max(0, post.bookmarksCount - 1);
          showToast(isBookmarked ? 'Post saved to your bookmarks' : 'Post removed from bookmarks', 'info');
          return { ...post, isBookmarked, bookmarksCount };
        }
        return post;
      })
    );
  };

  // Post Interactions: Add comment
  const addPostComment = (postId, text) => {
    if (!text.trim()) return;
    const newComment = {
      id: 'c-' + Date.now(),
      authorId: currentUser.id,
      authorName: currentUser.name,
      authorAvatar: currentUser.avatar,
      authorRole: currentUser.role,
      content: text.trim(),
      timestamp: 'Just now'
    };

    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...(post.comments || []), newComment]
          };
        }
        return post;
      })
    );
    showToast('Comment posted successfully!');
  };

  // Create new post
  const createNewPost = ({ content, image, sdgTarget = '9.4', hashtags = [] }) => {
    if (!content.trim()) return false;

    const newPost = {
      id: 'post-' + Date.now(),
      authorId: currentUser.id,
      authorName: currentUser.name,
      authorRole: currentUser.role,
      authorAvatar: currentUser.avatar,
      authorOrg: currentUser.organization,
      timestamp: 'Just now',
      content: content.trim(),
      image: image || null,
      sdgTarget: sdgTarget || '9.4',
      hashtags: hashtags.length > 0 ? hashtags : ['#Innovation', '#SDG9'],
      likesCount: 1,
      isLiked: true,
      bookmarksCount: 0,
      isBookmarked: false,
      comments: []
    };

    setPosts((prev) => [newPost, ...prev]);
    showToast('Your innovation post is now live in the Community Feed!');
    return true;
  };

  // Project Interactions: Like
  const toggleLikeProject = (projectId) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const isLiked = !proj.isLiked;
          const likesCount = isLiked ? proj.likesCount + 1 : Math.max(0, proj.likesCount - 1);
          return { ...proj, isLiked, likesCount };
        }
        return proj;
      })
    );
  };

  // Project Interactions: Bookmark
  const toggleBookmarkProject = (projectId) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const isBookmarked = !proj.isBookmarked;
          const bookmarksCount = isBookmarked ? proj.bookmarksCount + 1 : Math.max(0, proj.bookmarksCount - 1);
          showToast(isBookmarked ? 'Project saved to your showcase!' : 'Project removed from bookmarks', 'info');
          return { ...proj, isBookmarked, bookmarksCount };
        }
        return proj;
      })
    );
  };

  // Create new project
  const createNewProject = (projectData) => {
    const newProj = {
      id: 'proj-' + Date.now(),
      title: projectData.title,
      subtitle: projectData.subtitle || 'Advancing sustainable industrial technologies for SDG 9',
      category: projectData.category || 'Sustainable Infrastructure',
      sdgTarget: projectData.sdgTarget || '9.4',
      status: projectData.status || 'Prototype',
      creatorId: currentUser.id,
      creatorName: currentUser.name,
      creatorRole: currentUser.role,
      creatorAvatar: currentUser.avatar,
      image: projectData.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        projectData.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80'
      ],
      problem: projectData.problem || 'Outdated industrial infrastructure lacks real-time efficiency and sustainable materials.',
      solution: projectData.solution || 'A modern technological system engineered to fulfill UN SDG 9 targets.',
      techStack: projectData.techStack || ['IoT', 'Sustainable Materials', 'Edge AI'],
      sdgImpact: {
        metrics: [
          { label: 'Projected Carbon Reduction', value: '35% Estimated' },
          { label: 'Resource Efficiency', value: '+40%' },
          { label: 'SDG 9 Target', value: `Target ${projectData.sdgTarget || '9.4'}` }
        ],
        description: projectData.sdgImpactDescription || 'Pioneering clean technology and resilient industrial workflows.'
      },
      likesCount: 1,
      isLiked: true,
      bookmarksCount: 0,
      isBookmarked: false,
      collaboratorsCount: 1,
      tags: projectData.tags || ['#Innovation', '#SDG9', '#Industry40']
    };

    setProjects((prev) => [newProj, ...prev]);
    showToast('New innovation project published to Explore directory!');
    return newProj.id;
  };

  // Messages: Send message
  const sendMessage = (convId, text) => {
    if (!text.trim()) return;

    const newMsg = {
      id: 'm-' + Date.now(),
      senderId: currentUser.id,
      text: text.trim(),
      timestamp: 'Just now'
    };

    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === convId) {
          return {
            ...c,
            lastMessage: text.trim(),
            lastTimestamp: 'Just now',
            messages: [...c.messages, newMsg]
          };
        }
        return c;
      })
    );

    // Simulated realistic response from innovator after 1.8 seconds!
    setTimeout(() => {
      const conv = conversations.find((c) => c.id === convId);
      if (!conv) return;

      const responses = [
        "Thanks for reaching out! That connects directly with what we are working on for SDG 9.",
        "Great point! Let's schedule a call to review the architectural specs.",
        "I've shared the dataset with your profile. Looking forward to collaborating on this sustainable solution!",
        "Brilliant idea. We can integrate your telemetry module into our next prototype iteration."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const replyMsg = {
        id: 'reply-' + Date.now(),
        senderId: conv.participantId,
        text: randomResponse,
        timestamp: 'Just now'
      };

      setConversations((prevList) =>
        prevList.map((c) => {
          if (c.id === convId) {
            return {
              ...c,
              lastMessage: randomResponse,
              lastTimestamp: 'Just now',
              messages: [...c.messages, replyMsg]
            };
          }
          return c;
        })
      );
      showToast(`New message from ${conv.participantName}!`, 'info');
    }, 1800);
  };

  // Collaboration request
  const requestCollaboration = ({ projectId, recipientId, note, skillsOffered }) => {
    const targetUser = users.find((u) => u.id === recipientId);
    const targetProject = projects.find((p) => p.id === projectId);

    if (!targetUser) return;

    // Check if conversation already exists or create new
    let existingConv = conversations.find((c) => c.participantId === recipientId);

    const messageText = `🤝 Collaboration Request: "${targetProject ? targetProject.title : 'SDG 9 Initiative'}"\n\nSkills offered: ${skillsOffered || 'Full Stack & IoT'}\n\nNote: ${note || 'I would love to collaborate on advancing this SDG 9 milestone!'}`;

    if (existingConv) {
      sendMessage(existingConv.id, messageText);
    } else {
      const newConv = {
        id: 'conv-' + Date.now(),
        participantId: targetUser.id,
        participantName: targetUser.name,
        participantAvatar: targetUser.avatar,
        participantRole: targetUser.role,
        online: true,
        lastMessage: 'Collaboration Request sent',
        lastTimestamp: 'Just now',
        unreadCount: 0,
        projectRef: targetProject ? targetProject.title : 'Collaboration',
        messages: [
          {
            id: 'm-init-' + Date.now(),
            senderId: currentUser.id,
            text: messageText,
            timestamp: 'Just now'
          }
        ]
      };
      setConversations((prev) => [newConv, ...prev]);
    }

    // Increment collaborators count on project
    if (projectId) {
      setProjects((prev) =>
        prev.map((p) => {
          if (p.id === projectId) {
            return { ...p, collaboratorsCount: p.collaboratorsCount + 1 };
          }
          return p;
        })
      );
    }

    showToast(`Collaboration request sent to ${targetUser.name}!`);
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        users,
        projects,
        posts,
        conversations,
        toasts,
        searchQuery,
        setSearchQuery,
        isSDGModalOpen,
        setIsSDGModalOpen,
        isCreatePostModalOpen,
        setIsCreatePostModalOpen,
        isCreateProjectModalOpen,
        setIsCreateProjectModalOpen,
        showToast,
        removeToast,
        getUser,
        toggleFollowUser,
        toggleLikePost,
        toggleBookmarkPost,
        addPostComment,
        createNewPost,
        toggleLikeProject,
        toggleBookmarkProject,
        createNewProject,
        sendMessage,
        requestCollaboration,
        stats: SDG9_STATS
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
