import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
  const { genre, setting, character } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Write a story in the genre "${genre}", set in "${setting}", featuring a character who is ${character}. Make it dramatic, engaging, and vivid.`
        }
      ],
      model: 'gpt-4',
      temperature: 0.8
    });

    return NextResponse.json({
      story: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('Error generating story:', error);
    return NextResponse.json({ story: 'Error generating story.' }, { status: 500 });
  }
}
