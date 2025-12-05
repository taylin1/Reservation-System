import React from "react";


export default function ResourceList({ resources, selected, onSelect }) {
return (
<div className="mb-4">
<h2 className="text-xl font-semibold mb-2">Resources</h2>
<div className="flex gap-4 flex-wrap">
{resources.map((item) => (
<button
key={item.id}
onClick={() => onSelect(item)}
className={`p-3 border rounded w-40 text-left
${selected && selected.id === item.id ? "bg-blue-200" : "bg-white"}
`}
>
<p className="font-medium">{item.name}</p>
<p className="text-sm text-gray-600">{item.type}</p>
</button>
))}
</div>
</div>
);
}