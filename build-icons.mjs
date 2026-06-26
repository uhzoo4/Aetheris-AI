import fs from 'fs';
import path from 'path';

const svgDir = path.join(process.cwd(), 'Docs', 'SVGs');
const outPath = path.join(process.cwd(), 'src', 'components', 'ui', 'SvgIcon.tsx');

const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));

let componentCode = `import { HTMLAttributes } from 'react';\nimport { cn } from '../../utils/cn';\n\nexport interface SvgIconProps extends HTMLAttributes<HTMLSpanElement> {\n  name: string;\n}\n\nexport function SvgIcon({ name, className, ...props }: SvgIconProps) {\n  let svgContent = '';\n\n  switch (name) {\n`;

for (const file of files) {
    const name = file.replace('.svg', '');
    let content = fs.readFileSync(path.join(svgDir, file), 'utf-8');
    
    // Replace fill="#000000" or stroke="#000000" with currentColor
    content = content.replace(/fill="([^"]*)"/g, (match, p1) => p1 === 'none' ? match : 'fill="currentColor"');
    content = content.replace(/stroke="([^"]*)"/g, (match, p1) => p1 === 'none' ? match : 'stroke="currentColor"');
    
    // Some svgs might have hardcoded width/height, replace them with 1em or remove them
    content = content.replace(/width="[^"]*"/, 'width="1em"');
    content = content.replace(/height="[^"]*"/, 'height="1em"');
    content = content.replace(/stroke-width/g, 'strokeWidth');
    content = content.replace(/stroke-linecap/g, 'strokeLinecap');
    content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
    content = content.replace(/fill-rule/g, 'fillRule');
    content = content.replace(/clip-rule/g, 'clipRule');
    content = content.replace(/class=/g, 'className=');

    componentCode += `    case '${name}':\n      return <span className={cn("inline-flex items-center justify-center", className)} {...props} dangerouslySetInnerHTML={{ __html: \`${content}\` }} />;\n`;
}

componentCode += `    default:\n      return null;\n  }\n}\n`;

fs.writeFileSync(outPath, componentCode);
console.log('SvgIcon.tsx generated successfully!');
