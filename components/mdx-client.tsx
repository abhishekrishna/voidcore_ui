// app/components/MDXClientWrapper.tsx
'use client';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Props {
  source: MDXRemoteSerializeResult;
}

export default function MDXClientWrapper({ source }: Props) {
  return <MDXRemote {...source} />;
}