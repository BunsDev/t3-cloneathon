# Core Requirements

> This document outlines the **core requirements** for the AI chat application. These features represent the **minimum functionality** needed to qualify for a prize for the [T3 Cloneathon](https://cloneathon.t3.chat).

<img style="width: 100%; height: auto; justify-content: center; align-items: center;" src="../assets/core-requirements.png" alt="core-requirements" />

## 1. Chat with Various LLMs

> Implement support for multiple language models and providers.

### Implementation Details

- **Model Integration**:

  - Connect to multiple AI providers (`OpenAI`, `Anthropic`, `Mistral`, `Gemini`, etc.).
  - Support various model versions from each provider.
  - Create an abstraction layer to handle different API formats and requirements

- **API Management**:

  - Secure handling of API keys using **environment variables**.
  - Implementation of **rate limiting and usage tracking**.
  - F**allback mechanisms** when specific models are unavailable.

- **Model Selection**:

  - User interface for selecting **preferred model**.
  - Model switching without losing conversation context.
  - Displaying model capabilities and limitations.

- **Response Handling**:
  - Support for **streaming responses** when available.
  - Proper **error handling** for failed requests.
  - **Content filtering** options based on model capabilities.

### User Experience (UX)

- **Model Selection UI**: Clean dropdown or card-based interface for choosing models.
- **Transparent Indicators**: Visual feedback showing which model is currently active.
- **Performance Metrics**: Optional display of response times and token usage.
- **Model Comparison**: Ability to ask the same question to different models side by side.

## 2. Authentication & Sync

> User authentication with chat history synchronization.
> 
<img style="width: 100%; display: flex; margin: auto; height: 464px; object-fit: cover; justify-content: center; align-items: center; margin-bottom: 1rem; margin-top: 1rem;" src="../assets/weird-flex.png" alt="weird-flex" />

### Implementation Details

- **Authentication Methods**:
  - Email/password authentication.
  - OAuth integration with popular providers (`Google`, `GitHub`, etc.).
  - Session management and secure token handling.
  - Secure password storage using **bcrypt**.
  - JK, we are using **Clerk**, so don't need to reinvent the wheel, but we should still implement it, then erase it as a fl3x (_if time permits_).



- **User Management**:

  - User **profiles** with customizable settings.
  - Role-based **access control** if needed.
  - Account **recovery mechanisms**.

- **Chat Synchronization**:

  - Real-time **synchronization** across devices.
  - Conflict resolution for simultaneous edits.
  - Offline support with **local storage** fallback.

- **Data Storage**:
  - Secure database for user data and chat history.
  - Encryption for sensitive information.
  - Regular **backups** and **data recovery options**.

### User Experience (UX)

- **Seamless Login**: Straightforward authentication flow with minimal friction.
- **Cross-device Access**: Consistent experience across multiple devices.
- **Persistent Sessions**: Maintaining logged-in state appropriately.
- **History Access**: Intuitive interface for accessing and searching past conversations.
- **Privacy Controls**: Options for users to manage or delete their data (EU GDPR — iykyk).

## 3. Chat Interface

> Provide an intuitive and responsive chat interface for user interactions.

### Implementation Details

- **Message Components**:

  - User and AI message bubbles with clear visual distinction.
  - Support for markdown formatting in messages.
  - Timestamps and read receipts (`cha-ching`).

- **Input Features**:
  - Text input with **auto-complete** and **suggestions**.
  - Support for keyboard shortcuts (`ctrl + enter`).
  - Character/token count indicators.

### User Experience (UX)

- **Clean Design**: Minimalist interface with focus on the conversation.
- **Responsive Layout**: Adapts to different screen sizes and orientations.
- **Accessibility**: Keyboard navigation and screen reader support.
- **Theme Support**: Light and dark mode options.

## 4. Message History

> Store and display conversation history for ongoing context.

### Implementation Details

- **Storage Solution**:

  - Efficient database schema for conversation storage.
  - Pagination for long conversations.
  - Message threading capabilities.

- **Context Management**:
  - Maintaining conversation context across sessions.
  - Context window optimization for token limitations.
  - Support for conversation summarization.

### User Experience (UX)

- **Conversation List**: Easy-to-navigate list of past conversations.
- **Search Functionality**: Find specific messages or conversations quickly.
- **History Organization**: Options to categorize or tag conversations.
- **Export Options**: Ability to export conversations in common formats.

## 5. Real-time Updates

> Provide instant feedback and updates to enhance user experience.

### Implementation Details

- **Websocket Integration**:

  - Real-time message delivery.
  - Typing indicators.
  - Online status indicators.

- **Notification System**:
  - In-app notifications.
  - Browser notifications (`with permission`, ofc).
  - Email digests for _important_ updates...😏

### User Experience (UX)

- **Instant Feedback**: Visual cues for message delivery and reading.
- **Typing Indicators**: Show when AI is generating a response.
- **Status Updates**: Clear indicators for connection status.

## 6. Responsive Design

> Ensure the application works well across all device types and screen sizes.

### Implementation Details

- **Mobile-First Approach**:

  - Touch-friendly interface elements.
  - Efficient use of screen real estate.
  - Consideration for network constraints.

- **Cross-Browser Compatibility**:
  - Testing across major browsers (Chrome, Firefox, Safari, Edge, etc.).
  - Progressive enhancement for newer features.
  - Fallbacks for older browsers (IE 11, etc.).

### User Experience (UX)

- **Consistent Experience**: Similar functionality across devices.
- **Adaptive Layout**: UI elements that reposition based on screen size.
- **Touch Optimization**: Appropriately sized touch targets for mobile.
- **Offline Support**: Basic functionality when network connectivity is limited.

---

## Technical Implementation Guidelines

- Build using `Next.js` with the App Router for optimal performance and SEO.
- Use `Shadcn UI` components styled with `Tailwind CSS` for consistent design.
- Follow `Prisma` schema design best practices for the database layer.
- Implement proper state management using `React Context`.
- Ensure all code follows the Airbnb Style Guide with named exports for components.
- Add comprehensive error handling and logging throughout the application.
