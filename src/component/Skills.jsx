const Skills = () => {
  return (
    <>
      <div className="main-container py-14 px-3 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center underline">Skills</h1>

        {/* Grid layout for skills */}
        <div className="skills-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 px-10">
          
          {/* First row - 4 skills */}
          <div className="space-y-4 shadow-lg rounded-xl text-center bg-slate-200 p-5">
            <i className="cursor-pointer fa-brands fa-python text-5xl"></i>
            <h1 className="text-3xl">DJANGO</h1>
            <p>
              MVT Architecture <br />
              URL Routing & Views <br />
              Templates <br />
              ORM & QuerySets <br />
              Forms & Validations <br />
              Authentication & Authorization <br />
              Static & Media Handling <br />
              REST API with DRF
            </p>
          </div>

          <div className="space-y-4 shadow-lg rounded-xl text-center bg-slate-200 p-5">
            <i className="cursor-pointer fa-solid fa-database text-5xl"></i>
            <h1 className="text-3xl">SQL</h1>
            <p>
              SQL Fundamentals <br />
              DDL, DML, DQL, DCL, TCL <br />
              Joins & Subqueries <br />
              Functions & Aggregations <br />
              Constraints & Keys <br />
              Normalization
            </p>
          </div>

          <div className="space-y-4 shadow-lg rounded-xl text-center bg-slate-200 p-5">
            <i className="cursor-pointer fa-brands fa-python text-5xl"></i>
            <h1 className="text-3xl">PYTHON</h1>
            <p>
              Python Fundamentals <br />
              Control Structures <br />
              Functions & Modules <br />
              Error Handling <br />
              OOPs <br />
              File Handling <br />
              DSA in Python <br />
              Modules
            </p>
          </div>

          <div className="space-y-4 shadow-lg rounded-xl text-center bg-slate-200 p-5">
            <i className="cursor-pointer fa-brands fa-js text-5xl"></i>
            <h1 className="text-3xl">JAVASCRIPT</h1>
            <p>
              Basics & Syntax <br />
              Variables & Data Types <br />
              Operators & Conditions <br />
              Loops & Functions <br />
              Objects & Arrays <br />
              DOM Manipulation <br />
              Events <br />
              Async JS (Promises, async/await)
            </p>
          </div>

          {/* Second row - center align 3 skills */}
          <div className="lg:col-span-4 flex justify-center gap-10">
            <div className="space-y-4 shadow-lg rounded-xl text-center bg-slate-200 p-5">
              <i className="cursor-pointer fa-brands fa-react text-5xl"></i>
              <h1 className="text-3xl">REACT</h1>
              <p>
                React Fundamentals & JSX <br />
                Components <br />
                Props & State <br />
                Event Handling <br />
                Hooks (useState, useEffect) <br />
                React Router <br />
                Context API
              </p>
            </div>

            <div className="space-y-4 shadow-lg rounded-xl text-center bg-slate-200 p-5">
              <i className="cursor-pointer fa-solid fa-code text-5xl"></i>
              <h1 className="text-3xl">DSA</h1>
              <p>
                Arrays & Strings <br />
                Linked Lists <br />
                Stacks & Queues <br />
                Hashing <br />
                Trees & Graphs <br />
                Sorting & Searching <br />
              </p>
            </div>

            <div className="space-y-4 shadow-lg rounded-xl text-center bg-slate-200 p-5">
              <i className="cursor-pointer fa-brands fa-html5 text-5xl"></i>{" "}
              <i className="cursor-pointer fa-brands fa-css3-alt text-5xl"></i>
              <h1 className="text-3xl">HTML & CSS</h1>
              <p>
                HTML Fundamentals <br />
                Semantic Tags <br />
                Lists, Links, Forms, Tables <br />
                Media & IFrames <br />
                CSS Selectors <br />
                Box Model <br />
                Flexbox & Grid <br />
                Animations & Transitions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
