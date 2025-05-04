# Tasks for WebRTC React App

## 1. Project Setup
- [x] Initialize React project with TypeScript
- [x] Set up Zustand for state management
- [x] Set up Socket.io for signaling (if needed)
- [x] Configure ESLint, Prettier, and basic folder structure

## 1A. Firestore Signaling Server Integration
- [ ] Add Firebase to the project
- [ ] Initialize Firebase and Firestore
- [ ] Set up Firestore security rules for signaling
- [ ] Implement Firestore logic for room creation and joining
- [ ] Use Firestore for exchanging WebRTC signaling data (SDP, ICE)
- [ ] Sync peer list in real-time via Firestore

## 2. User Authentication & Lobby
- [ ] Simple username/nickname input
- [ ] Lobby/room creation and joining logic
- [ ] Display list of connected peers

## 3. WebRTC Signaling & Connection
- [ ] Implement signaling server with Socket.io
- [ ] Handle offer/answer/candidate exchange
- [ ] Support multiple peer connections (mesh topology)
- [ ] Manage peer connection lifecycle (connect/disconnect)

## 4. Video Chat
- [ ] Access and display local video stream
- [ ] Display remote video streams (multi-peer grid)
- [ ] Mute/unmute, camera on/off controls
- [ ] Handle stream addition/removal dynamically

## 5. Text Chat
- [ ] Peer-to-peer text messaging
- [ ] Display chat history per room/peer
- [ ] UI for sending/receiving messages

## 6. File Transfer
- [ ] Implement peer-to-peer file sending via WebRTC DataChannels
- [ ] UI for selecting and sending files
- [ ] Progress indicator for file transfers
- [ ] Handle file reception and download

## 7. Zustand State Management
- [ ] Design global state structure (peers, streams, chat, files)
- [ ] Implement actions/selectors for state updates

## 8. UI/UX
- [ ] Responsive layout for video grid and chat
- [ ] User feedback for connection status, errors, etc.
- [ ] Basic theming/styling

## 9. Testing & Debugging
- [ ] Test multi-peer connections
- [ ] Test file transfer with large files
- [ ] Handle edge cases (disconnects, errors)

## 10. Deployment
- [ ] Prepare production build
- [ ] Deploy signaling server (if separate)
- [ ] Deploy frontend (Vercel, Netlify, etc.)

---

Feel free to break down these tasks further as you progress! 