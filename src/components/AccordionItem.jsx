import { useState } from 'react';

const Accordion = ({ data }) => {

  return (
    <>
      {data.accordion.map((ele, index) => {
        return <AccordionItem title={ele.title} content={ele.content} index={index} key={index} />;
      })}
    </>
  );
};

const AccordionItem = ({ title, content, index }) => {
  const [open, isOpen] = useState(false);
  return (
    <article className={` article open ${open && 'box'}`} key={index} onClick={()=> isOpen(!open)}>
     <div className='data'> <p className="num">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="text">{title}</p>
      <p className="icon" >
        {open ? '-' : '+'}
      </p></div>

      {open && (
        <div className='item-box' style={{ fontSize: '1em' }}>
          {content}
        </div>
      )}
    </article>
  );
};
export default Accordion;
