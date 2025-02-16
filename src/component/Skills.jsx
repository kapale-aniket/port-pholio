const Skills =()=>
{
    return (
        <>
        <div className="main-container py-14 px-3flex">
            <h1 className="text-4xl font-bold text-center underline">Skills</h1>
        <div className="skills-container flex mt-10 space-x-10 px-10">   
        <div className="skill1 space-y-4 shadow-lg rounded-xl text-center bg-slate-200 P-5">
        <i class="cursor-pointer fa-brands fa-python text-5xl"></i> 

          <h1 className="text-3xl ">PYTHON</h1> 
          <p>Proficient in Python programming with a strong understanding of core concepts.<br></br>
            Experienced in data types, control structures, and error handling.<br></br>
            Skilled in implementing functions, file operations, and debugging techniques.<br></br>
            Knowledgeable in object-oriented programming (OOP) principles using Python.<br></br>
            having basic knowledge about libraries like NumPy and pandas for data manipulation</p>
            <button className="  text-2xl px-3 py-2 bg-orange-500 shadow-lg rounded-full">Check Me</button>

        </div> 

        <div className="skill2 space-y-4 shadow-lg rounded-xl text-center bg-slate-200 P-5">
        <i class="cursor-pointer fa-solid fa-database text-5xl"></i>

            <h1 className="skill2 text-3xl">SQL</h1>
            <p>Proficient in SQL with a strong grasp of database concepts and relational models.<br></br>
                Skilled in writing queries using SELECT, INSERT, UPDATE, and DELETE statements.<br></br>
                Experienced in creating and managing database schemas, tables, and relationships.<br></br>
                Knowledgeable in using JOINs, subqueries, and aggregate functions for data analysis.</p><br></br>
                <button className="  text-2xl px-3 py-2 bg-orange-500 shadow-lg rounded-full">Check Me</button>

        </div>  

        <div className="skill3 space-y-4 shadow-lg rounded-xl text-center bg-slate-200 P-5">
        <i class="cursor-pointer fa-brands fa-html5 text-5xl "></i> <i class="cursor-pointer fa-brands fa-css text-5xl"></i>
            <h1 className="skill3 text-3xl ">HTML & CSS</h1>
            <p>Proficient in HTML for structuring web pages with semantic and accessible elements.<br></br>
            Skilled in using CSS for designing responsive layouts and styling web components.<br></br>
            Experienced in implementing Flexbox, Grid, and media queries for mobile-first design.<br></br>
            Knowledgeable in integrating external fonts, animations, and transitions.<br></br>
            Familiar with best practices for clean, maintainable, and cross-browser compatible code.</p>
            <button className="  text-2xl px-3 py-2 bg-orange-500 shadow-lg rounded-full">Check Me</button>
        </div>
            </div> 
         </div>
        </>
    )
};
export default Skills;