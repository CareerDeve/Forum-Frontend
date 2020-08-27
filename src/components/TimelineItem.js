import React from 'react';

const TimelineItem=({data})=>(
    <div className="timeline-item">

        <div className="timeline-item-content">
            <span className="tag" style={{background: data.category.color}}>
                {data.category.tag}
            </span>
            <time> {data.date}</time>
<p>{data.author}</p>
<p>{data.title}</p>

<p>{data.ranking}</p>
{data.link &&(
<a href={data.link.url} targer="_blank" rel='noopener noreferrer'>
    {data.link.text}
</a>
)}
<span className="circle">

</span>
        </div>
    </div>
);
export default TimelineItem;