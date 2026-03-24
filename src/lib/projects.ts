import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getProjectsData() {
    const fileNames = fs.readdirSync(projectsDirectory);

    const allProjectsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            ...(matterResult.data as { title: string; description: string; tech: string; image: string }),
        };
    });

    return allProjectsData;
}

export async function getProjectData(id: string) {
    const fullPath = path.join(projectsDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as { title: string; tech: string; image: string; description: string }),
    };
}