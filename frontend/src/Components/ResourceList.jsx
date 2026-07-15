import React from "react";


export default function ResourceList({ resources, selected, onSelect }) {
return (
<div className="mb-4">
<h2 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Please select a room</span></h2>
<div className="flex gap-4 flex-wrap">
{resources.map((item) => (
<button
key={item.id}
onClick={() => onSelect(item)}
className={`p-3 border-[3px] border-blue-500 [border-style:outset] rounded w-40 text-left 
${selected && selected.id === item.id ? "bg-blue-200" : "bg-white"}
`}
>
<p className="font-medium border-black rounded">{item.name}</p>
<p className="text-sm text-gray-600">{item.type}</p>
</button>
))}
</div>
</div>
);
}