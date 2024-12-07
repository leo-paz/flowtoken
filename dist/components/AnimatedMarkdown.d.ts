import React from 'react';
import './animations.css';
import './custom-lists.css';
interface SmoothTextProps {
    content: string;
    sep?: string;
    animation?: string | null;
    animationDuration?: string;
    animationTimingFunction?: string;
    codeStyle?: any;
    htmlComponents?: any;
    customComponents?: any;
}
interface CustomRendererProps {
    rows: any[];
    stylesheet: any;
    useInlineStyles: boolean;
}
export declare const customCodeRenderer: ({ animation, animationDuration, animationTimingFunction }: any) => ({ rows, stylesheet, useInlineStyles }: CustomRendererProps) => React.JSX.Element[];
/**
 * A React component that renders markdown content with customizable animations.
 *
 * @component
 * @example
 * ```tsx
 * <MarkdownAnimateText
 *   content="# Hello World"
 *   animation="fadeIn"
 *   sep="word"
 *   animationDuration="1s"
 *   customComponents={{
 *     // will match <custom id="123" />
 *     'custom': ({ id }: { id: string }) => <strong>{id}</strong>,
 *     '/regex/': ({ children }: { children: React.ReactNode }) => <li className="custom-li">{children}</li>,
 *   }}
 * />
 * ```
 *
 * @param {Object} props
 * @param {string} props.content - The markdown content to render
 * @param {'word' | 'char'} [props.sep='word'] - Separator for animation ('word' or 'char')
 * @param {string | null} [props.animation='fadeIn'] - The animation name to apply (set to null to disable)
 * @param {string} [props.animationDuration='1s'] - Duration of the animation
 * @param {string} [props.animationTimingFunction='ease-in-out'] - Timing function for the animation
 * @param {Object} [props.codeStyle=null] - Custom style for code blocks
 * @param {Object} [props.htmlComponents={}] - Custom HTML component overrides
 * @param {Object} [props.customComponents={}] - Custom component patterns to match and render
 *
 * @returns {JSX.Element} Animated markdown content
 */
declare const MarkdownAnimateText: React.FC<SmoothTextProps>;
export default MarkdownAnimateText;
