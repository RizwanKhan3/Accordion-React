import React, { useState, useContext, createContext } from 'react';

const DataContext = createContext({
  accordion: [],
});

export const useDataContext = ()=>{
  return useContext(DataContext)
}
export const DataProvider = ({children}) => {
  const [data, setData] = useState([
       {
      "title": "FAQs about Product Support",
      "content": "Welcome to our Frequently Asked Questions (FAQs) section regarding product support. In this section, we aim to provide answers to the most common questions our customers have about our products and the support services we offer. If you don't find the information you need here, please feel free to contact our customer support team for further assistance."
    },
    {
      "title": "Company History and Milestones",
      "content": "Explore the rich history of our company, from our humble beginnings as a small startup in a garage to becoming a global leader in technology innovation. Learn about the significant milestones, achievements, and key moments that have shaped our company's journey over the years. We take pride in our history and are excited to share it with you."
    },
    {
      "title": "Sustainability Initiatives and Green Practices",
      "content": "At XYZ Corporation, we are committed to environmental sustainability and responsible business practices. Discover how we are reducing our carbon footprint, promoting renewable energy sources, and implementing eco-friendly practices across our operations. Learn about our sustainability initiatives and how we are contributing to a greener, more sustainable future for our planet."
    }])
  const context = {
    accordion: data
  }
  return (
    <DataContext.Provider value={context}>
       {children}
    </DataContext.Provider>
  )

};
