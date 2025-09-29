// import { streamText, UIMessage, convertToModelMessages } from 'ai';
// import { google } from '@ai-sdk/google';

// export const maxDuration = 30;

// export async function POST(req: Request) {
//   const { messages }: { messages: UIMessage[] } = await req.json();
//   const result = streamText({
//     model: google('gemini-2.5-flash'),
//     messages: convertToModelMessages(messages),
//   });
//   return result.toUIMessageStreamResponse();
// }




import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';


export const maxDuration = 30;
export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: google('gemini-2.5-flash'),
    messages: convertToModelMessages(messages),
    system: `You are a productivity-focused AI assistant. Your expertise includes:
    - Task and project management
    - Time blocking and scheduling
    - Goal setting and achievement
    - Workflow automation
    - Focus and concentration techniques
    - Team collaboration tools

    Always provide practical, actionable advice to help users maximize their productivity.`,
  });
  return result.toUIMessageStreamResponse({sendReasoning: true});
}
