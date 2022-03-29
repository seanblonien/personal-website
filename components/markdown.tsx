import Md from 'markdown-to-jsx';
import {Link} from './link';

export interface MarkdownProps {
  children: string;
}

export const Markdown: React.FC<MarkdownProps> = ({children}) => (
  <Md
    options={{
      overrides: {
        Link: {
          component: Link,
        },
      },
    }}
  >
    {children}
  </Md>
);
