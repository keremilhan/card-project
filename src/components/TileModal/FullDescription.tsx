import React from 'react';

interface FullDescriptionProps {
  description: string;
}

const FullDescription: React.FC<FullDescriptionProps> = ({ description }) => {
  const lines = description.split(/\n+/);
  const bulletLines = lines.filter((line) => line.trim().startsWith('•'));
  const otherLines = lines.filter((line) => !line.trim().startsWith('•'));
  return (
    <div>
      {otherLines.map((line, i) => (
        <p key={i} className="mb-2 py-1 leading-relaxed text-gray-700">
          {line}
        </p>
      ))}
      {bulletLines.length > 0 && (
        <ul className="list-disc pl-6 mb-2 py-1 leading-relaxed text-gray-700">
          {bulletLines.map((line, i) => (
            <li key={i} className="mb-1 py-1 leading-relaxed">
              {line.replace(/^•\s*/, '')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FullDescription;
