// 'use client';

// import {
//   Conversation,
//   ConversationContent,
//   ConversationEmptyState,
//   ConversationScrollButton,
// } from '@/components/ai-elements/conversation';


// import { Actions, Action } from '@/components/ai-elements/actions';
// import { ThumbsUpIcon,CopyIcon,RefreshCcwIcon } from 'lucide-react';


// import { Message, MessageContent } from '@/components/ai-elements/message';
// import {
//   PromptInput,
//   PromptInputTextarea,
//   PromptInputSubmit,
// } from '@/components/ai-elements/prompt-input';
// import { MessageSquare } from 'lucide-react';
// import { useState } from 'react';
// import { useChat } from '@ai-sdk/react';
// import { Response } from '@/components/ai-elements/response';

// const AiConversation = () => {
//   const [input, setInput] = useState('');
//   const { messages, sendMessage, status, } = useChat();

//   const handleSubmit = (e: React.FormEvent) => {
//     // e.preventDefault();
//     if (input.trim()) {
//       sendMessage({ text: input });
//       setInput('');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
//       <div className="flex flex-col h-full">
//         <Conversation>
//           <ConversationContent>
//             {messages.length === 0 ? (
//               <ConversationEmptyState
//                 icon={<MessageSquare className="size-12" />}
//                 title="Start a conversation"
//                 description="Type a message below to begin chatting"
//               />
//             ) : (
//               messages.map((message) => (
//                 <Message from={message.role} key={message.id}>
//                   <MessageContent>
//                     {message.parts.map((part, i) => {
//                       switch (part.type) {
//                         case 'text': // we don't use any reasoning or tool calls in this example
//                           return (
//                             <Response key={`${message.id}-${i}`}>
//                               {part.text}
//                             </Response>
//                           );
//                         default:
//                           return null;
//                       }
//                     })}  
//                   </MessageContent>
//                 </Message>



                
//               ))
//             )}




//           </ConversationContent>
//           <ConversationScrollButton />
//         </Conversation>

//         <PromptInput
//           onSubmit={handleSubmit}
//           className="mt-4 w-full max-w-2xl mx-auto relative"
//         >
//           <PromptInputTextarea
//             value={input}
//             placeholder="Say something..."
//             onChange={(e) => setInput(e.currentTarget.value)}
//             className="pr-12"
//           />
//           <PromptInputSubmit
//             status={status === 'streaming' ? 'streaming' : 'ready'}
//             disabled={!input.trim()}
//             className="absolute bottom-1 right-1"
//           />
//         </PromptInput>
//       </div>
//     </div>
//   );
// };

// export default AiConversation;




'use client';
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Response } from '@/components/ai-elements/response';


 import React, { Fragment } from 'react';


import { Actions, Action } from '@/components/ai-elements/actions';
import { ThumbsUpIcon } from 'lucide-react';
import { RefreshCcwIcon, CopyIcon } from 'lucide-react';


export const ConversationDemo = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status,regenerate } = useChat();
  const handleSubmit = (message: { text: string }) => {
    if (message.text.trim()) {
      sendMessage({ text: message.text });
      setInput('');
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      {/* We'll build the content here step by step */}

<div className="flex flex-col h-full">
      <Conversation>
        {/* <ConversationContent>
          Messages will go here
        </ConversationContent> */}

<ConversationContent>
{messages.length === 0 ? (
  <ConversationEmptyState
    icon={<MessageSquare className="size-12" />}
    title="Start a conversation"
    description="Type a message below to begin chatting"
  />
) : (
  messages.map((message, idx) => {
    const isLastMessage = idx === messages.length - 1;
    return (
      <Fragment key={message.id}>
        <Message from={message.role}>
          <MessageContent>
            {message.parts.map((part, i) => {
              switch (part.type) {
                case 'text':
                  return (
                    <Response key={`${message.id}-${i}`}>
                      {part.text}
                    </Response>
                  );
                case 'reasoning':
                  return (
                    <Reasoning
                      key={`${message.id}-${i}`}
                      className="w-full"
                      isStreaming={
                        status === 'streaming' &&
                        i === message.parts.length - 1 &&
                        message.id === messages.at(-1)?.id
                      }
                    >
                      <ReasoningTrigger />
                      <ReasoningContent>{part.text}</ReasoningContent>
                    </Reasoning>
                  );
                default:
                  return null;
              }
            })}
          </MessageContent>
        </Message>
        {message.role === 'assistant' && isLastMessage && (
          <Actions>
            <Action onClick={() => regenerate()} label="Retry">
              <RefreshCcwIcon className="size-3" />
            </Action>
            <Action
              onClick={() =>
                navigator.clipboard.writeText(
                  message.parts.map((part) => part.text).join('\n')
                )
              }
              label="Copy"
            >
              <CopyIcon className="size-3" />
            </Action>
          </Actions>
        )}
      </Fragment>
    );
  })
)}
</ConversationContent>




        <ConversationScrollButton />
      </Conversation>


      

<PromptInput
  onSubmit={handleSubmit}
  className="mt-4 w-full max-w-2xl mx-auto relative"
>
  <PromptInputTextarea
    value={input}
    placeholder="Say something..."
    onChange={(e) => setInput(e.currentTarget.value)}
    className="pr-12"
  />
  <PromptInputSubmit
    status={status === 'streaming' ? 'streaming' : 'ready'}
    disabled={!input.trim()}
    className="absolute bottom-1 right-1"
  />
</PromptInput>






    </div>



    </div>
  );
};




